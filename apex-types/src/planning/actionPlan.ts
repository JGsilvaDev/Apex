import { ApexAction } from "../actions/action";
import { ExecutionOptions } from "../planner/ExecutionOptions";

export interface ActionPlan {

  id: string;

  goal: string;

  execution: ExecutionOptions;

  actions: ApexAction[];

}