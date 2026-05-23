"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function HoverScale({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
}