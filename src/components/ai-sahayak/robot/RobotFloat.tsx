"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RobotFloat() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="relative z-10"
    >
      <Image
        src="/assets/robot.png"
        alt="Robot"
        width={260}
        height={260}
        priority
      />
    </motion.div>
  );
}