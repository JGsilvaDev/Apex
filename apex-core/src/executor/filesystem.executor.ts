import * as fs from "fs/promises";

import {
  ApexAction
} from "../types/action";

import {
  resolvePath
} from "../utils/pathResolver";

export async function executeFilesystemAction(
  action:ApexAction
){

  if(
    action.type === "CREATE_FOLDER"
  ){

    const path =
      resolvePath(
        action.payload.location,
        action.payload.name

      );

    await fs.mkdir(
      path,
      {
        recursive:true
      }
    );

    return {
      message:
      `Pasta criada em ${path}`
    };
  }

  return {
    message:
    "Ação não reconhecida."
  };

}