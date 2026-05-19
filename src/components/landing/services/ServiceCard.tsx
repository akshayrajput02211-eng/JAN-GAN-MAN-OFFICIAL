import {
  BookOpen,
  Bot,
  BriefcaseBusiness,
  HeartPulse,
  Landmark,
  Shield,
  Sprout,
  Store,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/types/home";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  job: BriefcaseBusiness,
  shop: Store,
  scheme: Landmark,
  health: HeartPulse,
  education: BookOpen,
  farming: Sprout,
  police: Shield,
  ai: Bot,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <article className="service-card">
      <span className={`icon-badge ${service.tone}`}>
        <Icon aria-hidden="true" />
      </span>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </article>
  );
}