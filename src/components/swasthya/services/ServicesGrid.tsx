// ========================================
// FILE: src/components/swasthya/home/ServicesGrid.tsx
// ========================================

"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Lab Tests",
    subtitle: "Book Tests",
    icon: "/assets/swasthya/icons/lab.png",
    gradient: "from-cyan-500 to-blue-500",
    href: "/swasthya/lab",
  },

  {
    title: "Health Records",
    subtitle: "Reports & History",
    icon: "/assets/swasthya/icons/report.png",
    gradient: "from-violet-500 to-purple-500",
    href: "/swasthya/records",
  },

  {
    title: "Women Care",
    subtitle: "Care & Support",
    icon: "/assets/swasthya/icons/women.png",
    gradient: "from-pink-500 to-rose-500",
    href: "/swasthya/women-care",
  },

  {
    title: "Fitness",
    subtitle: "Stay Fit",
    icon: "/assets/swasthya/icons/fitness.png",
    gradient: "from-green-500 to-emerald-500",
    href: "/swasthya/fitness",
  },
];

export default function ServicesGrid() {
  return (
    <section>
      {/* ================= HEADING ================= */}

      <div className="mb-7">
        <h2
          className="
            text-3xl
            font-black

            tracking-tight

            text-slate-900
            dark:text-white
          "
        >
          Popular Services
        </h2>

        <p
          className="
            mt-2

            text-sm
            font-medium

            text-slate-500
            dark:text-slate-300
          "
        >
          Smart healthcare services for everyone
        </p>
      </div>

      {/* ================= GRID ================= */}

      <div
        className="
          grid
          gap-5

          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}