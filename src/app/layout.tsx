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

const siteUrl = "https://www.bolligerit.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bolliger IT – PC-Beratung und Service im Aargau",
    template: "%s · Bolliger IT",
  },
  description:
    "Ehrliche PC- und Geräte-Reparatur aus dem Aargau. Über 30 Jahre Erfahrung in Multimedia und IT – persönlich, unabhängig und auf Augenhöhe. Reparieren statt wegwerfen.",
  keywords: [
    "Bolliger IT",
    "PC Reparatur Aargau",
    "Computer Service",
    "IT Beratung",
    "Datenrettung",
    "Gaming PC",
    "Vor-Ort-Service",
    "Roger Bolliger",
  ],
  authors: [{ name: "Bolliger IT" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "Bolliger IT",
    title: "Bolliger IT – PC-Beratung und Service",
    description:
      "Reparieren statt wegwerfen. Technische Hilfe aus einer Hand – mit über 30 Jahren Erfahrung in Multimedia und IT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolliger IT – PC-Beratung und Service",
    description:
      "Reparieren statt wegwerfen. Technische Hilfe aus einer Hand im Aargau.",
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
