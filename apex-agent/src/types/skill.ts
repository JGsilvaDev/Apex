import {
  ApexAction
} from "./action";


export interface SkillResponse {
  message:string;
  action?:ApexAction | null;
}

export interface ApexSkill {
  name:string;
  triggers:string[];
  priority:number;
  execute(
    command:string
  ):SkillResponse;
}