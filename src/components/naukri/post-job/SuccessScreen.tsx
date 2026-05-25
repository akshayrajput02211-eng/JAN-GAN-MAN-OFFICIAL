// ========================================
// FILE: src/components/naukri/post-job/SuccessScreen.tsx
// ========================================

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  jobId: string;
}

export default function SuccessScreen({ jobId }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#07111f]/90 backdrop-blur-xl"
    >
      <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white p-10 text-center shadow-2xl dark:bg-slate-900">
        {/* CONFETTI */}

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 500,
                opacity: 1,
                rotate: 360,
              }}
              transition={{
                duration: 3,
                delay: i * 0.08,
                repeat: Infinity,
              }}
              className="absolute h-3 w-3 rounded-full bg-[#7c3aed]"
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          className="relative z-10"
        >
          <CheckCircle2 className="mx-auto h-24 w-24 text-green-500" />

          <h2 className="mt-6 text-4xl font-black text-slate-900 dark:text-white">
            Job Successfully Posted!
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Aapka job ab workers ko dikh raha hai.
          </p>

          <div className="mt-6 rounded-2xl bg-[#7c3aed]/10 px-6 py-4 text-lg font-bold text-[#7c3aed]">
            Job ID: {jobId}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}