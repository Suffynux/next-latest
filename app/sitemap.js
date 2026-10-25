import { AREAS, SITE_URL } from "../lib/site";

// /work is excluded while it carries noindex. Add it, and published
// insight posts with accurate lastModified, when they go live.
export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    "",
    "/services",
    ...AREAS.map((a) => `/services/${a.slug}`),
    "/industries",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.startsWith("/services") ? 0.8 : 0.5,
  }));
}
