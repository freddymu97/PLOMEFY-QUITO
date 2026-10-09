import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { DESTAPEFY_PATH } from "@/lib/destapefy"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}${DESTAPEFY_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
