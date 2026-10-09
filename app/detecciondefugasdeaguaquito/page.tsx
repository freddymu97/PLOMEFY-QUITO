import type { Metadata } from "next"
import { DetecfyLanding } from "@/components/detecfy-landing"
import { JsonLd } from "@/components/json-ld"
import { DETECFY, DETECFY_FAQS, DETECFY_PATH, DETECFY_STARTING_PRICE } from "@/lib/detecfy"
import { BUSINESS_ID, WEBSITE_ID, faqSchema, pageMetadata } from "@/lib/seo"
import { PHONE_E164, SITE, ZONES } from "@/lib/site"

const url = `${SITE.url}${DETECFY_PATH}`

export const metadata: Metadata = pageMetadata({
  title: DETECFY.title,
  description: DETECFY.description,
  path: DETECFY_PATH,
  keywords: [
    "detección de fugas de agua quito",
    "detección de fugas de agua en quito",
    "detector de fugas de agua quito",
    "localización de fugas de agua en quito",
    "detección de fugas de agua ocultas",
    "detector de fugas en paredes",
    "detector de fugas en tuberías enterradas",
    "geófono detector de fugas de agua quito",
    "detección de fugas con cámara termográfica quito",
    "detecfy",
  ],
})

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: DETECFY.title,
      description: DETECFY.description,
      inLanguage: "es-EC",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#service` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Detección de fugas de agua en Quito — Detecfy",
      serviceType: "Detección y localización de fugas de agua a domicilio",
      description: DETECFY.description,
      url,
      provider: { "@id": BUSINESS_ID },
      areaServed: ZONES.flatMap((zone) => zone.areas).map((area) => ({
        "@type": "Place",
        name: `${area}, Quito`,
      })),
      offers: {
        "@type": "Offer",
        url,
        description: `Detección de fugas de agua desde $${DETECFY_STARTING_PRICE}. El presupuesto final y su alcance se confirman según la instalación y el método de diagnóstico.`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: DETECFY_STARTING_PRICE,
          priceCurrency: "USD",
        },
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        servicePhone: {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          contactType: "customer service",
          availableLanguage: "es",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Plomefy", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Detecfy: detección de fugas de agua en Quito", item: url },
      ],
    },
  ],
}

export default function DetecfyPage() {
  return (
    <main id="contenido">
      <DetecfyLanding />
      <JsonLd id="detecfy-service-schema" data={serviceSchema} />
      <JsonLd id="detecfy-faq-schema" data={faqSchema(DETECFY_FAQS, url)} />
    </main>
  )
}
