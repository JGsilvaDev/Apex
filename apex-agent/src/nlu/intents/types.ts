import {
  ApexIntent
} from "apex-types";


export interface IntentHandler {


  intent:ApexIntent;


  match(
    text:string
  ):boolean;


}