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
  title: {
    default: "Al Najim Al Satie Steel Shelfs Trdg | A Complete Storage Solution",
    template: "%s | Al Najim Al Satie Steel Shelfs Trdg",
  },
  description: "A leading manufacturer and integrator of material handling products and systems for manufacturing, assembly, distribution centres, warehousing and storage facilities.",
  applicationName: "Al Najim Al Satie Steel Shelfs Trdg",
  category: "industrial storage and material handling",
  classification: "Warehouse racking, shelving and steel fabrication",
  authors: [{ name: "Al Najim Al Satie Steel Shelfs Trdg" }],
  creator: "Al Najim Al Satie Steel Shelfs Trdg",
  publisher: "Al Najim Al Satie Steel Shelfs Trdg",
  keywords: [
    "Al Najim Al Satie",
    "Steel Shelfs Trading",
    "Steel Shelves Trading Sharjah",
    "Pallet Racks",
    "Heavy Duty Racks",
    "Supermarket Shelving",
    "Material Handling",
    "Warehouse Storage",
    "Sharjah UAE",
    "Steel Fabrication Sharjah",
    "Aluminium Fabrication Sharjah",
    "Car Parking Sheds Sharjah",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Al Najim Al Satie Steel Shelfs Trdg",
    description: "A Complete Storage Solution for material handling, warehousing and storage facilities.",
    url: "https://www.steelrack.co/",
    siteName: "Al Najim Al Satie Steel Shelfs Trdg",
    images: [
      {
        url: "/hero-attractive.png",
        width: 2048,
        height: 768,
        alt: "Modern warehouse pallet racking and storage systems",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Najim Al Satie Steel Shelfs Trdg",
    description: "A Complete Storage Solution for material handling, warehousing and storage facilities.",
    images: ["/hero-attractive.png"],
  },
  alternates: {
    canonical: "https://www.steelrack.co/",
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah, United Arab Emirates",
    "geo.position": "25.2916171;55.4475669",
    ICBM: "25.2916171, 55.4475669",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.steelrack.co/#business",
      name: "Al Najim Al Satie Steel Shelfs Trdg",
      alternateName: "Al Najim Al Satie Trading",
      description: "A leading manufacturer and integrator of material handling products and systems for manufacturing, assembly, distribution centres, warehousing and storage facilities.",
      image: [
        "https://www.steelrack.co/hero-attractive.png",
        "https://www.steelrack.co/al-najim-logo.png",
      ],
      logo: "https://www.steelrack.co/al-najim-logo.png",
      url: "https://www.steelrack.co/",
      telephone: ["+971507146645", "+971558219504"],
      email: ["najimsatiracks@gmail.com", "john.alnajim@gmail.com"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muweilah",
        postOfficeBoxNumber: "1747",
        addressLocality: "Sharjah",
        addressRegion: "Sharjah",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2916171,
        longitude: 55.4475669,
      },
      hasMap: "https://maps.app.goo.gl/eFdiiW3SESDivbUR6",
      areaServed: [
        { "@type": "City", name: "Sharjah" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      sameAs: ["https://www.linkedin.com/company/alnajimalsatie/"],
      knowsAbout: [
        "Pallet racks",
        "Heavy duty racks",
        "Supermarket shelving",
        "Mezzanine flooring",
        "Aluminium fabrication",
        "Stainless steel fabrication",
        "Structural fabrication",
        "Car parking sheds",
        "Retractable shades",
        "Interior decor",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.steelrack.co/#website",
      url: "https://www.steelrack.co/",
      name: "Al Najim Al Satie Steel Shelfs Trdg",
      publisher: { "@id": "https://www.steelrack.co/#business" },
      inLanguage: "en-AE",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png?v=4" sizes="512x512" />
        <link rel="apple-touch-icon" type="image/png" href="/apple-icon.png?v=4" sizes="512x512" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
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
