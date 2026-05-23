"use client";

import Link from "next/link";

const cards = [
  {
    title: "PM Kisan",
    amount: "₹6000",
    color: "bg-green-500",
    slug: "pm-kisan",
  },

  {
    title: "SSC MTS",
    amount: "Apply Now",
    color: "bg-blue-500",
    slug: "ssc-mts",
  },

  {
    title: "Scholarship",
    amount: "2024-25",
    color: "bg-purple-500",
    slug: "scholarship",
  },

  {
    title: "Mudra Loan",
    amount: "8.5%",
    color: "bg-orange-500",
    slug: "mudra-loan",
  },
];

export default function UpdatesSection() {
  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div
          className="
          flex items-center justify-between
          mb-8
          "
        >

          <h2
            className="
            text-3xl
            font-black
            "
          >
            Important Updates
          </h2>

          {/* VIEW ALL CTA */}
          <Link
            href="/sarkari-seva/updates"
            className="
            rounded-2xl

            bg-emerald-50

            px-5 py-3

            text-sm
            font-semibold

            text-emerald-700

            border border-emerald-100

            transition-all duration-300

            hover:bg-emerald-500
            hover:text-white
            hover:border-emerald-500
            "
          >
            Sab Dekhein  →
          </Link>

        </div>

        {/* CARDS */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              glass
              rounded-[30px]
              p-6
              card-hover
              shadow-lg
              "
            >

              {/* ICON */}
              <div
                className={`
                w-14 h-14 rounded-2xl
                ${card.color}
                mb-5
                `}
              />

              {/* TITLE */}
              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {card.title}
              </h3>

              {/* AMOUNT */}
              <p
                className="
                mt-3
                text-slate-600
                "
              >
                {card.amount}
              </p>

              {/* BUTTON */}
              <Link
                href={`/sarkari-seva/updates/${card.slug}`}
                className="
                mt-6

                w-full

                flex items-center justify-center

                py-3

                rounded-2xl

                bg-black
                text-white

                hover:bg-green-600

                transition
                "
              >
                View Details
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}