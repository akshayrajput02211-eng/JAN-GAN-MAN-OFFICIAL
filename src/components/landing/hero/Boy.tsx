import Image from "next/image";

export default function Boy() {
  return (
    <div
      className="
        absolute
        bottom-[99px]
        left-[15%]
        z-20
      "
    >
      <Image
        src="/images/hero/boy.png"
        alt="boy"
        width={510}
        height={310}
         className="w-[220px] md:w-[510px] h-auto"
        priority
      />
      
    </div>
  );
}