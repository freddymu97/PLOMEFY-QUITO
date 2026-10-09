/**
 * Detecfy: detección de fugas de agua de Plomefy.
 * Contacto, horario y cobertura se comparten con lib/site.ts.
 * Tarifa de partida y equipos confirmados por el usuario.
 * El presupuesto concreta método, alcance e inclusiones antes de la visita.
 */
export const DETECFY_PATH = "/detecciondefugasdeaguaquito"
export const DETECFY_STARTING_PRICE = 39

export const DETECFY = {
  name: "Detecfy",
  tagline: "Detección de Plomefy",
  title: "Detección de fugas de agua en Quito | Detecfy · Plomefy",
  description:
    `Detección de fugas de agua en Quito desde $${DETECFY_STARTING_PRICE}. Geófono y cámara termográfica según el caso. Cotiza con Detecfy de Plomefy. Los 7 días.`,
} as const

export const DETECFY_MESSAGES = {
  header: "Hola, llegué al sitio de Detecfy y quiero consultar una detección de fugas de agua en Quito.",
  mobileMenu: "Hola, quisiera información de Detecfy para localizar una posible fuga de agua en mi domicilio en Quito.",
  hero: "Hola, quiero cotizar una detección de fugas de agua con Detecfy de Plomefy en Quito.",
  services: "Hola, necesito consultar el servicio de Detecfy. Les cuento las señales de la posible fuga y mi sector de Quito.",
  pricing: "Hola, quisiera conocer el costo de detección de fugas de agua con Detecfy y qué incluye el presupuesto.",
  coverage: "Hola, quiero confirmar disponibilidad de Detecfy para localizar una fuga de agua en mi sector.",
  faq: "Hola, tengo una pregunta sobre la detección de fugas de agua de Detecfy antes de solicitar una visita.",
  final: "Hola, quisiera coordinar una revisión con Detecfy. Sospecho una fuga de agua en mi propiedad en Quito.",
  float: "Hola, necesito ayuda de Detecfy para revisar una posible fuga de agua en Quito.",
} as const

export type DetecfyProblem = {
  label: string
  message: string
}

export const DETECFY_PROBLEMS: DetecfyProblem[] = [
  {
    label: "Pared húmeda",
    message: "Hola, tengo humedad en una pared de mi casa en Quito. Quiero consultar con Detecfy si puede ser una fuga de agua.",
  },
  {
    label: "Agua en el piso",
    message: "Hola, aparece agua o humedad en el piso y no veo de dónde viene. Necesito consultar una detección con Detecfy en Quito.",
  },
  {
    label: "Consumo elevado",
    message: "Hola, aumentó mi consumo de agua sin una explicación clara. Quiero revisar una posible fuga oculta con Detecfy en Quito.",
  },
  {
    label: "Fuga que no se ve",
    message: "Hola, sospecho una fuga de agua pero no encuentro el punto. Quiero cotizar el servicio de Detecfy en Quito.",
  },
  {
    label: "Humedad en la losa",
    message: "Hola, hay humedad en una losa de mi propiedad en Quito. Quisiera coordinar una revisión de Detecfy.",
  },
  {
    label: "Fuga en edificio",
    message: "Hola, necesito revisar una posible fuga en un departamento o edificio en Quito. Quiero consultar el servicio de Detecfy.",
  },
]

export type DetecfyService = {
  slug: string
  title: string
  description: string
  icon: "wall" | "floor" | "pipe" | "meter" | "bath" | "building"
  message: string
}

export const DETECFY_SERVICES: DetecfyService[] = [
  {
    slug: "fugas-en-paredes",
    title: "Fugas de agua en paredes",
    description:
      "Revisamos paredes con humedad cerca de instalaciones de agua para localizar una posible fuga. Una mancha por sí sola no confirma el origen del problema.",
    icon: "wall",
    message: "Hola, me interesa la detección de fugas en paredes de Detecfy. Estoy en Quito y quiero explicarles dónde aparece la humedad.",
  },
  {
    slug: "fugas-en-pisos-y-losas",
    title: "Fugas bajo pisos y losas",
    description:
      "Buscamos el tramo afectado cuando el agua no es visible y aparecen señales en pisos o losas. El objetivo es orientar la intervención y evitar picar de más.",
    icon: "floor",
    message: "Hola, consulto la localización de fugas bajo pisos o losas con Detecfy en Quito. Quisiera coordinar una revisión.",
  },
  {
    slug: "tuberias-ocultas",
    title: "Fugas en tuberías ocultas",
    description:
      "Localizamos fugas en tuberías que no están a la vista. Revisamos la instalación y sus accesos para definir qué tramo necesita atención.",
    icon: "pipe",
    message: "Hola, necesito información sobre detección de fugas en tuberías ocultas de Detecfy. La instalación está en Quito.",
  },
  {
    slug: "consumo-de-agua",
    title: "Consumo de agua sin explicación",
    description:
      "Si tu consumo sube sin un cambio de uso claro, una fuga es una posibilidad. Cuéntanos qué notaste para revisar la instalación antes de asumir una causa.",
    icon: "meter",
    message: "Hola, quisiera consultar una revisión con Detecfy por consumo de agua elevado en Quito. No encuentro una fuga visible.",
  },
  {
    slug: "banos-y-cocinas",
    title: "Fugas ocultas en baños y cocinas",
    description:
      "Revisamos instalaciones de agua en baños y cocinas donde hay humedad, goteo o señales de una pérdida. Distinguimos la localización de la reparación que pueda hacer falta.",
    icon: "bath",
    message: "Hola, quiero consultar a Detecfy por una posible fuga oculta en el baño o la cocina de mi domicilio en Quito.",
  },
  {
    slug: "departamentos-y-edificios",
    title: "Detección en departamentos y edificios",
    description:
      "Atendemos viviendas, oficinas, locales y edificios. Indica en qué unidad aparece la señal y qué áreas son accesibles para coordinar la revisión.",
    icon: "building",
    message: "Hola, consulto el servicio de Detecfy para localizar una fuga en un departamento o edificio en Quito. Les comparto los detalles.",
  },
]

export const DETECFY_STEPS = [
  {
    title: "Comparte las señales",
    text: "Cuéntanos qué notaste, desde cuándo y en qué sector estás. Una foto de la humedad o del área afectada ayuda a preparar la revisión.",
  },
  {
    title: "Confirma el alcance y el presupuesto",
    text: "Coordinamos la visita según disponibilidad. Antes de la visita, confirma el alcance de la revisión, el método propuesto, el presupuesto y qué incluye.",
  },
  {
    title: "Localizamos y explicamos el siguiente paso",
    text: "Revisamos la instalación para ubicar el tramo afectado y evitar roturas innecesarias. Si hace falta reparar, te explicamos la intervención y su presupuesto.",
  },
] as const

export const DETECFY_METHODS = [
  {
    title: "Geófono detector de fugas de agua",
    description:
      "El geófono ayuda a escuchar señales acústicas asociadas a una posible fuga. El tipo de tubería, las condiciones de la instalación y el ruido del entorno influyen en su uso.",
    detail: "Señales acústicas para orientar la localización.",
    icon: "acoustic",
    message: "Hola, quisiera consultar la detección de fugas con geófono de Detecfy en Quito. ¿Es adecuada para mi instalación y qué incluye la cotización?",
  },
  {
    title: "Detección con cámara termográfica",
    description:
      "La cámara termográfica muestra patrones de temperatura en superficies que pueden ayudar a orientar la revisión. No ve a través de paredes ni confirma una fuga por sí sola; la interpretación depende de las condiciones del lugar.",
    detail: "Patrones térmicos como apoyo a la revisión.",
    icon: "thermal",
    message: "Hola, consulto la detección de fugas de agua con cámara termográfica de Detecfy en Quito. Quiero saber si aplica a mi caso y qué incluye el presupuesto.",
  },
] as const

export const DETECFY_PRICE_FACTORS = [
  {
    title: "Área que hay que revisar",
    text: "Indica si la señal aparece en una pared, un piso, una losa o en varios puntos de la propiedad.",
  },
  {
    title: "Instalación y acceso",
    text: "Dónde están las tuberías, los accesos y las condiciones del lugar ayudan a definir el método y el alcance.",
  },
  {
    title: "Detección y reparación",
    text: "Confirma qué incluye la localización y cómo se cotizaría una reparación si resulta necesaria.",
  },
] as const

export const DETECFY_FAQS: { q: string; a: string }[] = [
  {
    q: "¿Cuánto cuesta la detección de fugas de agua en Quito?",
    a: `La detección de fugas de agua tiene una tarifa desde $${DETECFY_STARTING_PRICE} USD. El precio final depende de la instalación, los accesos, el método adecuado y el alcance de la revisión. Comparte las señales y tu sector por WhatsApp. Al cotizar te confirmamos el método y qué incluye el presupuesto antes de la visita.`,
  },
  {
    q: "¿Usan geófono para detectar fugas de agua?",
    a: "Sí, contamos con geófono para apoyar la localización mediante señales acústicas. Se utiliza cuando las características de la instalación permiten que sea adecuado. El tipo de tubería y el ruido del entorno pueden influir en la revisión. Confirma el método y qué incluye la cotización para tu caso.",
  },
  {
    q: "¿Cómo funciona la detección con cámara termográfica?",
    a: "La cámara termográfica muestra patrones de temperatura en superficies que pueden orientar la revisión de una posible fuga. No ve a través de las paredes ni demuestra por sí sola que haya una fuga. Elegimos el método según la instalación y las condiciones del lugar; confirma su aplicación y alcance en el presupuesto.",
  },
  {
    q: "¿Puedo contratar un detector de fugas de agua en Quito?",
    a: "Sí. Detecfy es el servicio de detección de fugas de agua de Plomefy en Quito. Revisamos instalaciones para localizar fugas ocultas en paredes, pisos, losas y tuberías. Es un servicio a domicilio: comparte tu ubicación y las señales que has notado para coordinar la revisión.",
  },
  {
    q: "¿Detectan fugas de agua sin romper?",
    a: "Buscamos localizar la fuga para evitar picar de más y orientar la intervención al tramo afectado. La posibilidad de revisar sin romper depende de la instalación y sus accesos. Si hace falta abrir una pared o un piso, te explicamos el motivo y el alcance antes de intervenir.",
  },
  {
    q: "¿Una pared húmeda significa que hay una fuga de agua?",
    a: "No necesariamente. La humedad también puede tener otros orígenes y una foto no basta para confirmarlos. Cuéntanos dónde aparece, desde cuándo y si está cerca de tuberías o de un baño. La revisión ayuda a determinar si hay una fuga en la instalación de agua.",
  },
  {
    q: "¿La detección incluye reparar la fuga?",
    a: "Localizar la fuga y repararla son trabajos con alcances distintos. Antes de contratar, confirma qué incluye el presupuesto de detección. Si hace falta una reparación, te explicamos el trabajo necesario y su cotización para que puedas aprobarlo antes de empezar. Los materiales se cotizan aparte.",
  },
  {
    q: "¿Pueden revisar una fuga que no es visible?",
    a: "Sí. Revisamos fugas de agua ocultas o no visibles en paredes, pisos, losas y tuberías. Comparte las señales que observas, como humedad o un consumo sin explicación, para coordinar la revisión. Esas señales orientan la consulta, pero no confirman una fuga por sí solas.",
  },
  {
    q: "¿Atienden departamentos, oficinas y edificios?",
    a: "Sí. Atendemos casas, departamentos, oficinas, locales y edificios. En una propiedad compartida, indica en qué área aparece el problema y qué accesos están disponibles para coordinar la visita y definir el alcance de la revisión.",
  },
  {
    q: "¿Atienden Quito norte, sur y los valles?",
    a: "La cobertura incluye Quito norte, centro y sur, además de Cumbayá, Tumbaco, Puembo, Pifo, Valle de los Chillos, Sangolquí y Conocoto. Comparte tu ubicación por WhatsApp y confirmamos disponibilidad en tu sector.",
  },
  {
    q: "¿Cuál es el horario de atención de Detecfy?",
    a: "Atendemos los 7 días de la semana, de 7:30 a 19:30, incluidos fines de semana. Coordinamos la visita según la disponibilidad del sector y del horario.",
  },
]
