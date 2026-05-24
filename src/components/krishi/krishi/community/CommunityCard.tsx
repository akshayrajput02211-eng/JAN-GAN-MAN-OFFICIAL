export default function CommunityCard() {
  return (
    <div
      className="
      rounded-[30px]
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6
      shadow-[0_10px_40px_rgba(22,163,74,0.10)]
      backdrop-blur-2xl
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-2xl
    "
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-gradient-to-br
          from-[#16a34a]
          to-[#065f46]
          text-lg font-bold text-white
          shadow-lg shadow-green-500/20
        "
        >
          R
        </div>

        {/* User Info */}
        <div>
          <h3
            className="
            font-bold
            text-slate-900 dark:text-white
          "
          >
            Ramesh Yadav
          </h3>

          <p
            className="
            text-sm
            text-slate-500 dark:text-slate-400
          "
          >
            Delhi • 2h ago
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div
        className="
        mt-5 rounded-2xl
        border border-white/40 dark:border-slate-700/40
        bg-white/80 dark:bg-slate-800/80
        p-4
      "
      >
        <p
          className="
          leading-7
          text-slate-700 dark:text-slate-300
        "
        >
          Meri gehun me peele daag aa rahe hain,
          koi upay bataye?
        </p>
      </div>

      {/* Stats */}
      <div
        className="
        mt-5 grid
        grid-cols-1 sm:grid-cols-2
        gap-4
      "
      >
        {/* Replies */}
        <div
          className="
          rounded-2xl
          border border-white/40 dark:border-slate-700/40
          bg-white dark:bg-slate-800
          p-4
        "
        >
          <p className="text-xs text-slate-400">
            Replies
          </p>

          <h4
            className="
            mt-1 text-2xl font-black
            text-[#16a34a]
          "
          >
            24
          </h4>
        </div>

        {/* Experts */}
        <div
          className="
          rounded-2xl
          border border-white/40 dark:border-slate-700/40
          bg-white/90 dark:bg-slate-800/90
          p-4
        "
        >
          <p className="text-xs text-slate-400">
            Experts Active
          </p>

          <h4
            className="
            mt-1 text-2xl font-black
            text-[#065f46] dark:text-green-300
          "
          >
            8
          </h4>
        </div>
      </div>

      {/* Button */}
      <button
        className="
        mt-6 w-full
        rounded-2xl
        bg-gradient-to-r
        from-[#16a34a]
        to-[#065f46]
        px-5 py-3
        text-sm font-semibold text-white
        shadow-lg shadow-green-500/20
        transition-all duration-300
        hover:-translate-y-1 hover:scale-[1.02]
      "
      >
        Join Discussion
      </button>
    </div>
  );
}