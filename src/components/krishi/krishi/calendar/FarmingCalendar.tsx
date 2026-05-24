import SectionTitle from "@/components/krishi/shared/section-title/SectionTitle";
import TimelineStep from "./TimelineStep";

const timeline = [
  {
    month: "June",
    work: "Jutai",
  },
  {
    month: "July",
    work: "Beej Bowai",
  },
  {
    month: "August",
    work: "Khaad",
  },
  {
    month: "September",
    work: "Sinchai",
  },
  {
    month: "October",
    work: "Spray",
  },
];

export default function FarmingCalendar() {
  return (
    <section
      className="
      rounded-[40px]
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6 md:p-8
      backdrop-blur-2xl
    "
    >
      <SectionTitle
        title="Farming Calendar"
        subtitle="Season wise farming guide"
      />

      <div className="relative mt-12">
        <div
          className="
          absolute left-0 top-3
          h-1 w-full
          rounded-full
          bg-green-100 dark:bg-slate-700
        "
        />

        <div
          className="
          relative grid
          grid-cols-2
          gap-8
          md:grid-cols-5
        "
        >
          {timeline.map((item, i) => (
            <TimelineStep
              key={i}
              month={item.month}
              work={item.work}
            />
          ))}
        </div>
      </div>
    </section>
  );
}