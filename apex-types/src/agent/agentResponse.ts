import {
  Understanding,
} from "../understanding/understanding";

import {
  ActionPlan,
} from "../planning/actionPlan";

export interface AgentResponse {

  message: string;

  understanding: Understanding;

  plan: ActionPlan;

}