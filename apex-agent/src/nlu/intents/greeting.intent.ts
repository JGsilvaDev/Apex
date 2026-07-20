import {
  IntentHandler
} from "./types";


export const greetingIntent:
IntentHandler = {


  intent:
    "GREETING",


  match(
    text:string
  ){

    return (
      /(olá|ola|oi|bom dia|boa tarde|boa noite)/
      .test(text)
    );

  }

};