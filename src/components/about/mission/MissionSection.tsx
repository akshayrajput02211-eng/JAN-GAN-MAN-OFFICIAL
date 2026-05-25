"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, HeartHandshake } from "lucide-react";

const values = [
  {
    title: "Accessible",
    desc: "Har vyakti tak digital seva pahuchana hamara lakshya hai.",
    icon: Globe2,
  },
  {
    title: "Trusted",
    desc: "Aapka data aur bharosa dono hamare liye surakshit hain.",
    icon: ShieldCheck,
  },
  {
    title: "Rural First",
    desc: "Technology ko gaon ki zarurat ke hisaab se design kiya gaya hai.",
    icon: HeartHandshake,
  },
];

export default function MissionSection() {
  return (
    <section className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black md:text-5xl">
            Hamara Mission
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Digital Bharat ko sach mein har gaon tak pahuchana.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-[36px] border border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#16a34a]/10 text-[#16a34a]">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}