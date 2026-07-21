import { ApexIntent } from "../intents/intent";
import { ApexAction } from "../actions/action";
import { ApexEntities } from "../entity";

export interface ApexResponse {

  message: string;

  intent: ApexIntent;

  confidence: number;

  entities: ApexEntities;

  action: ApexAction | null;

}