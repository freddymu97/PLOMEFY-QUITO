import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { PHONE_DISPLAY, SERVICES, SITE, ZONES, telLink } from "@/lib/site"
import { DESTAPEFY_PATH } from "@/lib/destapefy"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/plomefy-logo.png"
            alt="Plomefy"
            width={420}
            height={123}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-slate-600">
            Plomeros a domicilio en Quito para destapes de cañerías, fugas de agua, sanitarios, calefones y
            mantenimiento de tus instalaciones.
          </p>
          <p className="mt-4 text-[13.5px] font-medium text-navy">{SITE.schedule}</p>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-bold text-navy">Servicios</h3>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.slug === "destape-de-canerias" ? DESTAPEFY_PATH : "/#servicios"}
                  className="text-[14px] text-slate-600 transition-colors hover:text-navy"
                >
                  {s.slug === "destape-de-canerias" ? "Destapefy · Destape de cañerías en Quito" : s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-bold text-navy">Cobertura</h3>
          <ul className="mt-4 space-y-3">
            {ZONES.map((z) => (
              <li key={z.name}>
                <span className="block text-[14px] font-semibold text-slate-700">{z.name}</span>
                <span className="text-[13px] leading-relaxed text-slate-500">{z.areas.join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-bold text-navy">Contacto</h3>
          <ul className="mt-4 space-y-3 text-[14px] text-slate-600">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-teal" />
              <a href={telLink} className="font-semibold text-navy hover:text-teal">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-teal" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>Quito, Pichincha — Ecuador</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container-page flex flex-col gap-2 py-6 text-[13px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.brand}. Plomería a domicilio en Quito.
          </p>
          <p>Norte · Centro · Sur · Cumbayá · Tumbaco · Valle de los Chillos</p>
        </div>
      </div>
    </footer>
  )
}
