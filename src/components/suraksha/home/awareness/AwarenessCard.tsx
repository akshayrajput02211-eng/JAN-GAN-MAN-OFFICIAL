import Image from "next/image";

interface Props {
  title: string;
}

export default function AwarenessCard({
  title,
}: Props) {
  return (
    <div
      className="
        rounded-[28px]
        bg-white/70 p-5
        backdrop-blur-xl
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="Safety awareness"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Safety awareness information.
      </p>
    </div>
  );
}