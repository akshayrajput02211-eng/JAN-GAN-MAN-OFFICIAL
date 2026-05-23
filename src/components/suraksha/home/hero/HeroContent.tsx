export default function HeroContent() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">
          Namaste, Ram Singh
        </p>

        <h1
          className="
          mt-4 text-5xl font-black
          leading-tight tracking-tight
          text-slate-900
        "
        >
          Surakshit Gaon,
          <span className="block text-green-600">
            Surakshit Parivaar
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-slate-600">
          Police aapke saath hai, har kadam
          suraksha ke liye.
        </p>
      </div>
    </div>
  );
}