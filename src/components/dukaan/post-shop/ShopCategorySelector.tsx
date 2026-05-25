// ========================================
// FILE: src/components/dukaan/post-shop/ShopCategorySelector.tsx
// ========================================

"use client";

const categories = [
  "Kirana",
  "Sabzi",
  "Bakery",
  "Medicine",
  "Dairy",
  "Beauty",
];

export default function ShopCategorySelector() {
  return (
    <div
      className="
        rounded-[32px]
        border border-orange-100
        dark:border-slate-700/50

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
        Shop Category
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            className="
              rounded-full

              bg-orange-50
              px-5
              py-3

              font-bold
              text-orange-700

              transition-all
              duration-300

              hover:bg-orange-100
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}