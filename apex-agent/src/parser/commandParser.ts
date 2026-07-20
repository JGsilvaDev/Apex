export interface ParsedCommand {
  action:string;
  parameters:Record<string,string>;
}

export function parseCommand(
  command:string
):ParsedCommand{

  const normalized =
    command
      .toLowerCase()
      .trim();

  /*
    CRIAR PASTA
  */

  if(
    normalized.includes("criar pasta") ||
    normalized.includes("crie uma pasta") ||
    normalized.includes("cria pasta")
  ){

    let name =
      "Nova Pasta";

    const match =
      normalized.match(
        /pasta (.+)/
      );


    if(match){
      name =
        match[1]
          .replace(
            "chamada",
            ""
          )
          .trim();
    }

    let location =
      "HOME";

    if(
      normalized.includes(
        "documentos"
      )
    ){
      location =
      "DOCUMENTS";
    }

    if(
      normalized.includes(
        "área de trabalho"
      )
      ||
      normalized.includes(
        "desktop"
      )
    ){
      location =
      "DESKTOP";
    }

    return {
      action:
      "CREATE_FOLDER",
      parameters:{
        name,
        location
      }
    };
  }


  return {
    action:
    "UNKNOWN",
    parameters:{}
  };
}