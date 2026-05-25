"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="px-4 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex rounded-full border border-[#16a34a]/20 bg-[#16a34a]/10 px-5 py-2 text-sm font-semibold text-[#16a34a]">
            Our Story
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            Jan Gan Man ki Kahani
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-300">
            Bharat ke gaon mein digital divide ko khatam karne ke sapne ke saath
            JAN GAN MAN ki shuruaat hui. Hamara vision simple tha — ek hi app
            mein roz ki har zarurat.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
            Chahe naukri ho, sarkari seva, doctor consultation, ya AI sahayak —
            hum technology ko simple aur bharosemand banana chahte hain.
          </p>

          <div className="mt-10 rounded-[32px] border border-white/50 bg-white/70 p-6 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70">
            <p className="text-lg italic leading-8 text-slate-700 dark:text-slate-200">
              “Hamari technology tab tak successful nahi hai jab tak woh Bharat
              ke sabse chhote gaon tak na pahuch jaye.”
            </p>

            <div className="mt-4">
              <h4 className="font-bold">Founder Note</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                JAN GAN MAN Team
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-r from-[#16a34a]/20 to-[#9333ea]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[42px] border border-white/50 bg-white/70 p-3 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70">
            <Image
              src="/images/about/village-story.webp"
              alt="Village Story"
              width={700}
              height={700}
              className="h-full w-full rounded-[32px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}