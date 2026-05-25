// ========================================
// FILE: src/components/dukaan/product/ProductImages.tsx
// ========================================

"use client";

import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
];

export default function ProductImages() {
  return (
    <div
      className="
        flex
        snap-x
        snap-mandatory
        gap-4
        overflow-x-auto
        scrollbar-hide
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="
            relative
            aspect-square
            min-w-full
            snap-center
            overflow-hidden

            rounded-[34px]
          "
        >
          <Image
            src={img}
            alt="product"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}