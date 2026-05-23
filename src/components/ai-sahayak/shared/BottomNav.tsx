"use client";

import Link from "next/link";

import {
  Bot,
  Home,
  MessageSquare,
  Mic,
  Sparkles,
  User,
  WandSparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Sparkles,
    label: "Explore",
    href: "/ai-sahayak/explore",
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: Bot,
    label: "AI Chat",
    href: "/ai-sahayak/chat",
    active: true,
    center: true,
  },
  {
    icon: MessageSquare,
    label: "Chats",
    href: "/ai-sahayak/history",
  },
  {
    icon: WandSparkles,
    label: "Tools",
    href: "/ai-sahayak/tools",
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
        // initial={{
        //   y: 120,
        //   opacity: 0,
        // }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 0.6,
        // }}
        className="
          relative

          mx-auto

          flex
          items-center
          justify-between

          h-[82px]
          sm:h-[92px]

          max-w-5xl

          rounded-[30px]

          border
          border-white/30

          bg-white/75

          px-3
          sm:px-8

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(0,0,0,0.10)]

          overflow-visible
        "
      >
        {/* PREMIUM LIGHT */}

        <div
          className="
            absolute
            inset-0

            rounded-[30px]

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

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

                      shadow-md

                      transition-all
                      duration-300

                      group-hover:bg-[#eef4ff]
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

        {/* ================= CENTER AI BUTTON ================= */}

        <motion.div
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.92,
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
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
          <Link href="/ai-sahayak/chat">
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

                bg-gradient-to-br
                from-[#7c3aed]
                via-[#8b5cf6]
                to-[#6366f1]

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

              {/* PULSE */}

              <div
                className="
                  absolute

                  h-full
                  w-full

                  animate-ping

                  rounded-full

                  bg-violet-400/20
                "
              />

              <Bot className="relative z-10 h-9 w-9 text-white" />
            </div>
          </Link>

          <span
            className="
              mt-2

              text-[11px]
              sm:text-sm

              font-bold

              text-[#7c3aed]
            "
          >
            AI Chat
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

                      shadow-md

                      transition-all
                      duration-300

                      group-hover:bg-[#f3f0ff]
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