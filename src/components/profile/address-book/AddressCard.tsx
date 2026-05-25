"use client";

import { MapPin } from "lucide-react";

interface Props {
  label: string;
  address: string;
  defaultAddress?: boolean;
}

export default function AddressCard({
  label,
  address,
  defaultAddress,
}: Props) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-white/50
        bg-white/70
        p-5
        shadow-lg
        backdrop-blur-xl
        dark:bg-slate-800/70
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#3558ff]" />

            <h2 className="font-bold dark:text-white">
              {label}
            </h2>

            {defaultAddress && (
              <span
                className="
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-700
                "
              >
                Default
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}