import Container from "../container/Container";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/40 bg-white/70 py-16 backdrop-blur-xl">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-[120px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-green-600" />

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Shiksha
                </h2>

                <p className="text-sm text-gray-500">
                  Learn Better
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-gray-500">
              Smart premium AI education platform for modern students.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-500">
              <p>Home</p>
              <p>Teachers</p>
              <p>Notes</p>
              <p>Live Classes</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Resources
            </h3>

            <div className="space-y-3 text-gray-500">
              <p>Study Material</p>
              <p>Mock Tests</p>
              <p>AI Assistant</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Newsletter
            </h3>

            <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 outline-none"
              />

              <button className="bg-green-600 px-5 text-white">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-center text-gray-500">
          © 2026 Shiksha. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}