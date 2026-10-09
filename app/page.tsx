import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { faqSchema, pageMetadata } from "@/lib/seo"
import { FAQS, SITE } from "@/lib/site"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CoverageSection } from "@/components/coverage-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export const metadata: Metadata = pageMetadata({
  title: "Plomero a domicilio en Quito | Plomefy · plomería, destapes y fugas",
  description:
    "Plomero a domicilio en Quito para destape de cañerías, reparación de fugas de agua, sanitarios, grifería y calefones. Atendemos los 7 días en norte, centro, sur y valles.",
  path: "/",
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
})

export default function Home() {
  return (
    <main id="contenido">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <CoverageSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCtaSection />
      <JsonLd id="home-faq-schema" data={faqSchema(FAQS, `${SITE.url}/`)} />
    </main>
  )
}
