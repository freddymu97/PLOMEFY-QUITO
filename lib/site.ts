/**
 * PLOMEFY — fuente única de verdad del contenido del sitio.
 * Cambia aquí y cambia en toda la landing.
 *
 * REGLAS DE COPY QUE NO SE ROMPEN (datos confirmados PLODO LATAM):
 *  1. Nunca prometer "24 horas" ni atención nocturna. Horario real 7:30–19:30.
 *     Se usa "Atendemos los 7 días", que sí es verdad.
 *  2. Nunca prometer tiempo de llegada (valles y Tumbaco son ~22% de los servicios).
 *  3. Nunca revelar el modelo de negocio (turnos, número de plomeros, cómo se paga).
 *  4. Mayúscula tipo oración, no Tipo Título.
 *  5. Nada de superlativos ("el mejor", "el único").
 */

export const SITE = {
  brand: "Plomefy",
  legalName: "Plomefy — Plomería a domicilio",
  city: "Quito",
  region: "Pichincha",
  country: "EC",
  url: "https://plomefy-web.vercel.app",
  email: "info@plomefy.com",
  schedule: "Atendemos los 7 días · 7:30 a 19:30",
  scheduleShort: "7 días · 7:30–19:30",
  openingHoursSchema: "Mo-Su 07:30-19:30",
} as const

/* ---------------------------------- Contacto --------------------------------- */

/**
 * Número operativo vigente. Ver plodo-datos-confirmados.md.
 * Reemplaza al +593 98 281 1068 desde el 31 de agosto de 2026.
 * Se muestra también en texto plano (hero y footer) para que Google Ads
 * lo valide al revisar la landing como recurso de llamada.
 */
export const PHONE_E164 = "+593982282941"
export const PHONE_DISPLAY = "098 228 2941"
export const WHATSAPP_NUMBER = "593982282941"

/**
 * Cada sección usa un saludo distinto a propósito: decenas de mensajes
 * byte-idénticos son huella de automatización y ya costaron una suspensión
 * de WhatsApp Business en agosto de 2026.
 */
export const WA_MESSAGES = {
  hero: "Hola, necesito un plomero a domicilio en Quito.",
  services: "Hola, quiero cotizar un trabajo de plomería en Quito.",
  coverage: "Hola, necesito un plomero en mi sector de Quito.",
  faq: "Hola, tengo una consulta sobre un trabajo de plomería.",
  final: "Hola, quiero coordinar una visita de plomería.",
  float: "Hola, necesito ayuda con un problema de plomería.",
} as const

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const telLink = `tel:${PHONE_E164}`

/* ---------------------------------- Servicios -------------------------------- */

export type Service = {
  slug: string
  title: string
  description: string
  icon: string
  bullets: string[]
}

export const SERVICES: Service[] = [
  {
    slug: "destape-de-canerias",
    title: "Destape de cañerías y tuberías",
    description:
      "Destapamos lavabos, fregaderos, duchas, inodoros y bajantes con sonda eléctrica. Trabajamos sin romper siempre que la instalación lo permite.",
    icon: "pipe",
    bullets: ["Sonda eléctrica", "Sin romper cuando se puede", "Cajas de revisión"],
  },
  {
    slug: "reparacion-de-fugas",
    title: "Reparación de fugas de agua",
    description:
      "Reparamos fugas en tuberías, baños, cocinas y llaves de paso para frenar el daño y el consumo antes de que crezca la factura.",
    icon: "droplet",
    bullets: ["Tuberías y llaves", "Baños y cocinas", "Reparación puntual"],
  },
  {
    slug: "deteccion-de-fugas",
    title: "Detección de fugas ocultas",
    description:
      "Ubicamos fugas que no se ven en paredes, pisos o losas para evitar picar de más y reparar solo donde hace falta.",
    icon: "search",
    bullets: ["Diagnóstico previo", "Menos rotura", "Casas y edificios"],
  },
  {
    slug: "sanitarios-y-griferia",
    title: "Instalación y reparación de sanitarios",
    description:
      "Inodoros, lavabos, duchas, grifería y empaques: instalación, cambio y reparación de las piezas que fallan todos los días.",
    icon: "wrench",
    bullets: ["Inodoros y lavabos", "Grifería y empaques", "Cambio de sanitarios"],
  },
  {
    slug: "calefones",
    title: "Reparación y mantenimiento de calefones",
    description:
      "Calefón que no enciende, no calienta o no hace chispa. Revisión, mantenimiento y reparación de calefones a gas.",
    icon: "flame",
    bullets: ["No enciende o no calienta", "Mantenimiento a gas", "Revisión completa"],
  },
  {
    slug: "duchas-electricas",
    title: "Duchas eléctricas y agua caliente",
    description:
      "Instalación, cambio y reparación de duchas eléctricas, con revisión de la conexión para que el equipo trabaje seguro.",
    icon: "shower",
    bullets: ["Instalación y cambio", "Reparación", "Revisión de conexión"],
  },
  {
    slug: "bombas-y-presion",
    title: "Bombas y presión de agua",
    description:
      "Revisión de bombas, tanques y presión baja en casas y edificios, para que el agua llegue con la fuerza que debe.",
    icon: "gauge",
    bullets: ["Bombas de agua", "Presión baja", "Tanques y cisternas"],
  },
  {
    slug: "instalaciones-y-mantenimiento",
    title: "Instalaciones y mantenimiento",
    description:
      "Cambio de tuberías, instalaciones sanitarias y mantenimiento preventivo para adelantarse a la fuga y a la obstrucción.",
    icon: "hammer",
    bullets: ["Cambio de tuberías", "Instalaciones sanitarias", "Mantenimiento preventivo"],
  },
]

/* --------------------------------- Cobertura --------------------------------- */

export type Zone = { name: string; areas: string[] }

export const ZONES: Zone[] = [
  {
    name: "Quito norte",
    areas: [
      "La Carolina",
      "El Batán",
      "Iñaquito",
      "González Suárez",
      "El Inca",
      "Carcelén",
      "Cotocollao",
      "El Condado",
      "Calderón",
    ],
  },
  {
    name: "Quito centro",
    areas: ["Centro Histórico", "La Floresta", "La Mariscal", "Itchimbía", "La Vicentina"],
  },
  {
    name: "Quito sur",
    areas: ["Quitumbe", "Chillogallo", "Solanda", "Guamaní", "La Magdalena", "Villaflora"],
  },
  {
    name: "Valles",
    areas: ["Cumbayá", "Tumbaco", "Puembo", "Pifo", "Valle de los Chillos", "Sangolquí", "Conocoto"],
  },
]

/* ------------------------------------ FAQ ------------------------------------ */

export const FAQS = [
  {
    q: "¿Qué días atienden y en qué horario?",
    a: "Atendemos los 7 días de la semana, de 7:30 a 19:30. Escríbenos por WhatsApp dentro de ese horario y coordinamos la visita del plomero a tu domicilio.",
  },
  {
    q: "¿Hacen destape de cañerías sin romper?",
    a: "En la mayoría de los casos sí. Trabajamos con sonda eléctrica y liberamos la obstrucción por los puntos de acceso existentes. Si la instalación no lo permite, te lo decimos antes de empezar y te explicamos qué implica.",
  },
  {
    q: "¿Cuánto cuesta el servicio de plomería?",
    a: "Depende del trabajo y de lo que encontremos en sitio. La regla es simple: revisamos, te damos el presupuesto y recién ahí empezamos. Los materiales se cotizan aparte.",
  },
  {
    q: "¿A qué sectores de Quito llegan?",
    a: "Atendemos Quito norte, centro y sur, además de Cumbayá, Tumbaco, Puembo, Pifo, Valle de los Chillos, Sangolquí y Conocoto.",
  },
  {
    q: "¿Atienden solo casas o también oficinas y edificios?",
    a: "Casas, departamentos, oficinas, locales y edificios. También trabajamos con administraciones de edificios para cajas de revisión, bajantes y mantenimiento.",
  },
  {
    q: "¿Reparan calefones y duchas eléctricas?",
    a: "Sí. Revisamos calefones a gas que no encienden, no calientan o no hacen chispa, y hacemos instalación, cambio y reparación de duchas eléctricas.",
  },
  {
    q: "¿Cómo agendo un plomero a domicilio?",
    a: "Escríbenos por WhatsApp contando qué pasa y en qué sector de Quito estás. Con eso coordinamos la visita del plomero y te confirmamos el horario disponible.",
  },
]

/* --------------------------------- Diferenciales ------------------------------ */

export const REASONS = [
  {
    title: "Presupuesto antes de iniciar",
    text: "Revisamos, te decimos qué tiene y cuánto cuesta. No empezamos ningún trabajo sin que lo apruebes.",
    icon: "receipt",
  },
  {
    title: "Atendemos los 7 días",
    text: "De lunes a domingo, de 7:30 a 19:30, incluidos fines de semana y feriados.",
    icon: "calendar",
  },
  {
    title: "Plomeros con experiencia",
    text: "Personal con oficio en destapes, fugas, sanitarios y calefones, con herramienta profesional.",
    icon: "badge",
  },
  {
    title: "Cuidamos tu casa",
    text: "Trabajamos con el método menos invasivo posible y dejamos el área limpia al terminar.",
    icon: "home",
  },
  {
    title: "Cobertura en toda la ciudad",
    text: "Norte, centro, sur y valles: Cumbayá, Tumbaco y Valle de los Chillos incluidos.",
    icon: "map",
  },
  {
    title: "Coordinas por WhatsApp",
    text: "Cuentas el problema por chat, sin llamadas largas ni formularios. Respondemos en horario de atención.",
    icon: "chat",
  },
]

/* ------------------------------- Prueba social -------------------------------- */

/**
 * ⚠️ Vacío a propósito. No se publican reseñas inventadas.
 * Pega aquí las reseñas REALES del perfil de Google Business y la sección
 * aparece sola en la página.
 */
export const REVIEWS: { name: string; zone: string; text: string }[] = []
