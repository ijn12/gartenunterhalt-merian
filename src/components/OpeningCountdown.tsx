"use client";

import { useEffect, useState } from "react";
import { Label } from "./ui";

/** Default opening time – numeric constructor avoids iOS Safari ISO date parsing bugs. */
const DEFAULT_TARGET = new Date(2026, 7, 15, 9, 0, 0).getTime();

type CountdownDelta = { d: number; h: number; m: number; s: number };

function computeDelta(target: number, now = Date.now()): CountdownDelta {
  if (!Number.isFinite(target)) return { d: 0, h: 0, m: 0, s: 0 };

  const ms = Math.max(0, target - now);
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
  };
}

function formatUnit(value: number) {
  return Number.isFinite(value) ? String(value).padStart(2, "0") : "--";
}

function CountdownChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-2xl border border-line bg-bg px-2.5 py-2.5 sm:gap-2 sm:px-4 sm:py-3.5">
      <Label>{label}</Label>
      <span
        suppressHydrationWarning
        className="text-2xl font-medium leading-none tracking-[-0.04em] tabular-nums sm:text-3xl"
      >
        {formatUnit(value)}
      </span>
    </div>
  );
}

type OpeningCountdownProps = {
  title?: string;
  targetMs?: number;
  statusLabel?: string;
  statusText?: string;
};

export function OpeningCountdown({
  title = "Eröffnung August 2026",
  targetMs = DEFAULT_TARGET,
  statusLabel = "Status",
  statusText = "Termine aktuell per Telefon oder E-Mail",
}: OpeningCountdownProps = {}) {
  const target = Number.isFinite(targetMs) ? targetMs : DEFAULT_TARGET;
  const [t, setT] = useState<CountdownDelta>(() => computeDelta(target));

  useEffect(() => {
    const tick = () => setT(computeDelta(target));

    tick();
    const intervalId = window.setInterval(tick, 1000);

    const resync = () => {
      if (!document.hidden) tick();
    };
    document.addEventListener("visibilitychange", resync);
    window.addEventListener("pageshow", resync);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", resync);
      window.removeEventListener("pageshow", resync);
    };
  }, [target]);

  return (
    <div className="rounded-[22px] border border-line bg-white p-3.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] sm:p-6">
      <div className="mb-3 text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-none tracking-[-0.03em] sm:mb-5">
        {title}
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        <CountdownChip label="Tage" value={t.d} />
        <CountdownChip label="Std" value={t.h} />
        <CountdownChip label="Min" value={t.m} />
        <CountdownChip label="Sek" value={t.s} />
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-[#ddeaf4] bg-[linear-gradient(180deg,#F4FAFE_0%,#ECF5FC_100%)] px-3.5 py-2.5 sm:mt-5 sm:px-4 sm:py-3.5">
        <Label tone="accent" className="shrink-0 tracking-[0.08em]">
          {statusLabel}
        </Label>
        <span className="text-[13px] text-ink-2">{statusText}</span>
      </div>
    </div>
  );
}
