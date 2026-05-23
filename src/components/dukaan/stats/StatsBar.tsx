"use client";

import Container from "@/components/dukanshared/container/Container";

import {
  Store,
  Users,
  Headphones,
  Truck,
} from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      title: "5000+",
      label: "Dukaan",
      icon: Store,
    },
    {
      title: "2500+",
      label: "Users",
      icon: Users,
    },
    {
      title: "24 Hrs",
      label: "Support",
      icon: Headphones,
    },
    {
      title: "5 KM",
      label: "Delivery",
      icon: Truck,
    },
  ];

  return (
    <section className="pb-20">
      <Container>
        <div
          className="
            grid
            gap-5

            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group

                  rounded-[30px]

                  border
                  border-orange-100
                  dark:border-slate-700/50

                  bg-white
                  dark:bg-slate-800

                  p-7

                  shadow-[0_12px_40px_rgba(234,88,12,0.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-orange-300
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl

                    bg-orange-100
                    dark:bg-orange-950/40

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-orange-700
                      dark:text-orange-400
                    "
                  />
                </div>

                {/* Content */}

                <div className="mt-6">
                  <h3
                    className="
                      text-4xl
                      font-black

                      text-orange-700
                      dark:text-orange-400
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-lg
                      font-semibold

                      text-slate-600
                      dark:text-slate-300
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}