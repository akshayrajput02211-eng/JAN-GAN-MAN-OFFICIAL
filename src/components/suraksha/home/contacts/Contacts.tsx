import ContactItem from "./ContactItem";

export default function Contacts() {
  return (
    <section
      className="
        rounded-[32px]

        border border-white/70

        bg-white/70

        p-6

        backdrop-blur-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <h2
        className="
          text-2xl font-black
          text-slate-900

          dark:text-white
        "
      >
        Quick Contacts
      </h2>

      <div className="mt-6 space-y-4">
        <ContactItem
          name="SHO Rampur"
          number="+91 9876543210"
        />

        <ContactItem
          name="Village Head"
          number="+91 9876543211"
        />
      </div>
    </section>
  );
}