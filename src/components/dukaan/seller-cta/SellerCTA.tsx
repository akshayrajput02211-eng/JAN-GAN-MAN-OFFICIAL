export default function SellerCTA() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-[1400px] mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-green-600 to-green-500 p-10 md:p-16 relative">
        <div className="max-w-2xl text-white relative z-10">
          <h2 className="text-5xl font-black leading-tight">
            Dukaan Walo Ke Liye
            Free Listing!
          </h2>

          <p className="mt-5 text-green-50 text-lg">
            Apni dukaan online laaye aur zyada customers payein.
          </p>

          <button className="mt-8 h-14 px-8 rounded-full bg-white text-green-700 font-black text-lg">
            Apni Dukaan Jodein
          </button>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_40%)]" />
      </div>
    </section>
  );
}