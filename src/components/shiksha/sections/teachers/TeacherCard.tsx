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
        <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-green-100">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold">{name}</h3>

        <p className="mt-2 text-gray-500">{subject}</p>

        <button className="mt-6 w-full rounded-2xl bg-green-50 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white">
          Book Demo
        </button>
      </div>
    </GlowCard>
  );
}