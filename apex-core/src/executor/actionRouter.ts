import {
  executeFilesystemAction
} from "./filesystem.executor";

import { ApexAction } from "../types/action";



export async function executeAction(
  action:ApexAction
){


  switch(action.type){


    case "CREATE_FOLDER":

      return executeFilesystemAction(
        action
      );

    default:

      return {

        message:
          "Ação não reconhecida pelo Apex Core."

      };

  }

}