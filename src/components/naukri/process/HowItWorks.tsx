import StepCard from "./StepCard";

const steps = [
  {
    id: 1,
    title: "Job Post Karein",
    image: "/images/naukri/hero-boy.png",
  },

  {
    id: 2,
    title: "Live for 24 Hours",
    image: "/images/naukri/worker-1.png",
  },

  {
    id: 3,
    title: "Applicants Aayenge",
    image: "/images/naukri/worker-2.png",
  },

  {
    id: 4,
    title: "Kaam Pura",
    image: "/images/naukri/worker-3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-8 rounded-[35px] bg-white p-10 shadow-sm">
      <h2 className="text-center text-5xl font-black text-[#1b2452]">
        Kaise Kaam Karta Hai?
      </h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-4">
        {steps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
      </div>
    </section>
  );
}