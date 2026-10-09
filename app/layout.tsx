import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import "@fontsource-variable/inter"
import "@fontsource-variable/plus-jakarta-sans"
import { JsonLd } from "@/components/json-ld"
import { ContactTracking } from "@/components/contact-tracking"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { SITE } from "@/lib/site"
import { siteSchema } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Plomefy · Plomería a domicilio en Quito",
  robots: { index: true, follow: true },
  icons: {
    icon: "/plomefy-icon.png",
    apple: "/plomefy-icon.png",
  },
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: "#00336d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-EC">
      <body className="min-h-screen bg-white font-sans text-foreground">
        <a href="#contenido" className="sr-only z-[60] rounded-lg bg-navy px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFloat />
        <ContactTracking />
        <JsonLd id="site-schema" data={siteSchema} />
      </body>
    </html>
  )
}
