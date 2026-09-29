import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FloatingCard from "@/components/ui/FloatingCard";
import { SearchIcon, StarIcon } from "@/components/ui/Icons";
import { heroShapes, studentAvatars } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 lg:pt-[172px]">
      {/* Grid lines */}
      <div aria-hidden className="hero-grid absolute inset-0" />

      {/* Decorative 3D shapes (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 mx-auto hidden max-w-[1440px] lg:block"
      >
        {heroShapes.map((shape, i) => (
          <Image
            key={`${shape.src}-${i}`}
            src={shape.src}
            alt=""
            width={shape.width}
            height={shape.height}
            className={`absolute h-auto ${shape.className}`}
          />
        ))}
      </div>

      {/* Text + search */}
      <Container className="relative z-10 text-center">
        <h1 className="mx-auto max-w-[935px] font-heading text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-6xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mx-auto mt-7 max-w-[819px] text-base leading-[1.6] text-mist lg:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          role="search"
          action="/search"
          className="mx-auto mt-10 flex max-w-[580px] items-center gap-3 lg:mt-[60px] lg:gap-4"
        >
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-5">
            <SearchIcon className="size-5 shrink-0 text-placeholder" />
            <input
              type="text"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg leading-[1.6] text-ink outline-none placeholder:text-placeholder"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </Container>

      {/* Student stage */}
      <div className="relative mx-auto mt-10 h-[340px] w-full max-w-[1440px] overflow-hidden lg:mt-7 lg:h-[484px]">
        {/* Big lime circle */}
        <div className="absolute left-1/2 top-[30px] aspect-square w-[640px] -translate-x-1/2 rounded-full bg-lime lg:top-[45px] lg:w-[1120px]" />

        {/* Student */}
        <Image
          src="/images/hero-student.png"
          alt="Smiling student with headset and laptop"
          width={460}
          height={480}
          priority
          className="absolute bottom-0 left-1/2 h-auto w-[300px] -translate-x-1/2 lg:w-[460px]"
        />

        {/* Floating cards (desktop only) */}
        <div className="hidden lg:block">
          <FloatingCard className="left-1/2 top-[99px] -ml-[316px] w-[208px]">
            <p className="text-base font-medium leading-[1.2] text-ink">
              UI/UX Design
            </p>
            <p className="mt-1 flex items-center gap-2 text-xs leading-[1.6] text-muted">
              200 Courses
              <span className="size-[3px] rounded-full bg-muted" />
              1000+ Students
            </p>
          </FloatingCard>

          <FloatingCard className="left-1/2 top-[111px] ml-[122px] w-[232px]">
            <p className="text-sm font-medium leading-[1.2] text-ink">
              Learning Progress
            </p>
            <p className="mt-2 font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
              55%
            </p>
            <div className="mt-2 h-2 rounded-full bg-mist">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </FloatingCard>

          <FloatingCard className="left-1/2 top-[297px] -ml-[392px] w-[258px]">
            <p className="text-base font-medium leading-[1.2] text-ink">
              Happy Students
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs leading-[1.6] text-ink">
              4.5 <span className="text-muted">(240)</span>
              <StarIcon />
            </p>
            <div className="mt-2 flex items-center">
              {studentAvatars.map((a) => (
                <Image
                  key={a.id}
                  src={a.src}
                  alt={a.alt}
                  width={40}
                  height={40}
                  className="-ml-2 size-9 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}
              <span className="-ml-2 flex size-10 items-center justify-center rounded-full bg-lime text-xs font-medium text-ink">
                2K+
              </span>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}