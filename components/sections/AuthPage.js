import Image from "next/image";
import Link from "next/link";
import AuthForm from "@/components/ui/AuthForm";
import AuthShowcase from "@/components/ui/AuthShowcase";
import Section from "@/components/ui/Section";

export default function AuthPage({ content }) {
  const { side } = content;

  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      <div aria-hidden className="hero-grid absolute inset-0" />

      <Section className="relative">
        {/* Header: logo only. Logo top = 35px, header ends at 120px (heading starts there) */}
        <header className="h-[100px] pt-[35px] xl:h-[120px]">
          <Link href="/" aria-label="ByteSpace home" className="block w-fit">
            <Image
              src="/images/logo-icon.svg"
              alt="ByteSpace"
              width={58}
              height={63}
              priority
              className="block h-[31.5px] w-[28.875px] object-contain"
            />
          </Link>
        </header>

        <div className="grid items-start gap-10 pb-16 xl:grid-cols-[1fr_579px] xl:pb-[120px]">
          {/* Left: text + card showcase (showcase hidden below 1280px) */}
          <div>
            <div className="flex max-w-[475px] flex-col gap-4">
              <h2 className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-cloud">
                {side.heading}
              </h2>
              <p className="text-lg leading-[1.6] text-cloud">{side.text}</p>
            </div>
            <div className="mt-[58px] hidden xl:block">
              <AuthShowcase />
            </div>
          </div>

          {/* Right: form card */}
          <AuthForm content={content} />
        </div>
      </Section>
    </div>
  );
}