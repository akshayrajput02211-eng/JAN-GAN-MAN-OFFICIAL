
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sun() {
  return (
    <motion.div
      className="
        absolute
        top-1
        right-10
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
          bg-yellow-300/10
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
        className="relative object-contain"
      />

    </motion.div>
  );
}