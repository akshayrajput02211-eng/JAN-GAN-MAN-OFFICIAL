export default function HeroText() {
  return (
    <div
      className="
        absolute
        top-[29%]
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        text-center
        z-30
        w-full
        px-4
        
      "
    >
      <h1
        className=" 
          font-black
          leading-[0.95]
          tracking-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]
        "
      >
        <span
          className="
            block
            text-green-800
          "
        >
          Aapka Gaon
        </span>

        <span
          className="
            block
            mt-2
            text-orange-500
          "
        >
          Aapki Madad
        </span>
      </h1>

      <p
        className="
          mt-5
          text-sm
          sm:text-base
          md:text-lg
          text-gray-700
          font-medium
          max-w-xl
          mx-auto
        "
      >
       
      </p>
    </div>
  );
}