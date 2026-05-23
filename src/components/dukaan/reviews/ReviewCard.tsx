export default function ReviewCard() {
  return (
    <div className="bg-white rounded-[30px] p-8 border border-slate-100 shadow-sm">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-full bg-green-100" />

        <div>
          <h3 className="font-black text-xl">
            Ramesh Kumar
          </h3>

          <p className="text-slate-500">
            Najafgarh
          </p>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed">
        Har roj yahi se order karta hu. Best dukaan app hai.
      </p>
    </div>
  );
}