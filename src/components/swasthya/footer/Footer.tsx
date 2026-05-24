// FOOTER.tsx

export default function Footer() {
  return (
    <footer
      className="
        mt-10

        rounded-[32px]

        border
        border-white/40
        dark:border-slate-700/40

        bg-white/70
        dark:bg-slate-900/80

        p-4
        md:p-8
        lg:p-10

        backdrop-blur-xl
      "
    >
      <div className="grid gap-10 lg:grid-cols-4">
        
        {/* BRAND */}

        <div>
          <h2
            className="
              text-3xl
              font-black

              text-red-700
              dark:text-red-400
            "
          >
            Swasthya
          </h2>

          <p
            className="
              mt-4

              text-slate-500
              dark:text-slate-400
            "
          >
            Sehat pe dhyan, jeevan aasan.
          </p>
        </div>

        {/* SERVICES */}

        <div>
          <h3
            className="
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Services
          </h3>

          <div
            className="
              mt-4
              space-y-3

              text-slate-500
              dark:text-slate-400
            "
          >
            <p>Consult Doctor</p>
            <p>Medicines</p>
            <p>Lab Tests</p>
          </div>
        </div>

        {/* SUPPORT */}

        <div>
          <h3
            className="
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Support
          </h3>

          <div
            className="
              mt-4
              space-y-3

              text-slate-500
              dark:text-slate-400
            "
          >
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>

        {/* EMERGENCY */}

        <div
          className="
            rounded-3xl

            border
            border-red-200/40
            dark:border-red-900/30

            bg-red-50/80
            dark:bg-red-950/20

            p-6

            backdrop-blur-xl
          "
        >
          <p
            className="
              text-slate-500
              dark:text-slate-400
            "
          >
            Emergency Support
          </p>

          <h2
            className="
              mt-3

              text-4xl
              font-black

              text-red-700
              dark:text-red-400
            "
          >
            1800 123 4567
          </h2>
        </div>
      </div>
    </footer>
  );
}