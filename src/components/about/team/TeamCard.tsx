"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface Props {
  name: string;
  role: string;
  image: string;
  twitter: string;
  linkedin: string;
}

export default function TeamCard({
  name,
  role,
  image,
  twitter,
  linkedin,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[36px] border border-white/50 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70"
    >
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-[#16a34a]/20">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold">{name}</h3>

      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {role}
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
      
      </div>
    </motion.div>
  );
}