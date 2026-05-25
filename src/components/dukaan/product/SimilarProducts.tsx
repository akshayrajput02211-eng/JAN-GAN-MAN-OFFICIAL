// ========================================
// FILE: src/components/dukaan/product/SimilarProducts.tsx
// ========================================

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [1, 2, 3, 4];

export default function SimilarProducts() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2
          className="
            text-3xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Similar Products
        </h2>

        <button
          className="
            flex
            items-center
            gap-2

            text-sm
            font-bold
            text-[#ea580c]
          "
        >
          View All

          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {products.map((item) => (
          <div
            key={item}
            className="
              min-w-[220px]

              overflow-hidden
              rounded-[28px]

              border border-white/50
              bg-white/80
              shadow-lg
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-slate-800/70
            "
          >
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
                alt="product"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3
                className="
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Fresh Tomato
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                1kg pack
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className="
                    text-xl
                    font-black
                    text-[#ea580c]
                  "
                >
                  ₹45
                </span>

                <button
                  className="
                    rounded-full
                    bg-[#ea580c]
                    px-4
                    py-2

                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}