"use client";

import { useSiteContent } from "@/sanity/useSiteContent";

export function StandortMap() {
  const { map } = useSiteContent();
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
