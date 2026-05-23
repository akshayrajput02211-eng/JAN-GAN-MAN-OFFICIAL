

import Image from "next/image";
import { Send } from "lucide-react";

export default function AIAssistant() {
  return (
    <section className="py-14">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="
        grid
        lg:grid-cols-2
        gap-8
        ">

          <div className="
          glass
          rounded-[40px]
          p-8
          glow-green
          relative overflow-hidden
          ">

            <div className="
            absolute
            -top-20
            -right-20
            w-60 h-60
            bg-green-300/20
            rounded-full
            blur-[100px]
            " />

            <div className="
            relative z-10
            flex items-center gap-8
            ">

              <Image
                src="/dummy/robot.png"
                alt="robot"
                width={180}
                height={180}
              />

              <div className="flex-1">

                <h2 className="
                text-4xl
                font-black
                ">
                  AI Sahayak
                </h2>

                <p className="
                mt-3
                text-slate-600
                ">
                  Ask anything about yojna,
                  jobs and documents.
                </p>

                <div className="
                mt-6
                glass
                rounded-2xl
                p-3
                flex items-center
                gap-3
                ">

                  <input
                    placeholder="Ask AI..."
                    className="
                    flex-1
                    bg-transparent
                    outline-none
                    "
                  />

                  <button className="
                  w-12 h-12
                  rounded-xl
                  bg-green-500
                  text-white
                  flex items-center justify-center
                  ">
                    <Send size={18} />
                  </button>

                </div>

              </div>

            </div>

          </div>

          <div className="
          glass
          rounded-[40px]
          p-8
          glow-blue
          ">

            <h2 className="
            text-3xl
            font-black
            mb-8
            ">
              Quick Tools
            </h2>

            <div className="
            grid
            grid-cols-2
            gap-5
            ">

              {[
                "Eligibility",
                "Age Calculator",
                "Loan EMI",
                "Document Check",
              ].map((tool) => (
                <div
                  key={tool}
                  className="
                  bg-white
                  rounded-3xl
                  p-6
                  text-center
                  card-hover
                  "
                >
                  <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-green-100
                  mx-auto mb-4
                  " />

                  <p className="font-semibold">
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