# Plomefy — landing de plomería a domicilio en Quito

Sitio en Next.js 14 (App Router) + Tailwind. Se despliega solo en Vercel con cada push a `main`.

---

## 🗺️ Dónde está cada cosa

```
/
├─ app/
│  ├─ layout.tsx      ← SEO: title, description, keywords, schema de Google, favicon
│  ├─ page.tsx        ← EL ORDEN de las secciones de la página
│  ├─ globals.css     ← colores de marca y estilos base
│  ├─ robots.ts       ← robots.txt (para Google)
│  └─ sitemap.ts      ← sitemap.xml (para Google)
│
├─ components/        ← una sección de la página por archivo
│  ├─ site-header.tsx        barra superior (logo, menú, teléfono)
│  ├─ hero-section.tsx       portada + selector de problema
│  ├─ services-section.tsx   los 8 servicios
│  ├─ how-it-works-section.tsx   los 3 pasos
│  ├─ why-us-section.tsx     bloque azul "por qué Plomefy"
│  ├─ coverage-section.tsx   sectores de Quito
│  ├─ reviews-section.tsx    reseñas (oculta si no hay reseñas cargadas)
│  ├─ faq-section.tsx        preguntas frecuentes
│  ├─ final-cta-section.tsx  cierre azul
│  ├─ site-footer.tsx        pie de página
│  ├─ whatsapp-float.tsx     botón flotante + barra fija en móvil
│  ├─ cta-buttons.tsx        botones de WhatsApp y llamada
│  ├─ icons.tsx              iconos propios (WhatsApp, gota)
│  └─ ui/accordion.tsx       acordeón del FAQ
│
├─ lib/
│  ├─ site.ts   ★ TODO EL CONTENIDO DEL SITIO ESTÁ AQUÍ
│  └─ utils.ts
│
├─ public/
│  ├─ plomefy-logo.png
│  └─ plomefy-icon.png       favicon
│
└─ package.json, tailwind.config.js, next.config.mjs, tsconfig.json, postcss.config.mjs
```

---

## ✏️ Quiero cambiar… ¿qué archivo toco?

| Lo que quieres cambiar | Archivo |
|---|---|
| Teléfono / WhatsApp | `lib/site.ts` → `PHONE_E164`, `PHONE_DISPLAY`, `WHATSAPP_NUMBER` |
| Horario de atención | `lib/site.ts` → `SITE.schedule` |
| Mensajes precargados de WhatsApp | `lib/site.ts` → `WA_MESSAGES` |
| Servicios (agregar, quitar, redactar) | `lib/site.ts` → `SERVICES` |
| Sectores y barrios de cobertura | `lib/site.ts` → `ZONES` |
| Preguntas frecuentes | `lib/site.ts` → `FAQS` |
| Razones de "por qué Plomefy" | `lib/site.ts` → `REASONS` |
| Reseñas de clientes | `lib/site.ts` → `REVIEWS` (ver abajo) |
| Título y descripción para Google | `app/layout.tsx` → `metadata` |
| Colores de la marca | `app/globals.css` → `--navy`, `--teal`, `--aqua` |
| Orden de las secciones | `app/page.tsx` |
| Textos de una sección puntual | el archivo de esa sección en `components/` |

**Regla práctica:** el 90% de los cambios de contenido se hacen en un solo archivo, `lib/site.ts`.

---

## 🛑 Reglas de copy que no se rompen

Salen de los datos operativos confirmados de PLODO LATAM. Están comentadas también dentro de `lib/site.ts`:

1. **Nunca "24 horas" ni atención nocturna.** El horario real es 7:30–19:30. Se usa **"Atendemos los 7 días"**, que sí es verdad. Prometer lo que no se cumple cuesta la reseña, que en negocio local vale más que el clic.
2. **Nunca prometer tiempo de llegada.** Los valles y Tumbaco son ~22% de los servicios.
3. **Nunca revelar el modelo de negocio:** ni turnos, ni cuántos plomeros hay, ni cómo se paga.
4. **Mayúscula tipo oración, no Tipo Título.**
5. **Nada de superlativos** ("el mejor", "el único"): Google los rechaza sin verificación.

### Reseñas

`REVIEWS` está vacío **a propósito**: no se publican testimonios inventados. La sección no aparece
en la página mientras el array esté vacío. Cuando tengas reseñas reales del perfil de Google
Business, pégalas así y la sección aparece sola:

```ts
export const REVIEWS = [
  { name: "Nombre real", zone: "Quito norte", text: "Texto real de la reseña." },
]
```

### Mensajes de WhatsApp

Cada sección usa un saludo **distinto** a propósito. Decenas de mensajes byte-idénticos son huella
de automatización: en agosto de 2026 eso costó la suspensión de un número de WhatsApp Business.
Si agregas CTAs nuevos, dales su propia variante en `WA_MESSAGES`.

---

## 🔍 SEO ya implementado

- `title` y `description` construidos sobre las keywords validadas de PLOMEX/PLODO
  (`plomero a domicilio quito`, `plomeros quito`, `destape de cañerías quito`, `gasfitero quito`…).
- Schema `Plumber` con teléfono, horario y todas las zonas de cobertura.
- Schema `FAQPage` generado automáticamente desde `FAQS`.
- `robots.txt` y `sitemap.xml`.
- `lang="es-EC"`, Open Graph, favicon.

**Importante:** cuando el sitio tenga dominio propio, cambia `SITE.url` en `lib/site.ts`.
De ahí salen el canonical, el sitemap y el schema.

---

## 🧑‍💻 Correr el proyecto en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar que compila antes de publicar
```

---

## 🚀 Despliegue

Push a `main` → Vercel compila y publica. No hay que hacer nada más.
