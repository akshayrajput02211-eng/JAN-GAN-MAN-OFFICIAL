import type { UpdateItem } from "@/types/home";

type UpdatesSectionProps = {
  updates: UpdateItem[];
};

export function UpdatesSection({ updates }: UpdatesSectionProps) {
  return (
    <section className="updates" aria-labelledby="updates-title">
      <div className="section-head">
        <h2 id="updates-title">Aaj ke Zaroori Updates</h2>
        <a href="#">Sab dekhein</a>
      </div>

      <div className="updates-grid">
        {updates.map((item) => (
          <article className="update-card" key={item.title}>
            <span className={`update-icon ${item.icon}`} aria-hidden="true" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <time>{item.time}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}