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
    default: "Gartenunterhalt Merian – Gartenunterhalt und Saisonarbeiten",
    template: "%s · Gartenunterhalt Merian",
  },
  description:
    "Persönlicher Gartenunterhalt für Rasen, Hecken, Beete und saisonale Arbeiten. Unkompliziert geplant, sauber umgesetzt und direkt buchbar.",
  keywords: [
    "Gartenunterhalt Merian",
    "Gartenunterhalt",
    "Rasenpflege",
    "Heckenschnitt",
    "Schnittarbeiten",
    "Saisonarbeiten Garten",
    "Gärtner Aargau",
    "Gartenservice",
  ],
  authors: [{ name: "Gartenunterhalt Merian" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "Gartenunterhalt Merian",
    title: "Gartenunterhalt Merian – Gartenunterhalt und Saisonarbeiten",
    description:
      "Persönlicher Gartenunterhalt für Rasen, Hecken, Beete und saisonale Arbeiten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gartenunterhalt Merian – Gartenunterhalt und Saisonarbeiten",
    description:
      "Unkomplizierter Gartenunterhalt: persönlich geplant, sauber umgesetzt.",
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
