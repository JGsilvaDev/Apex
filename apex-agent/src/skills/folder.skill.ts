import {
  ApexSkill
} from "../types/skill";


import {
  parseCommand
} from "../parser/commandParser";



export const folderSkill:ApexSkill = {
  name:
  "folder",

  priority: 100,

  triggers:[
    "criar pasta",
    "crie uma pasta",
    "cria pasta"
  ],

  execute(
    command:string
  ){
    const parsed =
      parseCommand(
        command
      );

    return {
      message:
        `Entendido. Criando a pasta ${parsed.parameters.name}.`,

      action:{
        type:
        parsed.action,
        payload:
        parsed.parameters
      }
    };
  }
};