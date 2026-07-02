"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type CalEmbedProps = {
  /** Cal.com booking link in the form "username/event-slug". */
  calLink: string;
  /** Instance origin. EU accounts (app.cal.eu) differ from the default cal.com. */
  calOrigin?: string;
  namespace?: string;
};

// EU region: bookings are served from app.cal.eu, not cal.eu / cal.com.
const EMBED_JS_URL = "https://app.cal.eu/embed/embed.js";

export function CalEmbed({
  calLink,
  calOrigin = "https://app.cal.eu",
  namespace = "besichtigung",
}: CalEmbedProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace, embedJsUrl: EMBED_JS_URL });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#33502F" },
          dark: { "cal-brand": "#9DB98C" },
        },
      });
    })();
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
