"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export default function NearestCenter() {
  const [search, setSearch] =
    useState("");

  const [showResult, setShowResult] =
    useState(false);

  return (
    <section
      id="nearest-center"
      className="mt-14"
    >
      <div
        className="
          rounded-[40px]
          bg-white/70
          dark:bg-slate-800/70
          backdrop-blur-xl
          border
          border-white/50
          p-7
          shadow-2xl
        "
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Nearest Enrollment Center
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              City ya pincode daal kar nearest center dhundho.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                type="text"
                placeholder="Delhi / 110001"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-700
                  bg-white
                  dark:bg-slate-900
                  px-5
                  py-4
                  outline-none
                  text-slate-900
                  dark:text-white
                "
              />

              <button
                onClick={() =>
                  setShowResult(true)
                }
                className="
                  rounded-2xl
                  bg-[#f6b21a]
                  hover:bg-[#e8a50e]
                  px-6
                  py-4
                  font-bold
                  text-slate-900
                  transition-all
                "
              >
                Dhundho
              </button>
            </div>

            {showResult && (
              <div
                className="
                  mt-7
                  rounded-[28px]
                  bg-slate-100
                  dark:bg-slate-900/60
                  p-5
                "
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  UIDAI Enrollment Center
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="text-[#f6b21a]"
                    />

                    <p className="text-slate-700 dark:text-slate-300">
                      CSC Center, Connaught Place,
                      New Delhi
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Clock
                      size={18}
                      className="text-[#f6b21a]"
                    />

                    <p className="text-slate-700 dark:text-slate-300">
                      9:00 AM - 5:00 PM
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Phone
                      size={18}
                      className="text-[#f6b21a]"
                    />

                    <p className="text-slate-700 dark:text-slate-300">
                      +91 9876543210
                    </p>
                  </div>

                  <div className="text-green-600 font-semibold">
                    Distance: 2.4 KM
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full lg:w-[420px]">
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                h-[320px]
                border
                border-white/40
              "
            >
              <Image
                src="/images/sarkari-seva/map-placeholder.webp"
                alt="map"
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-red-500
                    border-4
                    border-white
                    animate-bounce
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}