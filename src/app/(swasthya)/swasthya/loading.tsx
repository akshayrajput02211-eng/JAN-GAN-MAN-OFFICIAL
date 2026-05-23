export default function Loading() {
  return (
    <div className="space-y-5">
      <div className="h-72 rounded-[32px] bg-neutral-200 animate-pulse" />

      <div className="grid grid-cols-4 gap-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="
            h-40 rounded-[28px]
            bg-neutral-200 animate-pulse
          "
          />
        ))}
      </div>
    </div>
  );
}