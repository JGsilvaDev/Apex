import {
  ApexAction,
  CreateFolderPayload,
  ExecutionContext,
} from "apex-types";

import {
  validateCreateFolder,
} from "./validators/createFolder.validator";

import {
  executeFilesystemAction,
} from "../../executor/filesystem.executor";


export async function createFolder(
  action: ApexAction<CreateFolderPayload>,
  context: ExecutionContext
) {

  const payload =
    validateCreateFolder(
      action.payload
    );


  return executeFilesystemAction(
    {
      ...action,

      payload

    },
    context
  );

}