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
      group
      bg-white
      dark:bg-slate-800
      rounded-3xl
      border
      border-orange-100
      dark:border-slate-700
      p-4
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      overflow-hidden
      "
    >

      {/* IMAGE */}
      <div
        className="
        relative
        h-24
        sm:h-28
        rounded-2xl
        overflow-hidden
        "
      >

        <Image
          src={image}
          alt={title}
          fill
          className="
          object-cover
          group-hover:scale-105
          transition-transform
          duration-500
          "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/20
          to-transparent
          "
        />

      </div>

      {/* CONTENT */}
      <div className="mt-4">

        <h3
          className="
          font-bold
          text-base
          sm:text-lg
          text-slate-800
          dark:text-white
          "
        >
          {title}
        </h3>

        <p
          className="
          text-2xl
          font-black
          text-slate-900
          dark:text-white
          mt-2
          "
        >
          {price}
        </p>

        <div
          className="
          mt-3
          inline-flex
          items-center
          px-3
          py-1.5
          rounded-full
          bg-orange-100
          dark:bg-orange-500/20
          text-[#d97706]
          dark:text-orange-300
          text-sm
          font-semibold
          "
        >
          {change}
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div
        className="
        mt-5
        h-[3px]
        w-0
        bg-gradient-to-r
        from-[#d97706]
        to-[#f97316]
        group-hover:w-full
        transition-all
        duration-500
        rounded-full
        "
      />

    </div>
  );
}