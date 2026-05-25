// ========================================
// FILE: src/components/dukaan/post-shop/SubmitShopButton.tsx
// ========================================

"use client";

import { Store } from "lucide-react";

export default function SubmitShopButton() {
  return (
    <button
      className="
        flex h-16 w-full items-center justify-center gap-3

        rounded-[28px]

        bg-gradient-to-r
        from-orange-600
        to-orange-700

        text-lg
        font-black
        text-white

        shadow-xl
        shadow-orange-300/30

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      <Store className="h-6 w-6" />

      Dukaan Submit Karo
    </button>
  );
}