"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

interface Props {
  image: string;
}

export default function AvatarUpload({ image }: Props) {
  return (
    <div className="relative mx-auto w-fit">
      <div
        className="
          relative
          h-36
          w-36
          overflow-hidden
          rounded-full
          border-4
          border-white
          shadow-2xl
        "
      >
        <Image
          src={image}
          alt="avatar"
          fill
          className="object-cover"
        />
      </div>

      <button
        className="
          absolute
          bottom-2
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-2
          rounded-full
          bg-black/70
          px-4
          py-2
          text-xs
          font-semibold
          text-white
          backdrop-blur-xl
        "
      >
        <Camera size={14} />
        Photo Change Karo
      </button>
    </div>
  );
}