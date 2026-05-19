import Image from "next/image";

export default function Boy() {
  return (
    <div
      className="
        absolute
        bottom-29
        left-[15%]
        z-20
      "
    >
      <Image
        src="/images/hero/boy.png"
        alt="boy"
        width={510}
        height={310}
      />
    </div>
  );
}