import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import FloatingCard from "@/components/ui/FloatingCard";
import LearningProgress from "@/components/ui/LearningProgress";
import ScaledStage from "@/components/ui/ScaledStage";
import SectionHeading from "@/components/ui/SectionHeading";
import Stat from "@/components/ui/Stat";
import { courses, growthStats } from "@/lib/data";

export default function GrowthPath() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Left block: 574px wide, 40px gaps */}
      <div className="flex max-w-[574px] flex-col gap-10">
        <SectionHeading
          align="left"
          gap="gap-10"
          title={
            <>
              Your Path to Professional
              <br className="hidden md:block" /> Growth Starts Here!
            </>
          }
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
        />
        <div className="flex gap-14">
          {growthStats.map((s) => (
            <Stat key={s.id} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Right block: reuses CourseCard, hero-student and LearningProgress */}
      <ScaledStage
        width={577}
        height={552}
        className="mx-auto [--s:0.55] sm:[--s:0.8] md:[--s:1] lg:mx-0 lg:justify-self-end lg:[--s:0.75] xl:[--s:0.9] min-[1440px]:[--s:1]"
      >
        <div className="absolute left-0 top-0 w-[373px]">
          <CourseCard course={courses[0]} />
        </div>

        <Image
  src="/images/hero-student.png"
  alt="Smiling student with headset and laptop"
  width={577}
  height={540}
  className="shadow-boy absolute left-0 top-[12px] z-10 h-[540px] w-[577px] object-contain"
/>

        <FloatingCard className="left-[345px] top-[213px] w-[232px]">
          <LearningProgress />
        </FloatingCard>

        <Image
          src="/images/squiggle-lime-1.png"
          alt=""
          aria-hidden
          width={125}
          height={163}
          className="absolute left-[452px] top-[92px] z-40 h-auto w-[125px]"
        />
      </ScaledStage>
    </div>
  );
}