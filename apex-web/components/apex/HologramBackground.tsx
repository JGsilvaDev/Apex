"use client";


import { motion } from "framer-motion";


export default function HologramBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        overflow-hidden
        bg-black
      "
    >

      <motion.div
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="
          absolute
          inset-0

          opacity-30

          bg-[linear-gradient(rgba(0,120,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,120,255,.15)_1px,transparent_1px)]

          bg-[size:50px_50px]
        "
      />

    </div>
  );
}