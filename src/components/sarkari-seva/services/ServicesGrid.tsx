// ========================================
// FILE: components/services/ServicesGrid.tsx
// ========================================

"use client";

import ServiceCard from "./ServiceCard";

import {
  FileText,
  Briefcase,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Sarkari Yojna",
    desc: "Sabhi yojna details",
    icon: <FileText size={26} />,
    href: "/sarkari-seva/yojna",
  },

  {
    title: "Jobs & Exam",
    desc: "Latest Sarkari Naukri Updates",
    icon: <Briefcase size={26} />,
    href: "/sarkari-seva/govt-jobs",
  },

  {
    title: "Banking",
    desc: "Jan dhan & loan services",
    icon: <Landmark size={26} />,
    href: "/sarkari-seva/banking",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="
        py-14

        bg-[#fef3c7]
        dark:bg-slate-950

        transition-colors
        duration-300
      "
    >

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}

        <div className="mb-10">

          <div
            className="
              inline-flex
              items-center

              px-4
              py-2

              rounded-full

              bg-white
              dark:bg-slate-800

              text-[#d97706]
              dark:text-orange-300

              text-sm
              font-semibold

              shadow-sm

              mb-4
            "
          >
            Digital Government Platform
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl

              font-black

              text-slate-900
              dark:text-white
            "
          >
            Humari Sevaein
          </h2>

          <p
            className="
              mt-4

              max-w-2xl

              text-slate-600
              dark:text-slate-300

              text-lg
              leading-relaxed
            "
          >
            Sarkari services ko modern digital experience
            ke saath ek jagah access karein.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
              href={service.href}
            />
          ))}

        </div>

      </div>

    </section>
  );
}