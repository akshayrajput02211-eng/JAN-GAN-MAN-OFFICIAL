// ================================
// components/layout/footer/Footer.tsx
// ================================

import Container from "../container/Container";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-24
        overflow-hidden
        border-t
        border-white/40
        bg-white/70
        py-16
        backdrop-blur-xl

        dark:border-slate-700/40
        dark:bg-slate-900/80
      "
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-[120px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          {/* ================= BRAND ================= */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  text-xl
                  font-black
                  text-white
                "
              >
                S
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-black
                    text-gray-900

                    dark:text-white
                  "
                >
                  Shiksha
                </h2>

                <p
                  className="
                    text-sm
                    text-gray-500

                    dark:text-slate-400
                  "
                >
                  Learn Better
                </p>
              </div>
            </div>

            <p
              className="
                leading-relaxed
                text-gray-500

                dark:text-slate-400
              "
            >
              Smart premium AI education platform for modern students.
            </p>
          </div>

          {/* ================= LINKS ================= */}

          <div>
            <h3
              className="
                mb-5
                text-lg
                font-bold

                dark:text-white
              "
            >
              Quick Links
            </h3>

            <div
              className="
                space-y-3
                text-gray-500

                dark:text-slate-400
              "
            >
              <p>Home</p>
              <p>Teachers</p>
              <p>Notes</p>
              <p>Live Classes</p>
            </div>
          </div>

          {/* ================= RESOURCES ================= */}

          <div>
            <h3
              className="
                mb-5
                text-lg
                font-bold

                dark:text-white
              "
            >
              Resources
            </h3>

            <div
              className="
                space-y-3
                text-gray-500

                dark:text-slate-400
              "
            >
              <p>Study Material</p>
              <p>Mock Tests</p>
              <p>AI Assistant</p>
              <p>Support</p>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}

          <div>
            <h3
              className="
                mb-5
                text-lg
                font-bold

                dark:text-white
              "
            >
              Newsletter
            </h3>

            <div
              className="
                flex
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white

                dark:border-slate-600
                dark:bg-slate-700
              "
            >
              <input
                type="email"
                placeholder="Enter email"
                className="
                  w-full
                  bg-transparent
                  px-4
                  py-3
                  outline-none

                  dark:text-white
                  dark:placeholder:text-slate-300
                "
              />

              <button
                className="
                  bg-blue-600
                  px-5
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-16
            border-t
            border-gray-200
            pt-6
            text-center
            text-gray-500

            dark:border-slate-700
            dark:text-slate-400
          "
        >
          © 2026 Shiksha. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}