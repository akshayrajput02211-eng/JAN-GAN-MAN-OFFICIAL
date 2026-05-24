// ================================
// components/categories/CategorySection.tsx
// ================================

const categories = [
  "Kisan",
  "Mahila",
  "Education",
  "Health",
  "Senior Citizens",
  "Housing",
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="mb-12">

          <div
            className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            bg-white
            dark:bg-slate-700
            text-[#d97706]
            dark:text-orange-300
            text-sm
            font-semibold
            shadow-md
            "
          >
            Government Services
          </div>

          <h2
            className="
            mt-5
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
            dark:text-white
            "
          >
            Popular Categories
          </h2>

          <p
            className="
            mt-4
            max-w-2xl
            text-slate-600
            dark:text-slate-300
            text-lg
            "
          >
            Explore schemes and services category-wise
            for faster access and better guidance.
          </p>

        </div>

        {/* Categories Grid */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >

          {categories.map((item) => (
            <div
              key={item}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-orange-200/60
              dark:border-slate-700/60
              bg-white/80
              dark:bg-slate-900/80
              backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              cursor-pointer
              "
            >

              {/* Glow Effect */}
              <div
                className="
                absolute
                -top-10
                -right-10
                w-32
                h-32
                rounded-full
                bg-orange-300/20
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                relative
                z-10
                w-20
                h-20
                rounded-full
                bg-gradient-to-br
                from-[#d97706]
                to-[#f97316]
                mx-auto
                mb-6
                flex
                items-center
                justify-center
                shadow-xl
                group-hover:scale-110
                transition-transform
                duration-300
                "
              >
                <div className="w-8 h-8 rounded-full bg-white/80" />
              </div>

              {/* Title */}
              <h3
                className="
                relative
                z-10
                font-black
                text-xl
                text-slate-800
                dark:text-white
                "
              >
                {item}
              </h3>

              {/* Subtitle */}
              <p
                className="
                relative
                z-10
                mt-3
                text-sm
                text-slate-500
                dark:text-slate-400
                leading-relaxed
                "
              >
                Explore government schemes and services
                related to {item.toLowerCase()}.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}