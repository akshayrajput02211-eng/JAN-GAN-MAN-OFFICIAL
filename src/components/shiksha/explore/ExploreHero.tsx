// ========================================
// FILE: src/components/shiksha/explore/ExploreHero.tsx
// ========================================

"use client";

import { Search, GraduationCap } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ExploreHero({
  search,
  setSearch,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[42px]

        bg-gradient-to-br
        from-blue-600
        via-blue-500
        to-cyan-500

        p-8
        md:p-12

        text-white
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          top-0
          right-0

          h-72
          w-72

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      <div className="relative z-10">
        {/* BADGE */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-white/15

            px-4
            py-2

            backdrop-blur-xl
          "
        >
          <GraduationCap className="h-4 w-4" />

          <span className="text-sm font-bold">
            Shiksha Teachers Network
          </span>
        </div>

        {/* TITLE */}

        <h1
          className="
            mt-7

            max-w-3xl

            text-4xl
            md:text-6xl

            font-black

            leading-tight
          "
        >
          Apna Perfect
          <span className="block text-blue-100">
            Teacher Dhundho
          </span>
        </h1>

        <p
          className="
            mt-5

            max-w-2xl

            text-lg

            text-blue-100
          "
        >
          Verified teachers ke saath online aur
          offline learning start karo.
        </p>

        {/* SEARCH */}

        <div
          className="
            mt-8

            flex
            items-center
            gap-3

            rounded-[24px]

            border border-white/20

            bg-white/15

            p-4

            backdrop-blur-xl
          "
        >
          <Search className="h-5 w-5 text-white" />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Teacher ya subject search karo..."
            className="
              w-full

              bg-transparent

              text-white

              outline-none

              placeholder:text-blue-100
            "
          />
        </div>
      </div>
    </section>
  );
}