import {
  ApexIntent
} from "../types/intent";


import {
  extractFolderName,
  extractLocation
} from "./entities";


export function extractEntities(

  command:string,

  intent:ApexIntent

){


  switch(intent){


    case "CREATE_FOLDER":

      return {

        name:
          extractFolderName(
            command
          ),

        location:
          extractLocation(
            command
          )

      };


    default:

      return {};

  }

}