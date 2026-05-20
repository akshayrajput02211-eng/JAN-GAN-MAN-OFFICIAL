"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import robot from "@/assets/ai-sahayak/robot.png";

export default function RobotFloat() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="absolute left-40 mt-20 top-36 z-30"
    >
      <Image
        src={robot}
        alt="robot"
        className="w-[200px]"
      />
    </motion.div>
  );
}