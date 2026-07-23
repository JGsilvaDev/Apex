import {
  ConversationContext,
  ApexIntent
} from "apex-types";


export class ContextManager {

  private context: ConversationContext;

  constructor() {

    this.context = {

      sessionId: crypto.randomUUID(),

      history: [],

      lastEntities: {},

      variables: {}

    };

  }

  getContext() {

    return this.context;

  }

  addHistory(
    command:string
  ){

    this.context.history.push(
      command
    );

  }

  setLastIntent(
    intent:ApexIntent
  ){

    this.context.lastIntent =
      intent;

  }

  setLastEntities(
    entities:Record<string,unknown>
  ){

    this.context.lastEntities =
      entities;

  }

  setVariable(
    key:string,
    value:unknown
  ){

    this.context.variables[key] =
      value;

  }

  getVariable(
    key:string
  ){

    return this.context.variables[key];

  }

  clear(){

    this.context = {

      sessionId:
        crypto.randomUUID(),

      history: [],

      lastEntities: {},

      variables: {}

    };

  }

}