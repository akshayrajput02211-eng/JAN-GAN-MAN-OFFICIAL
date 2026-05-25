"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiseaseResult() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        rounded-[36px]

        bg-white/70
        dark:bg-slate-800/70

        p-6

        shadow-2xl
        backdrop-blur-2xl
      "
    >
      {/* TOP */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black dark:text-white">
            Leaf Blight
          </h2>

          <p className="mt-2 text-slate-500">
            AI Confidence
          </p>
        </div>

        <div
          className="
            rounded-full

            bg-green-100

            px-5
            py-3

            text-lg
            font-bold

            text-green-700
          "
        >
          94%
        </div>
      </div>

      {/* IMAGE */}

      <div
        className="
          relative
          mt-6

          h-80

          overflow-hidden
          rounded-[30px]
        "
      >
        <Image
          src="/dummy/crop-disease.jpg"
          alt="disease"
          fill
          className="object-cover"
        />

        {/* Highlight */}

        <div
          className="
            absolute
            left-1/3
            top-1/3

            h-28
            w-28

            rounded-xl

            border-4
            border-red-500

            bg-red-500/20
          "
        />
      </div>

      {/* BADGES */}

      <div className="mt-5 flex flex-wrap gap-3">
        <div
          className="
            rounded-full

            bg-red-100

            px-4
            py-2

            text-sm
            font-bold

            text-red-700
          "
        >
          Severity: Moderate
        </div>

        <div
          className="
            rounded-full

            bg-yellow-100

            px-4
            py-2

            text-sm
            font-bold

            text-yellow-700
          "
        >
          Fungus Infection
        </div>
      </div>

      {/* DESCRIPTION */}

      <p
        className="
          mt-6

          text-lg
          leading-8

          text-slate-600
          dark:text-slate-300
        "
      >
        Is fasal mein fungal infection ke
        lakshan dikh rahe hain. Pattiyon par
        bhure daag aur sukhaapan nazar aa raha
        hai.
      </p>
    </motion.div>
  );
}