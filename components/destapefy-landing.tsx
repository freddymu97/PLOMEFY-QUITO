import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Clock3,
  Droplets,
  MapPin,
  MessageSquareText,
  ReceiptText,
  ShowerHead,
  Waves,
  Wrench,
} from "lucide-react"
import { CallButton, WhatsappButton } from "@/components/cta-buttons"
import { PipeDrop } from "@/components/icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  DESTAPEFY,
  DESTAPEFY_FAQS,
  DESTAPEFY_MESSAGES,
  DESTAPEFY_PRICE_FACTORS,
  DESTAPEFY_PRICES,
  DESTAPEFY_PROBLEMS,
  DESTAPEFY_SERVICES,
  DESTAPEFY_SIGNALS,
  DESTAPEFY_STARTING_PRICE,
  DESTAPEFY_STEPS,
} from "@/lib/destapefy"
import { PHONE_DISPLAY, SITE, ZONES, telLink, waLink } from "@/lib/site"

const SERVICE_ICONS: Record<string, LucideIcon> = {
  kitchen: Droplets,
  toilet: Waves,
  sink: Wrench,
  shower: ShowerHead,
  pipe: Waves,
  box: ClipboardList,
}

const HERO_BADGES = [
  { icon: ReceiptText, text: "Presupuesto antes de iniciar" },
  { icon: CalendarCheck, text: "Atendemos los 7 días" },
  { icon: MapPin, text: "Quito y valles" },
] as const

function DestapefyHero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="destapefy-title">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-teal/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <PipeDrop className="absolute -left-10 top-40 hidden h-72 w-72 text-navy/[0.05] lg:block" />

      <div className="container-page relative pt-6 sm:pt-8">
        <nav aria-label="Ruta de navegación" className="text-[13px] text-slate-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="rounded-sm transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="font-medium text-navy">{DESTAPEFY.name}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 pb-14 pt-10 sm:pb-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <p className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
              {DESTAPEFY.name} · {DESTAPEFY.tagline}
            </p>
            <h1 id="destapefy-title" className="mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[46px] lg:text-[56px]">
              Destape de cañerías en <span className="text-[#00857d]">Quito</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-600 sm:text-lg">
              ¿El agua no baja? Nuestro servicio de destape de cañerías en Quito atiende
              fregaderos, inodoros y duchas en tu domicilio.
              Revisamos el problema, te damos un presupuesto claro y empezamos con tu aprobación.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-teal/20 bg-white/90 px-4 py-3">
              <ReceiptText className="h-6 w-6 shrink-0 text-[#00857d]" aria-hidden="true" />
              <div>
                <p className="font-display text-[18px] font-bold text-navy">Destapes desde ${DESTAPEFY_STARTING_PRICE} <span className="text-[13px] font-semibold">USD</span></p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-slate-600">Precio final según el problema y el acceso, antes de empezar.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton message={DESTAPEFY_MESSAGES.hero} label="Cotizar mi destape" location="destapefy-hero" service="destapefy" />
              <CallButton location="destapefy-hero" service="destapefy" />
            </div>
            <p className="mt-4 text-[15px] text-slate-600">
              Llámanos al{" "}
              <a href={telLink} data-cta="phone" data-cta-location="destapefy-hero-inline" data-service="destapefy" className="font-semibold text-navy hover:text-[#00857d]">{PHONE_DISPLAY}</a>
              {" "}· {SITE.scheduleShort}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {HERO_BADGES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[14px] font-medium text-slate-600">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-teal" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_70px_-45px_rgba(0,51,109,.55)]">
            <div className="border-b border-teal/15 bg-gradient-to-r from-teal/[0.08] to-aqua/[0.05] px-6 py-5 sm:px-7">
              <p className="font-display text-[23px] font-extrabold tracking-tight text-navy">Destape<span className="text-[#00857d]">fy</span></p>
              <p className="mt-0.5 text-[13px] font-medium text-slate-600">{DESTAPEFY.tagline} · Quito</p>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <MessageSquareText className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <h2 className="font-display text-[17px] font-bold text-navy">¿Qué está tapado?</h2>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Elige tu problema para abrir WhatsApp con el mensaje listo.
              </p>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {DESTAPEFY_PROBLEMS.map((problem) => (
                  <a
                    key={problem.label}
                    href={waLink(problem.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="destapefy-hero-problem"
                    data-service="destapefy"
                    aria-label={`Consultar por WhatsApp: ${problem.label}`}
                    className="group flex min-h-[52px] items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] font-medium text-navy transition hover:border-teal hover:bg-teal/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                  >
                    {problem.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-[13px] text-slate-500">
                <Clock3 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                {SITE.schedule}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DestapefyServices() {
  return (
    <section id="servicios" className="section scroll-mt-24 bg-slate-50/70" aria-labelledby="destapefy-services-title">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Qué destapamos</p>
          <h2 id="destapefy-services-title" className="h2 mt-4">Destape de tuberías y desagües en Quito</h2>
          <p className="lead mt-4">
            Destapamos tuberías de desagüe en casas, departamentos, oficinas, locales y edificios.
            Revisamos el punto afectado y elegimos el acceso según tu instalación.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTAPEFY_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article key={service.slug} className="card-soft flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.06] text-navy">
                  <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-bold leading-snug text-navy">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-slate-600">{service.description}</p>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="destapefy-service"
                  data-service="destapefy"
                  aria-label={`Consultar por WhatsApp: ${service.title}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-slate-100 pt-4 text-[14px] font-semibold text-navy transition hover:text-[#00857d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  Consultar este destape <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-teal/20 bg-teal/[0.05] px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-[18px] font-bold text-navy">Destape de cañerías sin romper, cuando la instalación lo permite</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
              Usamos sonda eléctrica para el destape de tuberías por los accesos existentes cuando corresponde.
              Si hace falta otra intervención, te la explicamos antes de empezar.
            </p>
          </div>
          <WhatsappButton message={DESTAPEFY_MESSAGES.services} label="Consultar mi caso" size="md" className="shrink-0" location="destapefy-services" service="destapefy" />
        </div>
      </div>
    </section>
  )
}

function DestapefyProcess() {
  return (
    <section id="como-funciona" className="section scroll-mt-24 bg-white" aria-labelledby="destapefy-process-title">
      <div className="container-page">
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="eyebrow">Señales de una obstrucción</p>
            <h2 className="mt-4 font-display text-[24px] font-bold leading-tight text-navy sm:text-[28px]">¿Te pasa alguna de estas cosas?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Cuéntanos desde cuándo ocurre y qué puntos de la casa están afectados. Esa información ayuda a preparar la revisión.
            </p>
          </div>
          <ul className="grid content-center gap-4 sm:grid-cols-2">
            {DESTAPEFY_SIGNALS.map((signal) => (
              <li key={signal} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="destapefy-process-title" className="h2 mt-4">De tu mensaje al destape, paso a paso</h2>
          <p className="lead mt-4">Coordinamos por WhatsApp y te explicamos el trabajo antes de hacerlo.</p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {DESTAPEFY_STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="card-soft h-full pt-8">
                <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-[15px] font-bold text-white ring-4 ring-white" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="mt-2 font-display text-[18px] font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function DestapefyPricing() {
  return (
    <section id="tarifas" className="section scroll-mt-24 bg-navy" aria-labelledby="destapefy-pricing-title">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[13px] font-semibold text-white">Cotización clara</p>
          <h2 id="destapefy-pricing-title" className="h2 mt-4 text-white">Precio de destape de cañerías en Quito</h2>
          <p className="mt-5 font-display text-[30px] font-extrabold text-white sm:text-[38px]">
            Destapes desde ${DESTAPEFY_STARTING_PRICE} <span className="text-base font-semibold text-white/75">USD</span>
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-white/75 sm:text-[17px]">
            El precio final depende del problema, el acceso y el alcance del trabajo.
            Consulta el servicio que necesitas. Confirmamos el presupuesto antes de trabajar:
            tú decides con la información clara.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTAPEFY_PRICES.map((item) => (
            <article key={item.service} className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <h3 className="font-display text-[17px] font-bold text-white">{item.service}</h3>
              <p className="mt-2 flex-1 text-[14px] text-white/65">{item.description}</p>
              <p className="mt-5 font-display text-[21px] font-bold text-white">{item.price}</p>
              <a
                href={waLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-cta-location="destapefy-pricing"
                data-service="destapefy"
                aria-label={`Consultar tarifa por WhatsApp: ${item.service}`}
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] font-semibold text-white underline decoration-teal/60 underline-offset-4 transition hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Pedir cotización <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8">
          <h3 className="font-display text-[21px] font-bold text-navy">¿Qué necesitamos revisar para cotizar?</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {DESTAPEFY_PRICE_FACTORS.map((factor) => (
              <div key={factor.title}>
                <p className="flex items-center gap-2 text-[15px] font-semibold text-navy">
                  <ReceiptText className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {factor.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{factor.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[14px] leading-relaxed text-slate-600">
              Comparte tu sector y una foto del punto afectado. Consulta qué incluye el presupuesto antes de aprobarlo.
            </p>
            <WhatsappButton message={DESTAPEFY_MESSAGES.pricing} label="Consultar una tarifa" size="md" className="shrink-0" location="destapefy-pricing-general" service="destapefy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DestapefyCoverage() {
  return (
    <section id="cobertura" className="section scroll-mt-24 bg-slate-50/70" aria-labelledby="destapefy-coverage-title">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Cobertura</p>
          <h2 id="destapefy-coverage-title" className="h2 mt-4">Destapes en Quito norte, centro, sur y valles</h2>
          <p className="lead mt-4">
            Llevamos nuestro servicio de destape de cañerías a Quito norte, centro y sur,
            Cumbayá, Tumbaco y el Valle de los Chillos.{" "}
            Comparte tu ubicación para coordinar la visita y confirmar la disponibilidad en tu sector.
            Atendemos de lunes a domingo, de 7:30 a 19:30.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ZONES.map((zone) => (
            <div key={zone.name} className="card-soft">
              <div className="flex items-center gap-2">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-teal" aria-hidden="true" />
                <h3 className="font-display text-[17px] font-bold text-navy">{zone.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {zone.areas.map((area) => (
                  <li key={area} className="rounded-full bg-slate-100 px-2.5 py-1 text-[13px] font-medium text-slate-600">{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-[19px] font-bold text-navy">¿Tu barrio no aparece?</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-600">Envíanos tu ubicación y consultamos la atención para tu zona.</p>
          </div>
          <WhatsappButton message={DESTAPEFY_MESSAGES.coverage} label="Consultar cobertura" className="shrink-0" location="destapefy-coverage" service="destapefy" />
        </div>
      </div>
    </section>
  )
}

function DestapefyFaqs() {
  return (
    <section id="preguntas" className="section scroll-mt-24 bg-white" aria-labelledby="destapefy-faq-title">
      <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow"><CircleHelp className="h-4 w-4" aria-hidden="true" />Preguntas frecuentes</p>
          <h2 id="destapefy-faq-title" className="h2 mt-4">Lo que necesitas saber antes del destape</h2>
          <p className="lead mt-4">Tarifas, método de trabajo, horario y cobertura de Destapefy.</p>
          <div className="mt-7">
            <WhatsappButton message={DESTAPEFY_MESSAGES.faq} label="Tengo otra pregunta" size="md" location="destapefy-faq" service="destapefy" />
          </div>
        </div>
        <Accordion type="single" collapsible defaultValue="destapefy-faq-0" className="w-full">
          {DESTAPEFY_FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`destapefy-faq-${index}`} className="border-slate-200">
              <AccordionTrigger className="gap-4 py-5 text-left font-display text-[16.5px] font-semibold text-navy hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent forceMount className="pb-5 text-[15px] leading-relaxed text-slate-600 data-[state=closed]:hidden">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function DestapefyFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-deep py-16 sm:py-20" aria-labelledby="destapefy-final-title">
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal/[0.14] blur-3xl" aria-hidden="true" />
      <div className="container-page relative text-center">
        <p className="text-[14px] font-semibold text-white/70">{DESTAPEFY.name} · {DESTAPEFY.tagline}</p>
        <h2 id="destapefy-final-title" className="mx-auto mt-4 max-w-3xl font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-white sm:text-[38px]">
          Cuéntanos qué está tapado. Coordinamos el siguiente paso.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/75 sm:text-[17px]">
          Envía tu sector, el desagüe afectado y una foto si la tienes.
          Revisamos, cotizamos y hacemos el destape con tu aprobación.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsappButton message={DESTAPEFY_MESSAGES.final} label="Solicitar mi destape" location="destapefy-final" service="destapefy" />
          <CallButton className="border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/10" location="destapefy-final" service="destapefy" />
        </div>
        <p className="mt-7 text-[14px] text-white/70">{SITE.schedule}</p>
        <Link href="/#servicios" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-[14px] font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Ver otros servicios de plomería de Plomefy <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export function DestapefyLanding() {
  return (
    <>
      <DestapefyHero />
      <DestapefyServices />
      <DestapefyProcess />
      <DestapefyPricing />
      <DestapefyCoverage />
      <DestapefyFaqs />
      <DestapefyFinalCta />
    </>
  )
}
