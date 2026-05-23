"use client";

import { motion } from "framer-motion";

export default function CategoryCard({
  title,
}: {
  title: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        cursor-pointer

        rounded-[30px]

        border
        border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-800

        p-6

        text-center

        shadow-[0_10px_30px_rgba(234,88,12,0.08)]

        transition-all
        duration-300
      "
    >
      {/* Icon Circle */}

      <div
        className="
          mx-auto
          mb-4

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-full

          bg-orange-100
          dark:bg-orange-950/40

          shadow-inner
        "
      >
        <div
          className="
            h-10
            w-10

            rounded-full

            bg-gradient-to-br
            from-orange-500
            to-orange-700
          "
        />
      </div>

      {/* Title */}

      <h4
        className="
          text-base
          font-bold
          tracking-tight

          text-slate-800
          dark:text-slate-100
        "
      >
        {title}
      </h4>

      {/* Subtitle */}

      <p
        className="
          mt-2
          text-sm

          text-slate-500
          dark:text-slate-400
        "
      >
        Fast local delivery
      </p>
    </motion.div>
  );
}