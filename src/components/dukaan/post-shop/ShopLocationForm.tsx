// ========================================
// FILE: src/components/dukaan/post-shop/ShopLocationForm.tsx
// ========================================

"use client";

export default function ShopLocationForm() {
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
        Shop Location
      </h2>

      <div className="mt-6 space-y-5">
        <input
          placeholder="Village / Area"
          className="
            h-14 w-full rounded-2xl
            border border-orange-100
            bg-orange-50/60
            px-5
          "
        />

        <input
          placeholder="District"
          className="
            h-14 w-full rounded-2xl
            border border-orange-100
            bg-orange-50/60
            px-5
          "
        />

        <textarea
          placeholder="Complete Address"
          className="
            min-h-[120px]
            w-full
            rounded-2xl
            border border-orange-100
            bg-orange-50/60
            p-5
          "
        />
      </div>
    </div>
  );
}