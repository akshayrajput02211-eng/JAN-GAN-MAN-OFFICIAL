"use client";

import { motion } from "framer-motion";

export default function CategoryCard({
  title,
}: {
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      className="bg-white rounded-[28px] p-6 text-center shadow-sm border border-slate-100 cursor-pointer"
    >
      <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-4" />

      <h4 className="font-bold text-slate-800">
        {title}
      </h4>
    </motion.div>
  );
}