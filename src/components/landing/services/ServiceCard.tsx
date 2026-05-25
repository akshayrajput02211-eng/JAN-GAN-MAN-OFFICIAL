"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
}: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          relative
          overflow-hidden

          rounded-[36px]

          border
          border-white/50

          bg-white/70
          dark:bg-slate-800/70

          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]

          transition-all
          duration-500
        "
      >
        {/* GRADIENT GLOW */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-[#3558ff]/10
            via-[#9333ea]/5
            to-[#16a34a]/10

            opacity-0
            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        {/* TOP GLOW */}

        <div
          className="
            absolute
            -top-20
            right-0

            h-40
            w-40

            rounded-full

            bg-[#3558ff]/20

            blur-3xl
          "
        />

        {/* IMAGE */}

        {image ? (
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="
                object-cover

                transition-transform
                duration-700

                group-hover:scale-110
              "
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/50
                via-black/10
                to-transparent
              "
            />
          </div>
        ) : (
          <div
            className="
              flex
              h-52
              items-center
              justify-center

              bg-gradient-to-br
              from-[#eef2ff]
              via-[#f5f3ff]
              to-[#ecfeff]

              dark:from-slate-700
              dark:via-slate-800
              dark:to-slate-900
            "
          >
            <span
              className="
                text-lg
                font-bold
                text-slate-400
              "
            >
              No Image
            </span>
          </div>
        )}

        {/* CONTENT */}

        <div className="relative z-10 p-6">
          {/* TITLE + BUTTON */}

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="
                  text-2xl
                  font-black

                  text-[#10224f]
                  dark:text-white

                  transition-colors
                  duration-300

                  group-hover:text-[#3558ff]
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {description}
              </p>
            </div>

            {/* ARROW */}

            <motion.div
              whileHover={{
                rotate: 12,
                scale: 1.1,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#3558ff]
                to-[#6c63ff]

                text-white

                shadow-lg
                shadow-blue-500/30
              "
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>

          {/* BOTTOM TAG */}

          <div className="mt-6 flex items-center justify-between">
            <span
              className="
                rounded-full

                bg-[#3558ff]/10

                px-4
                py-2

                text-xs
                font-bold

                text-[#3558ff]
              "
            >
              Explore Service
            </span>

            <div
              className="
                h-2
                w-2
                rounded-full

                bg-green-500

                shadow-[0_0_15px_rgba(34,197,94,0.9)]
              "
            />
          </div>
        </div>

        {/* BOTTOM BORDER GLOW */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-1
            w-0

            bg-gradient-to-r
            from-[#3558ff]
            via-[#9333ea]
            to-[#16a34a]

            transition-all
            duration-500

            group-hover:w-full
          "
        />
      </motion.div>
    </Link>
  );
}