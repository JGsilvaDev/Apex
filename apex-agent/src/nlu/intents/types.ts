import {
  ApexIntent
} from "../../types/intent";


export interface IntentHandler {


  intent:ApexIntent;


  match(
    text:string
  ):boolean;


}