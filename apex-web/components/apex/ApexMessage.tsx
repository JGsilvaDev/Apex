"use client";


import { motion } from "framer-motion";


interface ApexMessageProps {

  message?: string;

}


export default function ApexMessage({
  message = "Olá João. Estou pronto para receber comandos.",
}: ApexMessageProps) {


  return (
    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      className="
        max-w-md

        text-center

        mt-8
      "
    >

      <p
        className="
          text-white/80

          text-lg

          leading-relaxed
        "
      >
        {message}
      </p>


    </motion.div>
  );
}