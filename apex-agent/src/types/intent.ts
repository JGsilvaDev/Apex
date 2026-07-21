import {
  ApexIntent
} from "apex-types";

export interface IntentResult {

  intent: ApexIntent;

  confidence: number;

  entities: Record<string, unknown>;

}