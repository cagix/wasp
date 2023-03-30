import { Request, Response } from 'express';
import { handleRejection } from "../../../utils.js";
import { createPasswordResetLink, findUserBy } from "../../utils.js";
import type { EmailSender, EmailFromField } from '../../../email/core/types.js';
import { GetPasswordResetEmailContentFn } from './types.js';

export function getRequestPasswordResetRoute({
   emailSender,
   fromField,
   clientRoute,
   getPasswordResetEmailContent,
}: {
    emailSender: EmailSender;
    fromField: EmailFromField;
    clientRoute: string;
    getPasswordResetEmailContent: GetPasswordResetEmailContentFn;
}) {
    return handleRejection(async (req: Request<{ email: string; }>, res: Response) => {
        const args = req.body || {};
        const user = await findUserBy<'email'>({ email: args.email });
    
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
    
        const passwordResetLink = await createPasswordResetLink(user, clientRoute);
        try {
            await emailSender.send({
                from: fromField,
                to: user.email,
                ...getPasswordResetEmailContent({ passwordResetLink }),
            });
        } catch (e: any) {
            console.error("Failed to send password reset email:", e);
            return res.status(500).json({ success: false, message: "Failed to send password reset email." });
        }
    
        res.json({ success: true });
    });
}
