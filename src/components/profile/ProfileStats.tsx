"use client";

import {
  Heart,
  IndianRupee,
  ShoppingBag,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    icon: ShoppingBag,
    value: "12",
    label: "Mere Orders",
    color: "from-blue-500 to-indigo-500",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: Heart,
    value: "8",
    label: "Saved Items",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
  },
  {
    icon: Star,
    value: "4.5",
    label: "Rating",
    color: "from-yellow-400 to-orange-500",
    bg: "from-yellow-50 to-orange-50",
  },
  {
    icon: IndianRupee,
    value: "₹2,450",
    label: "Total Saved",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-50 to-emerald-50",
  },
];

export default function ProfileStats() {
  return (
    <section
      className="
        mt-7

        grid
        grid-cols-2

        gap-4

        lg:grid-cols-4
      "
    >
      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              relative

              overflow-hidden

              rounded-[28px]

              border
              border-white/40
              dark:border-slate-700/50

              bg-white/80
              dark:bg-slate-800/80

              p-4
              sm:p-5

              backdrop-blur-2xl

              shadow-[0_15px_40px_rgba(0,0,0,0.06)]

              transition-all
              duration-300
            "
          >
            {/* PREMIUM LIGHT */}

            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

                dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)]

                pointer-events-none
              "
            />

            {/* HOVER GRADIENT */}

            <div
              className={`
                absolute
                inset-0

                opacity-0

                transition-all
                duration-500

                group-hover:opacity-100

                bg-gradient-to-br
                ${item.bg}
              `}
            />

            {/* CONTENT */}

            <div className="relative z-10 flex items-center gap-4">
              {/* ICON */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className={`
                  relative

                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  ${item.color}

                  shadow-lg

                  overflow-hidden
                `}
              >
                {/* INNER LIGHT */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_70%)]
                  "
                />

                <Icon className="relative z-10 h-6 w-6 text-white" />
              </motion.div>

              {/* TEXT */}

              <div>
                <motion.h3
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    text-xl
                    sm:text-2xl

                    font-black

                    tracking-tight

                    text-[#10224f]
                    dark:text-white
                  "
                >
                  {item.value}
                </motion.h3>

                <p
                  className="
                    mt-1

                    text-xs
                    sm:text-sm

                    font-medium

                    text-[#6f7d95]
                    dark:text-slate-400
                  "
                >
                  {item.label}
                </p>
              </div>
            </div>

            {/* BOTTOM GLOW LINE */}

            <div
              className={`
                absolute
                bottom-0
                left-0

                h-[4px]
                w-0

                rounded-full

                transition-all
                duration-500

                group-hover:w-full

                bg-gradient-to-r
                ${item.color}
              `}
            />
          </motion.div>
        );
      })}
    </section>
  );
}