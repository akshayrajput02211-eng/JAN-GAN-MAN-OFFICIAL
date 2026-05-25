"use client";

export default function KhetStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        className="
          rounded-[28px]
          bg-gradient-to-br
          from-[#16a34a]
          to-[#22c55e]

          p-5
          text-white
          shadow-xl
        "
      >
        <p className="text-sm font-semibold opacity-80">
          Total Area
        </p>

        <h2 className="mt-2 text-3xl font-black">
          14 Acre
        </h2>
      </div>

      <div
        className="
          rounded-[28px]
          bg-white/70
          p-5
          shadow-xl
          backdrop-blur-xl
          dark:bg-slate-800/70
        "
      >
        <p className="text-sm font-semibold text-slate-500">
          Active Crops
        </p>

        <h2 className="mt-2 text-3xl font-black text-[#16a34a]">
          5
        </h2>
      </div>
    </div>
  );
}