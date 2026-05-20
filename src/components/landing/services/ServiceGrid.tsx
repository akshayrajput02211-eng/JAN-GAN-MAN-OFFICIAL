import type { Service } from "@/types/home";
import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <section className="grid grid-cols-2 gap-5 px-4 py-8">
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