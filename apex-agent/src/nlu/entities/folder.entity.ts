export function extractFolderName(
  text:string
){

  const match =
    text.match(
      /pasta(?: chamada)?\s+(.+?)(?:\s+(nos|em|na|no)\s+.+)?$/i
    );

  if(!match){
    return null;
  }

  return match[1]
    .trim();

}