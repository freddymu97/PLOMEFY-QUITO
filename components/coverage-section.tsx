import { MapPin } from "lucide-react"
import { WhatsappButton } from "@/components/cta-buttons"
import { WA_MESSAGES, ZONES } from "@/lib/site"

export function CoverageSection() {
  return (
    <section id="cobertura" className="section scroll-mt-24 bg-slate-50/70">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Cobertura</p>
          <h2 className="h2 mt-4">Plomero a domicilio en Quito norte, centro, sur y valles</h2>
          <p className="lead mt-4">
            Atendemos toda la ciudad y los valles. Si tu sector no aparece en la lista, escríbenos igual: es probable
            que también lleguemos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ZONES.map((zone) => (
            <div key={zone.name} className="card-soft">
              <div className="flex items-center gap-2">
                <MapPin className="h-[18px] w-[18px] text-teal" />
                <h3 className="font-display text-[17px] font-bold text-navy">{zone.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {zone.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-[13px] font-medium text-slate-600"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-navy px-6 py-9 text-center sm:px-10">
          <h3 className="font-display text-[21px] font-bold text-white sm:text-[26px]">
            ¿Necesitas un plomero en tu sector hoy?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
            Escríbenos con tu ubicación y te confirmamos la disponibilidad para tu zona dentro del horario de atención.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsappButton message={WA_MESSAGES.coverage} label="Consultar disponibilidad" />
          </div>
        </div>
      </div>
    </section>
  )
}
