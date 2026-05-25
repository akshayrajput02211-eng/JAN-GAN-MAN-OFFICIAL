// ========================================
// FILE: src/components/suraksha/emergency/QuickShare.tsx
// ========================================

"use client";

import { MessageCircle } from "lucide-react";

const contacts = [
  {
    name: "Papa",
    number: "+91 9876543210",
  },

  {
    name: "Mummy",
    number: "+91 9876500000",
  },

  {
    name: "Bhai",
    number: "+91 9811100000",
  },
];

export default function QuickShare() {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Apno ko alert karo
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-300">
            Trusted contacts ko instantly notify karo
          </p>
        </div>
      </div>

      <div className="mt-7 space-y-4">
        {contacts.map((item) => (
          <div
            key={item.number}
            className="
              flex
              items-center
              justify-between

              rounded-[28px]

              border border-white/50

              bg-white/70
              dark:bg-slate-800/70

              p-5

              backdrop-blur-xl
            "
          >
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {item.name}
              </h3>

              <p className="mt-1 text-slate-500">
                {item.number}
              </p>
            </div>

            <a
              href={`https://wa.me/${item.number.replace(/\D/g, "")}`}
              target="_blank"
              className="
                flex
                items-center
                gap-2

                rounded-2xl

                bg-green-500

                px-5
                py-4

                font-bold
                text-white
              "
            >
              <MessageCircle className="h-5 w-5" />

              Share
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}