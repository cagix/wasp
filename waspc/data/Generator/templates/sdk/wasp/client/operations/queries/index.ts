{{={= =}=}}
import { createQuery } from './core'
{=# queries =}
{=& operationTypeImportStmt =}
{=/ queries =}
{=# queries =}

// PUBLIC API
export const {= operationName =} = createQuery<{= operationTypeName =}>(
  '{= queryRoute =}',
  {=& entitiesArray =},
)
{=/ queries =}
