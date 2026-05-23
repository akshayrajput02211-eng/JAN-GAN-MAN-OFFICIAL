
import Image from "next/image";

export default function HeroFarmer() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[350px] w-[350px] rounded-full bg-green-400/20 blur-3xl" />

      <Image
        src="/dummy/farmer.png"
        alt="farmer"
        width={420}
        height={420}
        className="
        relative z-10 object-contain
        drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]
      "
      />
    </div>
  );
}