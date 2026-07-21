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
  Understanding
} from "apex-types";


export function understand(
  command:string
):Understanding{

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
    originalCommand: command,
    intent,
    confidence: 0.95,
    entities
  };


}