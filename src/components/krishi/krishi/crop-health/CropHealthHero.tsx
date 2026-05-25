"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CropHealthHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-[#16a34a]
        via-[#22c55e]
        to-[#166534]

        p-8

        text-white

        shadow-[0_25px_80px_rgba(22,163,74,0.25)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-20
          right-0

          h-72
          w-72

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative z-10"
      >
        <div
          className="
            inline-flex
            rounded-full

            bg-white/20

            px-4
            py-2

            text-sm
            font-semibold

            backdrop-blur-xl
          "
        >
          🌱 AI Crop Doctor
        </div>

        <h1
          className="
            mt-6

            max-w-2xl

            text-5xl
            font-black
            leading-tight
          "
        >
          Fasal Mein Koi Takleef?
        </h1>

        <p
          className="
            mt-5

            max-w-xl

            text-lg
            leading-8

            text-green-50
          "
        >
          Photo upload karo aur AI se turant
          disease aur treatment jaano.
        </p>

        <Link href="#upload">
          <button
            className="
              mt-8

              rounded-2xl

              bg-white

              px-7
              py-4

              text-lg
              font-bold

              text-[#16a34a]

              shadow-2xl

              transition-all
              duration-300

              hover:scale-105
            "
          >
            📸 Photo Khicho
          </button>
        </Link>
      </motion.div>
    </section>
  );
}