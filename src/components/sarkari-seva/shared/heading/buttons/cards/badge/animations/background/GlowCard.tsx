// components/shared/cards/GlowCard.tsx

import { ReactNode } from "react";

export default function GlowCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
      group
      relative
      rounded-3xl
      p-[1px]
      bg-gradient-to-r
      from-[#d97706]
      to-[#f97316]
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >

      {/* Glow Effect */}
      <div
        className="
        absolute
        inset-0
        rounded-3xl
        bg-gradient-to-r
        from-[#d97706]
        to-[#f97316]
        opacity-0
        blur-2xl
        group-hover:opacity-30
        transition-opacity
        duration-500
        "
      />

      {/* Inner Card */}
      <div
        className="
        relative
        z-10
        bg-white
        dark:bg-slate-800
        rounded-3xl
        p-6
        transition-colors
        duration-300
        "
      >
        {children}
      </div>

    </div>
  );
}