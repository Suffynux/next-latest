/** @type {import('next').NextConfig} */
const isProd = process.env.VERCEL_ENV === "production";

const nextConfig = {
  // 301 redirects from the previous site structure.
  async redirects() {
    const map = [
      ["/about-us", "/about"],
      ["/contact-us", "/contact"],
      ["/creative-support", "/services/brand-marketing"],
      ["/email-marketing", "/services/brand-marketing"],
      ["/services/creative-support/digital-marketing", "/services/brand-marketing"],
      ["/services/creative-support/custom-web-development", "/services/technology"],
      ["/services/creative-support/shopify-development", "/services/ecommerce"],
      ["/it-service", "/services/it-managed-services"],
      ["/managed-services", "/services/it-managed-services"],
      ["/network-support", "/services/it-managed-services"],
      ["/ITAsset-Management", "/services/it-managed-services"],
      ["/project-management", "/services/it-managed-services"],
      ["/tech-recruitment", "/services/it-managed-services"],
    ];
    return map.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  // Preview and staging deployments must never be indexed.
  async headers() {
    if (isProd) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
