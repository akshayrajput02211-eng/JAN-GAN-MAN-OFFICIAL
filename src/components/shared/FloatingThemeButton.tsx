"use client";

import ThemeToggle from "./ThemeToggle";

export default function FloatingThemeButton() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5

        z-[999]
      "
    >
      <ThemeToggle />
    </div>
  );
}