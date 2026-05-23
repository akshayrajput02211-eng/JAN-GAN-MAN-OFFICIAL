import Image from "next/image";

export default function Girl() {
  return (
    <div
      className="
        absolute
        bottom-[85px]
        right-[-20px]
        sm:right-[2%]
        md:right-[8%]
        lg:right-[15%]
        z-20
        pointer-events-none
      "
    >
      <Image
        src="/images/hero/girl.png"
        alt="girl"
        width={510}
        height={310}
        priority
        className="
          w-[150px]
          sm:w-[190px]
          md:w-[320px]
          lg:w-[510px]
          h-auto
          object-contain
        "
      />
    </div>
  );
}