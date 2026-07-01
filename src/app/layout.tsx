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

const siteUrl = "https://www.xn--grtnerei-merian-2ob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gärtnerei Merian – Gartenpflege in Luzern",
    template: "%s · Gärtnerei Merian",
  },
  description:
    "Gärtnerei Merian von Timon Merian: Gartenreinigung, Bepflanzung, Wintervorbereitung und Baumpflege in der Region Luzern. Persönlich geplant, sauber umgesetzt.",
  keywords: [
    "Gärtnerei Merian",
    "Timon Merian",
    "Gartenpflege Luzern",
    "Gärtner Luzern",
    "Gartenreinigung",
    "Baumpflege",
    "Heckenschnitt",
    "Bepflanzung",
  ],
  authors: [{ name: "Gärtnerei Merian" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "Gärtnerei Merian",
    title: "Gärtnerei Merian – Gartenpflege in Luzern",
    description:
      "Gartenreinigung, Bepflanzung, Wintervorbereitung und Baumpflege – gepflegt mit Sorgfalt und Freude.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gärtnerei Merian – Gartenpflege in Luzern",
    description:
      "Gärten aller Art, gepflegt mit Sorgfalt und Freude von Timon Merian.",
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
