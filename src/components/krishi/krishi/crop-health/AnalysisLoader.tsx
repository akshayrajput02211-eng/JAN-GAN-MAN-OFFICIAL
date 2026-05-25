"use client";

import { motion } from "framer-motion";

export default function AnalysisLoader() {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[36px]

        bg-[#07111f]

        p-8

        text-white

        shadow-2xl
      "
    >
      {/* Scan Line */}

      <motion.div
        animate={{
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          left-0
          top-0

          h-2
          w-full

          bg-gradient-to-r
          from-transparent
          via-green-400
          to-transparent

          blur-sm
        "
      />

      <div className="relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            mx-auto

            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-full

            border-4
            border-green-400
          "
        >
          🌱
        </motion.div>

        <h2 className="mt-6 text-center text-3xl font-black">
          AI dekh raha hai...
        </h2>

        <div
          className="
            mt-6

            h-4
            overflow-hidden

            rounded-full

            bg-white/10
          "
        >
          <motion.div
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              h-full

              rounded-full

              bg-gradient-to-r
              from-[#16a34a]
              to-[#22c55e]
            "
          />
        </div>
      </div>
    </div>
  );
}