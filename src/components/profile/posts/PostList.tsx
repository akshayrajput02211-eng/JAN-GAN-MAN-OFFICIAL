"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import PostCard from "./PostCard";

const filters = ["Active", "Expired", "All"];

export default function PostList() {
  const [active, setActive] = useState("All");

  return (
    <div className="relative px-5 py-6 pb-32">
      <h1 className="text-3xl font-bold dark:text-white">
        Meri Listings
      </h1>

      <div className="mt-6 flex gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              rounded-full
              px-5
              py-3
              text-sm
              font-semibold
              ${
                active === item
                  ? "bg-[#3558ff] text-white"
                  : "bg-white text-slate-700 dark:bg-slate-800 dark:text-white"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <PostCard
          title="Tractor for Rent"
          status="Active"
        />

        <PostCard
          title="Delivery Job"
          status="Expired"
        />
      </div>

      <button
        className="
          fixed
          bottom-24
          right-5
          flex
          items-center
          gap-2
          rounded-full
          bg-[#3558ff]
          px-6
          py-4
          text-sm
          font-bold
          text-white
          shadow-2xl
        "
      >
        <Plus size={18} />
        Naya Post Karo
      </button>
    </div>
  );
}