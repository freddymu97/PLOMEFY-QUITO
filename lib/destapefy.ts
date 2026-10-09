/**
 * Destapefy: contenido de la página de destapes de Plomefy.
 * Contacto, horario y cobertura se comparten con lib/site.ts.
 * No publicar importes ni servicios adicionales sin confirmación operativa.
 */
export const DESTAPEFY_PATH = "/destapedecaneriasquito"
export const DESTAPEFY_STARTING_PRICE = 45

export const DESTAPEFY = {
  name: "Destapefy",
  tagline: "Destapes de Plomefy",
  title: "Destape de cañerías en Quito | Destapefy · Plomefy",
  description:
    `Destape de cañerías en Quito desde $${DESTAPEFY_STARTING_PRICE} con Destapefy, de Plomefy. Inodoros, lavabos y duchas. Cotiza por WhatsApp. Atención los 7 días, 7:30 a 19:30.`,
} as const

export const DESTAPEFY_MESSAGES = {
  header: "Hola, llegué al sitio de Destapefy y quiero consultar un destape a domicilio en Quito.",
  mobileMenu: "Hola, quiero información de Destapefy para atender un desagüe tapado en Quito.",
  hero: "Hola, quiero cotizar un destape con Destapefy de Plomefy en Quito.",
  services: "Hola, quisiera consultar qué destape necesito. Les cuento el problema y mi sector de Quito.",
  pricing: "Hola, necesito conocer la tarifa de Destapefy para un destape en Quito y qué incluye.",
  coverage: "Hola, quiero confirmar disponibilidad de Destapefy para un destape en mi sector.",
  faq: "Hola, tengo una pregunta sobre el servicio de destape de cañerías de Destapefy.",
  final: "Hola, quiero coordinar una visita de Destapefy. Tengo un desagüe tapado en Quito.",
  float: "Hola, necesito ayuda de Destapefy con un destape en Quito.",
} as const

export type DestapefyProblem = {
  label: string
  message: string
}

export const DESTAPEFY_PROBLEMS: DestapefyProblem[] = [
  {
    label: "Fregadero tapado",
    message: "Hola, mi fregadero no desagua. Quiero cotizar un destape de cocina con Destapefy en Quito.",
  },
  {
    label: "Inodoro tapado",
    message: "Hola, tengo un inodoro tapado en Quito y quisiera consultar la tarifa de Destapefy.",
  },
  {
    label: "Lavabo tapado",
    message: "Hola, necesito destapar un lavabo en Quito. ¿Podemos coordinar una revisión con Destapefy?",
  },
  {
    label: "Ducha que no drena",
    message: "Hola, el agua se acumula en mi ducha. Necesito consultar un destape con Destapefy en Quito.",
  },
  {
    label: "Cañería o bajante",
    message: "Hola, tengo una cañería o bajante tapada en Quito. Quiero consultar el servicio de Destapefy.",
  },
  {
    label: "Caja de revisión",
    message: "Hola, necesito revisar una obstrucción en una caja de revisión en Quito con Destapefy.",
  },
]

export type DestapefyService = {
  slug: string
  title: string
  description: string
  detail: string
  icon: "kitchen" | "toilet" | "sink" | "shower" | "pipe" | "box"
  message: string
}

export const DESTAPEFY_SERVICES: DestapefyService[] = [
  {
    slug: "fregaderos",
    title: "Destape de fregaderos",
    description:
      "Cuando el agua de la cocina baja despacio o se queda en el fregadero, revisamos el desagüe y el acceso a la tubería para trabajar sobre la obstrucción.",
    detail: "Desagües de cocina",
    icon: "kitchen",
    message: "Hola, me interesa el destape de fregaderos de Destapefy en Quito. Les cuento lo que pasa en mi cocina.",
  },
  {
    slug: "inodoros",
    title: "Destape de inodoros",
    description:
      "Si el inodoro no descarga bien, sube el nivel del agua o devuelve agua, revisamos dónde está el bloqueo antes de decidir cómo intervenir.",
    detail: "Inodoros y su descarga",
    icon: "toilet",
    message: "Hola, consulto el servicio de destape de inodoros de Destapefy. Estoy en Quito y quiero coordinar una revisión.",
  },
  {
    slug: "lavabos",
    title: "Destape de lavabos",
    description:
      "Revisamos lavabos con drenaje lento o tapados y sus conexiones de desagüe. Te explicamos si la obstrucción está en ese punto o en la cañería.",
    detail: "Lavabos de baño",
    icon: "sink",
    message: "Hola, quisiera información del destape de lavabos de Destapefy. El lavabo de mi baño en Quito está tapado.",
  },
  {
    slug: "duchas",
    title: "Destape de duchas",
    description:
      "Para duchas donde el agua se acumula o drena con dificultad. Revisamos la salida y la tubería para definir el acceso al destape.",
    detail: "Desagües de ducha",
    icon: "shower",
    message: "Hola, quiero solicitar el destape de duchas de Destapefy. Estoy en Quito y el desagüe no funciona bien.",
  },
  {
    slug: "canerias-y-bajantes",
    title: "Destape de cañerías y bajantes",
    description:
      "Si varios desagües fallan a la vez, puede existir una obstrucción en un tramo compartido. Revisamos las cañerías y bajantes, y usamos sonda eléctrica cuando corresponde.",
    detail: "Casas, departamentos y edificios",
    icon: "pipe",
    message: "Hola, necesito el servicio de Destapefy para una cañería o bajante en Quito. Les envío los detalles de la obstrucción.",
  },
  {
    slug: "cajas-de-revision",
    title: "Destape de cajas de revisión",
    description:
      "Revisamos cajas de revisión y los tramos de desagüe conectados a ellas para atender bloqueos, retornos de agua o dificultades de evacuación.",
    detail: "Puntos de acceso al desagüe",
    icon: "box",
    message: "Hola, consulto por un destape de caja de revisión con Destapefy en Quito. Quisiera coordinar la revisión del desagüe.",
  },
]

export type DestapefyPrice = {
  service: string
  price: string
  description: string
  message: string
}

export const DESTAPEFY_PRICES: DestapefyPrice[] = DESTAPEFY_SERVICES.map((service) => ({
  service: service.title,
  price: "Consultar tarifa",
  description: service.detail,
  message: `Hola, quisiera consultar la tarifa para ${service.title.toLowerCase()} con Destapefy en Quito y qué incluye el presupuesto.`,
}))

export const DESTAPEFY_SIGNALS = [
  "El agua baja cada vez más despacio.",
  "El agua se acumula en la ducha o el fregadero.",
  "El inodoro devuelve agua al descargar.",
  "Varios desagües presentan el mismo problema.",
] as const

export const DESTAPEFY_STEPS = [
  {
    title: "Cuéntanos qué está tapado",
    text: "Envía por WhatsApp el problema, tu sector y, si puedes, una foto. Indica si pasa en un solo desagüe o en varios.",
  },
  {
    title: "Revisamos y te damos el presupuesto",
    text: "Coordinamos la visita en el horario disponible. En tu domicilio revisamos el acceso y la obstrucción, y te explicamos el trabajo y su costo.",
  },
  {
    title: "Destapamos con tu aprobación",
    text: "Una vez que apruebas el presupuesto, realizamos el destape. Usamos los puntos de acceso existentes y sonda eléctrica cuando la instalación lo permite.",
  },
] as const

export const DESTAPEFY_PRICE_FACTORS = [
  {
    title: "Qué punto está tapado",
    text: "Un fregadero, un inodoro o un tramo compartido requieren revisar accesos distintos.",
  },
  {
    title: "Acceso a la instalación",
    text: "Revisamos los puntos disponibles y si se puede intervenir sin romper.",
  },
  {
    title: "Alcance de la obstrucción",
    text: "Comprobamos si el problema afecta un desagüe o varios tramos conectados.",
  },
] as const

export const DESTAPEFY_FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es Destapefy y qué relación tiene con Plomefy?",
    a: "Destapefy es el servicio de destapes de Plomefy en Quito. Atiende cañerías, fregaderos, inodoros, lavabos, duchas, bajantes y cajas de revisión, con presupuesto antes de iniciar el trabajo.",
  },
  {
    q: "¿Cuánto cuesta un destape de cañerías en Quito?",
    a: `Los destapes de cañerías tienen una tarifa desde $${DESTAPEFY_STARTING_PRICE} USD. El precio final depende del tipo de destape, el acceso a la instalación y el alcance de la obstrucción. Cuéntanos qué está tapado y en qué sector estás para consultar tu caso. En sitio revisamos el problema y confirmamos el presupuesto antes de empezar. Consulta qué incluye el presupuesto antes de aprobarlo.`,
  },
  {
    q: "¿Destapan las cañerías sin romper?",
    a: "Trabajamos por los puntos de acceso existentes y con sonda eléctrica cuando la instalación lo permite. Si para resolver el problema hace falta una intervención adicional, te explicamos el motivo y el presupuesto antes de iniciar. No todos los bloqueos ni todas las instalaciones permiten trabajar sin romper.",
  },
  {
    q: "¿Usan sonda eléctrica para el destape?",
    a: "Sí, usamos sonda eléctrica para trabajar sobre obstrucciones en cañerías cuando el acceso y la instalación lo permiten. La revisión previa sirve para definir el método adecuado para tu desagüe.",
  },
  {
    q: "¿Qué hago si se vuelve a tapar el mismo desagüe?",
    a: "Cuéntanos desde cuándo ocurre, si ya se hizo un destape y si falla un solo punto o varios. Un problema que se repite necesita revisar el tramo afectado para distinguir una obstrucción puntual de otra dificultad de la instalación.",
  },
  {
    q: "¿Atienden Quito norte, sur y los valles?",
    a: "Sí. La cobertura incluye Quito norte, centro y sur, además de Cumbayá, Tumbaco, Puembo, Pifo, Valle de los Chillos, Sangolquí y Conocoto. Comparte tu ubicación por WhatsApp para confirmar disponibilidad en tu sector.",
  },
  {
    q: "¿Atienden fines de semana y en qué horario?",
    a: "Atendemos los 7 días de la semana, de 7:30 a 19:30, incluidos fines de semana. La visita se coordina según la disponibilidad del sector y del horario.",
  },
  {
    q: "¿Puedo solicitar un destape para un local o edificio?",
    a: "Sí. Atendemos casas, departamentos, oficinas, locales y edificios, incluidos trabajos en bajantes y cajas de revisión. Indica si hay varios desagües afectados y qué puntos de acceso están disponibles para coordinar la revisión.",
  },
]
