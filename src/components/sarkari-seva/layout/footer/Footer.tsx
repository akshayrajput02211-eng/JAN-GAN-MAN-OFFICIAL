// ================================
// components/sarkari-seva/layout/footer/Footer.tsx
// ================================

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  platform: [
    "Yojna",
    "Jobs & Exam",
    "Banking",
    "Complaints",
    "News",
  ],

  resources: [
    "Form Help",
    "Document Guide",
    "Important Links",
    "Check Eligibility",
    "FAQ",
  ],

  support: [
    "Help Center",
    "Contact Us",
    "Feedback",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

      {/* TOP CTA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-10">

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-[#d97706]
          via-[#ea580c]
          to-[#f97316]
          p-8
          lg:p-12
          text-white
          shadow-2xl
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 opacity-20">

            <div
              className="
              absolute
              -top-20
              -left-10
              w-72
              h-72
              rounded-full
              bg-white
              blur-3xl
              "
            />

            <div
              className="
              absolute
              bottom-0
              right-0
              w-72
              h-72
              rounded-full
              bg-yellow-300
              blur-3xl
              "
            />

          </div>

          <div
            className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
            "
          >

            {/* LEFT */}
            <div>

              <span
                className="
                inline-flex
                items-center
                gap-2
                bg-white/20
                border
                border-white/20
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold
                mb-5
                backdrop-blur-xl
                "
              >
                🇮🇳 Digital Bharat Mission
              </span>

              <h2
                className="
                text-4xl
                lg:text-5xl
                font-black
                leading-tight
                mb-4
                "
              >
                Sabhi Sarkari
                <br />
                Services Ek Jagah
              </h2>

              <p
                className="
                text-white/80
                text-lg
                leading-relaxed
                max-w-xl
                "
              >
                Yojna, jobs, mandi bhav, scholarship,
                complaints, AI sahayak aur documents —
                sab kuch ek premium digital platform par.
              </p>

            </div>

            {/* RIGHT */}
            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              "
            >

              {[
                "50L+ Users",
                "2500+ Yojna",
                "24/7 AI Support",
                "1000+ Updates",
              ].map((item) => (
                <div
                  key={item}
                  className="
                  bg-white/10
                  border
                  border-white/20
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                  text-center
                  hover:bg-white/20
                  transition-all
                  duration-300
                  "
                >

                  <h3 className="text-3xl font-black">
                    {item.split(" ")[0]}
                  </h3>

                  <p className="text-white/80 mt-2 text-sm">
                    {item.replace(item.split(" ")[0], "")}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* MAIN FOOTER */}
      <div
        className="
        border-t
        border-orange-200/50
        dark:border-slate-800
        bg-white/80
        dark:bg-slate-900/80
        backdrop-blur-xl
        transition-colors
        duration-300
        "
      >

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-12
            "
          >

            {/* BRAND */}
            <div>

              <div className="flex items-center gap-4 mb-6">

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#d97706]
                  to-[#f97316]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  font-black
                  shadow-lg
                  "
                >
                  🇮🇳
                </div>

                <div>

                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                    Sarkari Seva
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Sabhi Sarkari Jankari Ek Jagah
                  </p>

                </div>

              </div>

              <p
                className="
                text-slate-600
                dark:text-slate-300
                leading-relaxed
                mb-6
                "
              >
                Bharat ka modern digital government
                assistance platform jahan har nagrik ko
                sahi jankari aur services ek hi jagah
                milti hain.
              </p>

            </div>

            {/* PLATFORM */}
            <div>

              <h3
                className="
                text-lg
                font-black
                mb-6
                text-slate-900
                dark:text-white
                "
              >
                Platform
              </h3>

              <div className="space-y-4">

                {footerLinks.platform.map((item) => (
                  <button
                    key={item}
                    className="
                    block
                    text-slate-600
                    dark:text-slate-300
                    hover:text-[#d97706]
                    dark:hover:text-orange-400
                    transition-colors
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* RESOURCES */}
            <div>

              <h3
                className="
                text-lg
                font-black
                mb-6
                text-slate-900
                dark:text-white
                "
              >
                Resources
              </h3>

              <div className="space-y-4">

                {footerLinks.resources.map((item) => (
                  <button
                    key={item}
                    className="
                    block
                    text-slate-600
                    dark:text-slate-300
                    hover:text-[#d97706]
                    dark:hover:text-orange-400
                    transition-colors
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* SUPPORT */}
            <div>

              <h3
                className="
                text-lg
                font-black
                mb-6
                text-slate-900
                dark:text-white
                "
              >
                Support
              </h3>

              <div className="space-y-4">

                {footerLinks.support.map((item) => (
                  <button
                    key={item}
                    className="
                    block
                    text-slate-600
                    dark:text-slate-300
                    hover:text-[#d97706]
                    dark:hover:text-orange-400
                    transition-colors
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3
                className="
                text-lg
                font-black
                mb-6
                text-slate-900
                dark:text-white
                "
              >
                Contact
              </h3>

              <div className="space-y-5">

                {/* Phone */}
                <div className="flex gap-4">

                  <div
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-orange-100
                    dark:bg-orange-500/20
                    text-[#d97706]
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Phone size={18} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Helpline
                    </p>

                    <h4 className="font-bold text-slate-800 dark:text-white">
                      1800 123 4567
                    </h4>

                  </div>

                </div>

                {/* Email */}
                <div className="flex gap-4">

                  <div
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-orange-100
                    dark:bg-orange-500/20
                    text-[#f97316]
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Mail size={18} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>

                    <h4 className="font-bold text-slate-800 dark:text-white">
                      help@sarkariseva.in
                    </h4>

                  </div>

                </div>

                {/* Location */}
                <div className="flex gap-4">

                  <div
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-orange-100
                    dark:bg-orange-500/20
                    text-orange-600
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <MapPin size={18} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Location
                    </p>

                    <h4 className="font-bold text-slate-800 dark:text-white">
                      New Delhi, India
                    </h4>

                  </div>

                </div>

                {/* Button */}
                <button
                  className="
                  mt-4
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#d97706]
                  to-[#f97316]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <MessageCircle size={18} />
                  Chat With AI Sahayak
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-orange-200/50 dark:border-slate-800">

          <div
            className="
            max-w-7xl
            mx-auto
            px-4
            lg:px-8
            py-6
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
            "
          >

            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2026 Sarkari Seva. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <button className="text-slate-500 dark:text-slate-400 hover:text-[#d97706]">
                Privacy
              </button>

              <button className="text-slate-500 dark:text-slate-400 hover:text-[#d97706]">
                Terms
              </button>

              <button className="text-slate-500 dark:text-slate-400 hover:text-[#d97706]">
                Accessibility
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}