"use client";

import { motion } from "framer-motion";
import BotAvatar from "../shared/BotAvatar";
import { Message } from "../types/chat";

export default function BotMessage({ msg }: { msg: Message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <BotAvatar />

      <div>
        <div className="rounded-3xl rounded-bl-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-4 shadow-sm">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            {msg.text}
          </p>
        </div>

        <p className="mt-1 ml-2 text-[10px] text-slate-400">
          {msg.time}
        </p>
      </div>
    </motion.div>
  );
}