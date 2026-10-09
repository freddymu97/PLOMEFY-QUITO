"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { DESTAPEFY_PATH } from "@/lib/destapefy"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/** Contact intent for a future GTM/Ads setup; a click is not a completed sale. */
export function ContactTracking() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>("a[href]")
      if (!link) return
      const isWhatsapp = link.href.startsWith("https://wa.me/")
      const isPhone = link.href.startsWith("tel:")
      if (!isWhatsapp && !isPhone) return

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "contact_click",
        contact_method: isWhatsapp ? "whatsapp" : "phone",
        service_name: pathname === DESTAPEFY_PATH ? "destapefy" : "plomefy",
        page_path: pathname,
        cta_location:
          link.dataset.ctaLocation ||
          link.closest("section[id]")?.id ||
          (link.closest("header") ? "header" : link.closest("footer") ? "footer" : "hero"),
      })
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [pathname])

  return null
}
