"use client";

import { useSiteContent } from "@/sanity/useSiteContent";

export function StandortMap() {
  const { map } = useSiteContent();
  if (!map.embedUrl) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-line bg-bg p-8 text-center">
        <div>
          <p className="mb-2 text-lg font-medium tracking-[-0.02em]">{map.label}</p>
          <p className="text-sm leading-[1.6] text-ink-2">
            Die genaue Kartenansicht wird ergänzt, sobald Adresse und Einsatzgebiet feststehen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-line">
      <iframe
        src={map.embedUrl}
        title={`Standort auf Google Maps – ${map.label}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
