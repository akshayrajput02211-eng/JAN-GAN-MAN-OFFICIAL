"use client";

import Image from "next/image";

interface Props {
  title: string;
  module: string;
  date: string;
}

export default function SavedItem({
  title,
  module,
  date,
}: Props) {
  return (
    <div
      className="
        flex
        gap-4
        rounded-[28px]
        border
        border-white/50
        bg-white/70
        p-4
        shadow-lg
        backdrop-blur-xl
        dark:bg-slate-800/70
      "
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
        <Image
          src="/images/dukaan/product.webp"
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold dark:text-white">
              {title}
            </h3>

            <span
              className="
                mt-2
                inline-flex
                rounded-full
                bg-[#3558ff]/10
                px-3
                py-1
                text-xs
                font-semibold
                text-[#3558ff]
              "
            >
              {module}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Saved on {date}
        </p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-[#3558ff] px-4 py-2 text-sm font-semibold text-white">
            Dekho
          </button>

          <button className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}