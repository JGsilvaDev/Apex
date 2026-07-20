export type LocationEntity =
  | "DOCUMENTS"
  | "DESKTOP"
  | "HOME";


export function extractLocation(
  text:string
):LocationEntity{

  if(
    text.includes("documentos")
  ){
    return "DOCUMENTS";
  }

  if(
    text.includes("desktop") ||
    text.includes("área de trabalho")
  ){
    return "DESKTOP";
  }
  return "HOME";

}