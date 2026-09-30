import CreatorTools from "@/components/sections/CreatorTools";
import GrowthPath from "@/components/sections/GrowthPath";
import GlowBackground from "@/components/ui/GlowBackground";
import Section from "@/components/ui/Section";

export default function Growth() {
  return (
    <div className="relative overflow-hidden bg-[#fafafb]">
      <GlowBackground />
      <Section className="relative flex flex-col gap-10 py-16 md:py-[120px] lg:gap-[63px]">
        <GrowthPath />
        <CreatorTools />
      </Section>
    </div>
  );
}