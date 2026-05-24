"use client";

import { X } from "lucide-react";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  "Home",
  "Services",
  "Complaints",
  "Safety Tips",
  "More",
];

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <div
      className={`
        fixed inset-0 z-[100]
        transition-all duration-300
        ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
      `}
    >
      {/* Overlay */}

      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-black/50
          backdrop-blur-sm
        "
      />

      {/* Sidebar */}

      <aside
        className={`
          absolute right-0 top-0
          h-full w-[85%]
          max-w-sm

          border-l border-white/60

          bg-white/70

          p-6

          shadow-2xl
          backdrop-blur-2xl

          transition-transform duration-300

          dark:border-slate-700/40
          dark:bg-slate-900/80

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            mb-10
            flex items-center justify-between
          "
        >
          <h2
            className="
              text-2xl font-black
              text-slate-900

              dark:text-white
            "
          >
            Menu
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-xl

              border border-white/60

              bg-white

              p-2

              transition-all duration-300

              hover:rotate-90
              hover:bg-slate-100

              dark:border-slate-700/50
              dark:bg-slate-700
              dark:hover:bg-slate-600
              dark:text-white
            "
          >
            <X />
          </button>
        </div>

        {/* Nav Items */}

        <div className="space-y-3">
          {navItems.map((item) => (
            <NavItem
              key={item}
              title={item}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}