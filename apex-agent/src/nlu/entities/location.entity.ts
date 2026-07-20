export type LocationEntity =
  | "DOCUMENTS"
  | "DESKTOP"
  | "HOME";

export function extractLocation(
  text:string
):LocationEntity{

  if(
    [
      "documentos",
      "documento",
      "meus documentos"
    ]
    .some(
      item =>
        text.includes(item)
    )
  ){
    return "DOCUMENTS";
  }

  if(
    [
      "desktop",
      "área de trabalho",
      "area de trabalho"
    ]
    .some(
      item =>
        text.includes(item)
    )
  ){
    return "DESKTOP";
  }

  return "HOME";

}