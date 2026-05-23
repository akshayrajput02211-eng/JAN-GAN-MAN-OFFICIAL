type Props = {
  params: {
    slug: string;
  };
};

export default function UpdateDetailsPage({
  params,
}: Props) {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-black">
        {params.slug}
      </h1>
    </div>
  );
}