import LegalLayout from "@/components/legal/LegalLayout";

import LegalSection from "@/components/legal/LegalSection";

import LegalFooter from "@/components/legal/LegalFooter";

const sections = [
  {
    id: "collection",
    title: "Information Collection",
  },
  {
    id: "usage",
    title: "How We Use Data",
  },
  {
    id: "security",
    title: "Data Security",
  },
  {
    id: "sharing",
    title: "Data Sharing",
  },
  {
    id: "cookies",
    title: "Cookies",
  },
  {
    id: "rights",
    title: "User Rights",
  },
  {
    id: "retention",
    title: "Data Retention",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updatedAt="25 May 2026"
      sections={sections}
    >
      {/* ================= COLLECTION ================= */}

      <LegalSection
        id="collection"
        number={1}
        title="Information Collection"
      >
        <p>
          Hum naam, mobile number,
          email address aur service
          related information collect
          kar sakte hain.
        </p>

        <p>
          Yeh information account
          creation aur better user
          experience provide karne
          ke liye use hoti hai.
        </p>
      </LegalSection>

      {/* ================= USAGE ================= */}

      <LegalSection
        id="usage"
        number={2}
        title="How We Use Data"
      >
        <p>
          Collected data ka use
          personalization, customer
          support aur service
          improvements ke liye kiya
          jata hai.
        </p>

        <p>
          Hum analytics aur platform
          optimization ke liye bhi
          anonymous data use kar
          sakte hain.
        </p>
      </LegalSection>

      {/* ================= SECURITY ================= */}

      <LegalSection
        id="security"
        number={3}
        title="Data Security"
      >
        <p>
          User information encrypted
          servers aur secure systems
          ke through protect ki jati
          hai.
        </p>

        <p>
          Unauthorized access ko
          prevent karne ke liye
          security monitoring aur
          authentication methods
          use kiye jate hain.
        </p>
      </LegalSection>

      {/* ================= SHARING ================= */}

      <LegalSection
        id="sharing"
        number={4}
        title="Data Sharing"
      >
        <p>
          User data bina permission
          kisi third-party advertiser
          ko sell nahi kiya jayega.
        </p>

        <p>
          Legal compliance ya service
          integration ke cases me
          limited data sharing ho
          sakti hai.
        </p>
      </LegalSection>

      {/* ================= COOKIES ================= */}

      <LegalSection
        id="cookies"
        number={5}
        title="Cookies"
      >
        <p>
          Website performance aur
          personalized experience
          improve karne ke liye
          cookies use kiye ja sakte
          hain.
        </p>

        <p>
          Users browser settings se
          cookies disable bhi kar
          sakte hain.
        </p>
      </LegalSection>

      {/* ================= RIGHTS ================= */}

      <LegalSection
        id="rights"
        number={6}
        title="User Rights"
      >
        <p>
          Users apne personal data ko
          access, modify aur delete
          karne ka request bhej sakte
          hain.
        </p>

        <p>
          Aap kisi bhi samay account
          deletion request bhi submit
          kar sakte hain.
        </p>
      </LegalSection>

      {/* ================= RETENTION ================= */}

      <LegalSection
        id="retention"
        number={7}
        title="Data Retention"
      >
        <p>
          User data sirf utne samay
          tak retain kiya jayega
          jitna operational aur legal
          purposes ke liye zaruri ho.
        </p>

        <p>
          Expired ya unnecessary data
          securely remove kar diya
          jayega.
        </p>
      </LegalSection>

      {/* ================= CONTACT ================= */}

      <LegalSection
        id="contact"
        number={8}
        title="Contact Us"
      >
        <p>
          Privacy related concerns ke
          liye humse contact karein:
        </p>

        <div
          className="
            mt-5
            rounded-3xl
            border
            border-[#16a34a]/20
            bg-[#16a34a]/5
            p-5

            dark:border-[#16a34a]/20
            dark:bg-[#16a34a]/10
          "
        >
          <p
            className="
              text-sm
              font-semibold
              text-slate-700

              dark:text-slate-300
            "
          >
            📧 privacy@jangandman.in
          </p>

          <p
            className="
              mt-2
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            Support Team — JAN GAN MAN
          </p>
        </div>
      </LegalSection>

      {/* ================= FOOTER ================= */}

      <LegalFooter />
    </LegalLayout>
  );
}