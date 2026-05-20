import Image from "next/image";

import cloud from "@/assets/ai-sahayak/cloud-2.png";

export default function CloudTwo() {
  return (
    <Image
      src={cloud}
      alt=""
      className="absolute right-10 top-20 w-40"
    />
  );
}