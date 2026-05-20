import Image from "next/image";

export default function Grass() {
  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        z-[5]
      "
    >
      <Image
        src="/images/hero/landd.png"
        alt="grass"
        width={1920}
        height={400}
        priority
        className="
          w-full
          h-auto
          object-cover
          select-none
          pointer-events-none
        "
      />
    </div>
  );
}