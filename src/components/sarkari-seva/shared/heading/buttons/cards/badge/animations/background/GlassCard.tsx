// components/shared/cards/GlassCard.tsx

import { ReactNode } from "react";

export default function GlassCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
      relative
      overflow-hidden
      bg-white/50
      dark:bg-slate-800/50
      backdrop-blur-2xl
      border
      border-white/40
      dark:border-slate-700/40
      rounded-3xl
      shadow-xl
      p-6
      transition-all
      duration-300
      hover:shadow-2xl
      hover:-translate-y-1
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        rounded-full
        bg-orange-300/10
        blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}