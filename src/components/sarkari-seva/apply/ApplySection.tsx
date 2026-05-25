"use client";

import Link from "next/link";

const applyCards = [
  {
    title: "Aadhaar Card",
    subtitle: "New Aadhaar Registration",
    slug: "aadhaar-card",
    color: "from-sky-500 to-blue-600",
  },

  {
    title: "PAN Card",
    subtitle: "Instant PAN Apply",
    slug: "pan-card",
    color: "from-violet-500 to-purple-600",
  },

  {
    title: "Voter ID",
    subtitle: "Election Card Apply",
    slug: "voter-id",
    color: "from-green-500 to-emerald-600",
  },

  {
    title: "Birth Certificate",
    subtitle: "Apply Online Easily",
    slug: "birth-certificate",
    color: "from-orange-500 to-red-500",
  },

  {
    title: "Income Certificate",
    subtitle: "Government Verification",
    slug: "income-certificate",
    color: "from-pink-500 to-rose-500",
  },

  {
    title: "Ration Card",
    subtitle: "Food Security Scheme",
    slug: "ration-card",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function ApplySection() {
  return (
    <section className="py-12 bg-[#fff7ed] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">

          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                bg-white
                dark:bg-slate-800
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-600
                shadow-sm
                mb-4
              "
            >
              Digital Document Services
            </div>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Apply Services
            </h2>

            <p
              className="
                mt-2
                text-slate-600
                dark:text-slate-400
              "
            >
              Important government documents and citizen services.
            </p>
          </div>

          {/* VIEW ALL */}

          <Link
            href="/sarkari-seva/services"
            className="
              w-fit
              rounded-2xl
              bg-orange-500
              hover:bg-orange-600

              px-5
              py-3

              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:scale-105
              shadow-lg
              shadow-orange-500/20
            "
          >
            View All →
          </Link>

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

          {applyCards.map((card) => (
            <Link
              key={card.title}
              href="/sarkari-seva/id-apply"
              className="
                group
                relative
                overflow-hidden

                rounded-[30px]

                bg-white
                dark:bg-slate-800

                border
                border-orange-100
                dark:border-slate-700

                p-6

                shadow-lg

                hover:-translate-y-2
                hover:shadow-2xl

                transition-all
                duration-300
              "
            >

              {/* TOP ICON */}

              <div
                className={`
                  w-16
                  h-16

                  rounded-2xl

                  bg-gradient-to-br
                  ${card.color}

                  shadow-lg
                `}
              />

              {/* TITLE */}

              <h3
                className="
                  mt-5

                  text-2xl
                  font-black

                  text-slate-900
                  dark:text-white
                "
              >
                {card.title}
              </h3>

              {/* SUBTITLE */}

              <p
                className="
                  mt-2

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {card.subtitle}
              </p>

              {/* BUTTON */}

              <div
                className="
                  mt-6

                  inline-flex
                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-r
                  from-orange-500
                  to-red-500

                  px-5
                  py-3

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  group-hover:scale-105
                "
              >
                Apply Now
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}