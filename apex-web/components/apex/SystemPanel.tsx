"use client";


import {
  Cpu,
  Database,
  Wifi,
} from "lucide-react";


const stats = [
  {
    name: "CPU",
    value: "32%",
    icon: Cpu,
  },
  {
    name: "MEMORY",
    value: "54%",
    icon: Database,
  },
  {
    name: "NETWORK",
    value: "ONLINE",
    icon: Wifi,
  },
];


export default function SystemPanel() {

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

        shadow-[0_0_30px_rgba(0,120,255,.15)]
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
        SYSTEM
      </h2>


      <div
        className="
          space-y-4
        "
      >

        {stats.map((item) => {

          const Icon = item.icon;


          return (

            <div
              key={item.name}

              className="
                flex

                items-center

                justify-between

                text-sm

                text-white/80
              "
            >

              <div
                className="
                  flex

                  items-center

                  gap-3
                "
              >

                <Icon
                  size={18}
                  className="text-blue-400"
                />


                <span>
                  {item.name}
                </span>

              </div>


              <span
                className="
                  text-blue-300
                "
              >
                {item.value}
              </span>


            </div>

          );

        })}


      </div>


    </div>
  );
}