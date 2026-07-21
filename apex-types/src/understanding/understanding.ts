import {
  ApexIntent
} from "../intents/intent";

export interface Understanding {

  originalCommand:string;

  intent:ApexIntent;

  confidence:number;

  entities:Record<string, unknown>;

}