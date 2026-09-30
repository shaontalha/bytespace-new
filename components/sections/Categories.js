import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { learningCategories } from "@/lib/data";

export default function Categories() {
  return (
    <Section className="pb-16 pt-12 md:pb-[120px] md:pt-[72px]">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-6 xl:gap-10">
        {learningCategories.map((cat) => (
          <div
            key={cat.id}
            className="mx-auto flex aspect-square w-full max-w-[167px] flex-col items-center justify-center gap-2 rounded-3xl border border-line bg-white text-center"
          >
            <Image src={cat.icon} alt="" width={60} height={60} className="size-[60px]" />
            <p className="text-base font-medium leading-[1.2] text-ink xl:text-xl">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}