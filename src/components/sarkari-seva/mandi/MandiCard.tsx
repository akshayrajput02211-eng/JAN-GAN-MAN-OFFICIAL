// components/mandi/MandiCard.tsx

import Image from "next/image";

interface Props {
  title: string;
  price: string;
  change: string;
  image: string;
}

export default function MandiCard({
  title,
  price,
  change,
  image,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      p-4
      shadow-sm
      hover:shadow-xl
      transition
    "
    >
      <div className="relative h-24 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-3 font-semibold">{title}</h3>

      <p className="text-xl font-bold text-gray-900 mt-1">
        {price}
      </p>

      <p className="text-green-600 text-sm mt-1">{change}</p>
    </div>
  );
}