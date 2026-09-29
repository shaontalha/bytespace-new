import GlowBackground from "@/components/ui/GlowBackground";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonialGlows, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <div className="relative overflow-hidden bg-[#fafafb]">
      <GlowBackground ellipses={testimonialGlows} />

      <section className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pb-14 pt-12 md:px-10 lg:gap-[72px] lg:pt-[74px] xl:px-16 min-[1440px]:px-[118px]">
        {/* Heading (left) + description (right) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-black md:text-[44px]">
            Discover What Our
            <br className="hidden md:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-badge lg:w-[572px] lg:shrink-0 lg:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards: 374px wide, 41px gap at 1440px */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 xl:gap-[41px]">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}