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
  memoryResolverRegistry
} from "./memory/registry";

import {
  Understanding
} from "apex-types";

import "./memory/registerResolvers";

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

  const understanding: Understanding = {
    originalCommand: command,
    intent,
    confidence: 0.95,
    entities
  };

  return memoryResolverRegistry.execute(
    understanding
  );


}