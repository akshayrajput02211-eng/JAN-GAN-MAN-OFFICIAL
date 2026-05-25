// ========================================
// FILE: src/components/dukaan/post-shop/ShopImageUpload.tsx
// ========================================

"use client";

import { UploadCloud } from "lucide-react";

export default function ShopImageUpload() {
  return (
    <div
      className="
        rounded-[32px]
        border border-dashed border-orange-200

        bg-white
        dark:bg-slate-800

        p-10
        text-center
      "
    >
      <div
        className="
          mx-auto

          flex h-20 w-20 items-center justify-center

          rounded-full

          bg-orange-100
        "
      >
        <UploadCloud className="h-10 w-10 text-orange-600" />
      </div>

      <h3
        className="
          mt-5
          text-2xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Shop Images Upload Karo
      </h3>

      <p className="mt-2 text-slate-500">
        PNG, JPG ya WebP upload karo
      </p>

      <button
        className="
          mt-6

          rounded-2xl

          bg-orange-600
          px-6
          py-4

          font-bold
          text-white
        "
      >
        Upload Images
      </button>
    </div>
  );
}