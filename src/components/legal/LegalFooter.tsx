// ========================================
// FILE: src/components/legal/LegalFooter.tsx
// ========================================

import Link from "next/link";

export default function LegalFooter() {
  return (
    <footer
      className="
        mt-16
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-[#16a34a]
        via-green-600
        to-emerald-700
        p-8
        text-white
        shadow-2xl
      "
    >
      <div
        className="
          flex
          flex-col
          gap-10
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* ================= LEFT ================= */}

        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/15
                text-2xl
                font-black
                backdrop-blur-xl
              "
            >
              J
            </div>

            <div>
              <h3 className="text-2xl font-black">
                JAN GAN MAN
              </h3>

              <p className="text-sm text-white/80">
                Rural India Super App
              </p>
            </div>
          </div>

          <p
            className="
              mt-6
              text-sm
              leading-7
              text-white/85
            "
          >
            JAN GAN MAN ka mission rural
            India ko jobs, healthcare,
            education aur digital services
            se connect karna hai.
          </p>
        </div>

        {/* ================= LINKS ================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
          "
        >
          <Link
            href="/terms"
            className="
              rounded-2xl
              bg-white/10
              px-5
              py-4
              text-center
              text-sm
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
               flex
               items-center
              justify-center

              hover:scale-105
              hover:bg-white/20
            "
          >
            Terms
          </Link>

          <Link
            href="/privacy"
            className="
              rounded-2xl
              bg-white/10
              px-5
              py-4
              text-center
              text-sm
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
               flex
               items-center
              justify-center

              hover:scale-105
              hover:bg-white/20
            "
          >
            Privacy
          </Link>

          <Link
            href="/help"
            className="
              rounded-2xl
              bg-white/10
              px-5
              py-4
              text-center
              text-sm
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
              flex
              items-center
              justify-center

              hover:scale-105
              hover:bg-white/20
            "
          >
            Help Center
          </Link>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          border-t
          border-white/20
          pt-6
          text-sm
          text-white/75

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p>
          © 2026 JAN GAN MAN.
          All rights reserved.
        </p>

        <p>
          Made with for Rural India
        </p>
      </div>
    </footer>
  );
}