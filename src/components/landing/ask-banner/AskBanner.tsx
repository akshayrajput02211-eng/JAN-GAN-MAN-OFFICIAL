import { Mic } from "lucide-react";

type AskBannerProps = {
  className?: string;
};

export function AskBanner({ className = "" }: AskBannerProps) {
  const bannerClassName = ["ask-strip", className].filter(Boolean).join(" ");

  return (
    <section className={bannerClassName} aria-label="AI assistant">
      <div className="bot" aria-hidden="true">
        <span className="antenna" />
        <span className="bot-face">
          <i />
          <i />
        </span>
        <span className="bot-hand" />
      </div>
      <div>
        <h2>Bolkar poochho apna sawaal</h2>
        <p>AI Sahayak hamesha aapke saath hai</p>
      </div>
      <button type="button">
        Bolkar Poochen
        <Mic aria-hidden="true" />
      </button>
    </section>
  );
}