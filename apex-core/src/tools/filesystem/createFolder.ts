import path from "path";

import {
  ApexAction,
  CreateFolderPayload,
} from "apex-types";

import {
  validateCreateFolder,
} from "./validators/createFolder.validator";

import {
  resolveLocation,
} from "./helpers/resolveLocation";

import {
  executeFilesystemAction,
} from "../../executor/filesystem.executor";

export async function createFolder(
  action: ApexAction<CreateFolderPayload>
) {

  const payload =
    validateCreateFolder(
      action.payload
    );

  const folderPath =
    path.join(
      resolveLocation(
        payload.location
      ),
      payload.name
    );

  return executeFilesystemAction({

    ...action,

    payload: {
      path: folderPath,
    },

  });

}