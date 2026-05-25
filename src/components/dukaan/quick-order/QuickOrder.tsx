// ========================================
// FILE: src/components/dukaan/home/QuickOrder.tsx
// ========================================

"use client";

import Link from "next/link";

import Container from "@/components/dukanshared/container/Container";

import {
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export default function QuickOrder() {
  const items = [
    "Milk",
    "Bread",
    "Eggs",
    "Rice",
    "Salt",
    "Sugar",
    "Tea",
    "Oil",
  ];

  return (
    <section className="py-10">
      <Container>
        <div
          className="
            rounded-[32px]
            border
            border-orange-100
            dark:border-slate-700/50
            bg-white
            dark:bg-slate-800
            p-6
            shadow-[0_12px_40px_rgba(234,88,12,0.08)]
          "
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-orange-100
                dark:bg-orange-950/40
              "
            >
              <Sparkles
                size={22}
                className="text-orange-700 dark:text-orange-400"
              />
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Quick Order
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Rozmarra items instantly add karo
              </p>
            </div>
          </div>

          {/* Items */}
          <div
            className="
              mt-8
              grid
              grid-cols-2 md:grid-cols-4
              gap-4
            "
          >
            {items.map((item, index) => (
              <Link
                key={item}
                href={`/dukaan/product/${index + 1}`}
              >
                <button
                  className="
                    w-full

                    rounded-2xl
                    border
                    border-orange-100
                    dark:border-slate-700/50

                    bg-orange-50
                    dark:bg-slate-900

                    px-5
                    py-4

                    text-left
                    font-semibold

                    text-slate-800
                    dark:text-slate-200

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-orange-300
                    hover:bg-orange-100

                    dark:hover:bg-slate-800
                  "
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8">
            <Link href="/dukaan/cart">
              <button
                className="
                  flex h-14 w-full items-center justify-center gap-2

                  rounded-2xl

                  bg-gradient-to-r
                  from-orange-600
                  to-orange-700

                  px-8

                  text-lg
                  font-black
                  text-white

                  shadow-lg
                  shadow-orange-300/30

                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  hover:shadow-orange-400/40
                  active:scale-[0.99]
                "
              >
                <ShoppingCart size={20} />

                View Cart
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}