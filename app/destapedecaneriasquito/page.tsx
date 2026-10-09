import type { Metadata } from "next"
import { DestapefyLanding } from "@/components/destapefy-landing"
import { JsonLd } from "@/components/json-ld"
import { DESTAPEFY, DESTAPEFY_FAQS, DESTAPEFY_PATH, DESTAPEFY_STARTING_PRICE } from "@/lib/destapefy"
import { BUSINESS_ID, WEBSITE_ID, faqSchema, pageMetadata } from "@/lib/seo"
import { PHONE_E164, SITE, ZONES } from "@/lib/site"

const url = `${SITE.url}${DESTAPEFY_PATH}`

export const metadata: Metadata = pageMetadata({
  title: DESTAPEFY.title,
  description: DESTAPEFY.description,
  path: DESTAPEFY_PATH,
  keywords: [
    "destape de cañerías quito",
    "destape de cañerías en quito",
    "destape de tuberías quito",
    "destape de inodoros quito",
    "destape de lavabos quito",
    "destape de fregaderos quito",
    "destape de duchas quito",
    "destape con sonda eléctrica quito",
    "destapes quito norte",
    "destapes quito sur",
    "destapefy",
  ],
})

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Destape de cañerías en Quito | Destapefy",
      description: "Destapefy, el servicio de destape de cañerías a domicilio de Plomefy en Quito.",
      inLanguage: "es-EC",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#service` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Destape de cañerías en Quito — Destapefy",
      serviceType: "Destape de cañerías y tuberías a domicilio",
      description: DESTAPEFY.description,
      url,
      provider: { "@id": BUSINESS_ID },
      areaServed: ZONES.flatMap((zone) => zone.areas).map((area) => ({
        "@type": "Place",
        name: `${area}, Quito`,
      })),
      offers: {
        "@type": "Offer",
        url,
        description: `Destapes de cañerías desde $${DESTAPEFY_STARTING_PRICE}. El precio final se cotiza según el problema y el alcance del trabajo.`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: DESTAPEFY_STARTING_PRICE,
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
        { "@type": "ListItem", position: 2, name: "Destapefy: destape de cañerías en Quito", item: url },
      ],
    },
  ],
}

export default function DestapefyPage() {
  return (
    <main id="contenido">
      <DestapefyLanding />
      <JsonLd id="destapefy-service-schema" data={serviceSchema} />
      <JsonLd id="destapefy-faq-schema" data={faqSchema(DESTAPEFY_FAQS, url)} />
    </main>
  )
}
