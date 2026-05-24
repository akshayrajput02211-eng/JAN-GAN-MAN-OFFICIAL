import Image from "next/image";
import { Send } from "lucide-react";

export default function AIAssistant() {
  return (
    <section className="py-14 bg-[#fef3c7] dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          "
        >

          {/* AI Assistant Card */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-amber-200/60
            dark:border-slate-700/60
            bg-white/70
            dark:bg-slate-900/70
            backdrop-blur-xl
            p-8
            shadow-xl
            "
          >

            {/* Glow */}
            <div
              className="
              absolute
              -top-20
              -right-20
              w-60
              h-60
              rounded-full
              bg-orange-400/20
              blur-[100px]
              "
            />

            <div
              className="
              relative
              z-10
              flex
              flex-col
              md:flex-row
              items-center
              gap-8
              "
            >

              <Image
                src="/dummy/robot.png"
                alt="robot"
                width={180}
                height={180}
                className="drop-shadow-2xl"
              />

              <div className="flex-1 w-full">

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  dark:bg-slate-700
                  text-amber-700
                  dark:text-amber-300
                  text-sm
                  font-semibold
                  shadow-md
                  "
                >
                  AI Powered Assistant
                </div>

                <h2
                  className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-black
                  text-slate-900
                  dark:text-white
                  leading-tight
                  "
                >
                  AI Sahayak
                </h2>

                <p
                  className="
                  mt-4
                  text-slate-600
                  dark:text-slate-300
                  text-lg
                  leading-relaxed
                  "
                >
                  Ask anything about yojna,
                  government jobs, forms,
                  documents and services instantly.
                </p>

                {/* Input */}
                <div
                  className="
                  mt-7
                  rounded-2xl
                  border
                  border-amber-200/60
                  dark:border-slate-700/60
                  bg-white/80
                  dark:bg-slate-800/80
                  backdrop-blur-xl
                  p-3
                  flex
                  items-center
                  gap-3
                  shadow-lg
                  "
                >

                  <input
                    placeholder="Ask AI anything..."
                    className="
                    flex-1
                    bg-transparent
                    outline-none
                    text-slate-800
                    dark:text-white
                    placeholder:text-slate-400
                    "
                  />

                  <button
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#d97706]
                    hover:bg-[#f97316]
                    transition-all
                    duration-300
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    hover:scale-105
                    "
                  >
                    <Send size={18} />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Quick Tools */}
          <div
            className="
            rounded-[40px]
            border
            border-amber-200/60
            dark:border-slate-700/60
            bg-white/70
            dark:bg-slate-900/70
            backdrop-blur-xl
            p-8
            shadow-xl
            "
          >

            <div className="flex items-center justify-between mb-8">

              <div>

                <div
                  className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  dark:bg-slate-700
                  text-amber-700
                  dark:text-amber-300
                  text-sm
                  font-semibold
                  shadow-md
                  "
                >
                  Smart Utilities
                </div>

                <h2
                  className="
                  mt-4
                  text-3xl
                  md:text-4xl
                  font-black
                  text-slate-900
                  dark:text-white
                  "
                >
                  Quick Tools
                </h2>

              </div>

            </div>

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              "
            >

              {[
                "Eligibility",
                "Age Calculator",
                "Loan EMI",
                "Document Check",
              ].map((tool) => (
                <div
                  key={tool}
                  className="
                  group
                  rounded-3xl
                  border
                  border-amber-100
                  dark:border-slate-700
                  bg-white
                  dark:bg-slate-800
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  cursor-pointer
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#d97706]
                    to-[#f97316]
                    mx-auto
                    mb-4
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                    "
                  >
                    <div className="w-6 h-6 rounded-full bg-white/80" />
                  </div>

                  <p
                    className="
                    font-bold
                    text-slate-800
                    dark:text-white
                    "
                  >
                    {tool}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}