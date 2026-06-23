"use client";

import Link from "next/link";
import { useSiteCms } from "@/sanity/useSiteCms";
import type { BannerMessage } from "@/sanity/types";

const VARIANTS = {
  orange: "bg-orange text-white",
  dark: "bg-ink text-white",
  light: "border-b border-line bg-[#F4FAFE] text-ink",
} as const;

const SPEED_SECONDS = {
  slow: 60,
  normal: 38,
  fast: 22,
} as const;

function TickerItem({ message }: { message: BannerMessage }) {
  if (message.link) {
    return (
      <Link href={message.link} className="transition-opacity hover:opacity-70">
        {message.text}
      </Link>
    );
  }
  return <span>{message.text}</span>;
}

/** One full pass of every message, separated by a dot. */
function TickerRun({ messages }: { messages: BannerMessage[] }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={false}>
      {messages.map((message, i) => (
        <div key={i} className="flex items-center">
          <span className="px-6 sm:px-8">
            <TickerItem message={message} />
          </span>
          <span aria-hidden className="opacity-40">
            •
          </span>
        </div>
      ))}
    </div>
  );
}

export function SiteBanner() {
  const { content } = useSiteCms();
  const banner = content?.banner;

  const messages = banner?.messages ?? [];
  if (!banner || messages.length === 0) return null;

  const variant = VARIANTS[banner.variant] ?? VARIANTS.orange;
  const duration = SPEED_SECONDS[banner.speed ?? "normal"] ?? SPEED_SECONDS.normal;
  const isLight = banner.variant === "light";

  return (
    <div
      className={`relative overflow-hidden ${variant}`}
      role="status"
      aria-live="polite"
      aria-label="Aktuelle Hinweise"
    >
      <div
        className="ticker-mask group flex items-center py-2.5 text-[13px] font-medium"
        style={{ "--ticker-duration": `${duration}s` } as React.CSSProperties}
      >
        {/* Two identical runs create a seamless, never-ending loop. */}
        <div className="ticker-track flex w-max items-center whitespace-nowrap">
          <TickerRun messages={messages} />
          <TickerRun messages={messages} />
        </div>
      </div>

      {/* Time indicator – sweeps across in sync with one full loop, like a stock-ticker refresh. */}
      <span
        aria-hidden
        className={`ticker-progress absolute bottom-0 left-0 h-[2px] ${
          isLight ? "bg-orange/70" : "bg-white/70"
        }`}
      />

      <style>{`
        .ticker-track {
          animation: ticker-scroll var(--ticker-duration) linear infinite;
        }
        .ticker-mask:hover .ticker-track {
          animation-play-state: paused;
        }
        .ticker-progress {
          animation: ticker-progress var(--ticker-duration) linear infinite;
        }
        .ticker-mask:hover ~ .ticker-progress {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ticker-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track,
          .ticker-progress {
            animation: none;
          }
          .ticker-progress { width: 100%; }
        }
      `}</style>
    </div>
  );
}
