
import { ApexAction } from "../actions/action";
import { ExecutionOptions } from "./ExecutionOptions";

export interface PlannerResult {

  goal: string;

  execution: ExecutionOptions;

  actions: ApexAction[];

}