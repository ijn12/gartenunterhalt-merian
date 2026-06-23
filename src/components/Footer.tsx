"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Container, Label } from "./ui";
import { useSiteContent } from "@/sanity/useSiteContent";

const PAGE_LINKS = [
  { label: "Hauptseite", href: "/" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  const { contact, legal } = useSiteContent();

  return (
    <footer className="border-t border-line bg-white">
      <Container className="pb-10 pt-14">
        <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Gartenunterhalt Merian – zur Hauptseite" className="inline-block">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-2 max-w-[18rem] text-sm leading-[1.55] text-ink-3">{legal.footerTagline}</p>
          </div>
          <div>
            <Label as="div" className="mb-4">
              Seiten
            </Label>
            <div className="flex flex-col gap-2.5">
              {PAGE_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Label as="div" className="mb-4">
              Adresse
            </Label>
            <div className="flex flex-col gap-2.5 text-sm text-ink-2">
              <span>
                {contact.street}
                <br />
                {contact.zip} {contact.city}
              </span>
              <a href={contact.phoneHref} className="transition-colors hover:text-ink">
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="transition-colors hover:text-ink">
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <div className="font-mono text-[11.5px] tracking-[0.04em] text-ink-3">
            © {new Date().getFullYear()}{" "}
            <a href="https://www.gartenunterhalt-merian.ch" className="text-ink-2 hover:text-ink">
              {contact.website}
            </a>
          </div>
          <div className="flex gap-[18px]">
            <Link href="/impressum" className="text-[12.5px] text-ink-3 transition-colors hover:text-ink">
              Impressum
            </Link>
            {legal.footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href || "#"}
                className="text-[12.5px] text-ink-3 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
