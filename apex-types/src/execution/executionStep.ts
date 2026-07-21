import {
  ApexAction
} from "../actions/action";

import {
  ExecutionStatus
} from "./executionStatus";

export interface ExecutionStep {

  action: ApexAction;

  status: ExecutionStatus;

  startedAt?: Date;

  finishedAt?: Date;

  message?: string;

}