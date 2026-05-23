

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  "Home",
  "Mera Khet",
  "Fasal",
  "Mandi",
  "AI Salah",
  "Schemes",
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -2 }}
        >
          <Link
            href="#"
            className="
            relative text-sm font-semibold text-slate-700
            transition-all duration-300
            hover:text-green-600
            after:absolute after:-bottom-2 after:left-0
            after:h-[2px] after:w-0
            after:bg-green-500
            after:transition-all
            hover:after:w-full
          "
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}