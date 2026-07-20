import { ApexIntent } from "../types/intent";

export function classifyIntent(
  command: string
): ApexIntent {

  const text =
    command.toLowerCase();

  if (
    /(criar|crie|cria).*(pasta)/.test(text)
  ) {

    return "CREATE_FOLDER";

  }

  if (
    text.includes("projeto")
  ) {

    return "PROJECT_ANALYSIS";

  }

  if (
    /(olá|ola|oi|bom dia|boa tarde|boa noite)/.test(text)
  ) {

    return "GREETING";

  }

  return "UNKNOWN";

}