"use client";


import {
  useEffect,
  useRef,
  useState,
} from "react";


import {
  motion,
  AnimatePresence,
} from "framer-motion";


import {
  ApexPanel,
  ApexMessage,
} from "@/types/apex";



interface Props {

  messages: ApexMessage[];

}



const tabs: {
  id: ApexPanel;
  label: string;
}[] = [

  {
    id: "CHAT",
    label: "CHAT",
  },

  {
    id: "PROCESS",
    label: "PROCESS",
  },

  {
    id: "MEMORY",
    label: "MEMORY",
  },

  {
    id: "LOGS",
    label: "LOGS",
  },

];



export default function ApexCommandCenter({
  messages,
}: Props) {


  const [
    open,
    setOpen,
  ] = useState(true);



  const [
    active,
    setActive,
  ] = useState<ApexPanel>("CHAT");



  const containerRef =
    useRef<HTMLDivElement>(null);



  useEffect(() => {


    if (
      containerRef.current
    ) {

      containerRef.current.scrollTop =
        containerRef.current.scrollHeight;

    }


  }, [
    messages,
    active,
  ]);



  const filteredMessages =
    messages.filter(
      (item) => {


        switch (active) {


          case "CHAT":

            return true;



          case "PROCESS":

            return (
              item.type === "ACTION"
            );



          case "LOGS":

            return (
              item.type === "SYSTEM"
            );



          case "MEMORY":

            return (
              item.type === "SYSTEM"
            );



          default:

            return true;

        }


      }
    );



  return (

    <motion.div


      animate={{

        height:
          open
            ? 650
            : 52,

      }}


      transition={{

        duration: 0.35,

      }}


      className="
        w-full

        rounded-2xl

        border

        border-blue-500/30

        bg-black/60

        backdrop-blur-xl

        shadow-[0_0_40px_rgba(0,120,255,.15)]

        overflow-hidden
      "


    >



      {/* HEADER */}

      <header

        className="
          h-14

          flex

          items-center

          justify-between

          px-6

          border-b

          border-blue-500/20

          bg-blue-500/5
        "

      >


        <div
          className="
            flex

            flex-col
          "
        >

          <span

            className="
              text-blue-400

              text-xs

              tracking-[0.35em]
            "

          >

            APEX COMMAND CENTER

          </span>



          <span

            className="
              text-white/30

              text-[10px]

              tracking-widest
            "

          >

            NEURAL INTERFACE ONLINE

          </span>


        </div>



        <button

          onClick={() =>

            setOpen(
              current => !current
            )

          }


          className="
            w-8

            h-8

            rounded-full

            border

            border-blue-500/40

            text-blue-300

            hover:bg-blue-500/20

            transition
          "

        >

          {
            open
              ? "-"
              : "+"
          }


        </button>


      </header>





      <AnimatePresence>


        {
          open && (

            <motion.div


              initial={{
                opacity: 0,
              }}


              animate={{
                opacity: 1,
              }}


              exit={{
                opacity: 0,
              }}


            >



              {/* TABS */}

              <nav

                className="
                  flex

                  border-b

                  border-blue-500/20
                "

              >


                {
                  tabs.map(
                    (tab) => (


                      <button

                        key={
                          tab.id
                        }


                        onClick={() =>

                          setActive(
                            tab.id
                          )

                        }


                        className={`
                          flex-1

                          py-3

                          text-[11px]

                          tracking-widest

                          transition

                          ${
                            active === tab.id

                              ? "text-blue-400 bg-blue-500/10"

                              : "text-white/40 hover:text-white/70"
                          }
                        `}

                      >

                        {
                          tab.label
                        }


                      </button>


                    )
                  )

                }


              </nav>





              {/* CONTENT */}

              <div

                ref={
                  containerRef
                }


                className="
                  h-[570px]

                  overflow-y-auto

                  p-6

                  space-y-4

                  text-sm

                  scrollbar-thin

                  scrollbar-thumb-blue-500/30

                  scrollbar-track-transparent
                "

              >


                <AnimatePresence>


                  {
                    filteredMessages.map(
                      (item) => (


                        <motion.div


                          key={
                            item.id
                          }


                          initial={{

                            opacity: 0,

                            x: -20,

                          }}


                          animate={{

                            opacity: 1,

                            x: 0,

                          }}


                          transition={{

                            duration: 0.25,

                          }}


                          className="
                            flex

                            gap-3

                            items-start
                          "

                        >


                          <span

                            className="
                              text-blue-400

                              text-xs

                              font-mono

                              mt-1
                            "

                          >

                            [
                            {item.type}
                            ]

                          </span>



                          <span

                            className="
                              text-white/80

                              font-mono

                              leading-relaxed
                            "

                          >

                            {
                              item.message
                            }


                          </span>



                        </motion.div>


                      )
                    )
                  }


                </AnimatePresence>


              </div>



            </motion.div>

          )
        }


      </AnimatePresence>



    </motion.div>

  );

}