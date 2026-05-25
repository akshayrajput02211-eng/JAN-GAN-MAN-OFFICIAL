"use client";

import { useState } from "react";

import GovtJobCard from "./GovtJobCard";

import { govtJobs } from "@/data/sarkari-seva/govt-jobs";

const filters = [
  "All",
  "Railway",
  "Police",
  "Bank",
  "Army",
  "Teaching",
  "Others",
];

export default function GovtJobList() {
  const [active, setActive] =
    useState("All");

  const filteredJobs =
    active === "All"
      ? govtJobs.filter((j) => !j.upcoming)
      : govtJobs.filter(
          (j) =>
            j.category === active &&
            !j.upcoming
        );

  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-4">

        {/* FILTERS */}

        <div className="flex flex-wrap gap-3 mb-10">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() =>
                setActive(item)
              }
              className={`
                rounded-full

                px-5
                py-3

                text-sm
                font-bold

                transition-all
                duration-300

                ${
                  active === item
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white"
                }
              `}
            >
              {item}
            </button>
          ))}

        </div>

        {/* JOBS */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {filteredJobs.map((job) => (
            <GovtJobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </div>
    </section>
  );
}