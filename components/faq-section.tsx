import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WhatsappButton } from "@/components/cta-buttons"
import { FAQS, WA_MESSAGES } from "@/lib/site"

export function FaqSection() {
  return (
    <section id="preguntas" className="section scroll-mt-24 bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="h2 mt-4">Dudas antes de llamar al plomero</h2>
          <p className="lead mt-4">
            Lo que más nos preguntan sobre el servicio de plomería a domicilio en Quito.
          </p>
          <div className="mt-7">
            <WhatsappButton message={WA_MESSAGES.faq} label="Tengo otra pregunta" size="md" />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`} className="border-slate-200">
              <AccordionTrigger className="py-5 text-left font-display text-[16.5px] font-semibold text-navy hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-slate-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
