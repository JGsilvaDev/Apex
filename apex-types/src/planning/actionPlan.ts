import { ApexAction } from "../actions/action";

export interface ActionPlan {

  id: string;

  goal: string;

  actions: ApexAction[];

}