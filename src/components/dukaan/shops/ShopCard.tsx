"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import shop1 from "@/assets/dukaan/shop-1.png";

export default function ShopCard() {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-[30px] bg-white border border-slate-100 shadow-sm"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={shop1}
          alt="shop"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-xl">
            Sharma Kirana
          </h3>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Open
          </span>
        </div>

        <p className="text-slate-500 mt-2">
          20-25 mins delivery
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Min Order</p>
            <h4 className="text-2xl font-black text-green-700">
              ₹99
            </h4>
          </div>

          <button className="h-12 px-6 rounded-full bg-green-600 text-white font-bold hover:scale-105 transition">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}