import Image from "next/image";

export default function Sky() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/hero/sky.png"
        alt="sky"
        fill
        className="object-cover"
      />
    </div>
  );
}