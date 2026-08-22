import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} — Corporate Travel Agency Bangladesh`,
    template: `%s | ${COMPANY_INFO.name} Corporate Travel`
  },
  description: `${COMPANY_INFO.name} is a leading corporate travel management agency. Comprehensive air ticketing, visa processing, hotel reservation, MICE, and VIP airport assistance in Dhaka, Bangladesh.`,
  keywords: [
    "Travel Treasure",
    "Corporate Travel Agency Bangladesh",
    "Corporate Travel Management Dhaka",
    "Air Ticketing Bangladesh",
    "Visa Processing Bangladesh",
    "Hotel Reservation Dhaka",
    "Airport Transfer Dhaka",
    "MICE Services Bangladesh",
    "VIP Airport Assistance Dhaka",
    "IATA Travel Agency Dhaka"
  ],
  authors: [{ name: "Travel Treasure" }],
  creator: "Travel Treasure",
  metadataBase: new URL("https://www.traveltreasure.online"),
  openGraph: {
    title: `${COMPANY_INFO.name} — Corporate Travel Management`,
    description: COMPANY_INFO.subTagline,
    url: "https://www.traveltreasure.online",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} Corporate Travel Management`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for LocalBusiness & TravelAgency
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": COMPANY_INFO.name,
    "image": "https://www.traveltreasure.online/logo.png",
    "@id": "https://www.traveltreasure.online",
    "url": "https://www.traveltreasure.online",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 2, Road-4, Block-A, Section-11, Mohammad Ali Tower, 4th Floor",
      "addressLocality": "Dhaka",
      "postalCode": "1216",
      "addressCountry": "BD"
    },
    "foundingDate": "2014",
    "description": COMPANY_INFO.subTagline,
    "memberOf": [
      { "@type": "Organization", "name": "IATA" },
      { "@type": "Organization", "name": "ATAB" },
      { "@type": "Organization", "name": "TOAB" }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-brand-gold selection:text-brand-navy">
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
