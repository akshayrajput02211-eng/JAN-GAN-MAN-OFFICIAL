interface Props {
  children: React.ReactNode;
}

export default function IconButton({
  children,
}: Props) {
  return (
    <button className="rounded-full p-3 shadow-lg">
      {children}
    </button>
  );
}