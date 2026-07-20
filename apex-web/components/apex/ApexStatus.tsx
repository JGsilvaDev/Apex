"use client";


import { motion } from "framer-motion";


type Status =
  | "ONLINE"
  | "LISTENING"
  | "PROCESSING";


interface ApexStatusProps {
  status?: Status;
}


export default function ApexStatus({
  status = "ONLINE",
}: ApexStatusProps) {


  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >

      <motion.div
        animate={{
          opacity: [
            0.4,
            1,
            0.4,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          w-2
          h-2

          rounded-full

          bg-blue-400

          shadow-[0_0_15px_rgba(0,150,255,1)]
        "
      />


      <span
        className="
          text-xs

          tracking-[0.3em]

          text-blue-300
        "
      >
        {status}
      </span>


    </div>
  );
}