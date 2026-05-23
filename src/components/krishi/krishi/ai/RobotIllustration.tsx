

import Image from "next/image";

export default function RobotIllustration() {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute h-60 w-60 rounded-full bg-green-400/20 blur-3xl" />

      <Image
        src="/dummy/robot.png"
        alt="robot"
        width={220}
        height={220}
        className="
        relative z-10
        object-contain
        drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]
      "
      />
    </div>
  );
}