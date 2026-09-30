import Image from "next/image";
import { partnerLogos } from "@/lib/data";

export default function Partners() {
  return (
    <section className="bg-cloud">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-5 py-12 lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:px-10 lg:py-16 xl:px-16 min-[1440px]:gap-x-[72px] min-[1440px]:px-[154px] min-[1440px]:py-20">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            width={170}
            height={40}
            className="h-8 w-auto lg:h-7 xl:h-8 min-[1440px]:h-10"
          />
        ))}
      </div>
    </section>
  );
}