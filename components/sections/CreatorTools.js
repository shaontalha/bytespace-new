import Image from "next/image";
import FloatingCard from "@/components/ui/FloatingCard";
import HappyStudents from "@/components/ui/HappyStudents";
import { CheckCircleIcon } from "@/components/ui/Icons";
import MetricCard from "@/components/ui/MetricCard";
import ScaledStage from "@/components/ui/ScaledStage";
import SectionHeading from "@/components/ui/SectionHeading";
import { creatorPerks } from "@/lib/data";

export default function CreatorTools() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <ScaledStage
        width={541}
        height={605}
        className="order-2 mx-auto [--s:0.6] sm:[--s:0.85] md:[--s:1] lg:order-1 lg:mx-0 lg:[--s:0.8] xl:[--s:0.95] min-[1440px]:[--s:1]"
      >
        <MetricCard
          className="left-0 top-[53px] w-[232px]"
          title="Total Revenue"
          subtitle="July 1-28"
          value="$120.29"
          progress={65}
        />
        <MetricCard
          className="left-0 top-[203px] w-[134px]"
          title="Year to Date"
          subtitle="2023"
          value="$1,200.38"
          badge="+12$"
        />

        <Image
  src="/images/creator-woman.png"
  alt="Smiling creator with headphones and tablet"
  width={435}
  height={596}
  className="shadow-girl absolute left-[28px] top-[9px] z-10 h-[596px] w-[435px] object-contain"
/>

        <Image
          src="/images/squiggle-lime-2.png"
          alt=""
          aria-hidden
          width={140}
          height={152}
          className="absolute left-[339px] top-[158px] z-20 h-auto w-[140px]"
        />

        <FloatingCard className="left-[283px] top-[422px] w-[258px]">
          <HappyStudents />
        </FloatingCard>
      </ScaledStage>

      <div className="order-1 flex max-w-[574px] flex-col gap-10 lg:order-2 lg:justify-self-end">
        <SectionHeading
          align="left"
          gap="gap-10"
          title={
            <>
              Create &amp; Manage
              <br className="hidden md:block" /> Courses Easily.
            </>
          }
          description={
            <>
              <span className="font-bold text-ink">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </>
          }
        />
        <ul className="flex flex-col gap-4">
          {creatorPerks.map((perk) => (
            <li
              key={perk}
              className="flex items-center gap-2.5 text-lg font-medium leading-[1.2] text-ink"
            >
              <CheckCircleIcon className="shrink-0 text-primary" />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}