// ========================================
// FILE: src/components/dukaan/post-shop/ShopTimingForm.tsx
// ========================================

"use client";

export default function ShopTimingForm() {
  return (
    <div
      className="
        rounded-[32px]
        border border-orange-100

        bg-white
        dark:bg-slate-800

        p-6
      "
    >
      <h2
        className="
          text-2xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Shop Timing
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <input
          type="time"
          className="
            h-14 rounded-2xl
            border border-orange-100
            bg-orange-50/60
            px-5
          "
        />

        <input
          type="time"
          className="
            h-14 rounded-2xl
            border border-orange-100
            bg-orange-50/60
            px-5
          "
        />
      </div>
    </div>
  );
}