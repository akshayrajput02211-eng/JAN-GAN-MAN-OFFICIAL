export default function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute right-[-100px] top-[100px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-3xl" />

      <div className="absolute bottom-[-100px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl" />
    </div>
  );
}