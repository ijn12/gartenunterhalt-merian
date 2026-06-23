import { sanityClient, isSanityConfigured } from "./client";
import { siteCmsQuery } from "./queries";
import type { SiteBanner, SiteCmsContent, SitePopup } from "./types";

function isWithinSchedule(startDate?: string, endDate?: string, now = Date.now()) {
  const start = startDate ? Date.parse(startDate) : null;
  const end = endDate ? Date.parse(endDate) : null;
  if (start && now < start) return false;
  if (end && now > end) return false;
  return true;
}

export function filterActiveBanner(banner: SiteBanner | null): SiteBanner | null {
  if (!banner?.enabled || !banner.messages?.length) return null;
  if (!isWithinSchedule(banner.startDate, banner.endDate)) return null;
  return banner;
}

export function filterActivePopups(popups: SitePopup[]): SitePopup[] {
  return popups.filter((popup) => popup.enabled && isWithinSchedule(popup.startDate, popup.endDate));
}

export async function fetchSiteCmsContent(): Promise<SiteCmsContent | null> {
  if (!isSanityConfigured) return null;

  try {
    const data = await sanityClient.fetch<SiteCmsContent>(siteCmsQuery, {}, { next: { revalidate: 60 } });
    return {
      ...data,
      banner: filterActiveBanner(data.banner),
      popups: filterActivePopups(data.popups ?? []),
    };
  } catch {
    return null;
  }
}
