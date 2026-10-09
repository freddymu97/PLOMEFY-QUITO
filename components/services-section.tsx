import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import {
  Droplets,
  Flame,
  Gauge,
  Hammer,
  Search,
  ShowerHead,
  Waves,
  Wrench,
} from "lucide-react"
import { WhatsappButton } from "@/components/cta-buttons"
import { SERVICES, WA_MESSAGES } from "@/lib/site"
import { DESTAPEFY_PATH } from "@/lib/destapefy"

const ICONS: Record<string, LucideIcon> = {
  pipe: Waves,
  droplet: Droplets,
  search: Search,
  wrench: Wrench,
  flame: Flame,
  shower: ShowerHead,
  gauge: Gauge,
  hammer: Hammer,
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section scroll-mt-24 bg-slate-50/70">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="h2 mt-4">Servicios de plomería a domicilio en Quito</h2>
          <p className="lead mt-4">
            Trabajos de plomería para casas, departamentos, oficinas y edificios. Llegamos con la herramienta que el
            trabajo pide y te explicamos qué encontramos antes de repararlo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Wrench
            return (
              <article key={service.slug} className="card-soft flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.06] text-navy">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-navy">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13.5px] text-slate-500">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                {service.slug === "destape-de-canerias" && (
                  <Link href={DESTAPEFY_PATH} className="mt-5 text-[14px] font-semibold text-navy underline decoration-teal decoration-2 underline-offset-4">
                    Destape de cañerías en Quito con Destapefy →
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-[19px] font-bold text-navy">¿No ves tu problema en la lista?</p>
            <p className="mt-1 text-[15px] text-slate-600">
              Cuéntanos qué pasa y te decimos si es un trabajo que hacemos.
            </p>
          </div>
          <WhatsappButton message={WA_MESSAGES.services} label="Consultar por WhatsApp" className="shrink-0" />
        </div>
      </div>
    </section>
  )
}
