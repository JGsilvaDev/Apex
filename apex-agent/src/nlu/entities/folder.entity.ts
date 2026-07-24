export function extractFolderName(
  text: string
): string | undefined {

  let value =
    text.toLowerCase();


  // remove comandos
  value =
    value.replace(
      /^(apex,?\s*)?(criar|crie|cria|fazer|faça|faz|gerar|gere|montar|monte)\s+/i,
      ""
    );


  // remove artigos
  value =
    value.replace(
      /^(uma|um|a|o|nova|novo)\s+/i,
      ""
    );


  // remove palavra pasta
  value =
    value.replace(
      /^pasta\s+/i,
      ""
    );


  // remove localização
  value =
    value.replace(
      /\s+(em|no|na|nos|nas)\s+(documentos?|desktop|área de trabalho).*$/i,
      ""
    );


  // remove referência de pai
  value =
    value.replace(
      /\s+dentro\s+(dela|dele|da|do|dessa|desse).*$/i,
      ""
    );


  value =
    value.trim();


  return value.length
    ? value
    : undefined;

}