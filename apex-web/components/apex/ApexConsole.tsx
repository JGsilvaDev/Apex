"use client";


interface Props {

  messages:string[];

}



export default function ApexConsole({
  messages
}:Props){


  return (

    <div

      className="
        h-40

        overflow-y-auto

        bg-black/50

        border

        border-blue-500/20

        rounded-lg

        p-4

        text-sm

        text-blue-200
      "

    >

      {
        messages.map(
          (
            msg,
            index
          )=>(

            <div
              key={index}
              className="mb-2"
            >
              {msg}
            </div>

          )
        )
      }


    </div>

  );

}