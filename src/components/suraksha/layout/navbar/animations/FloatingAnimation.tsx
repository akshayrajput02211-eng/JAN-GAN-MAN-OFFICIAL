"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function FloatingAnimation({
  children,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}