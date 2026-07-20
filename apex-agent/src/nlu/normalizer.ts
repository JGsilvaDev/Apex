export function normalizeCommand(
  command:string
){

  return command
    // remove espaços extras
    .replace(/\s+/g, " ")
    // remove espaços no início/fim
    .trim()
    // deixa minúsculo
    .toLowerCase()
    // remove vírgulas
    .replace(/,/g, "")
    // remove o nome do assistente
    .replace(/^apex\s*/i, "")
    .trim();
}