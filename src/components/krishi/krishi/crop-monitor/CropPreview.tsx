

import Image from "next/image";

export default function CropPreview() {
  return (
    <div className="relative overflow-hidden rounded-[28px]">
      <Image
        src="/dummy/crop.jpg"
        alt="crop"
        width={500}
        height={320}
        className="rounded-[28px] object-cover"
      />

      <div
        className="
        absolute inset-0
        bg-gradient-to-t from-black/40 to-transparent
      "
      />

      <div className="absolute bottom-4 left-4">
        <h3 className="text-xl font-bold text-white">
          Wheat Field
        </h3>

        <p className="text-sm text-white/80">
          Healthy Crop Monitoring
        </p>
      </div>
    </div>
  );
}