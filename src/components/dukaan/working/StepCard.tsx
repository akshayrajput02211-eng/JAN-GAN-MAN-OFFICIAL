export default function StepCard({
  title,
  number,
}: {
  title: string;
  number: number;
}) {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition">
      <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto text-2xl font-black">
        {number}
      </div>

      <h3 className="mt-6 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-slate-500 leading-relaxed">
        Fast delivery with premium experience.
      </p>
    </div>
  );
}