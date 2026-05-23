"use client";

import Container from "@/components/dukanshared/container/Container";

import {
  ArrowRight,
  Store,
} from "lucide-react";

import ShopCard from "./ShopCard";

const shops = [1, 2, 3, 4];

export default function NearbyShops() {
  return (
    <section className="py-14">
      <Container>
        {/* HEADER */}

        <div
          className="
            mb-10

            flex
            flex-col
            gap-5

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-orange-100
                dark:border-slate-700/50

                bg-orange-50
                dark:bg-slate-800

                px-4
                py-2

                text-sm
                font-semibold

                text-orange-700
                dark:text-orange-400
              "
            >
              <Store size={16} />

              Nearby Verified Shops
            </div>

            {/* Title */}

            <h2
              className="
                mt-5

                text-4xl
                font-black
                leading-tight

                text-slate-900
                dark:text-white
              "
            >
              Aapke Paas Ki
              <span className="block text-orange-600 dark:text-orange-400">
                Dukaan
              </span>
            </h2>

            {/* Subtitle */}

            <p
              className="
                mt-3

                max-w-xl

                leading-relaxed

                text-slate-500
                dark:text-slate-400
              "
            >
              Trusted aur verified local
              shops se groceries, dairy,
              medicines aur daily essentials
              order kariye.
            </p>
          </div>

          {/* BUTTON */}

          <button
            className="
              flex
              h-12
              items-center
              gap-2

              rounded-full

              bg-gradient-to-r
              from-orange-600
              to-orange-700

              px-6

              font-semibold
              text-white

              shadow-lg
              shadow-orange-300/30

              transition-all
              duration-300

              hover:scale-105
              active:scale-[0.98]
            "
          >
            View All

            <ArrowRight size={18} />
          </button>
        </div>

        {/* SHOPS GRID */}

        <div
          className="
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {shops.map((item) => (
            <ShopCard key={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}