"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sun() {
  return (
    <motion.div
      className="
        absolute
        top-16
        md:top-1
        right-2
        sm:right-6
        md:right-10
        z-10
      "
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[#f6b21a]/
          blur-3xl
          scale-110
        "
      />

      {/* Sun Image */}
      <Image
        src="/images/hero/sun.png"
        alt="sun"
        width={770}
        height={170}
        priority
        className="
          relative
          object-contain

          w-[180px]
          sm:w-[260px]
          md:w-[420px]
          lg:w-[770px]

          h-auto
          select-none
          pointer-events-none
        "
      />
    </motion.div>
  );
}