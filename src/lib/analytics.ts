/** Google Ads account ID – base tag is loaded in the root layout. */
export const GOOGLE_ADS_ID = "AW-18374250145";

/** "Termin vereinbaren" conversion action. */
export const GOOGLE_ADS_BOOKING_CONVERSION = `${GOOGLE_ADS_ID}/E4l-CPCKw90cEKGdw7lE`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire the Google Ads conversion for a completed Terminbuchung. */
export function trackBookingConversion() {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: GOOGLE_ADS_BOOKING_CONVERSION });
}
