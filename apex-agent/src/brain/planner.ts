import {
  IntentResult
} from "../types/intent";

import {
  ApexAction
} from "../types/action";

export function createPlan(
  result: IntentResult
): ApexAction | null {

  switch(result.intent){

    case "CREATE_FOLDER":

      return {

        type:"CREATE_FOLDER",

        payload:result.entities

      };

    case "PROJECT_ANALYSIS":

      return {

        type:"PROJECT_ANALYSIS"

      };

    default:

      return null;

  }

}