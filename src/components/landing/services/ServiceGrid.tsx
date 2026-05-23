import type { Service } from "@/types/home";

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
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          tone={service.tone}
          href={service.href}
        />
      ))}
    </section>
  );
}