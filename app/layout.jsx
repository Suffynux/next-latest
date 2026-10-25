import { Archivo, Instrument_Serif, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ConsentBanner from "../components/ConsentBanner";
import JsonLd from "../components/JsonLd";
import { SITE_URL, COMPANY, AREAS } from "../lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const isProd = process.env.VERCEL_ENV === "production";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NextGrid IT | Brand, Marketing, Technology & E-commerce",
    template: "%s | NextGrid IT",
  },
  description:
    "One team that plans, builds and grows your digital business: brand and marketing, software, e-commerce and IT services for growing brands.",
  applicationName: "NextGrid IT",
  openGraph: {
    type: "website",
    siteName: "NextGrid IT",
    locale: "en_GB",
    url: "/",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "NextGrid IT" }],
  },
  twitter: { card: "summary_large_image" },
  robots: isProd ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport = {
  themeColor: "#07112A",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.brand,
  legalName: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  slogan: COMPANY.tagline,
  description:
    "One team that plans, builds and grows your digital business: brand and marketing, technology and software, e-commerce, and IT managed services.",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House company number",
    value: COMPANY.companyNumber,
  },
  // TODO {{REGISTERED_OFFICE_ADDRESS}}: add PostalAddress when confirmed.
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Europe" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Pakistan" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: COMPANY.email,
      telephone: COMPANY.whatsapp,
      availableLanguage: ["English", "Urdu"],
    },
  ],
  sameAs: [
    COMPANY.social.linkedin,
    COMPANY.social.instagram,
    COMPANY.social.facebook,
    COMPANY.social.tiktok,
  ].filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${inter.variable} ${serif.variable}`}>
      <body id="top">
        <JsonLd data={organizationLd} />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header areas={AREAS.map(({ slug, order, navLabel }) => ({ slug, order, navLabel }))} />
        <main id="content">{children}</main>
        <Footer />
        <Reveal />
        <ConsentBanner />
      </body>
    </html>
  );
}
