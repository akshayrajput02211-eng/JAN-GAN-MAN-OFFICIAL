// ========================================
// FILE: src/components/dukaan/post-shop/VerificationNotice.tsx
// ========================================

"use client";

import { ShieldCheck } from "lucide-react";

export default function VerificationNotice() {
  return (
    <div
      className="
        flex gap-4

        rounded-[28px]

        border border-green-200

        bg-green-50

        p-5
      "
    >
      <ShieldCheck className="h-7 w-7 text-green-600" />

      <div>
        <h3 className="font-black text-green-800">
          Verification Required
        </h3>

        <p className="mt-2 text-sm text-green-700">
          Shop approval ke liye admin verification zaruri hai.
        </p>
      </div>
    </div>
  );
}