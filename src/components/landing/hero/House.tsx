import Image from "next/image";

export default function Grass() {
  return (
    <div
      className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        z-10
        w-[180%]
        sm:w-[150%]
        md:w-[1250px]
        max-w-none
        pointer-events-none
      "
    >
      <Image
        src="/images/hero/landd.png"
        alt="land"
        width={1250}
        height={520}
        priority
        className="
          w-full
          h-auto
          object-cover
          select-none
        "
      />
    </div>
  );
}