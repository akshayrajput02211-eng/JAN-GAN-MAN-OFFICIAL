// ========================================
// FILE: src/components/help/hero/HelpHero.tsx
// ========================================

"use client";

import { Search } from "lucide-react";

const searches = [
  "Naukri",
  "Payment",
  "OTP",
  "KYC",
  "Account",
  "Krishi",
  "Scholarship",
];

export default function HelpHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-28 lg:px-8">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,163,74,0.15),transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl">
        
        <div
          className="
            rounded-[42px]
            border
            border-white/50
            bg-white/70
            p-8
            shadow-2xl
            backdrop-blur-xl
            dark:border-slate-700/50
            dark:bg-slate-800/70
            md:p-14
          "
        >
          
          <div className="text-center">
            
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Hum kaise madad kar sakte hain?
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              JAN GAN MAN Help Center mein aapko har service ki jaankari,
              support aur solutions milenge.
            </p>

          </div>

          <div className="relative mt-10">
            
            <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search help articles, FAQs, issues..."
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-white/50
                bg-white
                pl-14
                pr-5
                text-lg
                outline-none
                transition-all
                focus:border-[#16a34a]
                dark:border-slate-700
                dark:bg-slate-900
              "
            />

          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            
            {searches.map((item) => (
              <button
                key={item}
                className="
                  rounded-full
                  border
                  border-white/50
                  bg-white/80
                  px-5
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  hover:scale-105
                  hover:bg-[#16a34a]
                  hover:text-white
                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}