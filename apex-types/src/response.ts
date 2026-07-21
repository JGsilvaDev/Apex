import { ApexIntent } from "./intent";
import { ApexAction } from "./action";
import { ApexEntities } from "./entity";

export interface ApexResponse {

  message: string;

  intent: ApexIntent;

  confidence: number;

  entities: ApexEntities;

  action: ApexAction | null;

}