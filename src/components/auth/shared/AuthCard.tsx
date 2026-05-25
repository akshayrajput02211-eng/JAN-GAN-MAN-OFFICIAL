"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function AuthCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        w-full
        rounded-[36px]
        border
        border-white/50
        bg-white/70
        p-8
        shadow-[0_20px_80px_rgba(0,0,0,0.12)]
        backdrop-blur-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}