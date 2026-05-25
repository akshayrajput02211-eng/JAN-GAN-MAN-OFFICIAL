"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function SettingsSection({
  title,
  icon,
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        rounded-[36px]
        border
        border-white/50
        bg-white/70
        p-5
        shadow-xl
        backdrop-blur-xl
        dark:border-slate-700
        dark:bg-slate-800/70
        sm:p-6
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-green-100
            text-green-600
            dark:bg-green-500/10
            dark:text-green-400
          "
        >
          {icon}
        </div>

        <h2
          className="
            text-xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
}