// ================================
// components/mandi/MandiSection.tsx
// ================================

export default function MandiSection() {
  return (
    <section className="py-14">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="
        flex items-center justify-between
        mb-8
        ">
          <h2 className="
          text-4xl
          font-black
          ">
            Aaj ke Mandi Bhav
          </h2>

          <button className="
          text-green-600
          font-semibold
          ">
            View All
          </button>
        </div>

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-5
        gap-6
        ">

          {[1,2,3,4,5].map((item) => (
            <div
              key={item}
              className="
              glass
              rounded-[30px]
              overflow-hidden
              card-hover
              "
            >

              <div className="
              h-40
              bg-gradient-to-br
              from-yellow-200
              to-orange-200
              " />

              <div className="p-5">

                <h3 className="
                text-xl
                font-bold
                ">
                  Wheat
                </h3>

                <p className="
                mt-2
                text-3xl
                font-black
                text-green-600
                ">
                  ₹2400
                </p>

                <p className="
                mt-2
                text-sm
                text-green-500
                ">
                  +2.5%
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}