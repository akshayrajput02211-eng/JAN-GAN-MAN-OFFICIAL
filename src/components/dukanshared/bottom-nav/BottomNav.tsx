// components/dukaan/shared/bottom-nav/BottomNav.tsx

"use client";

import Link from "next/link";

import { CirclePlus } from "lucide-react";

import { motion } from "framer-motion";

import { navItems } from "./nav-items";

import BottomNavItem from "./BottomNavItem";

export default function BottomNav() {
  return (
    <div
      className="
        fixed
        bottom-3
        left-1/2
        z-50

        w-full

        -translate-x-1/2

        px-3
      "
    >
      <motion.div
        initial={false}
        className="
          relative

          mx-auto

          flex
          h-[82px]
          max-w-2xl
          items-center
          justify-between

          rounded-[30px]

          border
          border-white/30
          dark:border-slate-700/40

          bg-white/70
          dark:bg-slate-900/90

          px-6

          shadow-[0_20px_50px_rgba(234,88,12,0.10)]

          backdrop-blur-3xl
        "
      >
        {/* LEFT */}

        <div className="flex items-center gap-5">
          {navItems.slice(0, 2).map((item, i) => (
            <BottomNavItem key={i} item={item} />
          ))}
        </div>

        {/* CENTER BUTTON */}

        <motion.div
          
          className="
            absolute
            left-1/2
            top-0

            -translate-x-1/2
            -translate-y-[45%]
          "
        >
          <Link href="/post-shop">
            <div
              className="
                relative

                flex
                h-20
                w-20
                items-center
                justify-center

                rounded-full

                border-[6px]
                border-white
                dark:border-slate-900

                bg-gradient-to-br
                from-orange-500
                to-orange-700

                shadow-[0_20px_50px_rgba(234,88,12,0.35)]
              "
            >
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-orange-400/30
                  blur-xl
                "
              />

              <CirclePlus
                className="
                  relative z-10
                  h-9
                  w-9
                  text-white
                "
              />
            </div>
          </Link>

          <span
            className="
              mt-2
              block
              text-center
              text-sm
              font-bold
              text-orange-700
              dark:text-orange-400
            "
          >
            Post Shop
          </span>
        </motion.div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">
          {navItems.slice(3).map((item, i) => (
            <BottomNavItem key={i} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}