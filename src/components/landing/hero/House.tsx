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
      "
    >
      <Image
        src="/images/hero/landd.png"
        alt="land"
        width={1250}
        height={520}
        className="object-contain"
      />
    </div>
  );
}