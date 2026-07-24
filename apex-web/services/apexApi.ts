let sessionId: string | undefined;

export async function sendCommand(
  command: string
) {

  const response =
    await fetch(
      "http://localhost:3333/apex/command",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          command,
          sessionId
        }),
      }
    );

  if (!response.ok) {
    throw new Error(
      "Erro ao comunicar com Apex API"
    );
  }

  const data =
    await response.json();

  sessionId =
    data.sessionId;

  return data;

}