"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  MessageSquareMore,
  Star,
} from "lucide-react";

import shop1 from "@/assets/dukaan/shop-1.png";

export default function ShopCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        w-full
        overflow-hidden
        rounded-[32px]

        border
        border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-800

        shadow-[0_12px_40px_rgba(234,88,12,0.08)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">
        <Image
          src={shop1}
          alt="shop"
          fill
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute inset-0

            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
          "
        />

        {/* RATING */}

        <div
          className="
            absolute
            left-4
            top-4

            flex
            items-center
            gap-1

            rounded-full

            bg-white/90

            px-3
            py-1.5

            text-sm
            font-bold

            text-slate-900

            shadow-md
          "
        >
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          4.8
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        {/* HEADER */}

        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              text-xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Sharma Kirana
          </h3>

          <span
            className="
              rounded-full

              border
              border-orange-200

              bg-orange-100

              px-3
              py-1

              text-sm
              font-bold

              text-orange-700

              dark:border-orange-900/40
              dark:bg-orange-950/40
              dark:text-orange-300
            "
          >
            Open
          </span>
        </div>

        {/* DELIVERY */}

        <p
          className="
            mt-2

            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          20-25 mins delivery
        </p>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between gap-3">
          {/* PRICE */}

          <div>
            <p
              className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              Min Order
            </p>

            <h4
              className="
                mt-1

                text-2xl
                font-black

                text-orange-700
                dark:text-orange-400
              "
            >
              ₹99
            </h4>
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">
            {/* REVIEW CTA */}

            <Link
              href="/dukaan/review/1"
              className="
                flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-orange-200

                bg-orange-50

                px-4

                font-bold

                text-orange-700

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-orange-300
                hover:bg-orange-100

                dark:border-orange-900/40
                dark:bg-orange-950/30
                dark:text-orange-300
              "
            >
              <MessageSquareMore className="h-4 w-4" />

              
            </Link>

            {/* ORDER CTA */}

            <Link
              href="/dukaan/1"
              className="
                flex
                h-12
                items-center
                justify-center

                rounded-full

                bg-gradient-to-r
                from-orange-600
                to-orange-700

                px-6

                font-bold
                text-white

                shadow-lg
                shadow-orange-300/30

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-orange-400/40

                active:scale-[0.98]
              "
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}