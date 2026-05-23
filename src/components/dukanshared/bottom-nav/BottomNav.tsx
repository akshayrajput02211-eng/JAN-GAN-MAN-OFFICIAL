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
        className="
          relative

          mx-auto

          flex
          items-center
          justify-between

          max-w-2xl

          h-[82px]

          rounded-[30px]

          border
          border-white/30

          bg-white/70

          px-6

          backdrop-blur-3xl

          shadow-[0_20px_50px_rgba(0,0,0,0.10)]
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
                items-center
                justify-center

                w-20
                h-20

                rounded-full

                border-[6px]
                border-white

                bg-gradient-to-br
                from-green-500
                to-green-700

                shadow-[0_20px_50px_rgba(22,163,74,0.4)]
              "
            >
              <CirclePlus className="w-9 h-9 text-white" />
            </div>
          </Link>

          <span
            className="
              mt-2
              block
              text-center
              text-sm
              font-bold
              text-green-700
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