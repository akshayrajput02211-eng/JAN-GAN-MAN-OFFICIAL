// ========================================
// FILE: src/components/dukaan/post-shop/SuccessModal.tsx
// ========================================

"use client";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  CheckCircle2,
  Store,
} from "lucide-react";

interface SuccessModalProps {
  open: boolean;

  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {open && (
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
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              y: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="
              relative

              w-full
              max-w-md

              overflow-hidden

              rounded-[40px]

              border border-orange-100

              bg-white
              dark:border-slate-700
              dark:bg-slate-900

              p-8

              shadow-[0_20px_80px_rgba(234,88,12,0.18)]
            "
          >
            {/* TOP GLOW */}

            <div
              className="
                absolute
                inset-x-0
                top-0

                h-40

                bg-gradient-to-b
                from-orange-100/70
                to-transparent

                dark:from-orange-950/30
              "
            />

            {/* SUCCESS ICON */}

            <div
              className="
                relative

                mx-auto

                flex
                h-28
                w-28
                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-orange-500
                to-orange-700

                shadow-[0_20px_50px_rgba(234,88,12,0.35)]
              "
            >
              <CheckCircle2 className="h-14 w-14 text-white" />

              {/* PULSE */}

              <span
                className="
                  absolute

                  h-full
                  w-full

                  animate-ping

                  rounded-full

                  bg-orange-400/40
                "
              />
            </div>

            {/* CONTENT */}

            <div className="relative mt-8 text-center">
              <h2
                className="
                  text-4xl
                  font-black
                  leading-tight

                  text-slate-900
                  dark:text-white
                "
              >
                Dukaan Submitted 🎉
              </h2>

              <p
                className="
                  mt-4
                  leading-relaxed

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Aapki dukaan successfully submit ho gayi hai.
                Verification ke baad yeh nearby customers ko
                visible ho jayegi.
              </p>

              {/* INFO CARD */}

              <div
                className="
                  mt-7

                  rounded-[28px]

                  border
                  border-orange-100

                  bg-orange-50/70
                  dark:border-slate-700
                  dark:bg-slate-800

                  p-5
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-orange-600

                      text-white
                    "
                  >
                    <Store className="h-7 w-7" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Shop ID
                    </p>

                    <h3
                      className="
                        mt-1

                        text-xl
                        font-black

                        text-orange-700
                        dark:text-orange-400
                      "
                    >
                      #SHOP2026
                    </h3>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}

              <div className="mt-8 space-y-3">
                <Link href="/dukaan/nearby">
                  <button
                    className="
                      flex
                      h-14
                      w-full
                      items-center
                      justify-center

                      rounded-2xl

                      bg-gradient-to-r
                      from-orange-600
                      to-orange-700

                      text-lg
                      font-black
                      text-white

                      shadow-lg
                      shadow-orange-300/30

                      transition-all
                      duration-300

                      hover:-translate-y-1
                    "
                  >
                    Nearby Dukaan Dekho
                  </button>
                </Link>

                <button
                  onClick={onClose}
                  className="
                    h-14
                    w-full

                    rounded-2xl

                    border
                    border-orange-200

                    bg-orange-50

                    font-bold

                    text-orange-700

                    transition-all
                    duration-300

                    hover:bg-orange-100

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-orange-400
                  "
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}