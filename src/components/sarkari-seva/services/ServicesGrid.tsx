// ================================
// components/services/ServicesGrid.tsx
// ================================

const services = [
  "Sarkari Yojna",
  "Jobs & Exams",
  "Complaint Portal",
  "Banking",
  "Document Locker",
];

export default function ServicesGrid() {
  return (
    <section className="py-14 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="mb-10">

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
            Digital Government Platform
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
            Humari Sevaein
          </h2>

          <p
            className="
            mt-4
            max-w-2xl
            text-slate-600
            dark:text-slate-300
            text-lg
            leading-relaxed
            "
          >
            Sarkari services ko modern digital experience
            ke saath ek jagah access karein.
          </p>

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

          {services.map((service) => (
            <div
              key={service}
              className="
              group
              relative
              overflow-hidden
              bg-white
              dark:bg-slate-800
              border
              border-orange-100
              dark:border-slate-700
              rounded-[30px]
              p-8
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
                className="
                relative
                z-10
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-[#d97706]
                to-[#f97316]
                mb-6
                shadow-lg
                group-hover:scale-110
                transition-transform
                duration-300
                "
              />

              {/* TITLE */}
              <h3
                className="
                relative
                z-10
                text-2xl
                font-black
                text-slate-900
                dark:text-white
                mb-5
                "
              >
                {service}
              </h3>

              {/* LIST */}
              <ul
                className="
                relative
                z-10
                space-y-3
                text-slate-600
                dark:text-slate-300
                "
              >

                <li className="flex items-center gap-2">
                  <span className="text-[#d97706]">
                    •
                  </span>
                  Fast Access
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">
                    •
                  </span>
                  Digital Service
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#d97706]">
                    •
                  </span>
                  AI Support
                </li>

              </ul>

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