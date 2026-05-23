export default function Footer() {
  return (
    <footer
      className="
      mt-10 rounded-[32px]
      border border-white/40
      bg-white/70 p-8
      backdrop-blur-xl
    "
    >
      <div className="grid gap-10 lg:grid-cols-4">

        <div>
          <h2 className="text-3xl font-black text-green-700">
            Swasthya
          </h2>

          <p className="mt-4 text-slate-500">
            Sehat pe dhyan, jeevan aasan.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Services</h3>

          <div className="mt-4 space-y-3 text-slate-500">
            <p>Consult Doctor</p>
            <p>Medicines</p>
            <p>Lab Tests</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Support</h3>

          <div className="mt-4 space-y-3 text-slate-500">
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>

        <div
          className="
          rounded-3xl
          bg-green-50 p-6
        "
        >
          <p className="text-slate-500">
            Emergency Support
          </p>

          <h2 className="mt-3 text-4xl font-black text-green-700">
            1800 123 4567
          </h2>
        </div>
      </div>
    </footer>
  );
}