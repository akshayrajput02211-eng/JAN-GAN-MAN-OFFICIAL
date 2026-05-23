"use client";

import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-[32px] p-10  shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-green-100"
    >
      <h2 className="text-3xl font-black text-slate-900">
        Dukaan Dhundo,
        <span className="text-green-600 block">Order Karo</span>
      </h2>

      <div className="mt-8 space-y-5">
        <input
          placeholder="Location"
          className="w-full h-14 rounded-2xl border px-5 outline-none"
        />

        <select className="w-full h-14 rounded-2xl border px-5 outline-none">
          <option>Kirana</option>
          <option>Dawaai</option>
        </select>

        <button className="w-full h-14 rounded-2xl bg-green-600 text-white font-bold text-lg hover:scale-[1.02] transition">
          Dukaan Dhundo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-green-50 rounded-2xl p-4 text-center">
          <h4 className="font-black text-green-700">5 KM</h4>
          <p className="text-xs text-slate-500">Range</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 text-center">
          <h4 className="font-black text-green-700">COD</h4>
          <p className="text-xs text-slate-500">Payment</p>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 text-center">
          <h4 className="font-black text-green-700">Fast</h4>
          <p className="text-xs text-slate-500">Delivery</p>
        </div>
      </div>
    </motion.div>
  );
}