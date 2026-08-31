import { Phone } from "lucide-react"
import { WhatsappIcon } from "@/components/icons"
import { waLink, telLink, PHONE_DISPLAY } from "@/lib/site"
import { cn } from "@/lib/utils"

type Size = "md" | "lg"

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-base",
}

export function WhatsappButton({
  message,
  label = "Escribir por WhatsApp",
  size = "lg",
  className,
}: {
  message: string
  label?: string
  size?: Size
  className?: string
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-whatsapp font-semibold text-white",
        "shadow-[0_10px_24px_-10px_rgba(37,211,102,.9)] transition hover:brightness-[0.95] active:scale-[.99]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp",
        sizes[size],
        className,
      )}
    >
      <WhatsappIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  )
}

export function CallButton({
  label = `Llamar ${PHONE_DISPLAY}`,
  size = "lg",
  variant = "outline",
  className,
}: {
  label?: string
  size?: Size
  variant?: "outline" | "solid"
  className?: string
}) {
  return (
    <a
      href={telLink}
      data-cta="phone"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold transition active:scale-[.99]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        variant === "outline"
          ? "border border-navy/20 bg-white text-navy hover:border-navy/45 hover:bg-navy/[0.04]"
          : "bg-navy text-white hover:bg-navy-deep",
        sizes[size],
        className,
      )}
    >
      <Phone className="h-[18px] w-[18px] shrink-0" />
      {label}
    </a>
  )
}
