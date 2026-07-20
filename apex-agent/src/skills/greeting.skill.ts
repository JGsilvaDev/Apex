import {
  ApexSkill
} from "../types/skill";

export const greetingSkill:ApexSkill = {
  name:
    "greeting",

  priority: 10,

  triggers:[

    "ola",

    "olá",

    "bom dia",

    "boa tarde",

    "boa noite"

  ],

  execute(){
    return {
      message:
        "Olá João. Sistemas online. Apex pronto.",
      action:
        null
    };
  }
};