import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeLayer from "@/components/ui/ShapeLayer";
import { ctaShapes } from "@/lib/data";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <ShapeLayer shapes={ctaShapes} className="hidden xl:block" />

      <div className="relative z-10 mx-auto flex min-h-[488px] max-w-[1440px] flex-col items-center justify-center gap-10 px-5 py-16 text-center">
        <SectionHeading
          tone="light"
          gap="gap-10"
          descWidth="max-w-[960px]"
          title={
            <>
              Unlock Your Potential as a
              <br className="hidden md:block" /> Creator with ByteSpace
            </>
          }
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <Button href="/signup">Join as Creator</Button>
      </div>
    </section>
  );
}