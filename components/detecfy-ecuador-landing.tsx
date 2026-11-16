import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Bath,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Droplets,
  Gauge,
  MapPin,
  MessageSquareText,
  ReceiptText,
  Square,
  Thermometer,
  Volume2,
  Waves,
} from "lucide-react"
import { CallButton, WhatsappButton } from "@/components/cta-buttons"
import { PipeDrop } from "@/components/icons"
import { ServiceLogo } from "@/components/service-logo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DETECFY_METHODS as LOCAL_METHODS, DETECFY_SERVICES as LOCAL_SERVICES } from "@/lib/detecfy"
import {
  DETECFY_ECUADOR,
  DETECFY_ECUADOR_FAQS,
  DETECFY_ECUADOR_MESSAGES,
  DETECFY_ECUADOR_ZONES,
} from "@/lib/detecfy-ecuador"
import { PHONE_DISPLAY, SITE, telLink, waLink } from "@/lib/site"

const PROBLEMS = [
  { label: "Pared húmeda", message: "Hola, veo humedad en una pared y quiero consultar con Detecfy una detección de fugas en Ecuador. Les envío mi ciudad o parroquia y una foto." },
  { label: "Agua en el piso", message: "Hola, necesito una revisión de Detecfy en Ecuador porque aparece agua en el piso. Quiero compartirles mi ubicación y cotizar la detección." },
  { label: "Consumo elevado", message: "Hola, mi consumo de agua aumentó sin explicación. Quisiera consultar a Detecfy en Ecuador y enviarles mi ciudad y las señales que noté." },
  { label: "Fuga que no se ve", message: "Hola, sospecho una fuga oculta en mi propiedad en Ecuador. Quiero cotizar con Detecfy y coordinar el traslado hasta mi ubicación." },
  { label: "Humedad en la losa", message: "Hola, tengo humedad en una losa y busco detección con Detecfy en Ecuador. ¿Qué datos de mi instalación y ubicación necesitan para cotizar?" },
  { label: "Fuga en edificio", message: "Hola, queremos consultar a Detecfy por una posible fuga en un edificio en Ecuador. Les compartimos la ciudad, los accesos y el área afectada." },
] as const

// Reuse the technical descriptions; each national contact message asks for location.
const SERVICES = LOCAL_SERVICES.map((service) => ({
  ...service,
  message: `Hola, consulto el servicio de Detecfy en Ecuador: ${service.title.toLowerCase()}. Quiero cotizar la detección y enviarles mi ciudad o parroquia y ubicación.`,
}))

const METHODS = LOCAL_METHODS.map((method) => ({
  ...method,
  message: `Hola, me interesa consultar con Detecfy en Ecuador: ${method.title.toLowerCase()}. Les comparto mi instalación y ubicación para saber si aplica a mi caso y cotizar.`,
}))

const STEPS = [
  {
    title: "Cuéntanos dónde estás y qué ocurre",
    text: "Envíanos tu provincia, ciudad o parroquia, un pin de ubicación y las señales de la posible fuga. Las fotos y los detalles de acceso ayudan a preparar la detección.",
  },
  {
    title: "Cotizamos y coordinamos el viaje",
    text: "Definimos contigo el método, el alcance y el traslado. Confirmamos la cotización, qué incluye y la disponibilidad antes de programar la visita.",
  },
  {
    title: "Viajamos con el equipo y revisamos",
    text: "Acudimos con los implementos adecuados para tu instalación. Buscamos localizar la fuga, te explicamos los hallazgos y acordamos el siguiente paso.",
  },
] as const

const QUOTE_FACTORS = [
  { title: "Tu ciudad, parroquia o destino", text: "Comparte provincia, dirección o ubicación en el mapa y referencias de acceso para coordinar el traslado." },
  { title: "Las señales que has notado", text: "Cuéntanos si hay humedad, consumo elevado o agua sin un origen visible. Puedes enviar fotos del área afectada." },
  { title: "Tu instalación y sus accesos", text: "Indica el tipo de propiedad, dónde están las tuberías y qué espacios podemos revisar para elegir el método adecuado." },
  { title: "El alcance de la detección", text: "Te explicamos qué incluye la visita y el traslado. Una reparación, si hace falta, se define y cotiza contigo por separado." },
] as const

const SERVICE_ICONS: Record<string, LucideIcon> = {
  wall: Droplets,
  floor: Square,
  pipe: Waves,
  meter: Gauge,
  bath: Bath,
  building: Building2,
}

const HERO_BADGES = [
  { icon: ReceiptText, text: "Presupuesto previo" },
  { icon: MapPin, text: "Cobertura nacional" },
] as const

function DetecfyHero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="detecfy-ecuador-title">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-teal/[0.07] blur-3xl" aria-hidden="true" />
      <PipeDrop className="absolute -left-10 top-40 hidden h-72 w-72 text-navy/[0.05] lg:block" />

      <div className="container-page relative pt-4 sm:pt-7">
        <nav aria-label="Ruta de navegación" className="text-[12px] text-slate-500 sm:text-[13px]">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="rounded-sm hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">Inicio</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="font-medium text-navy">{DETECFY_ECUADOR.name}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-8 pb-10 pt-5 sm:gap-12 sm:pb-16 sm:pt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div className="min-w-0">
            <p className="eyebrow text-[12px] sm:text-[13px]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
              {DETECFY_ECUADOR.name} · {DETECFY_ECUADOR.tagline}
            </p>
            <h1 id="detecfy-ecuador-title" className="mt-4 font-display text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:mt-5 sm:text-[46px] lg:text-[54px]">
              Detección de fugas de agua en <span className="text-[#00857d]">Ecuador</span>
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              Detección de fugas de agua en Ecuador con geófono y cámara termográfica, según tu instalación.
            </p>
            <p className="mt-3 font-display text-[17px] font-bold text-navy sm:mt-5 sm:text-[22px]">
              Viajamos con nuestros equipos hasta tu ciudad o parroquia.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row lg:flex-col xl:flex-row">
              <WhatsappButton message={DETECFY_ECUADOR_MESSAGES.hero} label="Cotiza tu detección" location="detecfy-ecuador-hero" service="detecfy" />
              <CallButton location="detecfy-ecuador-hero" service="detecfy" className="hidden sm:inline-flex" />
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-[15px]">
              <a href={telLink} data-cta="phone" data-cta-location="detecfy-ecuador-hero-inline" data-service="detecfy" className="font-semibold text-navy hover:text-[#00857d]">{PHONE_DISPLAY}</a>
              {" "}· {SITE.scheduleShort}
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">Comparte tu ubicación. Coordinamos la detección, el traslado y la cotización antes de la visita.</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 sm:mt-7">
              {HERO_BADGES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[13px] font-medium text-slate-600 sm:text-[14px]">
                  <Icon className="h-4 w-4 shrink-0 text-[#00857d]" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_70px_-45px_rgba(0,51,109,.55)]">
            <div className="border-b border-teal/15 bg-gradient-to-r from-teal/[0.08] to-aqua/[0.05] px-5 py-4 sm:px-7 sm:py-5">
              <ServiceLogo brand="detecfy" placement="selector" />
            </div>
            <div className="p-5 sm:p-7">
              <h2 className="font-display text-[17px] font-bold text-navy">¿Qué señal has notado?</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">Elige tu caso para consultar por WhatsApp.</p>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5">
                {PROBLEMS.map((problem) => (
                  <a
                    key={problem.label}
                    href={waLink(problem.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp"
                    data-cta-location="detecfy-ecuador-hero-problem"
                    data-service="detecfy"
                    aria-label={`Consultar por WhatsApp: ${problem.label}`}
                    className="group flex min-h-[52px] items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-[13px] font-medium leading-snug text-navy transition hover:border-teal hover:bg-teal/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:px-4 sm:text-[14px]"
                  >
                    {problem.label}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#00857d]" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-4 border-t border-slate-100 pt-4 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
                La humedad o un consumo elevado orientan la revisión; no confirman una fuga por sí solos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DetecfyServices() {
  return (
    <section id="servicios" className="section scroll-mt-24 bg-slate-50/70" aria-labelledby="detecfy-ecuador-services-title">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Fugas ocultas y no visibles</p>
          <h2 id="detecfy-ecuador-services-title" className="h2 mt-4">Localización de fugas de agua en tu propiedad</h2>
          <p className="lead mt-4">
            Atendemos casas, departamentos, negocios y edificios en Ecuador. Llevamos la experiencia
            técnica de Detecfy hasta tu propiedad para revisar la instalación y localizar el tramo afectado.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article key={service.slug} className="card-soft flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.06] text-navy"><Icon className="h-[22px] w-[22px]" aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-[18px] font-bold leading-snug text-navy">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-slate-600">{service.description}</p>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-location="detecfy-ecuador-service"
                  data-service="detecfy"
                  aria-label={`Consultar por WhatsApp: ${service.title}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-slate-100 pt-4 text-[14px] font-semibold text-navy hover:text-[#00857d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >Consultar este caso <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </article>
            )
          })}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-teal/20 bg-teal/[0.05] px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-[18px] font-bold text-navy">Revisar primero para intervenir donde hace falta</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">Te explicamos lo que encontramos y el siguiente paso. Si hace falta reparar, el alcance y el presupuesto se confirman antes de hacerlo.</p>
          </div>
          <WhatsappButton message={DETECFY_ECUADOR_MESSAGES.services} label="Consultar mi caso" size="md" className="shrink-0" location="detecfy-ecuador-services" service="detecfy" />
        </div>
      </div>
    </section>
  )
}

function DetecfyProcess() {
  return (
    <section id="como-funciona" className="section scroll-mt-24 bg-white" aria-labelledby="detecfy-ecuador-process-title">
      <div className="container-page">
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="eyebrow">Método de trabajo</p>
            <h2 className="mt-4 font-display text-[24px] font-bold leading-tight text-navy sm:text-[28px]">Experiencia técnica para una detección personalizada</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">Cada instalación necesita su propia revisión. Combinamos experiencia, equipos de detección y una explicación clara de los hallazgos para orientar el trabajo y evitar abrir áreas innecesarias.</p>
          </div>
          <ul className="grid content-center gap-5">
            {[
              "Viajamos con los implementos necesarios para la revisión acordada.",
              "Elegimos geófono o cámara termográfica según las condiciones del caso.",
              "Si hace falta abrir una pared o un piso, te explicamos el motivo y el alcance.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[#00857d]"><Check className="h-4 w-4" aria-hidden="true" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="h2 mt-10">Detección con geófono y cámara termográfica</h2>
        <p className="lead mt-3 max-w-3xl">Elegimos el método según la instalación y las condiciones del lugar. Confirma cuál corresponde a tu caso antes de la visita.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {METHODS.map((method) => {
            const Icon = method.icon === "acoustic" ? Volume2 : Thermometer
            return (
              <article key={method.title} className="card-soft flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.06] text-navy"><Icon className="h-[22px] w-[22px]" aria-hidden="true" /></span>
                <h3 className="mt-4 font-display text-[19px] font-bold text-navy">{method.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">{method.description}</p>
                <p className="mt-4 text-[13px] font-medium text-slate-600">{method.detail}</p>
                <a href={waLink(method.message)} target="_blank" rel="noopener noreferrer" data-cta="whatsapp" data-cta-location="detecfy-ecuador-method" data-service="detecfy" aria-label={`Consultar por WhatsApp: ${method.title}`} className="mt-4 inline-flex min-h-11 items-center gap-2 border-t border-slate-100 pt-4 text-[14px] font-semibold text-navy hover:text-[#00857d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">Consultar si aplica a mi caso <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </article>
            )
          })}
        </div>
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="detecfy-ecuador-process-title" className="h2 mt-4">De tu ubicación a una revisión en tu propiedad</h2>
          <p className="lead mt-4">Desde Ambato, Riobamba o cualquier destino de Ecuador: cuéntanos tu caso y organicemos la visita.</p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="card-soft h-full pt-8">
                <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-[15px] font-bold text-white ring-4 ring-white" aria-hidden="true">{index + 1}</span>
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

function DetecfyQuote() {
  return (
    <section id="cotizacion" className="section scroll-mt-24 bg-navy" aria-labelledby="detecfy-ecuador-quote-title">
      <div className="container-page grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[13px] font-semibold text-white">Cotización según tu caso</p>
          <h2 id="detecfy-ecuador-quote-title" className="h2 mt-4 text-white">Cotiza tu detección de fugas</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/75 sm:text-[17px]">Tu ubicación y tu instalación marcan el punto de partida. Cuéntanos qué ocurre y preparamos una cotización personalizada para llevar la detección hasta tu propiedad.</p>
          <div className="mt-7"><WhatsappButton message={DETECFY_ECUADOR_MESSAGES.quote} label="Cotiza tu detección" location="detecfy-ecuador-quote" service="detecfy" /></div>
          <p className="mt-5 text-[14px] leading-relaxed text-white/75">Confirmamos contigo el método, el alcance de la revisión, el traslado y qué incluye la cotización antes de programar la visita.</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/75">Si hace falta reparar, te explicamos la intervención y su cotización para que puedas decidir el siguiente paso.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 sm:p-8">
          <h3 className="font-display text-[21px] font-bold text-navy">Qué necesitamos saber para cotizar</h3>
          <div className="mt-6 space-y-6">
            {QUOTE_FACTORS.map((factor) => (
              <div key={factor.title} className="flex gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/[0.08] text-[#00857d]"><ReceiptText className="h-[18px] w-[18px]" aria-hidden="true" /></span>
                <div>
                  <h4 className="text-[15px] font-semibold text-navy">{factor.title}</h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{factor.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex items-start gap-2.5 border-t border-slate-100 pt-5 text-[14px] leading-relaxed text-slate-600">
            <MessageSquareText className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#00857d]" aria-hidden="true" />
            Una foto y una breve descripción ayudan a preparar la visita; la revisión confirma el origen del problema.
          </div>
        </div>
      </div>
    </section>
  )
}

function DetecfyCoverage() {
  return (
    <section id="cobertura" className="section scroll-mt-24 bg-slate-50/70" aria-labelledby="detecfy-ecuador-coverage-title">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Cobertura</p>
          <h2 id="detecfy-ecuador-coverage-title" className="h2 mt-4">Viajamos a ciudades, cantones y parroquias de Ecuador</h2>
          <p className="lead mt-4">Cobertura a nivel nacional: Pichincha, Tungurahua, Chimborazo y todo Ecuador. Llegamos también a parroquias y destinos fuera de las capitales. Comparte tu ubicación exacta para organizar el traslado con nuestros equipos y confirmar disponibilidad.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DETECFY_ECUADOR_ZONES.map((zone) => (
            <div key={zone.name} className="card-soft">
              <div className="flex items-center gap-2">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-[#00857d]" aria-hidden="true" />
                <h3 className="font-display text-[17px] font-bold text-navy">{zone.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {zone.areas.map((area) => <li key={area} className="rounded-full bg-slate-100 px-2.5 py-1 text-[13px] font-medium text-slate-600">{area}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-[19px] font-bold text-navy">¿Estás en Ambato, Riobamba o en una parroquia?</h3>
            <p className="mt-2 flex items-center gap-2 text-[14px] text-slate-600"><CalendarCheck className="h-4 w-4 shrink-0 text-[#00857d]" aria-hidden="true" />{SITE.schedule}</p>
          </div>
          <WhatsappButton message={DETECFY_ECUADOR_MESSAGES.coverage} label="Cotizar en mi ubicación" className="shrink-0" location="detecfy-ecuador-coverage" service="detecfy" />
        </div>
      </div>
    </section>
  )
}

function DetecfyFaqs() {
  return (
    <section id="preguntas" className="section scroll-mt-24 bg-white" aria-labelledby="detecfy-ecuador-faq-title">
      <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow"><CircleHelp className="h-4 w-4" aria-hidden="true" />Preguntas frecuentes</p>
          <h2 id="detecfy-ecuador-faq-title" className="h2 mt-4">Antes de solicitar la detección</h2>
          <p className="lead mt-4">Resuelve tus dudas sobre cobertura en Ecuador, traslado, equipos y cotización de la detección.</p>
          <div className="mt-7"><WhatsappButton message={DETECFY_ECUADOR_MESSAGES.faq} label="Tengo otra pregunta" size="md" location="detecfy-ecuador-faq" service="detecfy" /></div>
        </div>
        <Accordion type="single" collapsible defaultValue="detecfy-ecuador-faq-0" className="w-full">
          {DETECFY_ECUADOR_FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`detecfy-ecuador-faq-${index}`} className="border-slate-200">
              <AccordionTrigger className="gap-4 py-5 text-left font-display text-[16.5px] font-semibold text-navy hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">{faq.q}</AccordionTrigger>
              <AccordionContent forceMount className="pb-5 text-[15px] leading-relaxed text-slate-600 data-[state=closed]:hidden">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function DetecfyFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-deep py-14 sm:py-20" aria-labelledby="detecfy-ecuador-final-title">
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal/[0.14] blur-3xl" aria-hidden="true" />
      <div className="container-page relative text-center">
        <p className="text-[14px] font-semibold text-white/75">{DETECFY_ECUADOR.name} · {DETECFY_ECUADOR.tagline}</p>
        <h2 id="detecfy-ecuador-final-title" className="mx-auto mt-4 max-w-3xl font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-white sm:text-[38px]">Tu detección de fugas, donde estés en Ecuador.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/75 sm:text-[17px]">Dinos tu ciudad, cantón o parroquia y las señales que has notado. Viajamos con nuestros equipos para realizar una detección personalizada, con el alcance y la cotización acordados contigo.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsappButton message={DETECFY_ECUADOR_MESSAGES.final} label="Cotiza tu detección" location="detecfy-ecuador-final" service="detecfy" />
          <CallButton className="border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/10" location="detecfy-ecuador-final" service="detecfy" />
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-[14px] text-white/75"><Clock3 className="h-4 w-4" aria-hidden="true" />{SITE.schedule}</p>
        <Link href="/#servicios" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-[14px] font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ver otros servicios de plomería de Plomefy <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

export function DetecfyEcuadorLanding() {
  return (
    <>
      <DetecfyHero />
      <DetecfyServices />
      <DetecfyProcess />
      <DetecfyQuote />
      <DetecfyCoverage />
      <DetecfyFaqs />
      <DetecfyFinalCta />
    </>
  )
}
