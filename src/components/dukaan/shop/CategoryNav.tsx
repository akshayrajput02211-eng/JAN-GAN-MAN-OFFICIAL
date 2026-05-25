// ========================================
// FILE: src/components/dukaan/shop/CategoryNav.tsx
// ========================================

"use client";

const categories = [
  "Sabzi",
  "Snacks",
  "Dairy",
  "Doodh",
  "Bakery",
  "Cold Drinks",
];

export default function CategoryNav() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        sticky top-0 z-30
        border-b border-orange-100
        bg-white/80 backdrop-blur-xl
        dark:border-slate-700
        dark:bg-[#07111f]/80
      "
    >
      <div className="flex gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => scrollToSection(category)}
            className="
              whitespace-nowrap rounded-full
              bg-orange-50 px-5 py-2.5
              text-sm font-semibold text-[#ea580c]
              transition-all duration-300
              hover:-translate-y-1 hover:bg-[#ea580c]
              hover:text-white
            "
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}