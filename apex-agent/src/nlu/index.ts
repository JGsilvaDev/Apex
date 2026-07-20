import {
  normalizeCommand
} from "./normalizer";


import {
  classifyIntent
} from "./intentClassifier";


import {
  extractEntities
} from "./entityExtractor";


import {
  IntentResult
} from "../types/intent";



export function understand(
  command:string
):IntentResult{


  const normalized =
    normalizeCommand(
      command
    );


  const intent =
    classifyIntent(
      normalized
    );


  const entities =
    extractEntities(
      normalized,
      intent
    );


  return {

    intent,

    confidence:0.95,

    entities

  };


}