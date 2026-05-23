import ContactItem from "./ContactItem";

export default function Contacts() {
  return (
    <section className="rounded-[32px] bg-white/70 p-6 backdrop-blur-xl">
      <h2 className="text-2xl font-black">
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