import type { Metadata } from "next"
import { DetecfyEcuadorLanding } from "@/components/detecfy-ecuador-landing"
import { JsonLd } from "@/components/json-ld"
import { DETECFY_ECUADOR, DETECFY_ECUADOR_FAQS, DETECFY_ECUADOR_PATH } from "@/lib/detecfy-ecuador"
import { BUSINESS_ID, WEBSITE_ID, faqSchema, pageMetadata } from "@/lib/seo"
import { PHONE_E164, SITE } from "@/lib/site"

const url = `${SITE.url}${DETECFY_ECUADOR_PATH}`

export const metadata: Metadata = pageMetadata({
  title: DETECFY_ECUADOR.title,
  description: DETECFY_ECUADOR.description,
  path: DETECFY_ECUADOR_PATH,
  keywords: [
    "detección de fugas de agua Ecuador",
    "detección de fugas de agua en Ecuador",
    "detector de fugas de agua Ecuador",
    "detección de fugas con geófono",
    "detección de fugas con cámara termográfica",
    "detección de fugas Pichincha",
    "detección de fugas Tungurahua Ambato",
    "detección de fugas Chimborazo Riobamba",
    "Detecfy",
  ],
})

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: DETECFY_ECUADOR.title,
      description: DETECFY_ECUADOR.description,
      inLanguage: "es-EC",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#service` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Detección de fugas de agua en Ecuador — Detecfy",
      serviceType: "Detección y localización de fugas de agua a domicilio",
      description: DETECFY_ECUADOR.description,
      url,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "Country", name: "Ecuador" },
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
        { "@type": "ListItem", position: 2, name: "Detecfy: detección de fugas de agua en Ecuador", item: url },
      ],
    },
  ],
}

export default function DetecfyEcuadorPage() {
  return (
    <main id="contenido">
      <DetecfyEcuadorLanding />
      <JsonLd id="detecfy-ecuador-service-schema" data={serviceSchema} />
      <JsonLd id="detecfy-ecuador-faq-schema" data={faqSchema(DETECFY_ECUADOR_FAQS, url)} />
    </main>
  )
}
