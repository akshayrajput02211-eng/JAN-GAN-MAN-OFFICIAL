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
      relative
      rounded-3xl
      p-[1px]
      bg-gradient-to-r
      from-green-400
      to-emerald-500
    "
    >
      <div className="bg-white rounded-3xl p-6">
        {children}
      </div>
    </div>
  );
}