import Image from "next/image";

export default function Girl() {
  return (
    <div
      className="
        absolute
        bottom-[99px]
        right-[15%]
        z-20
      "
    >
      <Image
        src="/images/hero/girl.png"
        alt="girl"
        width={510}
        height={310}
        className="w-[220px] md:w-[510px] h-auto"
        priority
      />
    </div>
  );
}