import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CoverageSection } from "@/components/coverage-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <CoverageSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}
