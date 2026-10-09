"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { WhatsappIcon } from "@/components/icons"
import { PHONE_DISPLAY, WA_MESSAGES, telLink, waLink } from "@/lib/site"
import { DESTAPEFY_MESSAGES, DESTAPEFY_PATH } from "@/lib/destapefy"

export function WhatsappFloat() {
  const isDestapefy = usePathname() === DESTAPEFY_PATH
  const message = isDestapefy ? DESTAPEFY_MESSAGES.float : WA_MESSAGES.float
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Espaciador para que la barra móvil no tape el footer */}
      <div className="h-[68px] sm:hidden" aria-hidden="true" />

      {/* Móvil: barra fija con las dos acciones */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur sm:hidden">
        <div className="flex gap-2.5">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-cta-location="mobile-bar"
            className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-whatsapp text-[15px] font-semibold text-navy"
          >
            <WhatsappIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={telLink}
            data-cta="phone"
            data-cta-location="mobile-bar"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-navy/20 text-[15px] font-semibold text-navy"
          >
            <Phone className="h-[18px] w-[18px]" />
            Llamar
          </a>
        </div>
      </div>

      {/* Desktop: botón flotante */}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp"
        data-cta-location="floating"
        aria-label={`Escribir por WhatsApp al ${PHONE_DISPLAY}`}
        className={`group fixed bottom-7 right-7 z-40 hidden items-center gap-3 rounded-full bg-whatsapp py-3.5 pl-4 pr-5 font-semibold text-navy shadow-[0_16px_36px_-12px_rgba(37,211,102,.75)] transition-all duration-300 sm:flex ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <WhatsappIcon className="h-6 w-6" />
        <span className="text-[15px]">Escríbenos</span>
      </a>
    </>
  )
}
