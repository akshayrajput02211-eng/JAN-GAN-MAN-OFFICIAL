// ========================================
// FILE: src/components/dukaan/nearby/ShopListView.tsx
// ========================================

"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import ShopDistanceCard from "./ShopDistanceCard";

const shops = [
  {
    id: 1,
    name: "Sharma Kirana Store",
    category: "Kirana",
    rating: 4.8,
    reviews: 245,
    distance: "500m",
    open: true,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fresh Sabzi Bhandar",
    category: "Sabzi",
    rating: 4.5,
    reviews: 122,
    distance: "900m",
    open: true,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gupta Medical",
    category: "Medicine",
    rating: 4.9,
    reviews: 321,
    distance: "1.2km",
    open: false,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Modern Bakery",
    category: "Bakery",
    rating: 4.4,
    reviews: 88,
    distance: "700m",
    open: true,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Village Dairy",
    category: "Dairy",
    rating: 4.6,
    reviews: 143,
    distance: "300m",
    open: true,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Glow Beauty Store",
    category: "Beauty",
    rating: 4.2,
    reviews: 65,
    distance: "1.5km",
    open: false,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopListView() {
  const [sortBy, setSortBy] = useState("Distance");

  const sortOptions = ["Distance", "Rating", "Open Now"];

  const hasShops = shops.length > 0;

  return (
    <div>
      {/* SORT BAR */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {sortOptions.map((item) => {
          const active = sortBy === item;

          return (
            <button
              key={item}
              onClick={() => setSortBy(item)}
              className={`
                flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                transition-all duration-300
                ${
                  active
                    ? "bg-[#ea580c] text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#ea580c] hover:text-[#ea580c] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                }
              `}
            >
              <ArrowUpDown className="h-4 w-4" />
              {item}
            </button>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {!hasShops ? (
        <div
          className="
            flex flex-col items-center justify-center
            rounded-[36px] border border-dashed border-slate-300
            bg-white/70 px-6 py-20 text-center
            backdrop-blur-xl dark:border-slate-700
            dark:bg-slate-800/70
          "
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Aas-paas koi dukaan nahi mili
          </h3>

          <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
            Thoda der baad dobara try kijiye ya location update kariye.
          </p>

          <button
            className="
              mt-6 rounded-2xl bg-[#ea580c]
              px-6 py-3 font-semibold text-white
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {shops.map((shop) => (
            <ShopDistanceCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}
    </div>
  );
}