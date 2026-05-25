// ========================================
// FILE: src/components/suraksha/home/EmergencyGrid.tsx
// ========================================

"use client";

import {
  Ambulance,
  Flame,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

interface EmergencyItem {
  title: string;
  number: string;
  href: string;
  color: string;
  icon: any;
}

const emergencyItems: EmergencyItem[] = [
  {
    title: "Police",
    number: "100",
    href: "tel:100",
    color: "from-indigo-600 to-indigo-500",
    icon: ShieldAlert,
  },

  {
    title: "Ambulance",
    number: "108",
    href: "tel:108",
    color: "from-red-600 to-rose-500",
    icon: Ambulance,
  },

  {
    title: "Women Helpline",
    number: "1091",
    href: "tel:1091",
    color: "from-pink-600 to-rose-500",
    icon: PhoneCall,
  },

  {
    title: "Fire",
    number: "101",
    href: "tel:101",
    color: "from-orange-500 to-red-500",
    icon: Flame,
  },
];

export default function EmergencyGrid() {
  return (
    <div className="grid flex-1 gap-4 sm:grid-cols-2">
      {emergencyItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.title}
            href={item.href}
            className="
              group

              relative
              overflow-hidden

              rounded-[28px]

              border border-white/20

              bg-white/10

              p-5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:scale-[1.02]
            "
          >
            {/* GLOW */}

            <div
              className={`
                absolute
                inset-0

                bg-gradient-to-br ${item.color}

                opacity-0

                transition-all
                duration-300

                group-hover:opacity-20
              `}
            />

            <div className="relative z-10">
              {/* ICON */}

              <div
                className={`
                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br ${item.color}

                  text-white

                  shadow-lg
                `}
              >
                <Icon className="h-7 w-7" />
              </div>

              {/* TEXT */}

              <h3
                className="
                  mt-5

                  text-lg
                  font-black

                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3

                  text-5xl
                  font-black

                  tracking-tight

                  text-white
                "
              >
                {item.number}
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  font-semibold

                  text-white/70
                "
              >
                Tap to Call
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}