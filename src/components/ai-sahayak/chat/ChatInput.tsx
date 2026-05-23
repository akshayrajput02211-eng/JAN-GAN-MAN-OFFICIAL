"use client";

import {
  Mic,
  Paperclip,
  SendHorizontal,
  Sparkles,
} from "lucide-react";

interface Props {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({
  input,
  setInput,
  sendMessage,
}: Props) {
  return (
    <div className="fixed bottom-24 left-0 right-0 z-50 px-4">

      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 p-3 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500">
            <Sparkles className="text-white" size={16} />
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Kuch bhi poochiye..."
            className="flex-1 bg-transparent outline-none text-sm dark:text-white"
          />

          <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
            <Paperclip size={16} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
            <Mic size={16} />
          </button>

          <button
            onClick={sendMessage}
            className="flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-4 text-white"
          >
            <span className="hidden sm:block">Send</span>
            <SendHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}