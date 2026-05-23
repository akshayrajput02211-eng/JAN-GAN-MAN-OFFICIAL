

export default function GradientBackground() {
  return (
    <>
      <div
        className="
        pointer-events-none
        fixed left-0 top-0 -z-10
        h-[500px] w-[500px]
        rounded-full
        bg-green-300/20
        blur-3xl
      "
      />

      <div
        className="
        pointer-events-none
        fixed bottom-0 right-0 -z-10
        h-[500px] w-[500px]
        rounded-full
        bg-emerald-200/30
        blur-3xl
      "
      />

      <div
        className="
        fixed inset-0 -z-20
        bg-gradient-to-b
        from-[#f8fff9]
        via-[#f5fff6]
        to-[#ffffff]
      "
      />
    </>
  );
}