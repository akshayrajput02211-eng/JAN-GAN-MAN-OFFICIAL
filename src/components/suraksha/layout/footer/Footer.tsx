import {
  MenuIcon,
  BellIcon,
  PhoneIcon,
  ShieldIcon,
} from "lucide-react";

export default function Footer() {
  const socialIcons = [
    MenuIcon,
    BellIcon,
    PhoneIcon,
    ShieldIcon,
  ];

  return (
    <footer
      className="
        mt-20

        border-t border-white/60

        bg-white/70

        backdrop-blur-xl

        dark:border-slate-700/40
        dark:bg-slate-900/80
      "
    >
      <div
        className="
          mx-auto

          grid max-w-7xl gap-10

          px-4 py-14

          md:grid-cols-2
          lg:grid-cols-5
        "
      >
        {/* Brand */}

        <div>
          <h2
            className="
              text-2xl font-black
              text-slate-900

              dark:text-white
            "
          >
            Suraksha Setu
          </h2>

          <p
            className="
              mt-4

              text-sm leading-relaxed
              text-slate-500

              dark:text-slate-400
            "
          >
            Bharat Police ke saath milkar
            aapki suraksha ke liye.
          </p>

          {/* Social Icons */}

          <div className="mt-5 flex gap-3">
            {socialIcons.map((Icon, i) => (
              <button
                key={i}
                className="
                  rounded-xl

                  bg-white

                  p-3

                  text-slate-700

                  transition-all duration-300

                  hover:scale-110
                  hover:bg-slate-100

                  dark:bg-slate-700
                  dark:text-white
                  dark:hover:bg-slate-600
                "
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Links */}

        {[
          "Important Links",
          "Services",
          "Support",
        ].map((title) => (
          <div key={title}>
            <h3
              className="
                font-bold
                text-slate-900

                dark:text-white
              "
            >
              {title}
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "About",
                "Help Center",
                "Contact",
                "Privacy",
              ].map((item) => (
                <p
                  key={item}
                  className="
                    cursor-pointer

                    text-sm
                    text-slate-500

                    transition-all duration-300

                    hover:text-blue-700

                    dark:text-slate-400
                    dark:hover:text-blue-400
                  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Help Card */}

        <div
          className="
            rounded-[28px]

            border border-white/60

            bg-white/80

            p-6

            shadow-sm

            dark:border-slate-700/40
            dark:bg-slate-800/70
          "
        >
          <h3
            className="
              text-lg font-bold
              text-slate-900

              dark:text-white
            "
          >
            Need Help?
          </h3>

          <p
            className="
              mt-3

              font-medium
              text-red-500
            "
          >
            Police Helpline: 112
          </p>

          <button
            className="
              mt-5

              rounded-2xl

              bg-gradient-to-r
              from-blue-900
              to-blue-700

              px-5 py-3

              font-semibold
              text-white

              transition-all duration-300

              hover:scale-105
            "
          >
            Chat With Us
          </button>
        </div>
      </div>
    </footer>
  );
}