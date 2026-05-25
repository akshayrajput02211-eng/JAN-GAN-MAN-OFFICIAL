"use client";

import Link from "next/link";

import { useState } from "react";

import {
  CheckCircle2,
  Wallet,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

const methods = [
  "Cash on Delivery",
  "UPI",
  "Wallet",
];

export default function PaymentOptions() {
  const [selected, setSelected] =
    useState("Cash on Delivery");

  const [success, setSuccess] =
    useState(false);

  return (
    <>
      <div
        className="
          rounded-[34px]
          border border-white/50

          bg-white/80
          p-6

          shadow-lg
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-slate-800/70
        "
      >
        <h2
          className="
            text-2xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Payment Options
        </h2>

        <div className="mt-6 space-y-4">
          {methods.map((method) => {
            const active =
              selected === method;

            return (
              <button
                key={method}
                onClick={() =>
                  setSelected(method)
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between

                  rounded-[24px]
                  border

                  px-5
                  py-5

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-[#16a34a]
                        bg-green-50
                      `
                      : `
                        border-slate-200
                        bg-white
                        dark:border-slate-700
                        dark:bg-slate-900
                      `
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center

                      rounded-2xl

                      bg-[#16a34a]
                      text-white
                    "
                  >
                    <Wallet className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {method}
                  </span>
                </div>

                {active && (
                  <CheckCircle2 className="h-6 w-6 text-[#16a34a]" />
                )}
              </button>
            );
          })}
        </div>

        {/* PLACE ORDER */}

        <button
          onClick={() =>
            setSuccess(true)
          }
          className="
            mt-8

            w-full

            rounded-[26px]

            bg-gradient-to-r
            from-[#16a34a]
            to-[#15803d]

            px-6
            py-5

            text-lg
            font-black
            text-white

            shadow-xl
            shadow-green-300/30

            transition-all
            duration-300

            hover:-translate-y-1
          "
        >
          Order Lagao
        </button>
      </div>

      {/* SUCCESS MODAL */}

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed inset-0 z-50

              flex items-center justify-center

              bg-black/50
              p-4
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              className="
                w-full max-w-md

                rounded-[36px]

                bg-white
                p-8

                text-center

                shadow-2xl

                dark:bg-slate-900
              "
            >
              <div
                className="
                  mx-auto

                  flex h-24 w-24 items-center justify-center

                  rounded-full

                  bg-green-100
                "
              >
                <CheckCircle2 className="h-12 w-12 text-[#16a34a]" />
              </div>

              <h2
                className="
                  mt-6

                  text-3xl
                  font-black

                  text-slate-900
                  dark:text-white
                "
              >
                Order Successful
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Aapka order successfully place ho gaya hai.
              </p>

              <div
                className="
                  mt-6

                  rounded-2xl

                  bg-slate-50
                  p-4

                  dark:bg-slate-800
                "
              >
                <p className="text-sm text-slate-500">
                  Order ID
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-black
                    text-[#16a34a]
                  "
                >
                  #12345
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  Estimated Delivery:
                  20-25 Minutes
                </p>
              </div>

              {/* TRACK ORDER CTA */}

              <Link href="/dukaan/track/12345">
                <button
                  className="
                    mt-6

                    w-full

                    rounded-2xl

                    bg-[#16a34a]

                    px-6
                    py-4

                    font-bold
                    text-white

                    transition-all
                    duration-300

                    hover:-translate-y-1
                  "
                >
                  Track Order
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}