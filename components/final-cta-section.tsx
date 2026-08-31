import { CallButton, WhatsappButton } from "@/components/cta-buttons"
import { SITE, WA_MESSAGES } from "@/lib/site"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-deep py-16 sm:py-20">
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal/[0.14] blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-white sm:text-[38px]">
          Plomero a domicilio en Quito, cuando lo necesitas
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">
          Destapes, fugas, sanitarios y calefones en norte, centro, sur, Cumbayá, Tumbaco y Valle de los Chillos.
          Escríbenos y coordinamos la visita.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsappButton message={WA_MESSAGES.final} label="Solicitar plomero a domicilio" />
          <CallButton
            className="border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
          />
        </div>
        <p className="mt-7 text-[14px] text-white/55">{SITE.schedule}</p>
      </div>
    </section>
  )
}
