import {
  ApexIntent
} from "../types/intent";

import {
  intentRegistry
} from "./registry";

export function classifyIntent(
  command:string
):ApexIntent {

  const text =
    command.toLowerCase();

  const found =
    intentRegistry.find(
      item =>
        item.match(text)
    );

  if(found){

    return found.intent;

  }
  return "UNKNOWN";
}