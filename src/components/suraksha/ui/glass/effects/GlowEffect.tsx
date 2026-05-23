export default function GlowEffect() {
  return (
    <>
      <div
        className="
        absolute left-0 top-0
        h-72 w-72 rounded-full
        bg-green-400/20 blur-3xl
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        h-72 w-72 rounded-full
        bg-blue-400/20 blur-3xl
      "
      />
    </>
  );
}