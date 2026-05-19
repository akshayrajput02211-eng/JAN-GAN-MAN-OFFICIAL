export default function SearchBox() {
  return (
    <div
      className="
        absolute
        bottom-10
        md:bottom-16
        left-1/2
        -translate-x-1/2
        z-40
        w-[92%]
        md:w-[700px]
      "
    >
      <div
        className="
          flex items-center
          bg-white/80
          backdrop-blur-xl
          rounded-full
          shadow-2xl
          px-4 md:px-8
          py-3 md:py-5
          border border-white/10
        "
      >
        <input
          type="text"
          placeholder="Aap kya dhoond rahe hain?"
          className="
            w-full
            outline-none
            bg-transparent
            text-lg md:text-2xl
            font-semibold
          "
        />

        <button
          className="
            w-12 h-12
            md:w-14 md:h-14
            rounded-full
            bg-green-500
            text-white
            text-lg
          "
        >
          
        </button>
      </div>
    </div>
  );
}