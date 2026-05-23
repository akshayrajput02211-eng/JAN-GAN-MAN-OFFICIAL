import Image from "next/image";

export default function Boy() {
  return (
    <div
      className="
        absolute
        bottom-[85px]
        left-[-20px]
        sm:left-[2%]
        md:left-[8%]
        lg:left-[15%]
        z-20
        pointer-events-none
      "
    >
      <Image
        src="/images/hero/boy.png"
        alt="boy"
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