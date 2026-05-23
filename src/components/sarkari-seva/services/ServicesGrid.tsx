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
    <section className="py-14">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 className="
        text-4xl
        font-black
        mb-10
        ">
          Humari Sevaein
        </h2>

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-5
        gap-6
        ">

          {services.map((service) => (
            <div
              key={service}
              className="
              glass
              rounded-[30px]
              p-8
              card-hover
              "
            >

              <div className="
              w-16 h-16
              rounded-2xl
              bg-gradient-to-br
              from-green-400
              to-blue-500
              mb-6
              " />

              <h3 className="
              text-2xl
              font-bold
              mb-4
              ">
                {service}
              </h3>

              <ul className="
              space-y-3
              text-slate-600
              ">
                <li>• Fast Access</li>
                <li>• Digital Service</li>
                <li>• AI Support</li>
              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}