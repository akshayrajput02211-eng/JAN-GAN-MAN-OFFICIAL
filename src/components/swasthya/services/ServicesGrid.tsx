import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Lab Tests",
    subtitle: "Book Tests",
    icon: "/assets/swasthya/icons/lab.png",
  },
  {
    title: "Health Records",
    subtitle: "Reports & History",
    icon: "/assets/swasthya/icons/report.png",
  },
  {
    title: "Women Care",
    subtitle: "Care & Support",
    icon: "/assets/swasthya/icons/women.png",
  },
  {
    title: "Fitness",
    subtitle: "Stay Fit",
    icon: "/assets/swasthya/icons/fitness.png",
  },
];

export default function ServicesGrid() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-black">
          Popular Services
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}