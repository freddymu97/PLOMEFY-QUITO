import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import "@fontsource-variable/inter"
import "@fontsource-variable/plus-jakarta-sans"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { SITE, PHONE_E164, ZONES, FAQS } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Plomero a domicilio en Quito | Plomefy · plomería, destapes y fugas",
  description:
    "Plomero a domicilio en Quito para destape de cañerías, reparación de fugas de agua, sanitarios, grifería y calefones. Atendemos los 7 días en norte, centro, sur y valles.",
  keywords: [
    "plomero a domicilio quito",
    "plomeros quito",
    "plomería a domicilio quito",
    "plomero quito norte",
    "plomeros sur de quito",
    "destape de cañerías quito",
    "reparación de fugas de agua quito",
    "gasfitero quito",
    "plomero cerca de mí",
    "reparación de calefones quito",
    "plomero cumbayá",
    "plomero valle de los chillos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE.url,
    siteName: SITE.brand,
    title: "Plomero a domicilio en Quito | Plomefy",
    description:
      "Destape de cañerías, fugas de agua, sanitarios y calefones a domicilio en Quito. Atendemos los 7 días, norte, centro, sur y valles.",
    images: [{ url: "/plomefy-logo.png", width: 420, height: 123, alt: "Plomefy" }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/plomefy-icon.png",
    apple: "/plomefy-icon.png",
  },
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: "#00336d",
  width: "device-width",
  initialScale: 1,
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: SITE.brand,
  description:
    "Servicio de plomería a domicilio en Quito: destape de cañerías, reparación de fugas de agua, sanitarios, grifería, calefones y duchas eléctricas.",
  url: SITE.url,
  telephone: PHONE_E164,
  priceRange: "$$",
  image: `${SITE.url}/plomefy-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },
  geo: { "@type": "GeoCoordinates", latitude: -0.1807, longitude: -78.4678 },
  areaServed: ZONES.flatMap((z) => z.areas).map((a) => ({ "@type": "Place", name: `${a}, Quito` })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:30",
      closes: "19:30",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-EC">
      <body className="min-h-screen bg-white font-sans text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </body>
    </html>
  )
}
