import Image from "next/image";

interface Props {
  title: string;
  location: string;
  salary: string;
  image: string;
}

export default function JobCard({
  title,
  location,
  salary,
  image,
}: Props) {
  return (
    <div className="rounded-[30px] bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex gap-5">
          <Image
            src={image}
            alt=""
            width={80}
            height={80}
          />

          <div>
            <h3 className="text-3xl font-black text-[#1b2452]">
              {title}
            </h3>

            <p className="mt-2 text-lg text-gray-500">
              {location}
            </p>

            <p className="mt-4 text-3xl font-black text-green-600">
              {salary}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="rounded-xl border border-green-400 px-8 py-3 font-semibold text-green-600">
            Call
          </button>

          <button className="rounded-xl border border-blue-400 px-8 py-3 font-semibold text-blue-600">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}