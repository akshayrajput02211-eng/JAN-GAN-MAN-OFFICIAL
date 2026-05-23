

import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoCard() {
  return (
    <div className="overflow-hidden rounded-[30px]">
      <div className="relative h-[280px]">
        <Image
          src="/dummy/wheat.jpg"
          alt="video"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <button
          className="
          absolute left-1/2 top-1/2
          flex h-20 w-20 -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full bg-white/90
          shadow-2xl
        "
        >
          <Play className="h-8 w-8 text-green-600" />
        </button>
      </div>
    </div>
  );
}