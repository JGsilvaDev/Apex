import {
  IntentHandler
} from "./types";


export const projectIntent:
IntentHandler = {


  intent:
    "PROJECT_ANALYSIS",


  match(
    text:string
  ){

    return text.includes(
      "projeto"
    );

  }

};