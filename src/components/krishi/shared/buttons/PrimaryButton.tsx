

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className,
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        `
        relative overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-green-500 to-emerald-600
        px-6 py-4
        text-sm font-semibold text-white
        shadow-lg shadow-green-500/30
        transition-all duration-300
      `,
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-emerald-500 to-green-400
        opacity-0 transition-opacity duration-300
        hover:opacity-100
      "
      />
    </motion.button>
  );
}