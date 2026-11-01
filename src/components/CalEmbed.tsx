"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { trackBookingConversion } from "@/lib/analytics";

type CalEmbedProps = {
  /** Cal.com booking link in the form "username/event-slug". */
  calLink: string;
  /** Origin of the Cal.com booking instance. */
  calOrigin?: string;
  namespace?: string;
};

const EMBED_JS_URL = "https://app.cal.com/embed/embed.js";

export function CalEmbed({
  calLink,
  calOrigin = "https://app.cal.com",
  namespace = "https-cal.eu-timonmerian-besichtigung",
}: CalEmbedProps) {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace, embedJsUrl: EMBED_JS_URL });
      if (cancelled) return;

      window.Cal.config = { ...window.Cal.config, forwardQueryParams: true };

      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#33502F" },
          dark: { "cal-brand": "#9DB98C" },
        },
      });

      // Google Ads "Termin vereinbaren" conversion – fires only after a booking succeeds.
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: trackBookingConversion,
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      calOrigin={calOrigin}
      embedJsUrl={EMBED_JS_URL}
      // No fixed height/overflow here: Cal resizes its inner iframe to fit the
      // booking widget's real content height, and this wrapper (height: auto)
      // grows to match, so the browser page scrolls instead of the widget itself.
      style={{ width: "100%", minHeight: "520px" }}
      config={{ layout: "month_view", theme: "light", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
