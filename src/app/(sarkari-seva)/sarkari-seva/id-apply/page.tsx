"use client";

import Link from "next/link";

const services = [
  {
    title: "Aadhaar Card",
    slug: "aadhaar-card",
  },

  {
    title: "PAN Card",
    slug: "pan-card",
  },

  {
    title: "Voter ID",
    slug: "voter-id",
  },

  {
    title: "Birth Certificate",
    slug: "birth-certificate",
  },

  {
    title: "Income Certificate",
    slug: "income-certificate",
  },

  {
    title: "Ration Card",
    slug: "ration-card",
  },
];

export default function IdApplyPage() {
  return (
    <main className="min-h-screen bg-[#fff7ed] dark:bg-slate-950 px-4 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <h1
            className="
              text-4xl
              md:text-5xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            ID Apply Services
          </h1>

          <p
            className="
              mt-3
              text-slate-600
              dark:text-slate-400
            "
          >
            Government document application services.
          </p>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/sarkari-seva/id-apply/${service.slug}`}
              className="
                group

                rounded-[30px]

                bg-white
                dark:bg-slate-900

                border
                border-orange-100
                dark:border-slate-800

                p-6

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-gradient-to-br
                  from-orange-500
                  to-red-500
                "
              />

              <h2
                className="
                  mt-5

                  text-2xl
                  font-black

                  text-slate-900
                  dark:text-white
                "
              >
                {service.title}
              </h2>

              <div
                className="
                  mt-6

                  inline-flex

                  rounded-2xl

                  bg-orange-500

                  px-5
                  py-3

                  font-semibold
                  text-white
                "
              >
                Apply Now
              </div>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}