"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface Props {
  sections: Section[];
}

export default function LegalSidebar({
  sections,
}: Props) {
  const [activeId, setActiveId] =
    useState("");

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    if (sections.length > 0) {
      setActiveId(sections[0].id);
    }
  }, [sections]);

  useEffect(() => {
    if (!mounted) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element =
        document.getElementById(section.id);

      if (!element) return;

      const observer =
        new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveId(section.id);
            }
          },
          {
            rootMargin:
              "-40% 0px -50% 0px",
            threshold: 0,
          }
        );

      observer.observe(element);

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) =>
        observer.disconnect()
      );
    };
  }, [mounted, sections]);

  const handleScroll = (id: string) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    setActiveId(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside
      className="
        sticky
        top-24
        hidden
        h-fit
        rounded-[28px]
        border
        border-slate-200
        bg-white/80
        p-5
        shadow-sm
        backdrop-blur-xl

        dark:border-slate-800
        dark:bg-slate-900/80

        lg:block
      "
    >
      {/* ================= TITLE ================= */}

      <h3
        className="
          mb-5
          text-sm
          font-black
          uppercase
          tracking-wider
          text-slate-500

          dark:text-slate-400
        "
      >
        Contents
      </h3>

      {/* ================= LINKS ================= */}

      <div className="space-y-2">
        {sections.map((section, index) => {
          const active =
            mounted &&
            activeId === section.id;

          return (
            <button
              key={section.id}
              onClick={() =>
                handleScroll(section.id)
              }
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? `
                      bg-[#16a34a]
                      text-white
                      shadow-lg
                    `
                    : `
                      text-slate-600
                      hover:bg-slate-100

                      dark:text-slate-300
                      dark:hover:bg-slate-800
                    `
                }
              `}
            >
              <span
                className="
                  text-sm
                  font-black
                "
              >
                {(index + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>

              <span
                className="
                  text-sm
                  font-semibold
                "
              >
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}