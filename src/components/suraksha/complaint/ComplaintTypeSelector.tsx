// ========================================
// FILE: src/components/suraksha/complaint/ComplaintTypeSelector.tsx
// ========================================

"use client";

import { motion } from "framer-motion";

import {
  ShieldAlert,
  Siren,
  CarFront,
  Search,
  BadgeAlert,
  ShieldBan,
  HeartHandshake,
  CircleHelp,
} from "lucide-react";

const categories = [
  {
    id: "theft",
    title: "Theft",
    icon: ShieldAlert,
  },
  {
    id: "harassment",
    title: "Harassment",
    icon: Siren,
  },
  {
    id: "accident",
    title: "Accident",
    icon: CarFront,
  },
  {
    id: "missing",
    title: "Missing Person",
    icon: Search,
  },
  {
    id: "fraud",
    title: "Fraud",
    icon: BadgeAlert,
  },
  {
    id: "eve",
    title: "Eve Teasing",
    icon: ShieldBan,
  },
  {
    id: "domestic",
    title: "Domestic Violence",
    icon: HeartHandshake,
  },
  {
    id: "other",
    title: "Other",
    icon: CircleHelp,
  },
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function ComplaintTypeSelector({
  selected,
  onSelect,
}: Props) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          Complaint Type
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-300">
          Kis cheez ki complaint darj karni hai?
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;

          const active = selected === item.title;

          return (
            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              key={item.id}
              onClick={() => onSelect(item.title)}
              className={`
                relative
                overflow-hidden
                rounded-[30px]
                border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? `
                      border-indigo-500
                      bg-indigo-500/10
                      shadow-[0_0_30px_rgba(99,102,241,0.35)]
                    `
                    : `
                      border-white/50
                      bg-white/70
                      dark:bg-slate-800/70
                    `
                }

                backdrop-blur-xl
              `}
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-500
                  to-purple-500
                  text-white
                  shadow-xl
                "
              >
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
                {item.title}
              </h3>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}