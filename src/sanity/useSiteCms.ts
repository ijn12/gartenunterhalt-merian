"use client";

import { useEffect, useState } from "react";
import { sanityClient, isSanityConfigured } from "./client";
import { filterActiveBanner, filterActivePopups } from "./fetch";
import { siteCmsQuery } from "./queries";
import type { SiteCmsContent } from "./types";

export function useSiteCms() {
  const [content, setContent] = useState<SiteCmsContent | null>(null);
  const [loading, setLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    sanityClient
      .fetch<SiteCmsContent>(siteCmsQuery)
      .then((data) => {
        if (cancelled) return;
        setContent({
          ...data,
          banner: filterActiveBanner(data.banner),
          popups: filterActivePopups(data.popups ?? []),
        });
      })
      .catch(() => {
        if (!cancelled) setContent(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { content, loading, isConfigured: isSanityConfigured };
}
