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
      bg-white/50
      backdrop-blur-2xl
      border border-white/40
      rounded-3xl
      shadow-xl
      p-6
    "
    >
      {children}
    </div>
  );
}