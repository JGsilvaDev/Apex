"use client";


const logs = [
  "Core initialized",
  "Security layer active",
  "Neural engine ready",
];


export default function ActivityPanel() {


  return (

    <div
      className="
        w-64

        p-5

        rounded-xl

        border

        border-blue-500/30

        bg-black/40

        backdrop-blur-md
      "
    >

      <h2
        className="
          text-blue-400

          text-sm

          tracking-[0.3em]

          mb-5
        "
      >
        ACTIVITY
      </h2>


      <div
        className="
          space-y-3
        "
      >

        {logs.map((log) => (

          <div
            key={log}

            className="
              text-xs

              text-white/60

              border-l

              border-blue-400

              pl-3
            "
          >

            {log}

          </div>

        ))}


      </div>


    </div>

  );

}