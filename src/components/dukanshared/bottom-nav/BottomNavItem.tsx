// ========================================
// FILE: src/components/dukaan/layout/BottomNavItem.tsx
// ========================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BottomNavItem({
  item,
  pathname,
}: any) {
  const Icon = item.icon;

  const isActive = pathname === item.href;

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
          className={`
            relative

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            border

            shadow-md

            transition-all
            duration-300

            ${
              isActive
                ? `
                  border-orange-300
                  bg-orange-50
                  dark:bg-slate-700
                `
                : `
                  border-orange-100
                  dark:border-slate-700/50

                  bg-white/80
                  dark:bg-slate-800/80
                `
            }

            group-hover:-translate-y-1
            group-hover:border-orange-300
            group-hover:bg-orange-50
            dark:group-hover:bg-slate-700
          `}
        >
          {/* CTA BADGE */}

          {item.cta && (
            <span
              className="
                absolute
                -right-1
                -top-1

                flex
                h-5
                w-5
                items-center
                justify-center

                rounded-full

                bg-orange-600

                text-[10px]
                font-black
                text-white

                shadow-md
              "
            >
              +
            </span>
          )}

          <Icon
            className={`
              h-5
              w-5

              transition-colors
              duration-300

              ${
                isActive
                  ? "text-orange-600 dark:text-orange-400"
                  : `
                    group-hover:text-orange-600
                    dark:group-hover:text-orange-400
                  `
              }
            `}
          />
        </div>

        <span
          className={`
            text-[11px]
            font-semibold
            tracking-wide

            ${
              isActive
                ? "text-orange-600 dark:text-orange-400"
                : ""
            }
          `}
        >
          {item.label}
        </span>
      </motion.div>
    </Link>
  );
}