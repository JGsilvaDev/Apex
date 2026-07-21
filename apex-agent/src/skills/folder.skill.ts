import {
  ApexSkill
} from "../types/skill";


import {
  parseFolderCommand
} from "../parser/folder.parser";


export const folderSkill:ApexSkill = {

  name:"folder",

  priority:100,

  triggers:[

    "criar pasta",

    "crie uma pasta",

    "cria pasta"

  ],

  execute(command){

    const folder =
      parseFolderCommand(
        command
      );

    return {

      message:
        `Entendido. Criando a pasta ${folder.name}.`,

      action:{

        type:"CREATE_FOLDER",

        payload:folder

      }

    };

  }

};