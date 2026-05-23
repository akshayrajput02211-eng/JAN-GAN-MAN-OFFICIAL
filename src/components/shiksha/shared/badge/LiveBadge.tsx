export default function LiveBadge() {
  return (
    <div
      className="
        absolute
        left-4
        top-4
        z-20
        flex
        items-center
        gap-2
        rounded-full
        bg-red-500
        px-4
        py-2
        text-sm
        font-bold
        text-white
        shadow-lg
        shadow-red-500/40
      "
    >
      <span className="relative flex h-3 w-3">
        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full
            bg-white
            opacity-75
          "
        />

        <span
          className="
            relative
            inline-flex
            h-3
            w-3
            rounded-full
            bg-white
          "
        />
      </span>

      LIVE
    </div>
  );
}