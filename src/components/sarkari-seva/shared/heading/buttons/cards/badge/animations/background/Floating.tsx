// components/shared/animations/Floating.tsx

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Floating({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
    >
      {children}
    </motion.div>
  );
}