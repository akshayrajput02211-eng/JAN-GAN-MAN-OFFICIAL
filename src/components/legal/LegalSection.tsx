// ========================================
// FILE: src/components/legal/LegalSection.tsx
// ========================================

interface Props {
  id: string;
  title: string;
  number: number;
  children: React.ReactNode;
}

export default function LegalSection({
  id,
  title,
  number,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="
        scroll-mt-28
        border-b
        border-slate-200
        pb-12
        last:border-none

        dark:border-slate-800
      "
    >
      <div className="mb-5 flex items-center gap-4">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-[#16a34a]/10
            text-sm
            font-black
            text-[#16a34a]

            dark:bg-[#16a34a]/15
            dark:text-green-400
          "
        >
          {number}
        </div>

        <h2
          className="
            text-2xl
            font-black
            tracking-tight
            text-slate-900

            dark:text-white
          "
        >
          {title}
        </h2>
      </div>

      <div
        className="
          space-y-4
          text-[15px]
          leading-8
          text-slate-600

          dark:text-slate-400
        "
      >
        {children}
      </div>
    </section>
  );
}