import {
  ApexAction,
  ApexActionType
} from "apex-types";


type ToolHandler =
  (
    action:ApexAction<any>
  ) => Promise<any>;



class ToolRegistry {


  private tools =
    new Map<
      ApexActionType,
      ToolHandler
    >();



  register(
    type:ApexActionType,
    handler:ToolHandler
  ){

    this.tools.set(
      type,
      handler
    );

  }



  async execute(
    action:ApexAction
  ){

    const tool =
      this.tools.get(
        action.type as ApexActionType
      );


    if(!tool){

      throw new Error(
        `Nenhuma tool registrada para ${action.type}`
      );

    }


    return tool(
      action
    );

  }

}


export const toolRegistry =
  new ToolRegistry();