"use client";

import { useState, type ReactNode } from "react";
import { Label } from "./ui";
import { ArrowRight, CheckIcon } from "./icons";
import { useSiteContent } from "@/sanity/useSiteContent";

function FieldShell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </label>
  );
}

const inputClass =
  "rounded-xl border border-line bg-bg px-3.5 py-3 text-[14.5px] text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-ink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { contact, legal } = useSiteContent();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const message = String(formData.get("message") ?? "");
        const separator = contact.emailHref.includes("?") ? "&" : "?";
        const subject = encodeURIComponent(`Gartenanfrage von ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
        );
        window.location.href = `${contact.emailHref}${separator}subject=${subject}&body=${body}`;
        setSubmitted(true);
      }}
      className="flex flex-col gap-[18px] rounded-3xl border border-line bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_60px_-40px_rgba(15,111,163,0.2)] sm:p-8"
    >
      {submitted ? (
        <div className="py-10 text-center">
          <div className="mb-5 inline-flex size-14 items-center justify-center rounded-full bg-orange-soft text-[#b36a00]">
            <CheckIcon className="size-7" />
          </div>
          <div className="mb-2 text-[22px] font-medium tracking-[-0.02em]">
            Danke, Ihre E-Mail ist vorbereitet.
          </div>
          <div className="text-sm text-ink-3">Bitte senden Sie die Nachricht in Ihrem E-Mail-Programm ab.</div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <FieldShell label="Name">
              <input name="name" className={inputClass} placeholder="Ihr Name" required />
            </FieldShell>
            <FieldShell label="E-Mail">
              <input name="email" className={inputClass} type="email" placeholder="mail@example.ch" required />
            </FieldShell>
          </div>
          <FieldShell label="Nachricht">
            <textarea
              name="message"
              rows={4}
              className={`${inputClass} resize-y`}
              placeholder="Ich suche Hilfe für Rasen, Hecke oder saisonale Gartenarbeiten ..."
              required
            />
          </FieldShell>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex max-w-[18rem] items-start gap-2.5 text-[13px] text-ink-3">
              <input type="checkbox" defaultChecked className="mt-0.5 accent-ink" required />
              Ich akzeptiere den Datenschutzhinweis.
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-btn px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-btn-hover hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.3)]"
            >
              E-Mail vorbereiten
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <p className="border-t border-line-2 pt-4 text-[12px] leading-[1.6] text-ink-3">
            {legal.privacyNote}
          </p>
        </>
      )}
    </form>
  );
}
