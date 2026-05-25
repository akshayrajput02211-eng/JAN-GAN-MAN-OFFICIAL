"use client";

export default function JobAlertSubscribe() {
  return (
    <section className="py-16">

      <div className="max-w-5xl mx-auto px-4">

        <div
          className="
            rounded-[40px]

            bg-gradient-to-r
            from-green-500
            to-emerald-600

            p-10

            text-white
          "
        >

          <h2
            className="
              text-4xl
              font-black
            "
          >
            Naukri Alert Pao WhatsApp Par
          </h2>

          <p className="mt-3 text-lg text-white/80">
            Latest govt job notifications directly on your phone.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <input
              type="text"
              placeholder="Enter WhatsApp Number"
              className="
                h-14
                flex-1

                rounded-2xl

                px-5

                text-slate-900

                outline-none
              "
            />

            <button
              className="
                h-14

                rounded-2xl

                bg-black/20

                px-8

                text-lg
                font-bold

                backdrop-blur-xl

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Subscribe Karo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}