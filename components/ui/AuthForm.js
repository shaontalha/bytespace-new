"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { socialButtons } from "@/lib/data";

export default function AuthForm({ content }) {
  const { eyebrow, title, fields, submit, social, footer } = content;

  return (
    <div className="flex flex-col rounded-3xl bg-white px-6 py-10 sm:px-10 xl:h-[784px] xl:px-[63px] xl:pb-10 xl:pt-[56px]">
      <div className="flex flex-col gap-2">
        <p className="text-lg leading-[1.6] text-primary">{eyebrow}</p>
        <h1 className="font-heading text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
          {title}
        </h1>
      </div>

      {/* UI only: no backend, so submit does nothing yet */}
      <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-[22px]">
        {fields.map((f) => (
          <label
            key={f.name}
            className="flex flex-col gap-2 text-sm font-medium leading-[1.2] text-ink"
          >
            {f.label}
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required
              className="h-[52px] w-full rounded-xl border border-mist bg-white px-6 text-base font-normal text-ink outline-none placeholder:text-placeholder focus:border-primary"
            />
          </label>
        ))}
        <div className="flex justify-end">
          <Button type="submit">{submit}</Button>
        </div>
      </form>

      {social && (
        <div className="mt-12">
          <div className="flex items-center gap-4 text-base leading-[1.6] text-[#888888]">
            <span className="h-px flex-1 bg-line" />
            or
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            {socialButtons.map((b) => (
              <button
                key={b.id}
                type="button"
                aria-label={b.label}
                className="flex size-[72px] cursor-pointer items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition hover:bg-cloud"
              >
                <Image src={b.icon} alt="" width={40} height={40} className="size-10" />
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-auto pt-10 text-center text-base leading-[1.6] text-[#888888]">
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}