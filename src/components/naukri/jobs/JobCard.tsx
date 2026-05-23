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
    <div
      className="
        rounded-[28px]

        bg-white

        p-5
        sm:p-6
        lg:p-8

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            flex
            items-start

            gap-4
            lg:gap-5
          "
        >
          {/* IMAGE */}

          <div
            className="
              flex
              items-center
              justify-center

              rounded-2xl

              bg-[#f5f7fb]

              p-2
            "
          >
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="
                h-[65px]
                w-[65px]

                lg:h-[80px]
                lg:w-[80px]

                object-contain
              "
            />
          </div>

          {/* CONTENT */}

          <div>
            <h3
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl

                font-black

                leading-tight

                text-[#1b2452]
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2

                text-sm
                sm:text-base
                lg:text-lg

                text-gray-500
              "
            >
              {location}
            </p>

            <p
              className="
                mt-4

                text-2xl
                sm:text-3xl
                lg:text-4xl

                font-black

                text-green-600
              "
            >
              {salary}
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div
          className="
            flex
            gap-3

            lg:flex-col
          "
        >
          {/* CALL BUTTON */}

          <button
            className="
              flex-1
              lg:flex-none

              rounded-2xl

              border
              border-green-400

              bg-green-50

              px-5
              py-3

              lg:px-8
              lg:py-4

              text-sm
              sm:text-base

              font-bold

              text-green-600

              transition-all
              duration-300

              hover:bg-green-500
              hover:text-white
            "
          >
            Call
          </button>

          {/* MESSAGE BUTTON */}

          <button
            className="
              flex-1
              lg:flex-none

              rounded-2xl

              border
              border-blue-400

              bg-blue-50

              px-5
              py-3

              lg:px-8
              lg:py-4

              text-sm
              sm:text-base

              font-bold

              text-blue-600

              transition-all
              duration-300

              hover:bg-blue-500
              hover:text-white
            "
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}