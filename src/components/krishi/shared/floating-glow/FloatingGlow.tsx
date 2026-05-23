
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface FloatingGlowProps {
  className?: string;
}

export default function FloatingGlow({
  className,
}: FloatingGlowProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        `
        absolute rounded-full
        bg-green-400/30 blur-3xl
      `,
        className
      )}
    />
  );
}