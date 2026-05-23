

export default function Footer() {
  return (
    <footer
      className="
      mt-20 border-t border-white/30
      bg-white/70
      backdrop-blur-2xl
    "
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black text-green-600">
              Krishi
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Smart agriculture platform for modern digital
              farming ecosystem.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-slate-900">
              Platform
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>Mera Khet</li>
              <li>Mandi Bazaar</li>
              <li>Krishi Salah</li>
              <li>AI Sahayak</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-slate-900">
              Support
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Community</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-slate-900">
              Download App
            </h4>

            <div className="space-y-4">
              <button
                className="
                w-full rounded-2xl bg-black px-5 py-4
                text-white transition-all duration-300
                hover:scale-[1.02]
              "
              >
                Google Play
              </button>

              <button
                className="
                w-full rounded-2xl bg-slate-900 px-5 py-4
                text-white transition-all duration-300
                hover:scale-[1.02]
              "
              >
                App Store
              </button>
            </div>
          </div>
        </div>

        <div
          className="
          mt-12 flex flex-col items-center justify-between gap-4
          border-t border-slate-200 pt-6
          text-sm text-slate-500 md:flex-row
        "
        >
          <p>© 2026 Krishi. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>100% Secure</span>
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}