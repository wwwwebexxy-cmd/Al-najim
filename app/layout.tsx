import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.steelrack.co"),
  title: "Al Najim Al Satie Steel Shelfs Trdg | A Complete Storage Solution",
  description: "A leading manufacturer and integrator of material handling products and systems for manufacturing, assembly, distribution centres, warehousing and storage facilities.",
  keywords: [
    "Al Najim Al Satie",
    "Steel Shelfs Trading",
    "Pallet Racks",
    "Heavy Duty Racks",
    "Supermarket Shelving",
    "Material Handling",
    "Warehouse Storage",
    "Sharjah UAE",
  ],
  openGraph: {
    title: "Al Najim Al Satie Steel Shelfs Trdg",
    description: "A Complete Storage Solution for material handling, warehousing and storage facilities.",
    url: "https://www.steelrack.co/",
    siteName: "Al Najim Al Satie Steel Shelfs Trdg",
    images: [
      {
        url: "/al-najim-logo.png",
        width: 1650,
        height: 400,
        alt: "Al Najim Al Satie Steel Shelfs Trading logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.steelrack.co/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Al Najim Al Satie Steel Shelfs Trdg",
  image: "/al-najim-logo.png",
  url: "https://www.steelrack.co/",
  telephone: "+971507146645",
  email: "najimsatiracks@gmail.com",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "1747",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/al-najim-favicon.png" sizes="512x512" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
