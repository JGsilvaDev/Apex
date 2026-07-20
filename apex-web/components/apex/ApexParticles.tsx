"use client";


import { motion } from "framer-motion";


const particles = [
  {
    id: 1,
    x: -160,
    y: -100,
  },
  {
    id: 2,
    x: 140,
    y: -120,
  },
  {
    id: 3,
    x: 180,
    y: 90,
  },
  {
    id: 4,
    x: -150,
    y: 120,
  },
  {
    id: 5,
    x: 0,
    y: -190,
  },
  {
    id: 6,
    x: 0,
    y: 190,
  },
];


export default function ApexParticles() {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}

          animate={{
            opacity: [
              0.2,
              1,
              0.2,
            ],

            scale: [
              1,
              1.5,
              1,
            ],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.id * 0.4,
          }}

          style={{
            transform: `
              translate(
                ${particle.x}px,
                ${particle.y}px
              )
            `,
          }}

          className="
            absolute

            w-2
            h-2

            rounded-full

            bg-blue-400

            shadow-[0_0_20px_5px_rgba(0,120,255,.8)]
          "
        />
      ))}
    </>
  );
}