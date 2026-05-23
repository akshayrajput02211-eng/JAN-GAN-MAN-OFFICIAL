import Image from "next/image";

export default function WomenSafetyBanner() {
  return (
    <section
      className="
        relative overflow-hidden
        rounded-[32px]
        bg-gradient-to-r
        from-violet-100 to-pink-100
        p-8
      "
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-black text-slate-900">
            Women Safety Mode
          </h2>

          <p className="mt-4 max-w-md text-slate-600">
            Live tracking, emergency audio,
            trusted contacts and more.
          </p>

          <button
            className="
              mt-6 w-fit rounded-2xl
              bg-violet-600 px-6 py-4
              font-semibold text-white
              transition hover:scale-105
            "
          >
            Activate Now
          </button>
        </div>

        {/* Image */}
        <div
          className="
            relative h-[300px]
            w-full overflow-hidden
            rounded-[28px]
          "
        >
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Woman smiling"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}