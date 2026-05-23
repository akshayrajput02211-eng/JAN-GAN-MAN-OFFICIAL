import BottomNav from "@/components/dukanshared/bottom-nav/BottomNav";

export default function DukaanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-32">
      {children}

      <BottomNav />
    </div>
  );
}