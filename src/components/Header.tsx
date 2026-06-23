"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { PillButton } from "./PillButton";
import { Container } from "./ui";
import { SiteBanner } from "@/components/cms/SiteBanner";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateBarHeight = () => setBarHeight(bar.offsetHeight);
    updateBarHeight();

    const observer = new ResizeObserver(updateBarHeight);
    observer.observe(bar);
    window.addEventListener("resize", updateBarHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBarHeight);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled && !open ? "shadow-[0_10px_30px_-24px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div
        ref={barRef}
        className="relative z-[60] border-b border-line bg-bg"
      >
        <Container className="flex items-center justify-between gap-6 py-3.5">
        <Link href="/" aria-label="Gartenunterhalt Merian – zur Hauptseite" className="shrink-0">
          <Logo priority className="h-10 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.label}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-orange" : "text-ink-3 hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex">
            <PillButton href="/kontakt" size="sm" icon={false}>
              Kontaktieren Sie mich
            </PillButton>
          </span>

          <button
            type="button"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center text-ink transition-opacity hover:opacity-70 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-4 rounded bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded bg-ink transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 rounded bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>
      </div>

      <SiteBanner />

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Menü schliessen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-x-0 bottom-0 z-40 bg-ink/15 lg:hidden"
              style={{ top: barHeight }}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-50 border-b border-line bg-bg lg:hidden [box-shadow:0_16px_32px_0_rgba(35,58,71,0.14)]"
            >
              <Container className="py-4">
                <nav className="flex flex-col gap-1">
                  {nav.map((n) => (
                    <Link
                      key={n.label}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive(n.href)
                          ? "bg-orange-soft text-orange"
                          : "text-ink-2 hover:bg-white hover:text-ink"
                      }`}
                    >
                      {n.label}
                    </Link>
                  ))}
                  <div className="mt-2 flex justify-end border-t border-line pt-4">
                    <PillButton href="/kontakt" size="sm" icon={false}>
                      Kontaktieren Sie mich
                    </PillButton>
                  </div>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
