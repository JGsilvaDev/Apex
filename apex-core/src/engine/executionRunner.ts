import {
  ApexAction,
  ExecutionContext,
  ToolResult
} from "apex-types";


import {
  toolRegistry
} from "../registry/toolRegistry";


export async function runAction(

  action:ApexAction,

  context:ExecutionContext

):Promise<ToolResult>{


  context.logs.push(
    `Executando ${action.type}`
  );


  const result =
    await toolRegistry.execute(
      action,
      context
    );


  if(result.logs){

    context.logs.push(
      ...result.logs
    );

  }


  if(result.contextUpdates){

    Object.assign(
      context,
      result.contextUpdates
    );

  }


  return result;

}