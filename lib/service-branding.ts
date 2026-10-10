export type ServiceBrand = "destapefy" | "detecfy"

type ServiceBranding = {
  name: string
  logo: { src: string; width: number; height: number; alt: string }
  endorsement: string
}

export const SERVICE_BRANDING = {
  destapefy: {
    name: "Destapefy",
    logo: {
      src: "/destapefy-logo.webp",
      width: 1065,
      height: 283,
      alt: "Destapefy, destape de cañerías de Plomefy",
    },
    endorsement: "Destape de cañerías · por Plomefy",
  },
  detecfy: {
    name: "Detecfy",
    logo: {
      src: "/detecfy-logo.webp",
      width: 1065,
      height: 312,
      alt: "Detecfy, detección de fugas de Plomefy",
    },
    endorsement: "Detección de fugas · por Plomefy",
  },
} as const satisfies Record<ServiceBrand, ServiceBranding>
