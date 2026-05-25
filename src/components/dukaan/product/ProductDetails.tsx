// ========================================
// FILE: src/components/dukaan/product/ProductDetails.tsx
// ========================================

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const details = [
  {
    title: "Description",
    content:
      "Fresh farm vegetables with premium organic quality and natural nutrients.",
  },
  {
    title: "Weight / Size",
    content:
      "1kg pack • Medium size • Freshly packed.",
  },
  {
    title: "Ingredients / Info",
    content:
      "100% natural produce. No artificial colors or preservatives.",
  },
];

export default function ProductDetails() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      className="
        rounded-[34px]
        border border-white/50
        bg-white/80
        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      {details.map((item, index) => {
        const active = open === index;

        return (
          <div
            key={item.title}
            className="
              border-b border-orange-100
              last:border-none
              dark:border-slate-700
            "
          >
            <button
              onClick={() =>
                setOpen(active ? null : index)
              }
              className="
                flex
                w-full
                items-center
                justify-between

                px-5
                py-5
              "
            >
              <span
                className="
                  text-left
                  text-lg
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </span>

              <ChevronDown
                className={`
                  h-5
                  w-5
                  text-[#ea580c]
                  transition-transform
                  duration-300

                  ${active ? "rotate-180" : ""}
                `}
              />
            </button>

            {active && (
              <div className="px-5 pb-5">
                <p
                  className="
                    leading-relaxed
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}