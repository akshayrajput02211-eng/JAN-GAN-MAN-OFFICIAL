"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
 icon: ReactNode;
  desc: string;
  href: string;
}

export default function ServiceCard({
  title,
  icon,
  desc,
  href,
}: Props) {
  return (
    <Link href={href} className="block">
      <div
        className="
          group
          relative
          overflow-hidden

          bg-white
          dark:bg-slate-800

          rounded-3xl

          p-5

          border
          border-orange-100
          dark:border-slate-700

          hover:-translate-y-2
          hover:shadow-2xl

          transition-all
          duration-300

          cursor-pointer
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            -top-10
            -right-10

            w-28
            h-28

            rounded-full

            bg-orange-300/20

            blur-3xl

            opacity-0

            group-hover:opacity-100

            transition-opacity
            duration-500
          "
        />

        {/* Icon */}

        <div
          className="
            relative
            z-10

            h-14
            w-14

            rounded-2xl

            bg-orange-100
            dark:bg-orange-500/20

            flex
            items-center
            justify-center

            text-[#d97706]
            dark:text-orange-300

            shadow-sm
          "
        >
          {icon}
        </div>

        {/* Content */}

        <h3
          className="
            mt-5

            font-bold
            text-lg

            text-slate-800
            dark:text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm

            text-slate-500
            dark:text-slate-400

            mt-2

            leading-relaxed
          "
        >
          {desc}
        </p>

        {/* CTA */}

        <div
          className="
            mt-5

            inline-flex
            items-center
            gap-2

            text-sm
            font-bold

            text-orange-600
            dark:text-orange-300
          "
        >
          Explore →
        </div>

        {/* Hover Line */}

        <div
          className="
            mt-5

            h-[3px]
            w-0

            bg-gradient-to-r
            from-[#d97706]
            to-[#f97316]

            group-hover:w-full

            transition-all
            duration-500

            rounded-full
          "
        />

      </div>
    </Link>
  );
}