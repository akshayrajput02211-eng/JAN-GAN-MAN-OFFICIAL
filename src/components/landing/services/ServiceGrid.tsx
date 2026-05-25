import type { Service } from "./servicesData";

import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        sm:gap-5
        lg:gap-6
        px-4
        sm:px-5
        md:px-6
        py-8
        max-w-7xl
        mx-auto
      "
    >
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={<Icon size={22} />}
            tone={service.tone}
            href={service.href}
            image={service.image}
          />
        );
      })}
    </section>
  );
}