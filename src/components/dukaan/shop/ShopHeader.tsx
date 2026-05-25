// ========================================
// FILE: src/components/dukaan/shop/ShopHeader.tsx
// ========================================

"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Clock3,
  Search,
  Star,
  Truck,
  X,
} from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopHeader() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
          alt="shop"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        {/* TOP BUTTONS */}
        <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between p-4">
          <button
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl bg-white/90 shadow-lg backdrop-blur-xl
            "
          >
            <ArrowLeft className="h-5 w-5 text-slate-900" />
          </button>

          <button
            onClick={() => setOpenSearch(true)}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl bg-white/90 shadow-lg backdrop-blur-xl
            "
          >
            <Search className="h-5 w-5 text-slate-900" />
          </button>
        </div>

        {/* SHOP INFO */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-5">
          <div className="flex items-end gap-4">
            <div
              className="
                relative h-24 w-24 overflow-hidden
                rounded-[28px] border-4 border-white shadow-2xl
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=600&auto=format&fit=crop"
                alt="logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="pb-2 text-white">
              <h1 className="text-3xl font-black">
                Sharma Kirana Store
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock3 className="h-4 w-4" />
                  <span>Open 9AM - 9PM</span>
                </div>

                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>20 mins delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {openSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/60 backdrop-blur-sm
            "
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="
                mx-auto mt-10 max-w-2xl px-4
              "
            >
              <div
                className="
                  flex items-center gap-3
                  rounded-[28px]
                  bg-white p-4 shadow-2xl
                "
              >
                <Search className="h-5 w-5 text-slate-500" />

                <input
                  type="text"
                  placeholder="Dukaan mein search karo..."
                  className="
                    flex-1 bg-transparent outline-none
                    text-slate-800 placeholder:text-slate-400
                  "
                />

                <button onClick={() => setOpenSearch(false)}>
                  <X className="h-5 w-5 text-slate-500" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}