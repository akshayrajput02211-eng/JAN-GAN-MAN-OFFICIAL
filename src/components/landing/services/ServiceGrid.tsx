import { ServiceCard } from "./ServiceCard";
import type { Service } from "@/types/home";

type ServiceGridProps = {
  services: Service[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="services-grid" aria-label="Services">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </section>
  );
}