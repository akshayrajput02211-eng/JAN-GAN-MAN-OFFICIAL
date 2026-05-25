"use client";

import KhetList from "@/components/krishi/krishi/khet/KhetList";

export default function MeraKhetPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        dark:bg-[#07111f]

        px-4
        py-6
        pb-32

        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl">
        <KhetList />
      </div>
    </main>
  );
}