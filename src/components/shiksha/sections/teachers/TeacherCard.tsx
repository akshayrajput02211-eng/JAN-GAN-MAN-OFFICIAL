import Image from "next/image";
import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

interface Props {
  name: string;
  subject: string;
  image: string;
}

export default function TeacherCard({
  name,
  subject,
  image,
}: Props) {
  return (
    <GlowCard>
      <div className="text-center">
        <div
          className="
            mx-auto
            mb-4

            h-28
            w-28

            overflow-hidden
            rounded-full

            border-4
            border-blue-100
            dark:border-slate-700

            shadow-lg
            shadow-blue-100/60

            transition-all
            duration-300

            group-hover:scale-105
          "
        >
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        <h3
          className="
            text-xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2

            text-slate-500
            dark:text-slate-400
          "
        >
          {subject}
        </p>

        <button
          className="
            mt-6
            w-full

            rounded-2xl

            bg-blue-50
            dark:bg-slate-800

            py-3

            font-semibold

            text-[#2563eb]
            dark:text-blue-400

            border
            border-blue-100
            dark:border-slate-700

            transition-all
            duration-300

            hover:bg-[#2563eb]
            hover:text-white

            hover:shadow-lg
            hover:shadow-blue-200/50

            dark:hover:bg-[#1d4ed8]
          "
        >
          Book Demo
        </button>
      </div>
    </GlowCard>
  );
}