"use client";

import { motion } from "framer-motion";

export default function StepCard({
  title,
  number,
}: {
  title: string;
  number: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group

        rounded-[32px]

        border
        border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-800

        p-8

        text-center

        shadow-[0_12px_40px_rgba(234,88,12,0.08)]

        transition-all
        duration-300
      "
    >
      {/* Number Circle */}

      <div
        className="
          mx-auto

          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-orange-600
          to-orange-700

          text-2xl
          font-black
          text-white

          shadow-lg
          shadow-orange-300/30

          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        {number}
      </div>

      {/* Title */}

      <h3
        className="
          mt-6

          text-2xl
          font-black

          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3

          leading-relaxed

          text-slate-500
          dark:text-slate-400
        "
      >
        Fast delivery, trusted local
        dukaan aur premium shopping
        experience ek hi platform par.
      </p>

      {/* Bottom Accent */}

      <div
        className="
          mx-auto
          mt-6

          h-1.5
          w-16

          rounded-full

          bg-gradient-to-r
          from-orange-500
          to-orange-700
        "
      />
    </motion.div>
  );
}