import {
  BookOpen,
  Brain,
  FileText,
  Video,
} from "lucide-react";

import Container from "@/components/shiksha/layout/container/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Live Classes",
    icon: <Video size={28} />,
  },
  {
    title: "AI Doubts",
    icon: <Brain size={28} />,
  },
  {
    title: "Study Notes",
    icon: <FileText size={28} />,
  },
  {
    title: "Smart Learning",
    icon: <BookOpen size={28} />,
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}