import { MessageSquareText, MapPinned, Wrench } from "lucide-react"
import { WhatsappButton } from "@/components/cta-buttons"
import { WA_MESSAGES } from "@/lib/site"

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Cuéntanos qué pasa",
    text: "Escríbenos por WhatsApp describiendo el problema. Si puedes, manda una foto: nos ahorra media visita de diagnóstico.",
  },
  {
    icon: MapPinned,
    title: "Envías tu ubicación",
    text: "Compartes la dirección dentro de Quito o los valles y coordinamos el horario de la visita del plomero.",
  },
  {
    icon: Wrench,
    title: "Resolvemos en tu domicilio",
    text: "El plomero revisa, te da el presupuesto y, con tu visto bueno, hace el trabajo y deja el área limpia.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="h2 mt-4">Tres pasos para tener un plomero en casa</h2>
          <p className="lead mx-auto mt-4">
            Sin formularios largos ni llamadas eternas. Lo resolvemos por chat y coordinamos la visita.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="card-soft h-full pt-8">
                <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-[15px] font-bold text-white ring-4 ring-white">
                  {i + 1}
                </span>
                <step.icon className="h-6 w-6 text-teal" />
                <h3 className="mt-4 font-display text-[18px] font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <WhatsappButton message={WA_MESSAGES.services} label="Empezar por WhatsApp" />
        </div>
      </div>
    </section>
  )
}
