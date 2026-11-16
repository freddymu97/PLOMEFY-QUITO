/** National campaign: personalized quotes, without published prices. */
export const DETECFY_ECUADOR_PATH = "/detecciondefugasdeaguaecuador"

export const DETECFY_ECUADOR = {
  name: "Detecfy",
  tagline: "Detección de Plomefy · Cobertura nacional",
  title: "Detección de fugas de agua en Ecuador | Detecfy · Plomefy",
  description:
    "Detección de fugas de agua en Ecuador con geófono y cámara termográfica según tu instalación. Viajamos a ciudades y parroquias. Cotiza tu detección con Detecfy.",
} as const

// Each contact has its own greeting and leaves the customer's location open.
export const DETECFY_ECUADOR_MESSAGES = {
  header: "Hola, quiero cotizar una detección de fugas de agua con Detecfy en Ecuador. Les comparto mi ciudad o parroquia y mi ubicación.",
  mobileMenu: "Hola, vi el servicio nacional de Detecfy. Necesito localizar una posible fuga de agua; les envío mi localidad y las señales que he notado.",
  hero: "Hola, quiero cotizar mi detección de fugas de agua con Detecfy en Ecuador. Mi provincia, ciudad o parroquia es: ",
  services: "Hola, consulto el servicio de detección de fugas de Detecfy en Ecuador. Les cuento mi caso y dónde está la propiedad para preparar una cotización.",
  quote: "Hola, quisiera una cotización personalizada de Detecfy para detectar una fuga de agua en Ecuador. Les comparto ubicación, fotos y condiciones de acceso.",
  coverage: "Hola, quiero coordinar el traslado de Detecfy a mi localidad en Ecuador. Les envío mi provincia, ciudad o parroquia y la ubicación exacta.",
  faq: "Hola, tengo una consulta sobre la detección de fugas de Detecfy en Ecuador antes de coordinar la visita a mi propiedad.",
  final: "Hola, quisiera coordinar una detección de fugas con Detecfy en Ecuador. ¿Me ayudan a cotizar la revisión y el traslado a mi ubicación?",
  float: "Hola, necesito ayuda de Detecfy para una posible fuga de agua en Ecuador. Les comparto mi localidad para consultar la visita y el presupuesto.",
} as const

export const DETECFY_ECUADOR_ZONES = [
  { name: "Pichincha", areas: ["Quito", "Cayambe", "Machachi", "Cantones y parroquias"] },
  { name: "Tungurahua", areas: ["Ambato", "Baños", "Pelileo", "Cantones y parroquias"] },
  { name: "Chimborazo", areas: ["Riobamba", "Guano", "Alausí", "Cantones y parroquias"] },
  { name: "Todo Ecuador", areas: ["Todas las provincias", "Ciudades y cantones", "Parroquias y zonas rurales", "Traslado coordinado"] },
] as const

export const DETECFY_ECUADOR_FAQS = [
  {
    q: "¿Realizan detección de fugas de agua en todo Ecuador?",
    a: "Sí. Detecfy, el servicio de detección de Plomefy, coordina desplazamientos a nivel nacional. Atendemos Pichincha, Tungurahua, Chimborazo y las demás provincias de Ecuador. Comparte la ubicación exacta para preparar el traslado, confirmar disponibilidad y cotizar tu detección.",
  },
  {
    q: "¿Pueden viajar a Ambato, Riobamba o a una parroquia fuera de la capital?",
    a: "Sí. Viajamos a Ambato, Riobamba y otras ciudades, cantones, parroquias y destinos rurales de Ecuador. La atención se coordina para tu ubicación, incluso fuera de las capitales provinciales. Indica las condiciones de acceso y una referencia del lugar para organizar la visita.",
  },
  {
    q: "¿Viajan con geófono y cámara termográfica?",
    a: "Contamos con geófono y cámara termográfica, y viajamos con los equipos e implementos adecuados para la revisión acordada. El geófono ayuda a localizar señales acústicas; la cámara termográfica permite observar patrones de temperatura. Elegimos el método según la instalación y las condiciones del sitio.",
  },
  {
    q: "¿Cómo cotizo mi detección de fugas de agua?",
    a: "Escríbenos por WhatsApp o llámanos. Comparte tu provincia, ciudad o parroquia, la ubicación exacta, las señales que observas y, si puedes, fotos del área. Preparamos una cotización personalizada con el alcance de la detección y las condiciones del traslado antes de coordinar la visita.",
  },
  {
    q: "¿La detección se puede hacer sin romper paredes o pisos?",
    a: "Buscamos localizar el tramo afectado para evitar abrir áreas innecesarias. La posibilidad de detectar sin romper depende de la instalación, sus accesos y las condiciones del lugar. Si hace falta abrir una pared o un piso, te explicamos el motivo y el alcance antes de intervenir.",
  },
  {
    q: "¿La cámara termográfica confirma cualquier fuga?",
    a: "No. La cámara muestra patrones de temperatura en superficies; no ve a través de paredes ni confirma una fuga por sí sola. Interpretamos esas señales junto con la revisión de la instalación para determinar cómo continuar la detección.",
  },
  {
    q: "¿Atienden casas, edificios, locales y propiedades rurales?",
    a: "Sí. Coordinamos detecciones personalizadas en casas, departamentos, edificios, locales y propiedades rurales. Cuéntanos cómo es la instalación, dónde aparecen las señales y qué accesos están disponibles para definir el alcance de la revisión.",
  },
  {
    q: "¿La detección incluye reparar la fuga?",
    a: "La detección y la reparación tienen alcances distintos. La cotización confirma qué incluye la localización de la fuga. Si hace falta reparar, te explicamos la intervención y su presupuesto para que puedas aprobarlos antes de empezar.",
  },
  {
    q: "¿En qué horario puedo coordinar la visita?",
    a: "Atendemos consultas los 7 días, de 7:30 a 19:30. La visita y el traslado se coordinan según tu ubicación, las condiciones de acceso y la disponibilidad. Te confirmamos la programación antes del viaje.",
  },
] as const
