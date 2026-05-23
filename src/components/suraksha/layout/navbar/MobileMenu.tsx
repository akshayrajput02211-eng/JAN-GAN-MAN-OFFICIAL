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
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <aside
        className={`
        absolute right-0 top-0 h-full w-[85%]
        max-w-sm bg-white p-6 shadow-2xl
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="
            rounded-xl bg-slate-100 p-2
            transition hover:rotate-90
          "
          >
            <X />
          </button>
        </div>

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