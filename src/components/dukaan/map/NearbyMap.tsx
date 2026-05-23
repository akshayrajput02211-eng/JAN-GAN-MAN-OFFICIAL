<div
  className="
    relative
    h-48 md:h-64 lg:h-80
    overflow-hidden
    rounded-[32px]
    border
    border-orange-100
    dark:border-slate-700/50
    bg-white
    dark:bg-slate-800
  "
>
  <Image
    src={banner}
    alt="banner"
    fill
    className="
      object-cover
      transition-transform
      duration-700
      hover:scale-105
    "
  />

  {/* Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-black/60
      via-black/30
      to-transparent
    "
  />

  {/* Content */}
  <div
    className="
      absolute inset-0 z-10
      flex flex-col justify-center
      p-6 md:p-10
    "
  >
    <h2
      className="
        max-w-xl
        text-3xl md:text-5xl
        font-black
        leading-tight
        text-white
      "
    >
      Fast Local Delivery
    </h2>

    <p
      className="
        mt-4
        max-w-lg
        text-sm md:text-lg
        leading-relaxed
        text-orange-100
      "
    >
      Kirana, Dawaai aur daily essentials
      ab aapke ghar tak minutes mein.
    </p>

    <button
      className="
        mt-6
        h-12 w-fit
        rounded-2xl
        bg-gradient-to-r
        from-orange-600
        to-orange-700
        px-6
        font-bold
        text-white
        shadow-lg
        shadow-orange-400/30
        transition-all
        duration-300
        hover:scale-105
      "
    >
      Order Now
    </button>
  </div>
</div>