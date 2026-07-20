import {
  ApexSkill
} from "../types/skill";

import {
  greetingSkill
} from "../skills/greeting.skill";

import {
  projectSkill
} from "../skills/project.skill";

import {
  folderSkill
} from "../skills/folder.skill";

const skills:ApexSkill[] = [
  greetingSkill,
  projectSkill,
  folderSkill
];

export function processCommand(
  command:string
){

  const normalized =
    command
      .toLowerCase();

  const orderedSkills =
    [...skills]
      .sort(
        (
          a,
          b
        ) =>
        b.priority - a.priority
      );

  const skill =
    orderedSkills.find(
      item =>

        item.triggers.some(

          trigger =>

            normalized.includes(
              trigger
            )

        )

    );

  if(!skill){
    return {
      message:
        "Comando recebido. Ainda estou aprendendo esta habilidade.",
      action:
        null
    };
  }

  return skill.execute(
    command
  );

}