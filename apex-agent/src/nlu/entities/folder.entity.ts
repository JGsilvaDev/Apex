export function extractFolderName(
  text:string
):string | null {


  const patterns = [

    // criar uma pasta chamada Fotos
    /pasta\s+(?:chamada\s+)?(.+?)(?:\s+(?:nos|no|na|em)\s+.+)?$/i,

    // criar diretório Fotos
    /diret[oó]rio\s+(?:chamado\s+)?(.+?)(?:\s+(?:nos|no|na|em)\s+.+)?$/i,

    // criar uma área Fotos
    /área\s+(.+?)(?:\s+(?:nos|no|na|em)\s+.+)?$/i,

    // criar Fotos
    /crie?\s+(.+?)(?:\s+(?:nos|no|na|em)\s+.+)?$/i,

  ];

  for(
    const pattern of patterns
  ){

    const match =
      text.match(pattern);

    if(match){

      return cleanFolderName(
        match[1]
      );

    }

  }

  return null;

}


function cleanFolderName(
  name:string
){
  return name
    .replace(
      /^(uma|um|a|o)\s+/i,
      ""
    )

    .trim();

}