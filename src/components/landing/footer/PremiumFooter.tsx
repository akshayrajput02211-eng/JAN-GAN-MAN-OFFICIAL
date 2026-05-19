import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = [
  "Naukri",
  "Dukaan",
  "Sarkari Yojana",
  "Swasthya",
  "Krishi",
];

export function PremiumFooter() {
  return (
    <footer className="premium-footer">

      {/* BACKGROUND IMAGE */}
      <div className="footer-bg" />

      {/* DARK OVERLAY */}
      <div className="footer-overlay" />

      {/* CONTENT */}
      <div className="footer-content">

        {/* TOP */}
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <BrandLogo />

            <p>
              Gaon ki roz ki zaroorat,
              madad aur updates ek
              premium app experience me.
            </p>

          </div>

          {/* LINKS */}
          <div
            className="footer-links"
            aria-label="Footer services"
          >
            {footerLinks.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="footer-cta">

            <span>
              Download App

              <ArrowRight aria-hidden="true" />
            </span>

          </div>

        </div>

        {/* HIGHLIGHTS */}
        <div
          className="footer-highlights"
          aria-label="App highlights"
        >

          <span>
            <Sparkles aria-hidden="true" />
            Smart AI Sahayak
          </span>

          <span>
            <ShieldCheck aria-hidden="true" />
            Verified services
          </span>

          <span>
            <Headphones aria-hidden="true" />
            Gaon support
          </span>

        </div>

      </div>

    </footer>
  );
}