"use client";

import Image from "next/image";

import banner from "@/assets/dukaan/map-banner.png";

export default function NearbyMap() {
  return (
    <section className="w-full rounded-3xl overflow-hidden bg-white shadow-lg">
      <div className="relative w-full h-[300px]">
        <Image
          src={banner}
          alt="Nearby Shops Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Nearby Shops
        </h2>

        <p className="text-gray-500 mt-2">
          Explore dukaan and kirana stores near your location.
        </p>
      </div>
    </section>
  );
}