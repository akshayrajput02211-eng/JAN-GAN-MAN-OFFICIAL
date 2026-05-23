
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({
  children,
  className,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: 2,
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        `
        relative overflow-hidden
        rounded-[28px]
        border border-white/30
        bg-white/70
        backdrop-blur-2xl
        transition-all duration-300
        hover:shadow-[0_25px_60px_rgba(34,197,94,0.18)]
      `,
        className
      )}
    >
      {/* Hover Glow */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-br
        from-green-100/10 via-transparent to-emerald-100/10
        opacity-0 transition-opacity duration-300
        group-hover:opacity-100
      "
      />

      {children}
    </motion.div>
  );
}