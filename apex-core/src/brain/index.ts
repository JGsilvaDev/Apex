export interface ApexThinking {
  message:string;
  action?:string;
}


export async function think(
  command:string
):Promise<ApexThinking>{

  const text =
    command.toLowerCase();

  if(
    text.includes("olá")
    ||
    text.includes("ola")
  ){

    return {

      message:
        "Olá João. Sistemas online. Apex pronto.",

    };

  }

  if(
    text.includes("projeto")
  ){

    return {

      message:
        "Identifiquei uma solicitação relacionada a projeto.",

      action:
        "ANALYZE_PROJECT",

    };

  }

  if(
    text.includes("crie uma pasta")
  ){

    return {

      message:
        "Entendido. Preparando criação de pasta.",

      action:
        "CREATE_FOLDER",

    };

  }

  return {

    message:
      "Comando recebido. Ainda estou aprendendo esta habilidade.",

  };
}