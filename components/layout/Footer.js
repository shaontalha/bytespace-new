import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { footerColumns, legalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Section>
        <div className="flex flex-col gap-12 pt-12 lg:flex-row lg:justify-between lg:gap-[92px] lg:pt-[70px]">
          {/* Left block: logo, text, newsletter (528px wide, 45px gap) */}
          <div className="flex w-full flex-col gap-[45px] lg:w-[528px] lg:shrink-0">
            <div className="flex flex-col gap-3">
              <Link href="/" aria-label="ByteSpace home">
                <Image
                  src="/images/logo-dark.png"
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="h-auto w-[171px]"
                />
              </Link>
              <p className="text-sm leading-[1.6] text-ink">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form action="#" className="flex items-center gap-6">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] min-w-0 flex-1 rounded-full border border-line bg-white px-6 text-base text-ink outline-none placeholder:text-ink/70 focus:border-primary"
                />
                <Button type="submit">Search</Button>
              </form>
              <p className="max-w-[470px] text-xs leading-[1.6] text-ink">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right block: 3 link columns (580px wide, 40px column gap) */}
          <nav
            aria-label="Footer"
            className="grid w-full grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-[580px] lg:shrink-0 lg:self-start"
          >
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm leading-[1.6] text-ink transition hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Bottom bar: 130px below the blocks */}
        <div className="mt-12 flex flex-col gap-3 border-t border-line pb-8 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-[130px] lg:pb-12">
          <p className="text-xs leading-[1.6] text-ink">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((label) => (
              <li key={label}>
                <Link
                  href="#"
                  className="text-xs leading-[1.6] text-ink transition hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </footer>
  );
}