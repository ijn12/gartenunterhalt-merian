"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reset scroll position on every client-side route change. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
