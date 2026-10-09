import assert from "node:assert/strict"
import { test } from "node:test"

// Run against a built, running application: pnpm start --port 3001.
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3001"
const domain = "https://www.plomeroadomicilioquito.com"
const path = "/destapedecaneriasquito"

async function responseText(pathname) {
  const response = await fetch(new URL(pathname, base))
  assert.equal(response.status, 200, `${pathname} must respond successfully`)
  return response.text()
}

function schemas(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => {
      const data = JSON.parse(match[1])
      return data["@graph"] || [data]
    })
}

function checkMetadata(html, canonical, title) {
  const canonicalLink = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  const openGraphUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1]
  assert.ok(canonicalLink, "canonical must be present")
  assert.ok(openGraphUrl, "OG URL must be present")
  assert.equal(new URL(canonicalLink).href, new URL(canonical).href, "canonical must identify this page")
  assert.equal(new URL(openGraphUrl).href, new URL(canonical).href, "OG URL must match canonical")
  assert.ok(html.includes(`<title>${title}</title>`), "title must identify this service")
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "exactly one primary heading")
  assert.match(html, /<html[^>]*lang="es-EC"/)
  assert.doesNotMatch(html, /plomefy-web\.vercel\.app/, "production SEO must not reference preview origin")
}

test("home retains its own SEO and links visitors to Destapefy", async () => {
  const html = await responseText("/")
  checkMetadata(html, `${domain}/`, "Plomero a domicilio en Quito | Plomefy · plomería, destapes y fugas")
  const data = schemas(html)
  assert.equal(data.filter((item) => item["@type"] === "Plumber").length, 1)
  const faqs = data.filter((item) => item["@type"] === "FAQPage")
  assert.equal(faqs.length, 1)
  assert.equal(faqs[0].url, `${domain}/`)
  assert.ok(!faqs[0].mainEntity.some((question) => question.name.includes("¿Qué es Destapefy")))
  assert.ok(html.includes(`href="${path}"`), "subpage must be linked from the main site")
})

test("Destapefy exposes independent SEO, truthful starting price and linked business data", async () => {
  const html = await responseText(path)
  checkMetadata(html, `${domain}${path}`, "Destape de cañerías en Quito | Destapefy · Plomefy")
  assert.match(html, /098 228 2941/)
  const data = schemas(html)
  const businesses = data.filter((item) => item["@type"] === "Plumber")
  const services = data.filter((item) => item["@type"] === "Service")
  const faqs = data.filter((item) => item["@type"] === "FAQPage")
  assert.equal(businesses.length, 1)
  assert.equal(services.length, 1)
  assert.equal(faqs.length, 1, "home FAQs must not leak into this page")
  assert.equal(services[0].provider["@id"], businesses[0]["@id"])
  assert.equal(services[0].availableChannel.servicePhone.telephone, "+593982282941")
  assert.equal(services[0].offers.priceSpecification.minPrice, 45)
  assert.equal(services[0].offers.priceSpecification.priceCurrency, "USD")
  assert.equal(services[0].offers.price, undefined, "starting price must not be represented as a fixed price")
  assert.equal(faqs[0].url, `${domain}${path}`)
  assert.ok(faqs[0].mainEntity.some((question) => question.name.includes("¿Cuánto cuesta")))
  assert.ok(faqs[0].mainEntity.some((question) => question.acceptedAnswer.text.includes("$45")))
  assert.ok(faqs[0].mainEntity.every((question) => html.includes(question.name)), "structured questions must also be visible")
  const breadcrumb = data.find((item) => item["@type"] === "BreadcrumbList")
  assert.equal(breadcrumb.itemListElement.at(-1).item, `${domain}${path}`)
  assert.equal(businesses[0].openingHoursSpecification[0].opens, "07:30")
  assert.equal(businesses[0].openingHoursSpecification[0].closes, "19:30")
  assert.equal(data.filter((item) => item["@type"] === "AggregateRating").length, 0)
  assert.doesNotMatch(html, /24 horas|lowticket|hidrojet|testimonios inventados/i)
})

test("crawler routes list the main domain and the Destapefy service", async () => {
  const [robots, sitemap] = await Promise.all([responseText("/robots.txt"), responseText("/sitemap.xml")])
  assert.ok(robots.includes(`Sitemap: ${domain}/sitemap.xml`))
  assert.ok(robots.includes("Allow: /"))
  assert.ok(sitemap.includes(`<loc>${domain}</loc>`))
  assert.ok(sitemap.includes(`<loc>${domain}${path}</loc>`))
  assert.doesNotMatch(robots + sitemap, /vercel\.app/)
})
