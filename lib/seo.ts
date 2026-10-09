import type { Metadata } from "next"
import { PHONE_E164, SITE, ZONES } from "@/lib/site"

export const BUSINESS_ID = `${SITE.url}/#business`
export const WEBSITE_ID = `${SITE.url}/#website`

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords: string[]
}): Metadata {
  const url = new URL(path, SITE.url).href
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_EC",
      url,
      siteName: SITE.brand,
      title,
      description,
      images: [{ url: `${SITE.url}/plomefy-logo.png`, width: 420, height: 123, alt: "Plomefy" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [`${SITE.url}/plomefy-logo.png`],
    },
  }
}

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE.url}/`,
      name: SITE.brand,
      inLanguage: "es-EC",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "Plumber",
      "@id": BUSINESS_ID,
      name: SITE.brand,
      description:
        "Servicio de plomería a domicilio en Quito: destape de cañerías, reparación de fugas de agua, sanitarios, grifería, calefones y duchas eléctricas.",
      url: `${SITE.url}/`,
      telephone: PHONE_E164,
      image: `${SITE.url}/plomefy-logo.png`,
      logo: `${SITE.url}/plomefy-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      areaServed: ZONES.flatMap((zone) => zone.areas).map((area) => ({
        "@type": "Place",
        name: `${area}, Quito`,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:30",
          closes: "19:30",
        },
      ],
    },
  ],
}

export function faqSchema(faqs: readonly { q: string; a: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "es-EC",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}
