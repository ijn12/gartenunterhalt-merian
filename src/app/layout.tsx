import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SitePopup } from "@/components/cms/SitePopup";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.gartenunterhalt-merian.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gartenunterhalt Merian – Gartenpflege und Unterhalt",
    template: "%s · Gartenunterhalt Merian",
  },
  description:
    "Professioneller Gartenunterhalt und Gartenpflege. Persönlich, zuverlässig und mit Sorgfalt für Ihren Garten.",
  keywords: [
    "Gartenunterhalt Merian",
    "Gartenpflege",
    "Gartenunterhalt",
    "Merian",
  ],
  authors: [{ name: "Gartenunterhalt Merian" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "Gartenunterhalt Merian",
    title: "Gartenunterhalt Merian – Gartenpflege und Unterhalt",
    description:
      "Professioneller Gartenunterhalt und Gartenpflege – persönlich und zuverlässig.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gartenunterhalt Merian – Gartenpflege und Unterhalt",
    description:
      "Professioneller Gartenunterhalt und Gartenpflege – persönlich und zuverlässig.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="bg-bg text-ink font-sans antialiased">
        <ScrollToTop />
        <SitePopup />
        {children}
      </body>
    </html>
  );
}
