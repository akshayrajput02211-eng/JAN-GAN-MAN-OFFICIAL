import ServiceCard from "./ServiceCard";

import { services } from "./servicesData";

export default function ServiceGrid() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl

        px-4
        sm:px-6
        lg:px-8

        py-10
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-6

          sm:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4
        "
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            href={service.href}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}