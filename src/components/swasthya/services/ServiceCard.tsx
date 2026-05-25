// ========================================
// FILE: src/components/swasthya/home/ServiceCard.tsx
// ========================================

"use client";

import Image from "next/image";
import Link from "next/link";

import GlassCard from "@/components/swasthyashared/cards/GlassCard";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  href: string;
}

export default function ServiceCard({
  title,
  subtitle,
  icon,
  gradient,
  href,
}: Props) {
  return (
    <Link href={href} className="block">
      <GlassCard
        className="
          group
          relative

          overflow-hidden

          p-6

          text-center

          cursor-pointer

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* ================= GLOW ================= */}

        <div
          className={`
            absolute
            inset-0

            bg-gradient-to-br ${gradient}

            opacity-0

            transition-all
            duration-500

            group-hover:opacity-[0.08]
          `}
        />

        {/* ================= ICON WRAPPER ================= */}

        <div
          className={`
            relative
            mx-auto

            flex
            h-20
            w-20

            items-center
            justify-center

            overflow-hidden

            rounded-[26px]

            bg-gradient-to-br ${gradient}

            shadow-[0_12px_35px_rgba(0,0,0,0.12)]

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          {/* LIGHT EFFECT */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]
            "
          />

          <Image
            src={icon}
            alt={title}
            width={42}
            height={42}
            className="
              relative
              z-10

              object-contain
            "
          />
        </div>

        {/* ================= TEXT ================= */}

        <div className="relative z-10">
          <h3
            className="
              mt-6

              text-lg
              font-black

              tracking-tight

              text-slate-900
              dark:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-2

              text-sm
              font-medium

              text-slate-500
              dark:text-slate-300
            "
          >
            {subtitle}
          </p>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div
          className={`
            absolute
            bottom-0
            left-0

            h-1
            w-0

            rounded-full

            bg-gradient-to-r ${gradient}

            transition-all
            duration-500

            group-hover:w-full
          `}
        />
      </GlassCard>
    </Link>
  );
}