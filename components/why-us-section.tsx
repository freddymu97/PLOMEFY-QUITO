import type { LucideIcon } from "lucide-react"
import { BadgeCheck, CalendarCheck, Home, Map, MessageCircle, ReceiptText } from "lucide-react"
import { PipeDrop } from "@/components/icons"
import { REASONS } from "@/lib/site"

const ICONS: Record<string, LucideIcon> = {
  receipt: ReceiptText,
  calendar: CalendarCheck,
  badge: BadgeCheck,
  home: Home,
  map: Map,
  chat: MessageCircle,
}

export function WhyUsSection() {
  return (
    <section className="section relative overflow-hidden bg-navy text-white">
      <PipeDrop className="absolute -right-16 -top-10 h-[420px] w-[420px] text-white/[0.04]" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-teal/40 bg-teal/15 px-3 py-1 text-[13px] font-semibold text-teal">
            Por qué Plomefy
          </p>
          <h2 className="mt-4 font-display text-[26px] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[32px] lg:text-[38px]">
            Plomería a domicilio sin sorpresas
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
            Lo que más molesta de llamar a un plomero es no saber cuánto va a costar ni cuándo va a llegar. Trabajamos
            para quitar esas dos dudas del medio.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => {
            const Icon = ICONS[reason.icon] ?? BadgeCheck
            return (
              <div key={reason.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[16.5px] font-bold">{reason.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">{reason.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
