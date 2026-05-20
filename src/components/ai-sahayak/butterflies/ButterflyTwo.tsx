"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import butterfly from "@/assets/ai-sahayak/butterfly-purple.png";

export default function ButterflyTwo() {
  return (
    <motion.div
      animate={{
        x: [0, -120, 40, 0],
        y: [0, 60, -60, 0],
        rotate: [0, -10, 10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute right-[20%] top-[35%] z-30"
    >
      <Image
        src={butterfly}
        alt=""
        className="w-22"
      />
    </motion.div>
  );
}