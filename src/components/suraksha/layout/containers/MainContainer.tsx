export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8 space-y-8">
      {children}
    </div>
  );
}