"use client";

import { motion } from "framer-motion";

import ApexParticles from "./ApexParticles";

export default function ApexCore() {

  return (

    <div
      className="
        relative

        w-[420px]
        h-[420px]

        flex

        items-center

        justify-center
      "
    >

      <ApexParticles />


      {/* Anel externo */}
      <motion.div
        animate={{
          rotate: 360,
        }}

        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute

          inset-0

          m-auto

          w-[420px]

          h-[420px]

          rounded-full

          border

          border-blue-500/30
        "
      />


      {/* Segundo anel */}
      <motion.div
        animate={{
          rotate: -360,
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute

          inset-0

          m-auto

          w-[330px]

          h-[330px]

          rounded-full

          border

          border-cyan-400/40
        "
      />


      {/* Energia */}
      <motion.div
        animate={{
          scale:[
            1,
            1.15,
            1,
          ],

          opacity:[
            0.4,
            0.8,
            0.4,
          ],
        }}

        transition={{
          duration:4,
          repeat:Infinity,
        }}

        className="
          absolute

          inset-0

          m-auto

          w-[220px]

          h-[220px]

          rounded-full

          bg-blue-500/20

          blur-3xl
        "
      />



      {/* Núcleo */}
      <motion.div
        animate={{
          scale:[
            1,
            1.08,
            1,
          ],
        }}

        transition={{
          duration:2.5,

          repeat:Infinity,
        }}

        className="
          relative

          w-36

          h-36

          rounded-full

          bg-black

          border

          border-blue-400

          shadow-[0_0_80px_25px_rgba(0,120,255,.5)]

          flex

          items-center

          justify-center
        "
      >

        <span
          className="
            text-blue-400

            text-5xl
          "
        >
          ◉
        </span>

      </motion.div>

    </div>

  );
}