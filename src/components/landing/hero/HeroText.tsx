export default function HeroText() {
  return (
    <div
      className="
        absolute
        top-[28%]
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
          leading-tight
          text-4xl
          md:text-6xl
          lg:text-7xl
        "
      >
        <span className="text-green-800">
          Aapka Gaon
        </span>

        <br />

        <span className="text-orange-500">
          Aapki Madad
        </span>
      </h1>

      {/* <p
        className="
          mt-4
          text-sm
          md:text-xl
          text-gray-700
        "
      >
        Ek App, Gaon ki har zaroorat
      </p> */}
    </div>
  );
}