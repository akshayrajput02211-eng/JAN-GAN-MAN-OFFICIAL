// ========================================
// FILE: src/components/dukaan/review/ReviewList.tsx
// ========================================

"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Rahul Kumar",
    date: "2 days ago",
    rating: 5,
    text:
      "Bahut fast delivery thi aur products fresh aaye. Packaging bhi kaafi achi thi.",
  },

  {
    id: 2,
    name: "Priya Singh",
    date: "1 week ago",
    rating: 4,
    text:
      "Shop owner ka behaviour friendly tha aur order time pe mila.",
  },

  {
    id: 3,
    name: "Aman Verma",
    date: "3 weeks ago",
    rating: 3,
    text:
      "Delivery thodi late thi lekin products fresh aur quality ache the.",
  },

  {
    id: 4,
    name: "Sneha Gupta",
    date: "1 month ago",
    rating: 5,
    text:
      "Best dukaan nearby. Daily grocery items easily mil jaate hain.",
  },
];

export default function ReviewList() {
  const [filter, setFilter] =
    useState("Latest");

  const filters = [
    "Latest",
    "Highest",
    "Lowest",
  ];

  const sortedReviews = [...reviews].sort(
    (a, b) => {
      if (filter === "Highest") {
        return b.rating - a.rating;
      }

      if (filter === "Lowest") {
        return a.rating - b.rating;
      }

      return b.id - a.id;
    }
  );

  return (
    <div
      className="
        rounded-[36px]

        border
        border-white/50

        bg-white/80
        p-6

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      {/* TOP */}

      <div
        className="
          flex
          flex-col
          gap-5

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <h2
            className="
              text-3xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Customer Reviews
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Real users ke honest reviews aur ratings
          </p>
        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() =>
                setFilter(item)
              }
              className={`
                rounded-full

                px-5
                py-3

                text-sm
                font-bold

                transition-all
                duration-300

                ${
                  filter === item
                    ? `
                      bg-orange-600
                      text-white

                      shadow-lg
                      shadow-orange-300/30
                    `
                    : `
                      bg-orange-50
                      text-orange-700

                      hover:bg-orange-100

                      dark:bg-slate-900
                      dark:text-orange-400
                    `
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* REVIEWS */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},

          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mt-8 space-y-5"
      >
        {sortedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </motion.div>
    </div>
  );
}