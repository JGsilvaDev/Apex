"use client";


import {
  useState,
} from "react";


import ApexCore from "@/components/apex/ApexCore";
import HologramBackground from "@/components/apex/HologramBackground";
import SystemPanel from "@/components/apex/SystemPanel";
import ActivityPanel from "@/components/apex/ActivityPanel";
import CommandInput from "@/components/apex/CommandInput";
import ApexCommandCenter from "@/components/apex/ApexCommandCenter";

import {
  sendCommand
} from "@/services/apexApi";

import {
  ApexMessage
} from "@/types/apex";

import {
  v4 as uuid
} from "uuid";

export default function Home() {

  const [
    messages,
    setMessages
  ] = useState<ApexMessage[]>([

    {
      id:'1',
      type:"SYSTEM",
      message:
        "Core initialized"
    },
    {
      id:'2',
      type:"SYSTEM",
      message:
        "Neural engine ready"
    }
  ]);

  async function executeCommand(
    command:string
  ){
    // Mensagem do usuário
    setMessages(
      current => [
        ...current,
        {
          id:
            uuid(),
          type:
            "USER",
          message:
            command
        }
      ]
    );

    // Status de processamento
    setMessages(
      current => [
        ...current,
        {
          id:
            uuid(),
          type:
            "SYSTEM",
          message:
            "Sending to Apex Core..."
        }
      ]
    );

    try {
      const response =
        await sendCommand(
          command
        );

      // Resposta do Apex
      setMessages(
        current => [
          ...current,
          {
            id:
              uuid(),
            type:
              "APEX",
            message:
              response.message
          }
        ]
      );

      if (response.action) {

        const payload =
          Object.entries(response.action.payload ?? {})
            .map(
              ([key, value]) => `${key}: ${value}`
            )
            .join("\n");

        setMessages(
          current => [
            ...current,
            {
              id: uuid(),
              type: "ACTION",
              message:
                `${response.action.type}\n${payload}`
            }
          ]
        );

      }
    }

    catch(error){

      console.error(
        error
      );

      setMessages(
        current => [
          ...current,
          {
            id:
              uuid(),
            type:
              "SYSTEM",
            message:
              "Connection error with Apex API"
          }
        ]
      );
    }
  }

  return (
  <main
    className="
      h-screen
      bg-black
      text-white
      overflow-hidden
    "
  >
    <HologramBackground />

    <div
      className="
        relative
        z-10
        h-screen
        w-full
        flex
        items-center
        justify-center
        px-8
      "
    >
      {/* Área principal */}
      <div
        className="
          w-full
          max-w-[1600px]
          grid
          grid-cols-[280px_1fr_520px]
          gap-8
          items-center
        "
      >
        {/* ESQUERDA */}
        <aside
          className="
            flex
            flex-col
            gap-6
          "
        >
          <SystemPanel />
          <ActivityPanel />
        </aside>

        {/* CENTRO */}
        <section
          className="
            flex
            items-center
            justify-center
          "
        >
          <ApexCore />
        </section>

        {/* DIREITA */}
        <aside
          className="
            h-[650px]
            flex
            flex-col
          "
        >
          <ApexCommandCenter
            messages={
              messages
            }
          />
        </aside>
      </div>

      {/* INPUT */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          w-full
          max-w-2xl
        "
      >
        <CommandInput
          onCommand={
            executeCommand
          }
        />
      </div>
    </div>
  </main>

);
}