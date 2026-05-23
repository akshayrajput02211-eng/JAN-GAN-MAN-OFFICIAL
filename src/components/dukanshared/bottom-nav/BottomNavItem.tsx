"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function BottomNavItem({
  item,
}: any) {
  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <motion.div
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          group

          flex
          flex-col
          items-center
          gap-1

          text-slate-500
          dark:text-slate-400
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            border
            border-orange-100
            dark:border-slate-700/50

            bg-white/80
            dark:bg-slate-800/80

            shadow-md

            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:border-orange-300
            group-hover:bg-orange-50
            dark:group-hover:bg-slate-700
          "
        >
          <Icon
            className="
              h-5
              w-5

              transition-colors
              duration-300

              group-hover:text-orange-600
              dark:group-hover:text-orange-400
            "
          />
        </div>

        <span
          className="
            text-[11px]
            font-semibold
            tracking-wide
          "
        >
          {item.label}
        </span>
      </motion.div>
    </Link>
  );
}