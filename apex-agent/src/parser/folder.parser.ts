export interface FolderCommand {

  name: string;

  location: "DOCUMENTS" | "DESKTOP" | "HOME";

}

export function parseFolderCommand(
  command: string
): FolderCommand {

  const normalized =
    command
      .toLowerCase()
      .trim();

  let location:
    "DOCUMENTS"
    | "DESKTOP"
    | "HOME" = "HOME";

  if (
    normalized.includes("documentos")
  ) {

    location = "DOCUMENTS";

  }

  else if (
    normalized.includes("área de trabalho") ||
    normalized.includes("desktop")
  ) {

    location = "DESKTOP";

  }

  const cleaned =
    normalized
      .replace("apex,", "")
      .replace("apex", "")
      .replace("crie uma pasta", "")
      .replace("criar pasta", "")
      .replace("cria pasta", "")
      .replace("chamada", "")
      .replace("nos documentos", "")
      .replace("em documentos", "")
      .replace("na área de trabalho", "")
      .replace("no desktop", "")
      .trim();

  return {

    name: cleaned,

    location

  };

}