import {
  ApexSkill
} from "../types/skill";

export const projectSkill:ApexSkill = {
  name:
    "project",

  priority: 50,

  triggers:[
    "projeto",
    "projetos",
    "analisar projeto"
  ],

  execute(){
    return {
      message:
        "Identifiquei uma solicitação relacionada a projeto.",
      action:{
        type:"PROJECT_ANALYSIS"
      }
    };
  }
};