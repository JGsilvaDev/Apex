import { ApexAction } from "apex-types";

import { filesystemTool } from "../tools/filesystem";

export async function toolRouter(
  action: ApexAction
){

  switch(action.type){

    case "CREATE_FOLDER":
      return filesystemTool(action);

    default:
      throw new Error(
        `Tool não encontrada para ${action.type}`
      );

  }

}