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
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 className="
        text-4xl
        font-black
        mb-10
        ">
          Popular Categories
        </h2>

        <div className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-6
        ">

          {categories.map((item) => (
            <div
              key={item}
              className="
              glass
              rounded-[30px]
              p-8
              text-center
              card-hover
              "
            >

              <div className="
              w-20 h-20
              rounded-full
              bg-gradient-to-br
              from-green-300
              to-blue-400
              mx-auto mb-5
              " />

              <h3 className="
              font-bold
              text-lg
              ">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}