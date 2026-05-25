// src/app/(krishi)/krishi/mandi/page.tsx

"use client";

import { motion } from "framer-motion";

import {
  TrendingUp,
  Wheat,
  Tractor,
  MapPin,
  IndianRupee,
  ArrowUpRight,
  Search,
} from "lucide-react";

const mandiData = [
  {
    crop: "Gehu",
    price: "₹2450 / Quintal",
    market: "Delhi Mandi",
    trend: "+4%",
    color: "text-green-600",
  },

  {
    crop: "Chawal",
    price: "₹3100 / Quintal",
    market: "Lucknow Mandi",
    trend: "+2%",
    color: "text-green-600",
  },

  {
    crop: "Makka",
    price: "₹1800 / Quintal",
    market: "Punjab Mandi",
    trend: "-1%",
    color: "text-red-500",
  },

  {
    crop: "Sarso",
    price: "₹5200 / Quintal",
    market: "Haryana Mandi",
    trend: "+6%",
    color: "text-green-600",
  },
];

export default function MandiPage() {
  return (
    <main
      className="
        min-h-screen

        bg-[#f4f8ff]
        dark:bg-[#07111f]

        px-4
        py-6
        pb-32

        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HERO SECTION */}

        <section
          className="
            relative
            overflow-hidden

            rounded-[40px]

            bg-gradient-to-br
            from-[#16a34a]
            via-[#22c55e]
            to-[#065f46]

            p-8

            text-white

            shadow-[0_20px_80px_rgba(22,163,74,0.25)]
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              -right-20
              top-0

              h-72
              w-72

              rounded-full

              bg-white/10

              blur-3xl
            "
          />

          <div
            className="
              absolute
              left-0
              bottom-0

              h-72
              w-72

              rounded-full

              bg-[#bbf7d0]/10

              blur-3xl
            "
          />

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10"
          >
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/20

                px-4
                py-2

                text-sm
                font-semibold

                backdrop-blur-xl
              "
            >
              🌾 Smart Krishi Market
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-6

                max-w-3xl

                text-5xl
                font-black
                leading-tight

                md:text-6xl
              "
            >
              Fasal Bechein
              <span className="block text-[#dcfce7]">
                Sahi Daam Par
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6

                max-w-2xl

                text-lg
                leading-8

                text-green-50
              "
            >
              Real-time mandi bhaav dekho,
              fasal compare karo aur apne
              aas paas ke mandi rates jaano.
            </p>

            {/* SEARCH */}

            <div
              className="
                mt-8

                flex
                items-center
                gap-3

                rounded-2xl

                bg-white/20

                px-5
                py-4

                backdrop-blur-xl
              "
            >
              <Search className="text-white" />

              <input
                placeholder="Fasal search karo..."
                className="
                  w-full

                  bg-transparent

                  outline-none

                  placeholder:text-white/70
                "
              />
            </div>

            {/* STATS */}

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  bg-white/10

                  p-5

                  backdrop-blur-xl
                "
              >
                <TrendingUp className="h-8 w-8 text-white" />

                <h3 className="mt-4 text-3xl font-black">
                  120+
                </h3>

                <p className="mt-2 text-sm text-green-50">
                  Live Mandis
                </p>
              </div>

              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  bg-white/10

                  p-5

                  backdrop-blur-xl
                "
              >
                <Wheat className="h-8 w-8 text-white" />

                <h3 className="mt-4 text-3xl font-black">
                  40+
                </h3>

                <p className="mt-2 text-sm text-green-50">
                  Crops
                </p>
              </div>

              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  bg-white/10

                  p-5

                  backdrop-blur-xl
                "
              >
                <Tractor className="h-8 w-8 text-white" />

                <h3 className="mt-4 text-3xl font-black">
                  10K+
                </h3>

                <p className="mt-2 text-sm text-green-50">
                  Farmers
                </p>
              </div>

              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  bg-white/10

                  p-5

                  backdrop-blur-xl
                "
              >
                <IndianRupee className="h-8 w-8 text-white" />

                <h3 className="mt-4 text-3xl font-black">
                  ₹5Cr+
                </h3>

                <p className="mt-2 text-sm text-green-50">
                  Daily Trade
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MARKET SECTION */}

        <section className="mt-10">
          {/* HEADER */}

          <div className="flex items-center justify-between">
            <div>
              <h2
                className="
                  text-4xl
                  font-black

                  text-[#10224f]
                  dark:text-white
                "
              >
                Aaj Ka Mandi Bhaav
              </h2>

              <p className="mt-2 text-slate-500">
                Live crop prices aur market updates
              </p>
            </div>

            <button
              className="
                rounded-2xl

                bg-[#16a34a]

                px-5
                py-3

                text-sm
                font-bold
                text-white

                shadow-xl
              "
            >
              Live Refresh
            </button>
          </div>

          {/* MARKET CARDS */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {mandiData.map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[34px]

                  border
                  border-white/40

                  bg-white/70
                  dark:bg-slate-800/70

                  p-6

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  backdrop-blur-2xl
                "
              >
                {/* GLOW */}

                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-32
                    w-32

                    rounded-full

                    bg-[#16a34a]/10

                    blur-3xl
                  "
                />

                {/* TOP */}

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        rounded-3xl

                        bg-[#dcfce7]
                      "
                    >
                      <Wheat className="h-8 w-8 text-[#16a34a]" />
                    </div>

                    <h3
                      className="
                        mt-5

                        text-3xl
                        font-black

                        text-[#10224f]
                        dark:text-white
                      "
                    >
                      {item.crop}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {item.market}
                    </p>
                  </div>

                  <div
                    className={`
                      rounded-full

                      bg-white

                      px-4
                      py-2

                      text-sm
                      font-bold

                      shadow-md

                      ${item.color}
                    `}
                  >
                    {item.trend}
                  </div>
                </div>

                {/* PRICE */}

                <div className="mt-8">
                  <p className="text-sm text-slate-500">
                    Current Price
                  </p>

                  <h2
                    className="
                      mt-2

                      text-4xl
                      font-black

                      text-[#16a34a]
                    "
                  >
                    {item.price}
                  </h2>
                </div>

                {/* FOOTER */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-[#16a34a]"
                    />

                    <span className="text-sm text-slate-500">
                      Nearby Market
                    </span>
                  </div>

                  <button
                    className="
                      flex
                      items-center
                      gap-2

                      rounded-2xl

                      bg-gradient-to-r
                      from-[#16a34a]
                      to-[#22c55e]

                      px-5
                      py-3

                      text-sm
                      font-bold
                      text-white

                      shadow-xl
                    "
                  >
                    Sell Now

                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}