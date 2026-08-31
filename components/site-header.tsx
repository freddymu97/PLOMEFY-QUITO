"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { WhatsappButton } from "@/components/cta-buttons"
import { PHONE_DISPLAY, SITE, WA_MESSAGES, telLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#preguntas", label: "Preguntas" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Barra de utilidad */}
      <div className="hidden bg-navy text-white md:block">
        <div className="container-page flex h-9 items-center justify-between text-[13px]">
          <p className="font-medium text-white/85">{SITE.schedule}</p>
          <div className="flex items-center gap-5">
            <span className="text-white/70">Quito · norte, centro, sur y valles</span>
            <a href={telLink} className="inline-flex items-center gap-1.5 font-semibold hover:text-teal">
              <Phone className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur transition-shadow",
          scrolled ? "border-slate-200 shadow-[0_6px_24px_-18px_rgba(0,51,109,.55)]" : "border-transparent",
        )}
      >
        <div className="container-page flex h-16 items-center gap-4 lg:h-[72px]">
          <Link href="/" className="shrink-0" aria-label="Plomefy — inicio">
            <Image
              src="/plomefy-logo.png"
              alt="Plomefy, plomería a domicilio en Quito"
              width={420}
              height={123}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-slate-600 transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-6">
            <a
              href={telLink}
              className="hidden items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-navy/40 sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <WhatsappButton message={WA_MESSAGES.hero} label="WhatsApp" size="md" className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-b border-slate-200 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3.5 text-[15px] font-medium text-navy last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 py-4">
              <WhatsappButton message={WA_MESSAGES.hero} />
              <a
                href={telLink}
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-navy/20 font-semibold text-navy"
              >
                <Phone className="h-[18px] w-[18px]" />
                Llamar {PHONE_DISPLAY}
              </a>
              <p className="pt-1 text-center text-[13px] text-slate-500">{SITE.schedule}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
