"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Form Select Karo",
    desc: "Choose karo kaunsa ID card apply karna hai.",
  },

  {
    number: "02",
    title: "Documents Ready Rakho",
    desc: "Aadhaar, address proof aur mobile number ready rakho.",
  },

  {
    number: "03",
    title: "Nearest Center Visit Karo",
    desc: "Verification aur biometric process complete karo.",
  },

  {
    number: "04",
    title: "Status Track Karo",
    desc: "Enrollment ID se live application status check karo.",
  },
];

export default function ApplySteps() {
  return (
    <section className="mt-14">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
          Apply Karne Ke Steps
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Simple step-by-step process for ID card application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[32px]
              bg-white/70
              dark:bg-slate-800/70
              backdrop-blur-xl
              border
              border-white/50
              p-6
              shadow-xl
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#f6b21a]
                text-slate-900
                flex
                items-center
                justify-center
                font-black
                text-lg
              "
            >
              {step.number}
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}