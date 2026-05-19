import Image from "next/image";

export default function Girl() {
  return (
    <div
      className="
        absolute
        bottom-29
        right-[15%]
        z-20
      "
    >
      <Image
        src="/images/hero/girl.png"
        alt="girl"
        width={510}
        height={310}
      />
    </div>
  );
}