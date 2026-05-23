"use client";

import Link from "next/link";

import {
  Briefcase,
  CirclePlus,
  CreditCard,
  Home,
  MessageCircle,
  Search,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Search,
    label: "Find",
    href: "/find-work",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: CirclePlus,
    label: "Post",
    href: "/post-job",
    active: true,
    center: true,
  },
  {
    icon: Briefcase,
    label: "My Jobs",
    href: "/my-jobs",
  },
  {
    icon: MessageCircle,
    label: "Chat",
    href: "/messages",
  },
  {
    icon: CreditCard,
    label: "Pay",
    href: "/payments",
  },
];

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

        px-2
        sm:px-4
      "
    >
      <motion.div
        className="
          relative

          mx-auto

          flex
          items-center
          justify-between

          h-[82px]
          sm:h-[92px]

          max-w-5xl

          overflow-visible

          rounded-[28px]

          border
          border-white/40
          dark:border-slate-700/40

          bg-white/80
          dark:bg-slate-900/90

          px-3
          sm:px-8

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(124,58,237,0.12)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* PREMIUM LIGHT */}

        <div
          className="
            absolute
            inset-0

            rounded-[28px]

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

            dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_65%)]

            pointer-events-none
          "
        />

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-3 sm:gap-7">
          {navItems.slice(0, 3).map((item, i) => {
            const Icon = item.icon;

            return (
              <Link key={i} href={item.href}>
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

                    text-[#6f7d95]
                    dark:text-slate-400
                  "
                >
                  <div
                    className="
                      flex

                      h-10
                      w-10

                      sm:h-11
                      sm:w-11

                      items-center
                      justify-center

                      rounded-2xl

                      bg-white/70
                      dark:bg-slate-800/70

                      shadow-md

                      transition-all
                      duration-300

                      group-hover:bg-[#ede9fe]
                      dark:group-hover:bg-slate-700
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      text-[9px]
                      sm:text-xs

                      font-semibold
                    "
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* ================= CENTER BUTTON ================= */}

        <motion.div
          className="
            absolute
            left-1/2
            top-0

            z-50

            flex
            flex-col
            items-center

            -translate-x-1/2
            -translate-y-[45%]
          "
        >
          <Link href="/post-job">
            <div
              className="
                relative

                flex

                h-20
                w-20

                sm:h-24
                sm:w-24

                items-center
                justify-center

                rounded-full

                border-[6px]
                border-white
                dark:border-slate-900

                bg-gradient-to-br
                from-[#7c3aed]
                via-[#8b5cf6]
                to-[#4c1d95]

                shadow-[0_20px_50px_rgba(124,58,237,0.35)]
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0

                  rounded-full

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_65%)]
                "
              />

              <CirclePlus className="relative z-10 h-9 w-9 text-white" />
            </div>
          </Link>

          {/* TEXT */}

          <span
            className="
              mt-2

              text-[11px]
              sm:text-sm

              font-bold

              text-[#7c3aed]
              dark:text-blue-400
            "
          >
            Post Job
          </span>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-3 sm:gap-7">
          {navItems.slice(4).map((item, i) => {
            const Icon = item.icon;

            return (
              <Link key={i} href={item.href}>
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

                    text-[#6f7d95]
                    dark:text-slate-400
                  "
                >
                  <div
                    className="
                      flex

                      h-10
                      w-10

                      sm:h-11
                      sm:w-11

                      items-center
                      justify-center

                      rounded-2xl

                      bg-white/70
                      dark:bg-slate-800/70

                      shadow-md

                      transition-all
                      duration-300

                      group-hover:bg-[#ede9fe]
                      dark:group-hover:bg-slate-700
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      text-[9px]
                      sm:text-xs

                      font-semibold
                    "
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}