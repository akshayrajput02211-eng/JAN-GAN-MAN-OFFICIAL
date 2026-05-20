"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import butterfly from "@/assets/ai-sahayak/butterfly-yellow.png";

export default function ButterflyOne() {
  return (
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -70, 30, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-[20%] top-[20%] z-30"
    >
      <Image
        src={butterfly}
        alt=""
        className="w-20"
      />
    </motion.div>
  );
}