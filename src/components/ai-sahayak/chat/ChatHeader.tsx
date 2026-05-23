"use client";

import { Bot, Sparkles } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-5 shadow-sm backdrop-blur-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500">
        <Bot className="text-white" />
      </div>

      <div className="flex-1">
        <h2 className="font-black text-slate-900 dark:text-white">
          AI Sahayak
        </h2>

        <p className="text-xs text-slate-500">
          Online • Smart Assistant
        </p>
      </div>

      <div className="flex items-center gap-1 rounded-full bg-violet-100 dark:bg-violet-900/30 px-3 py-1 text-xs font-bold text-violet-600">
        <Sparkles size={12} />
        AI
      </div>
    </div>
  );
}