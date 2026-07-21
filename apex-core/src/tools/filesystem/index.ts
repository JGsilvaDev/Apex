import {
  ApexAction,
  CreateFolderPayload,
} from "apex-types";

import { createFolder } from "./createFolder";

export async function filesystemTool(
  action: ApexAction
) {

  switch (action.type) {

    case "CREATE_FOLDER":
      return createFolder(
        action as ApexAction<CreateFolderPayload>
      );

    default:
      throw new Error(
        "Filesystem action desconhecida."
      );

  }

}