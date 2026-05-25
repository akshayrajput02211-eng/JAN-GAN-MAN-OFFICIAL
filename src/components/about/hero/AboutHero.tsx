"use client";

import { motion } from "framer-motion";
import { Users, Landmark, Grid2X2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Users",
  },
  {
    icon: Landmark,
    number: "1000+",
    label: "Villages",
  },
  {
    icon: Grid2X2,
    number: "8",
    label: "Services",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/10 via-[#f6b21a]/10 to-[#9333ea]/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/50 bg-white/70 px-5 py-2 text-sm font-medium backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70">
            🇮🇳 JAN GAN MAN
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Bharat Ka Apna
            <span className="block bg-gradient-to-r from-[#16a34a] to-[#f6b21a] bg-clip-text text-transparent">
              Digital Saathi
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Har gaon tak technology pahucha rahe hain — ek aisa platform jo
            rozmarra ki zarurat ko digital simplicity ke saath jodta hai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16a34a]/10 text-[#16a34a]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-4xl font-black text-slate-900 dark:text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}