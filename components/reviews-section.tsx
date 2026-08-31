import { Star } from "lucide-react"
import { REVIEWS } from "@/lib/site"

/**
 * Se renderiza solo cuando hay reseñas reales cargadas en lib/site.ts.
 * No se publican testimonios inventados.
 */
export function ReviewsSection() {
  if (REVIEWS.length === 0) return null

  return (
    <section className="section bg-slate-50/70">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Opiniones</p>
          <h2 className="h2 mt-4">Lo que dicen nuestros clientes en Quito</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <figure key={`${review.name}-${review.zone}`} className="card-soft flex flex-col">
              <div className="flex gap-0.5 text-amber-400" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-slate-600">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <span className="block font-display text-[15px] font-bold text-navy">{review.name}</span>
                <span className="text-[13px] text-slate-500">{review.zone}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
