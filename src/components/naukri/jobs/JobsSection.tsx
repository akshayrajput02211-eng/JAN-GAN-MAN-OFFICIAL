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

        flex
        flex-col
        xl:grid

        gap-8
        xl:gap-10

        xl:grid-cols-[1fr_340px]
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

              text-[#4c1d95]
            "
          >
            Live Career Opportunities Near You
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-sm
              sm:text-base
              lg:text-xl

              leading-relaxed

              text-[#6b5ca5]
            "
          >
            Aapke location ke 5-10 km ke andar verified
            jobs aur career opportunities available hain.
          </p>

          {/* CTA BUTTON */}

          <button
            className="
              mt-6

              rounded-2xl

              bg-gradient-to-r
              from-[#7c3aed]
              to-[#4c1d95]

              px-6
              py-4

              text-sm
              sm:text-base

              font-bold
              text-white

              shadow-[0_12px_35px_rgba(124,58,237,0.35)]

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:shadow-[0_16px_40px_rgba(124,58,237,0.45)]
            "
          >
            Apne Liye Saare Jobs Dekhe...
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
          hidden
          xl:block

          space-y-6
          lg:space-y-8

          xl:sticky
          xl:top-28

          h-fit
        "
      >
        {/* FILTER */}

        <div
          className="
            rounded-3xl
            border
            border-[#ddd6fe]

            bg-[#f5f3ff]

            p-1
          "
        >
          <FilterSidebar />
        </div>

        {/* STATUS */}

        <div
          className="
            rounded-3xl
            border
            border-[#ddd6fe]

            bg-[#f5f3ff]

            p-1
          "
        >
          <JobStatusCard />
        </div>
      </div>
    </section>
  );
}