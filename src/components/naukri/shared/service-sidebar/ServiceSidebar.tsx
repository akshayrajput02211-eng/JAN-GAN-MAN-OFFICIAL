import ServiceMiniCard from "./ServiceMiniCard";
import { services } from "./servicesData";

export default function ServiceSidebar() {
  return (
    <div
      className="
        space-y-4

        xl:sticky
        xl:top-28
      "
    >
      {services.map((service) => (
        <ServiceMiniCard
          key={service.title}
          {...service}
        />
      ))}
    </div>
  );
}