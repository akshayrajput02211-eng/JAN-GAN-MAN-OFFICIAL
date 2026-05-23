import GlassCard from "@/components/swasthyashared/cards/GlassCard";

interface Props {
  name: string;
  role: string;
  image: string;
}

export default function DoctorCard({
  name,
  role,
  image,
}: Props) {
  return (
    <GlassCard className="p-6">
      <img
        src={image}
        alt=""
        className="
        mx-auto h-28 w-28 rounded-full
        object-cover
      "
      />

      <h3 className="mt-5 text-center text-xl font-bold">
        {name}
      </h3>

      <p className="mt-2 text-center text-slate-500">
        {role}
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <button
          className="
          rounded-xl bg-blue-100
          px-4 py-2 text-blue-700
        "
        >
          Call
        </button>

        <button
          className="
          rounded-xl bg-green-100
          px-4 py-2 text-green-700
        "
        >
          Chat
        </button>
      </div>
    </GlassCard>
  );
}