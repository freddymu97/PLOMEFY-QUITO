import { CalendarCheck, MapPin, ReceiptText, ShieldCheck } from "lucide-react"
import { CallButton, WhatsappButton } from "@/components/cta-buttons"
import { PipeDrop } from "@/components/icons"
import { SITE, WA_MESSAGES, waLink } from "@/lib/site"

const QUICK = [
  { label: "Cañería tapada", msg: "Hola, tengo una cañería tapada en mi casa en Quito." },
  { label: "Fuga de agua", msg: "Hola, tengo una fuga de agua y necesito un plomero en Quito." },
  { label: "Inodoro o lavabo", msg: "Hola, necesito reparar un inodoro o lavabo en Quito." },
  { label: "Calefón", msg: "Hola, mi calefón está fallando y necesito una revisión en Quito." },
  { label: "Ducha eléctrica", msg: "Hola, necesito revisar la ducha eléctrica de mi casa en Quito." },
  { label: "Otro problema", msg: "Hola, tengo un problema de plomería en Quito y necesito ayuda." },
]

const BADGES = [
  { icon: ReceiptText, text: "Presupuesto antes de iniciar" },
  { icon: CalendarCheck, text: "Atendemos los 7 días" },
  { icon: MapPin, text: "Norte, centro, sur y valles" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-teal/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <PipeDrop className="absolute -left-10 top-24 hidden h-72 w-72 text-navy/[0.05] lg:block" />

      <div className="container-page relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Plomería a domicilio en Quito
          </p>

          <h1 className="mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[46px] lg:text-[56px]">
            Plomero a domicilio
            <br className="hidden sm:block" /> en <span className="text-teal">Quito</span>
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-600 sm:text-lg">
            Destape de cañerías, reparación de fugas de agua, sanitarios, grifería y calefones. Un plomero llega a tu
            domicilio, revisa el problema y te da el presupuesto antes de empezar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton message={WA_MESSAGES.hero} label="Solicitar plomero" />
            <CallButton />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-[14px] font-medium text-slate-600">
                <Icon className="h-[18px] w-[18px] text-teal" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Selector de problema — atajo directo a WhatsApp */}
        <div className="relative">
          <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(0,51,109,.55)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-teal" />
              <p className="font-display text-[17px] font-bold text-navy">¿Qué necesitas resolver?</p>
            </div>
            <p className="mt-1.5 text-sm text-slate-500">
              Elige el problema y te llevamos al chat con el mensaje listo.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {QUICK.map((item) => (
                <a
                  key={item.label}
                  href={waLink(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] font-medium text-navy transition hover:border-teal hover:bg-teal/[0.06]"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-teal"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-5 border-t border-slate-100 pt-4 text-[13px] text-slate-500">{SITE.schedule}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
