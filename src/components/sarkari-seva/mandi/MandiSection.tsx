// ================================
// components/mandi/MandiSection.tsx
// ================================

export default function MandiSection() {
  return (
    <section className="py-14 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

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
          mb-10
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
              Live Market Prices
            </div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              text-slate-900
              dark:text-white
              "
            >
              Aaj ke Mandi Bhav
            </h2>

          </div>

          <button
            className="
            w-fit
            px-5
            py-3
            rounded-2xl
            bg-white
            dark:bg-slate-800
            border
            border-orange-100
            dark:border-slate-700
            text-[#d97706]
            dark:text-orange-300
            font-bold
            hover:bg-orange-50
            dark:hover:bg-slate-700
            transition-all
            duration-300
            shadow-sm
            hover:scale-105
            "
          >
            View All
          </button>

        </div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-6
          "
        >

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
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
              shadow-sm
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              {/* GLOW EFFECT */}
              <div
                className="
                absolute
                -top-16
                -right-16
                w-40
                h-40
                rounded-full
                bg-orange-300/20
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                "
              />

              {/* IMAGE / TOP */}
              <div
                className="
                relative
                h-40
                bg-gradient-to-br
                from-yellow-200
                via-orange-200
                to-orange-300
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  bg-black/5
                  "
                />

                {/* Decorative Circle */}
                <div
                  className="
                  absolute
                  bottom-4
                  right-4
                  w-16
                  h-16
                  rounded-full
                  bg-white/20
                  backdrop-blur-xl
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-5">

                <h3
                  className="
                  text-xl
                  font-bold
                  text-slate-800
                  dark:text-white
                  "
                >
                  Wheat
                </h3>

                <p
                  className="
                  mt-3
                  text-3xl
                  font-black
                  text-[#d97706]
                  dark:text-orange-300
                  "
                >
                  ₹2400
                </p>

                <div
                  className="
                  mt-3
                  inline-flex
                  items-center
                  px-3
                  py-1.5
                  rounded-full
                  bg-orange-100
                  dark:bg-orange-500/20
                  text-[#f97316]
                  dark:text-orange-300
                  text-sm
                  font-semibold
                  "
                >
                  +2.5%
                </div>

              </div>

              {/* HOVER LINE */}
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