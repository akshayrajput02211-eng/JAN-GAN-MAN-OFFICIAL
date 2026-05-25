import {
  Briefcase,
  Store,
  Heart,
  Leaf,
  GraduationCap,
  Shield,
  Landmark,
  Bot,
  Bell,
  ShieldCheck,
  Award,
  Lock,
  Apple,
} from "lucide-react";

import Link from "next/link";

const services = [
  { label: "Naukri", href: "/naukri", icon: Briefcase },
  { label: "Dukaan", href: "/dukaan", icon: Store },
  { label: "Swasthya", href: "/swasthya", icon: Heart },
  { label: "Krishi", href: "/krishi", icon: Leaf },
  { label: "Shiksha", href: "/shiksha", icon: GraduationCap },
  { label: "Suraksha", href: "/suraksha", icon: Shield },
  { label: "Sarkari Seva", href: "/sarkari-seva", icon: Landmark },
  { label: "AI Sahayak", href: "/ai-sahayak", icon: Bot },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Press kit", href: "/press" },
  { label: "Partners", href: "/partners" },
];

const helpLinks = [
  { label: "Help center", href: "/help" },
  { label: "Contact us", href: "/contact" },
  { label: "Community", href: "/community" },
  { label: "Status", href: "/status" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Cookie policy", href: "/cookies" },
  { label: "Grievance officer", href: "/grievance" },
  { label: "Refund policy", href: "/refund" },
];

const trustBadges = [
  { label: "ISO 27001", icon: ShieldCheck },
  { label: "MeitY Registered", icon: Award },
  { label: "SSL Secured", icon: Lock },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
      </svg>
    ),
  },
];

export function PremiumFooter() {
  return (
    <footer
      className="relative overflow-hidden mt-24 rounded-t-[42px] text-white"
      style={{
        background:
          "linear-gradient(160deg, #052e16 0%, #0a3d1f 30%, #0f2d3d 65%, #1a0a2e 100%)",
      }}
    >
      {/* TOP LINE */}

      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f6b21a80, #16a34a80, transparent)",
        }}
      />

      {/* GLOW EFFECTS */}

      <div
        className="pointer-events-none absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full opacity-20"
        style={{
          background: "#16a34a",
          filter: "blur(120px)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 -right-20 w-[380px] h-[380px] rounded-full opacity-15"
        style={{
          background: "#9333ea",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-14 md:px-10 lg:px-14">

        {/* NEWSLETTER */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-white/10
            p-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          style={{
            background: "rgba(246,178,26,0.07)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
              "
              style={{
                background: "rgba(246,178,26,0.18)",
              }}
            >
              <Bell
                className="h-5 w-5"
                style={{
                  color: "#f6b21a",
                }}
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Updates paate raho
              </p>

              <p
                className="text-xs"
                style={{
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Naukri, yojana aur app updates
              </p>
            </div>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <input
              type="text"
              placeholder="Phone ya email"
              className="
                flex-1
                rounded-lg
                px-3
                py-2
                text-sm
                text-white
                outline-none
              "
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />

            <button
              className="
                shrink-0
                rounded-lg
                px-4
                py-2
                text-sm
                font-semibold
              "
              style={{
                background: "#f6b21a",
                color: "#0f172a",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-10
            pb-12

            md:grid-cols-4
          "
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* BRAND */}

          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[10px]
                  text-sm
                  font-bold
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                }}
              >
                JGM
              </div>

              <span className="text-base font-medium tracking-tight text-white">
                Jan Gan Man
              </span>
            </Link>

            <p
              className="
                mb-6
                max-w-[210px]
                text-[13.5px]
                leading-[1.75]
              "
              style={{
                color: "rgba(255,255,255,0.52)",
              }}
            >
              India ka pehla rural super app — naukri, swasthya,
              krishi aur zyada, sab ek jagah.
            </p>

            {/* APP BUTTONS */}

            <div className="flex flex-col gap-3">
              
              <a
                href="#"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3.5
                  py-2.5
                "
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.13)",
                }}
              >
                <Apple
                  className="h-5 w-5"
                  style={{
                    color: "#f6b21a",
                  }}
                />

                <div>
                  <p
                    className="text-[10px]"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    Download on the
                  </p>

                  <p className="text-[13px] font-medium text-white">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3.5
                  py-2.5
                "
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.13)",
                }}
              >
                <div
                  className="h-5 w-5 rounded-full"
                  style={{
                    background: "#f6b21a",
                  }}
                />

                <div>
                  <p
                    className="text-[10px]"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    Get it on
                  </p>

                  <p className="text-[13px] font-medium text-white">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <p
              className="
                mb-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.08em]
              "
              style={{
                color: "#f6b21a",
              }}
            >
              Services
            </p>

            <ul className="flex flex-col gap-2.5">
              {services.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      flex
                      items-center
                      gap-2
                      text-[13.5px]
                      transition
                      hover:text-white
                    "
                    style={{
                      color: "rgba(255,255,255,0.58)",
                    }}
                  >
                    <Icon
                      className="h-[14px] w-[14px]"
                      style={{
                        color: "#16a34a",
                      }}
                    />

                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}

          <div>
            <p
              className="
                mb-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.08em]
              "
              style={{
                color: "#f6b21a",
              }}
            >
              Company
            </p>

            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      text-[13.5px]
                      transition
                      hover:text-white
                    "
                    style={{
                      color: "rgba(255,255,255,0.58)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}

          <div>
            <p
              className="
                mb-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.08em]
              "
              style={{
                color: "#f6b21a",
              }}
            >
              Help
            </p>

            <ul className="flex flex-col gap-2.5">
              {helpLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      text-[13.5px]
                      transition
                      hover:text-white
                    "
                    style={{
                      color: "rgba(255,255,255,0.58)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            gap-4
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="text-[12.5px]"
            style={{
              color: "rgba(255,255,255,0.38)",
            }}
          >
            © 2026 Jan Gan Man Technologies Pvt. Ltd.
          </span>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.50)",
                }}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}