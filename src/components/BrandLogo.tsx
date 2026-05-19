import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">

             {/* LEFT */}
      
      
        {/* LOGO */}
        <div className="relative w-14 h-14 md:w-20 md:h-20">
      
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            fill
            className="object-contain"/>
          
      
        </div>
      
        {/* TEXT */}
        <h1
          className="
            text-lg
            md:text-2xl
      
            font-black
            text-green-700
      
            whitespace-nowrap
            leading-none
          "
        >
          JAN GAN MAN
        </h1>
      
      </div>
      
  );
}