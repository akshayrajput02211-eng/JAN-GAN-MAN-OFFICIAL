import RecordCard from "./RecordCard";

const records = [
  {
    title: "Prescriptions",
    icon: "💊",
    desc:
      "Access all your digital prescriptions securely anytime.",
  },

  {
    title: "Lab Reports",
    icon: "🧪",
    desc:
      "View blood tests and diagnostic reports instantly.",
  },

  {
    title: "Vaccination",
    icon: "💉",
    desc:
      "Track vaccination records and upcoming schedules.",
  },

  {
    title: "Health Profile",
    icon: "❤️",
    desc:
      "Manage your personal health and medical history.",
  },
];

const quickCards = [
  {
    title: "Consult Doctors",
    desc:
      "Talk to certified doctors anytime with instant appointments.",
    button: "Start Consult",
    color:
      "from-green-500 to-emerald-600",
  },

  {
    title: "Order Medicines",
    desc:
      "Get medicines delivered to your home with easy tracking.",
    button: "Buy Medicines",
    color:
      "from-blue-500 to-cyan-600",
  },

  {
    title: "Book Appointment",
    desc:
      "Schedule clinic visits and health checkups quickly.",
    button: "Book Now",
    color:
      "from-orange-500 to-red-500",
  },
];

export default function HealthRecords() {
  return (
    <section className="space-y-10">
      {/* ================= TITLE ================= */}

      <div>
        <h2
          className="
            text-3xl
            font-black

            text-slate-900
          "
        >
          Your Health Records
        </h2>

        <p
          className="
            mt-2

            text-slate-600
          "
        >
          Securely manage all your medical records
          in one place.
        </p>
      </div>

      {/* ================= RECORDS ================= */}

      <div
        className="
          grid
          gap-5

          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {records.map((record) => (
          <RecordCard
            key={record.title}
            title={record.title}
            icon={record.icon}
            desc={record.desc}
          />
        ))}
      </div>

      {/* ================= CTA CARDS ================= */}

      <div
        className="
          grid
          gap-5

          lg:grid-cols-3
        "
      >
        {quickCards.map((card) => (
          <div
            key={card.title}
            className={`
              relative

              overflow-hidden

              rounded-[30px]

              bg-gradient-to-br
              ${card.color}

              p-7

              text-white

              shadow-[0_15px_50px_rgba(0,0,0,0.08)]

              transition-all
              duration-300

              hover:-translate-y-2
            `}
          >
            {/* BG GLOW */}

            <div
              className="
                absolute
                right-[-50px]
                top-[-50px]

                h-[180px]
                w-[180px]

                rounded-full

                bg-white/10

                blur-3xl
              "
            />

            <div className="relative z-10">
              <h3
                className="
                  text-2xl
                  font-black
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-3

                  max-w-sm

                  text-sm
                  leading-7

                  text-white/80
                "
              >
                {card.desc}
              </p>

              <button
                className="
                  mt-7

                  rounded-2xl

                  bg-white

                  px-5
                  py-3

                  text-sm
                  font-semibold

                  text-slate-900

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}