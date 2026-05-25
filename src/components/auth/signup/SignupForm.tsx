"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import StepIndicator from "./StepIndicator";

export default function SignupForm() {
  const [step, setStep] = useState(1);

  return (
    <section className="flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-lg rounded-[36px] border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/70">
        
        <StepIndicator step={step} />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-5"
            >
              <h2 className="text-3xl font-black dark:text-white">
                Mobile Verify
              </h2>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <input
                type="text"
                placeholder="OTP"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full rounded-2xl bg-green-600 py-4 font-bold text-white"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-5"
            >
              <h2 className="text-3xl font-black dark:text-white">
                Personal Info
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <select className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                type="date"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <button
                onClick={() => setStep(3)}
                className="w-full rounded-2xl bg-green-600 py-4 font-bold text-white"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="space-y-5"
            >
              <h2 className="text-3xl font-black dark:text-white">
                Location Details
              </h2>

              <select className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white">
                <option>Select State</option>
                <option>Bihar</option>
                <option>Uttar Pradesh</option>
                <option>Delhi</option>
              </select>

              <input
                type="text"
                placeholder="District"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <input
                type="text"
                placeholder="Village Name"
                className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 dark:bg-slate-900/50 dark:text-white"
              />

              <button className="w-full rounded-2xl bg-green-600 py-4 font-bold text-white">
                Account Banao
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          Pehle se account hai?{" "}
          <Link
            href="/login"
            className="font-bold text-green-600 hover:underline"
          >
            Login karo
          </Link>
        </p>
      </div>
    </section>
  );
}