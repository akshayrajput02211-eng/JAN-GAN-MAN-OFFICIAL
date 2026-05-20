import { jobs } from "@/data/jobs";
import FilterSidebar from "./FilterSidebar";
import JobCard from "./JobCard";
import JobStatusCard from "./JobStatusCard";
import ServiceSidebar from "@/components/naukri/shared/service-sidebar/ServiceSidebar";

export default function JobsSection() {
  return (
    <section
      className="
        mt-10

        grid
        gap-8

        xl:grid-cols-[1fr_280px_340px]
      "
    >
      {/* LEFT */}
      <div className="min-w-0">
        {/* HEADING */}
        <div className="mb-8">
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

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

              text-sm
              sm:text-base
              lg:text-lg

              text-gray-500
            "
          >
            Aapke location ke 5-10 km ke andar jobs.
          </p>
        </div>

        {/* JOBS */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>

      {/* RIGHT */}
    {/* SERVICES */}
<ServiceSidebar />

{/* FILTER */}
<div
  className="
    space-y-6

    xl:sticky
    xl:top-28

    h-fit
  "
>
  <FilterSidebar />

  <JobStatusCard />
</div>
    </section>
  );
}