import {
  ExecutionReport
} from "apex-types";


export function generateResponse(
  execution: ExecutionReport
){

  if(
    execution.status !== "SUCCESS"
  ){

    return (
      "Não consegui concluir a execução."
    );

  }


  const step =
    execution.steps[0];


  if(!step){

    return (
      "Execução concluída."
    );

  }


  switch(
    step.action.type
  ){

    case "CREATE_FOLDER":

      return (
        `Pronto, a pasta foi criada com sucesso.`
      );


    default:

      return (
        step.message
      );

  }

}