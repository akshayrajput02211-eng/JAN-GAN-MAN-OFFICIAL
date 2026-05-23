import Container from "../container/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black text-green-700">
              Dukaan
            </h2>

            <p className="mt-4 text-slate-500 leading-relaxed">
              Apne gaon ki apni dukaan.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-5">Company</h4>

            <ul className="space-y-3 text-slate-500">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-5">Support</h4>

            <ul className="space-y-3 text-slate-500">
              <li>Help Center</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-5">Download App</h4>

            <div className="flex gap-4">
              <div className="w-40 h-14 rounded-2xl bg-black" />
              <div className="w-40 h-14 rounded-2xl bg-black" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}