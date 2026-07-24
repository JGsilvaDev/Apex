import { ApexAction } from "../actions/action";

export interface PlannerResult {

  goal: string;

  actions: ApexAction[];

}