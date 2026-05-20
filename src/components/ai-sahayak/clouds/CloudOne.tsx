import Image from "next/image";

import cloud from "@/assets/ai-sahayak/cloud-1.png";

export default function CloudOne() {
  return (
    <Image
      src={cloud}
      alt=""
      className="absolute left-10 top-10 w-40"
    />
  );
}