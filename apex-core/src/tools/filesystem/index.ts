import {
  ApexAction,
  CreateFolderPayload,
  ExecutionContext,
} from "apex-types";

import { createFolder } from "./createFolder";

export async function filesystemTool(
  action: ApexAction,
  context: ExecutionContext
) {

  switch (action.type) {

    case "CREATE_FOLDER":
      return createFolder(
        action as ApexAction<CreateFolderPayload>,
        context
      );

    default:
      throw new Error(
        "Filesystem action desconhecida."
      );

  }

}