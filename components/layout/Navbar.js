"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { authLinks, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-20 items-center justify-between lg:grid lg:h-[118px] lg:grid-cols-[1fr_auto_1fr]">
        {/* Logo */}
        <Link href="/" aria-label="ByteSpace home">
          <Image
            src="/images/logo.png"
            alt="ByteSpace"
            width={172}
            height={48}
            priority
            className="h-auto w-[140px] lg:w-[172px]"
          />
        </Link>

        {/* Center links (desktop) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base leading-[1.6] text-cloud transition hover:text-white ${
                pathname === link.href ? "font-medium text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side (desktop) */}
        <div className="hidden items-center justify-end gap-6 lg:flex">
          {authLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base leading-[1.6] text-cloud transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button aria-label="Cart" className="cursor-pointer text-white">
            <BagIcon />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-white lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-5 rounded-2xl bg-primary/95 p-5 shadow-xl backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-4">
            {[...navLinks, ...authLinks].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-cloud"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}