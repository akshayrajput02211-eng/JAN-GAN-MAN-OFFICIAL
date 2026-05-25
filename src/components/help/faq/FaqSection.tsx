// ========================================
// FILE: src/components/help/faq/FaqSection.tsx
// ========================================

"use client";

import { useState } from "react";

import {
  Briefcase,
  Store,
 HeartPulse,
  Wheat,
  User,
  CreditCard,
  Landmark,
  Shield,
  Bot,
  GraduationCap,
} from "lucide-react";

import FaqItem from "./FaqItem";

import { faqData } from "@/data/help/faqs";

const categories = [
  {
    id: "naukri",
    label: "Naukri",
    icon: Briefcase,
  },
  {
    id: "dukaan",
    label: "Dukaan",
    icon: Store,
  },
  {
    id: "sarkari-seva",
    label: "Sarkari Seva",
    icon: Landmark,
  },
  {
    id: "swasthya",
    label: "Swasthya",
    icon: HeartPulse,
  },
  {
    id: "shiksha",
    label: "Shiksha",
    icon: GraduationCap,
  },
  {
    id: "krishi",
    label: "Krishi",
    icon: Wheat,
  },
  {
    id: "suraksha",
    label: "Suraksha",
    icon: Shield,
  },
  {
    id: "ai",
    label: "AI Sahayak",
    icon: Bot,
  },
  {
    id: "account",
    label: "Account",
    icon: User,
  },
  {
    id: "payment",
    label: "Payment",
    icon: CreditCard,
  },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] =
    useState("naukri");

  const [openId, setOpenId] =
    useState<number | null>(1);

  return (
    <section className="px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= CATEGORY BUTTONS ================= */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            const active =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(
                    category.id
                  );

                  setOpenId(null);
                }}
                className={`
                  group
                  flex
                  min-w-[170px]
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        border-[#16a34a]
                        bg-[#16a34a]
                        text-white
                        shadow-[0_10px_30px_rgba(22,163,74,0.35)]
                      `
                      : `
                        border-white/40
                        bg-white/70
                        text-slate-700
                        backdrop-blur-xl

                        hover:-translate-y-1
                        hover:border-[#16a34a]/30
                        hover:bg-[#16a34a]/5
                        hover:text-[#16a34a]

                        dark:border-slate-700/50
                        dark:bg-slate-800/70
                        dark:text-slate-300
                        dark:hover:border-[#16a34a]/20
                        dark:hover:bg-slate-700/70
                      `
                  }
                `}
              >
                {/* ================= ICON ================= */}

                <div
                  className={`
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-white/20
                          text-white
                        `
                        : `
                          bg-[#16a34a]/10
                          text-[#16a34a]

                          dark:bg-[#16a34a]/15
                        `
                    }
                  `}
                >
                  <Icon className="size-5" />
                </div>

                {/* ================= LABEL ================= */}

                <span className="whitespace-nowrap">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= FAQ CARD ================= */}

        <div
          className="
            mt-10
            rounded-[32px]
            border
            border-white/50
            bg-white/70
            p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            backdrop-blur-xl

            dark:border-slate-700/50
            dark:bg-slate-800/70
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
          "
        >
          <div className="space-y-4">
            {faqData[activeCategory]?.map(
              (faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  open={openId === faq.id}
                  onToggle={() =>
                    setOpenId(
                      openId === faq.id
                        ? null
                        : faq.id
                    )
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}