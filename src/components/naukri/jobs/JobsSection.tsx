import { jobs } from "@/data/jobs";

import FilterSidebar from "./FilterSidebar";
import JobCard from "./JobCard";
import JobStatusCard from "./JobStatusCard";

export default function JobsSection() {
  return (
    <section
      className="
        mt-10
        lg:mt-14

        grid
        gap-8
        xl:gap-10

        xl:grid-cols-[minmax(0,1fr)_340px]
      "
    >
      {/* ================= LEFT SIDE ================= */}

      <div className="min-w-0">
        {/* HEADING */}

        <div className="mb-8 lg:mb-10">
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl

              font-black

              leading-tight

              text-[#1b2452]
            "
          >
            Live Jobs Near You
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-sm
              sm:text-base
              lg:text-xl

              leading-relaxed

              text-gray-500
            "
          >
            Aapke location ke 5-10 km ke andar nearby
            verified jobs available hain.
          </p>

          {/* CTA BUTTON */}

          <button
            className="
              mt-6

              rounded-2xl

              bg-gradient-to-r
              from-[#2563eb]
              to-[#3b82f6]

              px-6
              py-4

              text-sm
              sm:text-base

              font-bold
              text-white

              shadow-[0_10px_30px_rgba(37,99,235,0.35)]

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
             Apne Liye Saare Job Dekhe...
          </button>
        </div>

        {/* JOB LIST */}

        <div
          className="
            space-y-5
            lg:space-y-7
          "
        >
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
            />
          ))}
        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}

      <div
        className="
          space-y-6
          lg:space-y-8

          xl:sticky
          xl:top-28

          h-fit
        "
      >
        {/* FILTER */}

        <FilterSidebar />

        {/* STATUS */}

        <JobStatusCard />
      </div>
    </section>
  );
}