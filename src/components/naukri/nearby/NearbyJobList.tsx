// ========================================
// FILE: src/components/naukri/nearby/NearbyJobList.tsx
// ========================================

"use client";

import { useState } from "react";

import {
  Briefcase,
  Map,
  List,
  RefreshCcw,
} from "lucide-react";

import DistanceBadge from "./DistanceBadge";

const jobs = [
  {
    id: 1,
    title: "Delivery Boy",
    company: "QuickKart",
    salary: "₹18,000/month",
    distance: "1.2",
    category: "Delivery",
  },

  {
    id: 2,
    title: "Driver",
    company: "City Cab",
    salary: "₹22,000/month",
    distance: "2.5",
    category: "Driving",
  },

  {
    id: 3,
    title: "Security Guard",
    company: "Secure India",
    salary: "₹16,000/month",
    distance: "4.1",
    category: "Security",
  },
];

const categories = [
  "All",
  "Delivery",
  "Driving",
  "Security",
  "Construction",
  "Farming",
];

export default function NearbyJobList() {
  const [mapView, setMapView] = useState(false);

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TOP BAR */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* FILTERS */}

          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`
                  whitespace-nowrap

                  rounded-full

                  px-5
                  py-2

                  text-sm
                  font-bold

                  transition-all

                  ${
                    category === "All"
                      ? "bg-[#7c3aed] text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">
            <button
              className="
                flex
                items-center
                gap-2

                rounded-2xl

                bg-white
                dark:bg-slate-800

                px-5
                py-3

                text-sm
                font-bold
              "
            >
              <RefreshCcw size={16} />
              Refresh
            </button>

            <button
              onClick={() =>
                setMapView(!mapView)
              }
              className="
                flex
                items-center
                gap-2

                rounded-2xl

                bg-[#7c3aed]

                px-5
                py-3

                text-sm
                font-bold

                text-white
              "
            >
              {mapView ? (
                <>
                  <List size={16} />
                  List View
                </>
              ) : (
                <>
                  <Map size={16} />
                  Map View
                </>
              )}
            </button>
          </div>
        </div>

        {/* MAP */}

        {mapView ? (
          <div
            className="
              mt-8

              flex
              h-[500px]

              items-center
              justify-center

              rounded-[36px]

              border
              border-dashed
              border-[#7c3aed]/30

              bg-white/70
              dark:bg-slate-800/70

              text-center

              backdrop-blur-xl
            "
          >
            <div>
              <Map
                size={48}
                className="mx-auto text-[#7c3aed]"
              />

              <h3 className="mt-5 text-2xl font-black">
                Simple Map View
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Nearby jobs map yahan dikhega.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="
                  rounded-[32px]

                  border
                  border-white/50

                  bg-white/70
                  dark:bg-slate-800/70

                  p-6

                  backdrop-blur-xl

                  shadow-[0_10px_40px_rgba(124,58,237,0.08)]
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-2xl

                          bg-[#ede9fe]

                          text-[#7c3aed]
                        "
                      >
                        <Briefcase size={22} />
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-[#18214d] dark:text-white">
                          {job.title}
                        </h3>

                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <DistanceBadge
                        distance={job.distance}
                      />

                      <span
                        className="
                          rounded-full

                          bg-green-100

                          px-3
                          py-1

                          text-xs
                          font-bold

                          text-green-700
                        "
                      >
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <button
                    className="
                      rounded-2xl

                      bg-gradient-to-r
                      from-[#7c3aed]
                      to-[#4c1d95]

                      px-5
                      py-3

                      text-sm
                      font-bold

                      text-white
                    "
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}