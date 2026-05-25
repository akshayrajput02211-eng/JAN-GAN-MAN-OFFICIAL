// ========================================
// FILE: src/components/help/feedback/FeedbackSuccess.tsx
// ========================================

"use client";

import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

interface Props {
  onReset?: () => void;
}

export default function FeedbackSuccess({
  onReset,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/50
        bg-white/70
        p-10
        text-center
        shadow-2xl
        backdrop-blur-xl
        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(22,163,74,0.14),transparent_60%)]
        "
      />

      <div className="relative">
        
        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
          }}
          className="
            mx-auto
            flex
            size-20
            items-center
            justify-center
            rounded-full
            bg-[#16a34a]/10
            text-[#16a34a]
          "
        >
          <CheckCircle2 className="size-10" />
        </motion.div>

        <h3 className="mt-7 text-3xl font-black tracking-tight">
          Dhanyavaad 🙏
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
          Aapka feedback successfully submit ho gaya hai.
          JAN GAN MAN ko aur behtar banane mein aapka
          yogdaan bahut mahatvapurn hai.
        </p>

        {onReset && (
          <button
            onClick={onReset}
            className="
              mt-8
              rounded-2xl
              bg-[#16a34a]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
            "
          >
            Aur Feedback Dein
          </button>
        )}

      </div>

    </motion.div>
  );
}