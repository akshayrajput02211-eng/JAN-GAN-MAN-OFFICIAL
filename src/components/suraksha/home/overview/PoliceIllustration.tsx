import Image from "next/image";

export default function PoliceIllustration() {
  return (
    <div
      className="
        relative h-[320px]
        overflow-hidden rounded-[32px]
      "
    >
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Police"
        fill
        className="object-cover"
      />
    </div>
  );
}