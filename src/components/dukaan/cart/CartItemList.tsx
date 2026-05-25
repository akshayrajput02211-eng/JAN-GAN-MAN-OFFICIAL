// ========================================
// FILE: src/components/dukaan/cart/CartItemList.tsx
// ========================================

"use client";

import { useState } from "react";

import CartItem from "./CartItem";

const initialItems = [
  {
    id: 1,
    name: "Fresh Tomato",
    shop: "Sharma Kirana",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1000&auto=format&fit=crop",
    price: 40,
    qty: 2,
  },
  {
    id: 2,
    name: "Organic Potato",
    shop: "Village Store",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000&auto=format&fit=crop",
    price: 35,
    qty: 1,
  },
];

export default function CartItemList() {
  const [items, setItems] = useState(initialItems);

  const increaseQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  if (items.length === 0) {
    return (
      <div
        className="
          flex flex-col items-center justify-center

          rounded-[36px]
          border border-dashed border-slate-300

          bg-white/80
          px-6 py-20

          text-center

          dark:border-slate-700
          dark:bg-slate-800/70
        "
      >
        <div
          className="
            flex h-24 w-24 items-center justify-center

            rounded-full
            bg-orange-100
          "
        >
          🛒
        </div>

        <h2
          className="
            mt-6
            text-3xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Cart Khali Hai
        </h2>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Aapne abhi tak koi product add nahi kiya.
        </p>

        <button
          className="
            mt-6

            rounded-2xl

            bg-gradient-to-r
            from-[#16a34a]
            to-[#15803d]

            px-6 py-4

            font-bold
            text-white

            shadow-lg

            transition-all
            duration-300

            hover:-translate-y-1
          "
        >
          Dukaan Par Jao
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}