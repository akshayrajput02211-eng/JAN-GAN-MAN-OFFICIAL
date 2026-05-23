// components/layout/navbar/TopTicker.tsx

"use client";

export default function TopTicker() {
  return (
    <div
      className="
      bg-green-50
      border-b
      border-green-100
      py-2
      overflow-hidden
    "
    >
      <div
        className="
        whitespace-nowrap
        animate-marquee
        text-sm
        text-green-700
        font-medium
      "
      >
        Live Update: SSC MTS 2024 form out • PM Kisan 16th Installment •
        Ayushman Registration Open
      </div>
    </div>
  );
}