import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function StepCard({
  title,
  image,
}: Props) {
  return (
    <div className="text-center">
      <Image
        src={image}
        alt=""
        width={160}
        height={160}
        className="mx-auto"
      />

      <h3 className="mt-6 text-2xl font-black text-[#1b2452]">
        {title}
      </h3>

      <p className="mt-3 text-gray-500">
        Kaam easily complete karein.
      </p>
    </div>
  );
}