"use client";

import Link from "next/link";

const cards = [
  {
    title: "PM Kisan",
    amount: "₹6000",
    color: "from-[#d97706] to-[#f97316]",
    slug: "pm-kisan",
  },

  {
    title: "SSC MTS",
    amount: "Apply Now",
    color: "from-orange-500 to-amber-500",
    slug: "ssc-mts",
  },

  {
    title: "Scholarship",
    amount: "2024-25",
    color: "from-yellow-500 to-orange-500",
    slug: "scholarship",
  },

  {
    title: "Mudra Loan",
    amount: "8.5%",
    color: "from-amber-500 to-orange-600",
    slug: "mudra-loan",
  },
];

export default function UpdatesSection() {
  return (
    <section className="py-10 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-8
          "
        >

          <div>

            <div
              className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white
              dark:bg-slate-800
              text-[#d97706]
              dark:text-orange-300
              text-sm
              font-semibold
              shadow-sm
              mb-4
              "
            >
              Latest Government Alerts
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
              Important Updates
            </h2>

          </div>

          {/* VIEW ALL CTA */}
          <Link
            href="/sarkari-seva/updates"
            className="
            w-fit
            rounded-2xl
            bg-white
            dark:bg-slate-800
            px-5
            py-3
            text-sm
            font-semibold
            text-[#d97706]
            dark:text-orange-300
            border
            border-orange-100
            dark:border-slate-700
            transition-all
            duration-300
            hover:bg-[#d97706]
            hover:text-white
            hover:border-[#d97706]
            hover:scale-105
            shadow-sm
            "
          >
            Sab Dekhein →
          </Link>

        </div>

        {/* CARDS */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              group
              relative
              overflow-hidden
              bg-white
              dark:bg-slate-800
              rounded-[30px]
              p-6
              border
              border-orange-100
              dark:border-slate-700
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              {/* GLOW */}
              <div
                className="
                absolute
                -top-12
                -right-12
                w-36
                h-36
                rounded-full
                bg-orange-300/20
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                "
              />

              {/* ICON */}
              <div
                className={`
                relative
                z-10
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                ${card.color}
                mb-5
                shadow-lg
                `}
              />

              {/* TITLE */}
              <h3
                className="
                relative
                z-10
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {card.title}
              </h3>

              {/* AMOUNT */}
              <p
                className="
                relative
                z-10
                mt-3
                text-slate-600
                dark:text-slate-300
                font-medium
                "
              >
                {card.amount}
              </p>

              {/* BUTTON */}
              <Link
                href={`/sarkari-seva/updates/${card.slug}`}
                className="
                relative
                z-10
                mt-6
                w-full
                flex
                items-center
                justify-center
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-[#d97706]
                to-[#f97316]
                text-white
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
                shadow-orange-500/20
                "
              >
                View Details
              </Link>

              {/* Bottom Line */}
              <div
                className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                bg-gradient-to-r
                from-[#d97706]
                to-[#f97316]
                group-hover:w-full
                transition-all
                duration-500
                "
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}