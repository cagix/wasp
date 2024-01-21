{-# LANGUAGE TypeApplications #-}

module Wasp.Generator.SdkGenerator
  ( genSdk,
    installNpmDependencies,
    genExternalCodeDir,
    buildSdk,
  )
where

import Control.Concurrent (newChan)
import Control.Concurrent.Async (concurrently)
import Data.Aeson (object)
import Data.Aeson.Types ((.=))
import Data.Maybe (fromMaybe, isJust, mapMaybe)
import GHC.IO (unsafePerformIO)
import StrongPath
import qualified StrongPath as SP
import System.Exit (ExitCode (..))
import qualified System.FilePath as FP
import Wasp.AppSpec
import qualified Wasp.AppSpec as AS
import qualified Wasp.AppSpec.App as AS.App
import qualified Wasp.AppSpec.App.Auth as AS.App.Auth
import qualified Wasp.AppSpec.App.Dependency as AS.Dependency
import qualified Wasp.AppSpec.Entity as AS.Entity
import qualified Wasp.AppSpec.ExternalFiles as EC
import Wasp.AppSpec.Valid (getLowestNodeVersionUserAllows, isAuthEnabled)
import qualified Wasp.AppSpec.Valid as AS.Valid
import Wasp.Generator.Common (ProjectRootDir, makeJsonWithEntityData, prismaVersion)
import qualified Wasp.Generator.DbGenerator.Auth as DbAuth
import Wasp.Generator.FileDraft (FileDraft, createCopyDirFileDraft)
import qualified Wasp.Generator.FileDraft as FD
import Wasp.Generator.FileDraft.CopyDirFileDraft (CopyDirFileDraftDstDirStrategy (RemoveExistingDstDir))
import qualified Wasp.Generator.Job as J
import Wasp.Generator.Job.IO (readJobMessagesAndPrintThemPrefixed)
import Wasp.Generator.Job.Process (runNodeCommandAsJob)
import Wasp.Generator.Monad (Generator)
import qualified Wasp.Generator.NpmDependencies as N
import Wasp.Generator.SdkGenerator.Common (SdkTemplatesDir)
import qualified Wasp.Generator.SdkGenerator.Common as C
import Wasp.Generator.SdkGenerator.ServerOpsGenerator (genOperations)
import qualified Wasp.Generator.ServerGenerator.AuthG as ServerAuthG
import Wasp.Generator.Templates (getTemplatesDirAbsPath)
import qualified Wasp.Generator.WebAppGenerator.Common as WebApp
import qualified Wasp.Node.Version as NodeVersion
import Wasp.Project.Common (WaspProjectDir)
import qualified Wasp.Project.Db as Db
import qualified Wasp.SemanticVersion as SV
import Wasp.Util (toLowerFirst, (<++>))

genSdk :: AppSpec -> Generator [FileDraft]
genSdk spec =
  genSdkHardcoded
    <++> genSdkReal spec

buildSdk :: Path' Abs (Dir ProjectRootDir) -> IO (Either String ())
buildSdk projectRootDir = do
  chan <- newChan
  (_, exitCode) <-
    concurrently
      (readJobMessagesAndPrintThemPrefixed chan)
      (runNodeCommandAsJob dstDir "npx" ["tsc"] J.Wasp chan)
  case exitCode of
    ExitSuccess -> return $ Right ()
    ExitFailure code -> return $ Left $ "SDK build failed with exit code: " ++ show code
  where
    dstDir = projectRootDir </> C.sdkRootDirInProjectRootDir

genSdkReal :: AppSpec -> Generator [FileDraft]
genSdkReal spec =
  sequence
    [ genFileCopy [relfile|api/index.ts|],
      genFileCopy [relfile|api/events.ts|],
      genFileCopy [relfile|core/config.js|],
      genFileCopy [relfile|core/auth.js|],
      genFileCopy [relfile|core/storage.ts|],
      genFileCopy [relfile|core/stitches.config.js|],
      genFileCopy [relfile|core/AuthError.js|],
      genFileCopy [relfile|core/HttpError.js|],
      genFileCopy [relfile|server/dbClient.ts|],
      genServerConfigFile spec,
      genTsConfigJson,
      genServerUtils spec,
      genPackageJson spec
    ]
    <++> genOperations spec
    <++> genUniversalDir
    <++> genExternalCodeDir (AS.externalCodeFiles spec)
    <++> genTypesAndEntitiesDirs spec
  where
    genFileCopy = return . C.mkTmplFd

genSdkHardcoded :: Generator [FileDraft]
genSdkHardcoded =
  return
    [ copyFolder [reldir|auth|],
      copyFolder [reldir|operations|],
      copyFolder [reldir|rpc|],
      copyFolder [reldir|types|]
    ]
  where
    -- copyFile = C.mkTmplFd
    copyFolder :: Path' (Rel SdkTemplatesDir) (Dir d) -> FileDraft
    copyFolder modul =
      createCopyDirFileDraft
        RemoveExistingDstDir
        (dstFolder </> castRel modul)
        (srcFolder </> modul)
    dstFolder = C.sdkRootDirInProjectRootDir
    srcFolder = absSdkTemplatesDir
    absSdkTemplatesDir = unsafePerformIO getTemplatesDirAbsPath </> C.sdkTemplatesDirInTemplatesDir

genTypesAndEntitiesDirs :: AppSpec -> Generator [FileDraft]
genTypesAndEntitiesDirs spec =
  return
    [ entitiesIndexFileDraft,
      taggedEntitiesFileDraft,
      serializationFileDraft,
      typesIndexFileDraft
    ]
  where
    entitiesIndexFileDraft =
      C.mkTmplFdWithDstAndData
        [relfile|entities/index.ts|]
        [relfile|entities/index.ts|]
        ( Just $
            object
              [ "entities" .= allEntities,
                "isAuthEnabled" .= isJust maybeUserEntityName,
                "authEntityName" .= DbAuth.authEntityName,
                "authIdentityEntityName" .= DbAuth.authIdentityEntityName
              ]
        )
    taggedEntitiesFileDraft =
      C.mkTmplFdWithDstAndData
        [relfile|server/_types/taggedEntities.ts|]
        [relfile|server/_types/taggedEntities.ts|]
        (Just $ object ["entities" .= allEntities])
    serializationFileDraft =
      C.mkTmplFd
        [relfile|server/_types/serialization.ts|]
    typesIndexFileDraft =
      C.mkTmplFdWithDstAndData
        [relfile|server/_types/index.ts|]
        [relfile|server/_types/index.ts|]
        ( Just $
            object
              [ "entities" .= allEntities,
                "isAuthEnabled" .= isJust maybeUserEntityName,
                "userEntityName" .= userEntityName,
                "authEntityName" .= DbAuth.authEntityName,
                "authFieldOnUserEntityName" .= DbAuth.authFieldOnUserEntityName,
                "authIdentityEntityName" .= DbAuth.authIdentityEntityName,
                "identitiesFieldOnAuthEntityName" .= DbAuth.identitiesFieldOnAuthEntityName,
                "userFieldName" .= toLowerFirst userEntityName
              ]
        )
    userEntityName = fromMaybe "" maybeUserEntityName
    allEntities = map (makeJsonWithEntityData . fst) $ AS.getDecls @AS.Entity.Entity spec
    maybeUserEntityName = AS.refName . AS.App.Auth.userEntity <$> AS.App.auth (snd $ AS.Valid.getApp spec)

genPackageJson :: AppSpec -> Generator FileDraft
genPackageJson spec =
  return $
    C.mkTmplFdWithDstAndData
      [relfile|package.json|]
      [relfile|package.json|]
      ( Just $
          object
            [ "depsChunk" .= N.getDependenciesPackageJsonEntry npmDepsForSdk,
              "devDepsChunk" .= N.getDevDependenciesPackageJsonEntry npmDepsForSdk
            ]
      )
  where
    npmDepsForSdk =
      N.NpmDepsForPackage
        { N.dependencies =
            AS.Dependency.fromList
              [ ("@prisma/client", show prismaVersion),
                ("prisma", show prismaVersion),
                ("@tanstack/react-query", "^4.29.0"),
                ("axios", "^1.4.0"),
                ("express", "~4.18.1"),
                ("jsonwebtoken", "^8.5.1"),
                ("mitt", "3.0.0"),
                ("react", "^18.2.0"),
                ("lodash.merge", "^4.6.2"),
                ("react-router-dom", "^5.3.3"),
                ("react-hook-form", "^7.45.4"),
                ("secure-password", "^4.0.0"),
                ("superjson", "^1.12.2"),
                ("@types/express-serve-static-core", "^4.17.13")
              ]
              ++ depsRequiredForAuth spec
              -- This must be installed in the SDK because it lists prisma/client as a dependency.
              -- Installing it inside .wasp/out/server/node_modules would also
              -- install prisma/client in the same folder, which would cause our
              -- runtime to load the wrong (uninitialized prisma/client)
              -- TODO(filip): Find a better way to handle duplicate
              -- dependencies: https://github.com/wasp-lang/wasp/issues/1640
              ++ ServerAuthG.depsRequiredByAuth spec,
          N.devDependencies =
            AS.Dependency.fromList
              [ ("@tsconfig/node" <> majorNodeVersionStr, "latest")
              ]
        }
    majorNodeVersionStr = show (SV.major $ getLowestNodeVersionUserAllows spec)

genServerConfigFile :: AppSpec -> Generator FileDraft
genServerConfigFile spec = return $ C.mkTmplFdWithData relConfigFilePath (Just tmplData)
  where
    relConfigFilePath = [relfile|server/config.js|]
    tmplData =
      object
        [ "isAuthEnabled" .= isAuthEnabled spec,
          "databaseUrlEnvVarName" .= Db.databaseUrlEnvVarName,
          "defaultClientUrl" .= WebApp.getDefaultClientUrl spec
        ]

-- todo(filip): remove this duplication, we have almost the same thing in the
-- ServerGenerator.
genTsConfigJson :: Generator FileDraft
genTsConfigJson = do
  return $
    C.mkTmplFdWithDstAndData
      [relfile|tsconfig.json|]
      [relfile|tsconfig.json|]
      ( Just $
          object
            [ "majorNodeVersion" .= show (SV.major NodeVersion.oldestWaspSupportedNodeVersion)
            ]
      )

depsRequiredForAuth :: AppSpec -> [AS.Dependency.Dependency]
depsRequiredForAuth spec =
  [AS.Dependency.make ("@stitches/react", show versionRange) | isAuthEnabled spec]
  where
    versionRange = SV.Range [SV.backwardsCompatibleWith (SV.Version 1 2 8)]

-- TODO(filip): Figure out where this belongs. Check https://github.com/wasp-lang/wasp/pull/1602#discussion_r1437144166 .
-- Also, fix imports for wasp project.
installNpmDependencies :: Path' Abs (Dir WaspProjectDir) -> J.Job
installNpmDependencies projectDir =
  runNodeCommandAsJob projectDir "npm" ["install"] J.Wasp

-- todo(filip): consider reorganizing/splitting the file.

-- | Takes external code files from Wasp and generates them in new location as part of the generated project.
-- It might not just copy them but also do some changes on them, as needed.
genExternalCodeDir :: [EC.CodeFile] -> Generator [FileDraft]
genExternalCodeDir = sequence . mapMaybe genFile

genFile :: EC.CodeFile -> Maybe (Generator FileDraft)
genFile file
  | fileName == "tsconfig.json" = Nothing
  | extension `elem` [".js", ".jsx", ".ts", ".tsx"] = Just $ genSourceFile file
  | otherwise = Just $ genResourceFile file
  where
    extension = FP.takeExtension filePath
    fileName = FP.takeFileName filePath
    filePath = SP.toFilePath $ EC.filePathInExtCodeDir file

genResourceFile :: EC.CodeFile -> Generator FileDraft
genResourceFile file = return $ FD.createCopyFileDraft relDstPath absSrcPath
  where
    relDstPath = C.sdkRootDirInProjectRootDir </> C.extSrcDirInSdkRootDir </> SP.castRel (EC._pathInExtCodeDir file)
    absSrcPath = EC.fileAbsPath file

genSourceFile :: EC.CodeFile -> Generator FD.FileDraft
genSourceFile file = return $ FD.createTextFileDraft relDstPath text
  where
    filePathInSrcExtCodeDir = EC.filePathInExtCodeDir file
    text = EC.fileText file
    relDstPath = C.sdkRootDirInProjectRootDir </> C.extSrcDirInSdkRootDir </> SP.castRel filePathInSrcExtCodeDir

genUniversalDir :: Generator [FileDraft]
genUniversalDir =
  return
    [ C.mkTmplFd [relfile|universal/url.ts|],
      C.mkTmplFd [relfile|universal/types.ts|],
      C.mkTmplFd [relfile|universal/validators.js|]
    ]

genServerUtils :: AppSpec -> Generator FileDraft
genServerUtils spec = return $ C.mkTmplFdWithData [relfile|server/utils.ts|] (Just tmplData)
  where
    tmplData = object ["isAuthEnabled" .= (isAuthEnabled spec :: Bool)]