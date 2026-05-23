"use client";

import { motion } from "framer-motion";
import BotAvatar from "../shared/BotAvatar";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <BotAvatar />

      <div className="rounded-3xl rounded-bl-md bg-white dark:bg-slate-800 px-5 py-4 shadow-sm">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="h-2 w-2 rounded-full bg-slate-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}