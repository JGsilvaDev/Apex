import {
  ApexIntent
} from "../intents/intent";

export interface ConversationContext{

    sessionId:string;

    lastIntent?: ApexIntent;

    lastEntities:Record<string,unknown>;

    variables:Record<string,unknown>;

    history:string[];

}