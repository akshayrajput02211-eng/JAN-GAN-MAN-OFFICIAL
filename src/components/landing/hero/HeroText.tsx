export default function HeroText() {
  return (
    <div
      className="
        absolute
        top-[22%]
        md:top-[29%]
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-30
        w-full
        px-5
        text-center
      "
    >
      <h1
        className="
          font-black
          leading-[0.92]
          tracking-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)]
        "
      >
        <span
          className="
            block
            text-[#16a34a]
            font-[Noto_Sans_Devanagari]
          "
        >
          Aapka Gaon
        </span>

        <span
          className="
            block
            mt-2
            text-[#f6b21a]
            font-[Noto_Sans_Devanagari]
          "
        >
          Aapki Madad
        </span>
      </h1>

      <p
        className="
          mt-5
          mx-auto
          max-w-[320px]
          sm:max-w-xl
          text-xs
          sm:text-sm
          md:text-lg
          leading-relaxed
          text-slate-700
          dark:text-slate-300
          font-medium
          font-[Geist]
        "
      >
        
      </p>
    </div>
  );
}