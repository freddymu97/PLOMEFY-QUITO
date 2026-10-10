import Image from "next/image"
import { SERVICE_BRANDING, type ServiceBrand } from "@/lib/service-branding"
import { cn } from "@/lib/utils"

export function ServiceLogo({
  brand,
  placement = "header",
  priority = false,
  className,
}: {
  brand: ServiceBrand
  placement?: "header" | "selector"
  priority?: boolean
  className?: string
}) {
  const branding = SERVICE_BRANDING[brand]
  const isHeader = placement === "header"

  return (
    <span data-service-brand={brand} className={cn("inline-flex max-w-full flex-col items-start", isHeader ? "gap-1" : "gap-1.5", className)}>
      <Image
        src={branding.logo.src}
        alt={branding.logo.alt}
        width={branding.logo.width}
        height={branding.logo.height}
        priority={priority}
        sizes={isHeader ? "(min-width: 640px) 170px, 164px" : "210px"}
        className={cn(
          "max-w-full object-contain object-left",
          isHeader ? "h-9 w-[164px] sm:h-9 sm:w-[170px]" : "h-14 w-[210px]",
        )}
      />
      <span className={cn("font-medium leading-tight text-slate-600", isHeader ? "whitespace-nowrap text-[10px] sm:text-[11px]" : "text-[12px] sm:text-[13px]")}>
        {branding.endorsement}
      </span>
    </span>
  )
}
