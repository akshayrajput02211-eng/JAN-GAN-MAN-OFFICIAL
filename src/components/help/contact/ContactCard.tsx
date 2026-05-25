// ========================================
// FILE: src/components/help/contact/ContactCard.tsx
// ========================================

"use client";

import {
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

interface Props {
  type: "call" | "chat" | "email";
  title: string;
  description: string;
}

export default function ContactCard({
  type,
  title,
  description,
}: Props) {
  const iconMap = {
    call: Phone,
    chat: MessageCircle,
    email: Mail,
  };

  const Icon = iconMap[type];

  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/50
        bg-white/70
        p-8
        backdrop-blur-xl
        transition-all
        hover:-translate-y-2
        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      
      <div
        className="
          flex size-14 items-center justify-center
          rounded-2xl bg-[#16a34a]/10 text-[#16a34a]
        "
      >
        <Icon className="size-7" />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {type === "chat" && (
        <button
          className="
            mt-6
            rounded-2xl
            bg-[#16a34a]
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            hover:scale-105
          "
        >
          Start Chat
        </button>
      )}

    </div>
  );
}