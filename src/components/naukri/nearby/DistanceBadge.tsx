// ========================================
// FILE: src/components/naukri/nearby/DistanceBadge.tsx
// ========================================

"use client";

interface Props {
  distance: string;
}

export default function DistanceBadge({
  distance,
}: Props) {
  return (
    <span
      className="
        rounded-full

        bg-[#7c3aed]

        px-3
        py-1

        text-[11px]
        font-bold

        text-white
      "
    >
      {distance} km door
    </span>
  );
}