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
    <section
      className="
        mt-8

        rounded-[35px]

        bg-white
        dark:bg-slate-800

        p-6
        sm:p-8
        lg:p-10

        shadow-[0_10px_40px_rgba(124,58,237,0.08)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      <h2
        className="
          text-center

          text-3xl
          sm:text-4xl
          lg:text-5xl

          font-black

          leading-tight

          text-[#1b2452]
          dark:text-white
        "
      >
        Kaise Kaam Karta Hai?
      </h2>

      <p
        className="
          mx-auto
          mt-4

          max-w-2xl

          text-center

          text-sm
          sm:text-base
          lg:text-lg

          leading-relaxed

          text-gray-500
          dark:text-slate-400
        "
      >
        Sirf kuch simple steps mein nearby workers aur
        employers ke saath connect ho jao.
      </p>

      <div
        className="
          mt-12

          grid
          gap-8
          lg:gap-10

          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {steps.map((step) => (
          <StepCard
            key={step.id}
            {...step}
          />
        ))}
      </div>
    </section>
  );
}