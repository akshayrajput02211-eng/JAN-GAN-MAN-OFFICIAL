export default function Footer() {
  return (
    <footer
      className="
      mt-20

      border-t border-white/40 dark:border-slate-700/40

      bg-[#dcfce7]/70 dark:bg-slate-800/70

      backdrop-blur-2xl
    "
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        {/* Top Grid */}
        <div
          className="
          grid gap-10

          sm:grid-cols-2
          lg:grid-cols-4
        "
        >
          {/* Brand */}
          <div>
            <h2
              className="
              text-3xl font-black
              text-[#16a34a]
            "
            >
              Krishi
            </h2>

            <p
              className="
              mt-4 text-sm leading-7
              text-slate-600 dark:text-slate-300
            "
            >
              Smart agriculture platform for modern
              digital farming ecosystem.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4
              className="
              mb-5 text-lg font-bold
              text-slate-900 dark:text-white
            "
            >
              Platform
            </h4>

            <ul
              className="
              space-y-3 text-sm
              text-slate-600 dark:text-slate-300
            "
            >
              <li className="transition hover:text-[#16a34a]">
                Mera Khet
              </li>

              <li className="transition hover:text-[#16a34a]">
                Mandi Bazaar
              </li>

              <li className="transition hover:text-[#16a34a]">
                Krishi Salah
              </li>

              <li className="transition hover:text-[#16a34a]">
                AI Sahayak
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="
              mb-5 text-lg font-bold
              text-slate-900 dark:text-white
            "
            >
              Support
            </h4>

            <ul
              className="
              space-y-3 text-sm
              text-slate-600 dark:text-slate-300
            "
            >
              <li className="transition hover:text-[#16a34a]">
                Help Center
              </li>

              <li className="transition hover:text-[#16a34a]">
                Privacy Policy
              </li>

              <li className="transition hover:text-[#16a34a]">
                Terms
              </li>

              <li className="transition hover:text-[#16a34a]">
                Community
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4
              className="
              mb-5 text-lg font-bold
              text-slate-900 dark:text-white
            "
            >
              Download App
            </h4>

            <div className="space-y-4">
              <button
                className="
                w-full

                rounded-2xl

                bg-gradient-to-r
                from-[#16a34a]
                to-[#065f46]

                px-5 py-4

                text-white

                shadow-lg shadow-green-500/20

                transition-all duration-300
                hover:scale-[1.02]
              "
              >
                Google Play
              </button>

              <button
                className="
                w-full

                rounded-2xl

                border border-white/40 dark:border-slate-700/40

                bg-white/70 dark:bg-slate-800/70

                px-5 py-4

                text-slate-800 dark:text-white

                transition-all duration-300
                hover:scale-[1.02]
              "
              >
                App Store
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
          mt-12

          flex flex-col items-center justify-between
          gap-4

          border-t border-white/40 dark:border-slate-700/40

          pt-6

          text-center text-sm

          text-slate-500 dark:text-slate-400

          md:flex-row
        "
        >
          <p>
            © 2026 Krishi. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>100% Secure</span>

            <span>ISO Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}