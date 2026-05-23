"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BottomNavItem({
  item,
}: any) {
  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <motion.div
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          group
          flex
          flex-col
          items-center
          gap-1
          text-[#64748b]
        "
      >
        <div
          className="
            flex
            items-center
            justify-center

            w-11
            h-11

            rounded-2xl

            bg-white/80

            shadow-md

            transition-all
            duration-300

            group-hover:bg-[#ecfdf5]
          "
        >
          <Icon className="w-5 h-5" />
        </div>

        <span className="text-[11px] font-semibold">
          {item.label}
        </span>
      </motion.div>
    </Link>
  );
}