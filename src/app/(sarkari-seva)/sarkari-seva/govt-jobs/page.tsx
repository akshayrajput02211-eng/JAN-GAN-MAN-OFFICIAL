import GovtJobHero from "@/components/sarkari-seva/govt-jobs/GovtJobHero";
import GovtJobList from "@/components/sarkari-seva/govt-jobs/GovtJobList";
import JobAlertSubscribe from "@/components/sarkari-seva/govt-jobs/JobAlertSubscribe";

import { govtJobs } from "@/data/sarkari-seva/govt-jobs";

export default function GovtJobsPage() {
  const upcomingJobs =
    govtJobs.filter((j) => j.upcoming);

  return (
    <main className="min-h-screen bg-[#fff7ed] dark:bg-slate-950">

      <GovtJobHero />

      <GovtJobList />

      <JobAlertSubscribe />

      {/* UPCOMING */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-4">

          <h2
            className="
              text-4xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Aane Wali Notification
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {upcomingJobs.map((job) => (
              <div
                key={job.id}
                className="
                  rounded-[30px]

                  border
                  border-dashed
                  border-orange-300

                  bg-white
                  dark:bg-slate-900

                  p-6
                "
              >

                <h3
                  className="
                    text-2xl
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  {job.department}
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  {job.post}
                </p>

                <div
                  className="
                    mt-5

                    inline-flex

                    rounded-full

                    bg-orange-100

                    px-4
                    py-2

                    text-sm
                    font-bold

                    text-orange-700
                  "
                >
                  Notification Soon
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}