"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PillButton } from "../PillButton";
import { useSiteCms } from "@/sanity/useSiteCms";
import type { SitePopup as SitePopupType } from "@/sanity/types";

const DISMISS_KEY = "gartenunterhalt-merian-dismissed-popups";

function getDismissedIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(DISMISS_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function dismissPopup(id: string) {
  const dismissed = getDismissedIds();
  if (!dismissed.includes(id)) {
    localStorage.setItem(DISMISS_KEY, JSON.stringify([...dismissed, id]));
  }
}

const TYPE_STYLES = {
  vacation: "border-orange/30 bg-orange-soft text-orange",
  info: "border-line bg-bg text-ink-2",
  alert: "border-red-200 bg-red-50 text-red-900",
} as const;

function PopupCard({ popup, onClose }: { popup: SitePopupType; onClose: () => void }) {
  const badge =
    popup.popupType === "vacation"
      ? "Ferien / Abwesenheit"
      : popup.popupType === "alert"
        ? "Wichtiger Hinweis"
        : "Information";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`popup-title-${popup._id}`}
      className="relative mx-4 w-full max-w-md rounded-[22px] border border-line bg-white p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:p-7"
    >
      {popup.dismissible && (
        <button
          type="button"
          aria-label="Hinweis schliessen"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-bg hover:text-ink"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
      )}

      <div
        className={`mb-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] ${TYPE_STYLES[popup.popupType]}`}
      >
        {badge}
      </div>

      <h2 id={`popup-title-${popup._id}`} className="mb-3 pr-8 text-[1.35rem] font-medium tracking-[-0.02em]">
        {popup.title}
      </h2>
      <p className="mb-5 text-[15px] leading-[1.6] text-ink-2">{popup.body}</p>

      {popup.linkUrl && popup.linkLabel && (
        <PillButton href={popup.linkUrl} size="sm" icon={false}>
          {popup.linkLabel}
        </PillButton>
      )}

      {popup.dismissible && (
        <button
          type="button"
          onClick={onClose}
          className="mt-4 block text-sm text-ink-3 transition-colors hover:text-ink"
        >
          Schliessen
        </button>
      )}
    </motion.div>
  );
}

export function SitePopup() {
  const pathname = usePathname();
  const { content } = useSiteCms();
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDismissed(getDismissedIds());
    setReady(true);
  }, []);

  const popup = content?.popups.find((item) => !dismissed.includes(item._id));
  const isOpen = ready && !pathname.startsWith("/studio") && Boolean(popup);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const handleClose = () => {
    if (!popup) return;
    dismissPopup(popup._id);
    setDismissed((current) => [...current, popup._id]);
  };

  if (!isOpen || !popup) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={popup._id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-[2px]"
        onClick={popup.dismissible ? handleClose : undefined}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <PopupCard popup={popup} onClose={handleClose} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
