export default function SearchBox() {
  return (
    <div
      className="
        absolute
        top-[38%]
        sm:top-[42%]
        md:top-auto
        md:bottom-10
        left-1/2
        -translate-x-1/2
        z-40
        w-[92%]
        md:w-[700px]
      "
    >
      <div
        className="
          flex items-center gap-2 md:gap-3
          rounded-full
          border border-slate-200/60
          bg-white/85
          dark:bg-slate-800/80
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
          px-3 md:px-7
          py-2.5 md:py-4
          transition-all duration-300
          dark:border-slate-700/30
        "
      >
        <input
          type="text"
          placeholder="Aap kya dhoond rahe hain?"
          className="
            w-full
            bg-transparent
            outline-none
            text-sm
            sm:text-base
            md:text-xl
            font-semibold
            text-slate-800
            dark:text-slate-100
            placeholder:text-slate-400
            dark:placeholder:text-slate-500
            font-[Geist]
          "
        />

        <button
          className="
            flex items-center justify-center
            shrink-0
            w-10 h-10
            sm:w-11 sm:h-11
            md:w-14 md:h-14
            rounded-full
            bg-[#16a34a]
            hover:bg-[#15803d]
            text-white
            shadow-lg
            transition-all duration-300
            hover:scale-105
            active:scale-95
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}