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
    <Link
      href={href}
      className="group block h-full"
    >
      <motion.article
        whileHover={{
          y: -6,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[30px]

          border
          border-black/5
          dark:border-white/10

          bg-white
          dark:bg-[#0f172a]

          shadow-[0_10px_40px_rgba(0,0,0,0.06)]

          transition-all
          duration-300

          hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
          "
        >
          <Image
            src={image || "/image/hero/service/ai.png"}
            alt={title}
            fill
            quality={85}
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-700

              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/75
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
            "
          >
            <h3
              className="
                text-xl
                sm:text-2xl

                font-black
                tracking-tight

                text-white
              "
            >
              {title}
            </h3>
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-between

            p-5
            sm:p-6
          "
        >
          <p
            className="
              text-sm
              sm:text-[15px]

              leading-7

              text-slate-600
              dark:text-slate-300
            "
          >
            {description}
          </p>

          <div
            className="
              mt-6

              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                rounded-full

                bg-green-50
                dark:bg-green-500/10

                px-4
                py-2

                text-xs
                sm:text-sm

                font-semibold

                text-green-700
                dark:text-green-400
              "
            >
              Explore Service
            </span>

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#16a34a]
                to-[#22c55e]

                text-white
              "
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}