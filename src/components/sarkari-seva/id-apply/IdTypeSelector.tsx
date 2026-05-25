"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  ShieldCheck,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "AADHAAR CARD",
    subtitle: "Aadhaar Banwao / Update Karo",
    color:
      "from-blue-500 to-cyan-500",
    icon: CreditCard,
    steps: [
      "Nearest center dhundho",
      "Documents le jao",
      "Biometric do",
    ],
    button: "Nearest Center Dhundho",
    href: "#nearest-center",
  },

  {
    title: "PAN CARD",
    subtitle: "PAN Card Apply Karo",
    color:
      "from-orange-500 to-amber-500",
    icon: ShieldCheck,
    steps: [
      "Form fill karo",
      "Documents upload karo",
      "Application submit karo",
    ],
    button: "NSDL / UTI Open Karo",
    href: "https://www.onlineservices.nsdl.com",
  },

  {
    title: "VOTER ID",
    subtitle: "Voter ID Apply Karo",
    color:
      "from-green-500 to-emerald-500",
    icon: BadgeCheck,
    steps: [
      "Mobile verify karo",
      "Form fill karo",
      "Address proof upload karo",
    ],
    button: "NVSP Open Karo",
    href: "https://voters.eci.gov.in",
  },
];

export default function IdTypeSelector() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/40
              bg-white/70
              dark:bg-slate-800/70
              backdrop-blur-xl
              p-7
              shadow-2xl
            "
          >
            <div
              className={`
                absolute
                top-0
                right-0
                w-40
                h-40
                rounded-full
                blur-3xl
                opacity-20
                bg-gradient-to-br
                ${card.color}
              `}
            />

            <div
              className={`
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                ${card.color}
                flex
                items-center
                justify-center
                text-white
                shadow-xl
              `}
            >
              <Icon size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
              {card.title}
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {card.subtitle}
            </p>

            <div className="mt-6 space-y-3">
              {card.steps.map((step) => (
                <div
                  key={step}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-slate-100
                    dark:bg-slate-700/50
                    p-3
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-[#f6b21a]" />

                  <p className="text-sm text-slate-700 dark:text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-[#f6b21a]
                hover:bg-[#e7a40f]
                px-5
                py-3
                text-sm
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {card.button}

              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        );
      })}
    </section>
  );
}