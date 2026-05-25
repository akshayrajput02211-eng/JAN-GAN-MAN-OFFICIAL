// ========================================
// FILE: src/components/legal/LegalLayout.tsx
// ========================================

import LegalSidebar from "./LegalSidebar";

interface Section {
  id: string;
  title: string;
}

interface Props {
  title: string;
  updatedAt: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  updatedAt,
  sections,
  children,
}: Props) {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-white
        to-green-50/40

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-14
          lg:px-8
        "
      >
        {/* ================= HERO ================= */}

        <div className="mb-14">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#16a34a]/20
              bg-[#16a34a]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#16a34a]

              dark:border-[#16a34a]/30
              dark:bg-[#16a34a]/15
              dark:text-green-400
            "
          >
            Last updated: {updatedAt}
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              lg:text-5xl

              dark:text-white
            "
          >
            {title}
          </h1>

          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-8
              text-slate-600

              dark:text-slate-400
            "
          >
            JAN GAN MAN platform use karne
            se pehle kripya policies aur
            legal information dhyaan se
            padhein.
          </p>
        </div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[300px_1fr]
          "
        >
          <LegalSidebar sections={sections} />

          <div
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white/90
              p-8
              shadow-[0_10px_50px_rgba(0,0,0,0.06)]
              backdrop-blur-xl
              lg:p-12

              dark:border-slate-800
              dark:bg-slate-900/80
              dark:shadow-[0_10px_50px_rgba(0,0,0,0.4)]
            "
          >
            <div className="space-y-14">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}