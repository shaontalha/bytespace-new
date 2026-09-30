import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import HappyStudents from "@/components/ui/HappyStudents";
import ScaledStage from "@/components/ui/ScaledStage";
import { courses } from "@/lib/data";

export default function AuthShowcase() {
  return (
    <ScaledStage width={548} height={585} className="-ml-6 [--s:1]">
      {/* Back card */}
      <div className="absolute left-[22px] top-[83px] w-[373px]">
        <CourseCard course={courses[1]} />
      </div>

      {/* Front card */}
      <div className="absolute left-[132px] top-0 z-10 w-[373px]">
        <CourseCard course={courses[2]} />
      </div>

      <Image
        src="/images/auth-lime-ring.png"
        alt=""
        aria-hidden
        width={112}
        height={112}
        className="absolute left-[72px] top-[34px] z-20 h-auto w-[112px]"
      />

      <Image
        src="/images/shape-white-squiggle.png"
        alt=""
        aria-hidden
        width={114}
        height={114}
        className="absolute left-[396px] top-[338px] z-30 h-auto w-[114px]"
      />

      <Image
        src="/images/cta-lime-pyramid.png"
        alt=""
        aria-hidden
        width={124}
        height={140}
        className="absolute left-[21px] top-[407px] z-20 h-auto w-[124px]"
      />

      <div className="absolute left-[245px] top-[422px] z-20 w-[254px] rounded-xl bg-lime p-4">
        <HappyStudents dark />
      </div>
    </ScaledStage>
  );
}