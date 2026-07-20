"use client";

import {
  useState
} from "react";

interface Props {

  onCommand: (
    command:string
  ) => void;

}

export default function CommandInput({
  onCommand
}:Props){

  const [
    command,
    setCommand
  ] = useState("");

  const [
    loading,
    setLoading
  ] = useState(false);

  function handleSend(){

    if(
      !command.trim()
    )
      return;

    setLoading(true);

    onCommand(
      command
    );

    setCommand("");

    setTimeout(()=>{
      setLoading(false);
    },500);

  }

  return (
    <div
      className="
        flex
        gap-3
        w-full
      "
    >

      <input
        value={
          command
        }

        onChange={
          e =>
          setCommand(
            e.target.value
          )
        }

        onKeyDown={
          e=>{
            if(
              e.key==="Enter"
            ){
              handleSend();
            }
          }
        }

        placeholder="
          Digite um comando para Apex...
        "

        className="
          flex-1
          bg-black/40
          border
          border-blue-500/40
          rounded
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-400
        "
      />

      <button
        onClick={
          handleSend
        }

        disabled={
          loading
        }

        className="
          px-6
          rounded
          bg-blue-600
          hover:bg-blue-500
          transition
        "

      >

        {
          loading
          ?
          "..."
          :
          "Enviar"
        }

      </button>

    </div>
  );
}