

interface Props {
  children: React.ReactNode;
}

export default function MainContainer({
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
}