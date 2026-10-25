# CLAUDE.md: NextGrid IT Website

This file gives Claude the context, content rules and metadata needed to build and maintain the NextGrid IT website. Read it fully before writing code or copy. Where a value is shown as `{{PLACEHOLDER}}`, do not invent it; leave the placeholder and flag it.

Assumed stack: Next.js (App Router) on Vercel. If the repo uses something else, keep every rule and adapt the code examples.

---

## 1. Project summary

- **Site:** corporate website for NextGrid IT Ltd
- **Production domain:** https://nextgridit.co.uk
- **Staging / preview:** next-gridit-updated.vercel.app (must never be indexed)
- **Purpose:** present NextGrid IT as one team that plans, builds and grows digital businesses, and convert visitors into quote requests (RFQ/RFP)
- **Primary conversion:** Request a Quote form
- **Secondary conversions:** WhatsApp chat, calendar booking, email
- **Stage:** pre-launch. The company is its own first project. There are no published case studies yet.

---

## 2. Company facts

Use these exactly in the footer, About page, legal pages and structured data.

| Field | Value |
|---|---|
| Brand name | NextGrid IT |
| Legal name | NEXTGRID IT LTD |
| Company number | 16591385 |
| Registered in | England and Wales |
| Registered office | `{{REGISTERED_OFFICE_ADDRESS}}` (virtual address) |
| Team | Remote, distributed team based in Lahore, Pakistan |
| Delivery | All services delivered online. Client site visits are arranged separately and charged separately. |
| Logo tagline | Where IT meets reliability |

**Legal display requirement (UK):** the website must show the registered company name, company number, place of registration and registered office address. Put this in the footer on every page.

Footer legal line:

> NEXTGRID IT LTD is a company registered in England and Wales, company number 16591385. Registered office: {{REGISTERED_OFFICE_ADDRESS}}.

Never imply physical offices in the UK, Gulf or anywhere else.

---

## 3. Audience and markets

- **Markets served:** United Kingdom, Europe, the Gulf region (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman), United States, Pakistan
- **Who we work with:** product-based and service-based brands, provided the business is ethical and legal
- **Typical buyer:** founder, owner or senior decision maker who wants one accountable team instead of separate agencies, developers and freelancers
- **Language:** British English (en-GB). Arabic RTL support is planned later; build layouts so it can be added without a rebuild.

---

## 4. Positioning and core messages

**Core idea (working copy, use as the home H1):**
> One team that plans, builds and grows your digital business.

**Supporting message:**
> Clients usually hire separate companies for strategy, marketing, technology, software and e-commerce. NextGrid IT connects all of it under one team, so plans, builds and growth work stay aligned.

**Method (use for "How we work"):**
1. **Plan:** understand the business, define strategy, brand and scope
2. **Build:** design and develop the brand, website, systems and store
3. **Grow:** run marketing, content and optimisation, then report and refine

**Message priorities:**
- Lead with the connected, one-team value
- AI is part of how NextGrid works and delivers, mentioned across services, not as a separate headline offer
- AI search visibility and WhatsApp sales systems may appear inside service pages but are not hero or flagship messages

---

## 5. Information architecture

### Sitemap

```
/                                   Home
/services                           Services overview
/services/brand-marketing           Brand & Marketing
/services/technology                Technology & Software
/services/ecommerce                 E-commerce
/services/it-managed-services       IT Managed Services & Recruitment
/services/{area}/{service}          Optional individual service pages
/industries                         Industries we serve
/work                               Case studies (noindex until first case study)
/about                              About
/insights                           Articles index
/insights/{slug}                    Article
/contact                            Contact & Request a Quote
/privacy                            Privacy notice
/cookies                            Cookie policy
/terms                              Terms of use
```

### Header navigation

Services (dropdown: Brand & Marketing, Technology, E-commerce, IT Managed Services) · Industries · Work · Insights · About · Contact · **[Request a Quote]** button

Hide "Work" from the nav until at least one case study is published.

### Footer

- Service area links, company links, legal links (Privacy, Cookies, Terms)
- Social links: Instagram, Facebook, TikTok, LinkedIn
- Contact: email, WhatsApp
- Legal line from section 2

### URL rules

Lowercase, hyphenated, no trailing slash, no dates in article slugs. 301-redirect old nextgridit.co.uk URLs to the new structure; old IT managed services and recruitment pages go to `/services/it-managed-services`.

---

## 6. Services content map

Show service areas in this exact order. IT Managed Services always sits last.

### 1. Brand & Marketing
Brand strategy · Brand identity and guidelines · Branding, marketing and sales (BMS) strategy · Content strategy · Social media marketing · Paid advertising · SEO and AI search visibility · Content and creative · Email marketing · Analytics and conversion optimisation · CRM and marketing systems · AI-supported marketing and automation

Strategy, brand and marketing are presented as equal, connected parts of one service area.

### 2. Technology & Software
Web development · Mobile app development · SaaS development · Custom software · CRM and business systems · Backend and API development · Automation and AI · Cloud and DevOps · Native desktop apps · Interactive and 3D web · Integrations

Mobile app development always stays inside this area. Never drop or separate it.

### 3. E-commerce
Shopify development · E-commerce development · Storefront and headless commerce · E-commerce management and automation · Inventory and order systems · E-commerce growth and optimisation

### 4. IT Managed Services & Recruitment
IT managed services · Technical recruitment · IT talent and resourcing · Delivery support

Technical recruitment lives inside this area, not as its own section.

### Cross-cutting capability
Support and maintenance runs across technology, websites, e-commerce and systems. Mention it on each relevant page; do not make it a separate service area.

---

## 7. Page briefs

**Home:** Hero (H1 core idea, one-line support, buttons: Request a Quote / View Services) → Four service areas → Who we work with → How we work (Plan, Build, Grow) → Why one team → Latest insights → FAQ → Final CTA. No pricing section. No logo wall.

**Services overview:** short intro, four service area cards in order, each with 3 to 5 key services and a link.

**Service area pages:** what it covers, who it suits, deliverables, process, related services from other areas, FAQ, RFQ CTA.

**Industries:** state that NextGrid works with any ethical, legal product or service brand, then example sectors: Retail and grocery · Fashion and e-commerce · Education · Travel and hospitality · Health, beauty and clinics · Real estate · Professional services. Do not name clients.

**Work:** empty-state message until a case study exists: "Our first case studies are being prepared and will be published with client permission." Keep `noindex` until the first case study goes live.

**About:** company facts, UK registration, remote team, how we work, what we value. No individual titles or team photos until confirmed.

**Insights:** articles in categories Brand & Marketing, Technology, E-commerce, Guides. Follow section 11 GEO rules.

**Contact:** RFQ form, WhatsApp button, email, calendar booking link, response expectations only once confirmed.

---

## 8. Metadata

### Global defaults

| Field | Value |
|---|---|
| `metadataBase` | https://nextgridit.co.uk |
| Site name | NextGrid IT |
| Title template | `%s \| NextGrid IT` |
| Default title | NextGrid IT \| Brand, Marketing, Technology & E-commerce |
| Default description | One team that plans, builds and grows your digital business: brand and marketing, software, e-commerce and IT services for growing brands. |
| `<html lang>` | en-GB |
| `og:locale` | en_GB |
| `og:type` | website (article for insight posts) |
| Default OG image | /og/default.png, 1200 × 630, logo on brand blue with core idea |
| Twitter card | summary_large_image |
| Theme colour | `{{BRAND_BLUE_HEX}}` |
| Robots, production | index, follow |
| Robots, preview/staging | noindex, nofollow |
| Canonical | Self-referencing on every page, production domain only |

### Per-page metadata

Titles are shown as rendered. In code, set `title` to the part before ` | NextGrid IT`; the home page uses `title.absolute`.

| Page | Title | Meta description | Primary intent |
|---|---|---|---|
| `/` | NextGrid IT \| Brand, Marketing, Technology & E-commerce | One team that plans, builds and grows your digital business: brand and marketing, software, e-commerce and IT services for growing brands. | digital agency, one-team digital partner |
| `/services` | Brand, Technology & E-commerce Services \| NextGrid IT | Explore NextGrid IT services across brand and marketing, technology and software, e-commerce, and IT managed services, delivered by one connected team. | digital services company |
| `/services/brand-marketing` | Brand Strategy & Digital Marketing Services \| NextGrid IT | Brand strategy, identity, content, social media, paid advertising, SEO and CRM, planned and run by one team as a single growth programme. | brand strategy agency, digital marketing services |
| `/services/technology` | Web, App & Custom Software Development \| NextGrid IT | Websites, mobile apps, SaaS platforms, custom software, APIs and automation, built around how your business operates and grows. | web and app development company |
| `/services/ecommerce` | Shopify & E-commerce Development \| NextGrid IT | Shopify stores, headless storefronts, integrations, inventory and order systems, plus ongoing e-commerce management and optimisation. | Shopify development agency |
| `/services/it-managed-services` | IT Managed Services & Technical Recruitment \| NextGrid IT | Managed IT support, technical recruitment and IT resourcing to keep your systems running and your delivery teams staffed. | IT managed services, IT recruitment |
| `/services/{area}/{service}` | {Service} Services \| NextGrid IT | {What the service delivers} for {who it suits}, delivered by the NextGrid IT team alongside your wider brand, technology and growth work. (140 to 160 characters) | {service} + "services" |
| `/industries` | Industries We Serve \| NextGrid IT | NextGrid IT works with product and service brands across retail, e-commerce, education, travel, health and beauty, real estate and professional services. | industries served |
| `/work` | Our Work \| NextGrid IT | Case studies from NextGrid IT, published with client permission. Our first case studies are being prepared. | (noindex until live) |
| `/about` | About NextGrid IT \| UK-Registered Digital Partner | NextGrid IT Ltd is a UK-registered company with a remote, distributed team delivering brand, marketing, technology and e-commerce services online. | about NextGrid IT |
| `/insights` | Insights on Brand, Marketing & Technology \| NextGrid IT | Practical guidance on brand strategy, digital marketing, SEO, software and e-commerce from the NextGrid IT team. | guides and insights |
| `/insights/{slug}` | {Article title} \| NextGrid IT | The article's direct answer, summarised in 140 to 160 characters. | the question the article answers |
| `/contact` | Contact & Request a Quote \| NextGrid IT | Tell us about your project and request a quote from NextGrid IT by form, email or WhatsApp. | contact, request a quote |
| `/privacy` | Privacy Notice \| NextGrid IT | How NextGrid IT Ltd collects, uses and protects personal data under UK GDPR and the Data Protection Act 2018. | |
| `/cookies` | Cookie Policy \| NextGrid IT | How the NextGrid IT website uses cookies and how to manage your cookie preferences. | |
| `/terms` | Terms of Use \| NextGrid IT | The terms that apply when you use the NextGrid IT website. | |
| 404 | Page Not Found \| NextGrid IT | The page you are looking for could not be found. | noindex |

**Length rules:** titles 50 to 60 characters where possible; descriptions 140 to 160 characters; one H1 per page that matches the page's intent, never a copy of the title tag.

### Icons and manifest

- `favicon.ico` (32 × 32), `icon.png` (512 × 512), `apple-touch-icon.png` (180 × 180), all from the circular logo mark
- `manifest.webmanifest` with name "NextGrid IT", short_name "NextGrid", theme and background colours from brand tokens

### Next.js example

```ts
// app/layout.tsx
import type { Metadata, Viewport } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextgridit.co.uk";
const isProd = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NextGrid IT | Brand, Marketing, Technology & E-commerce",
    template: "%s | NextGrid IT",
  },
  description:
    "One team that plans, builds and grows your digital business: brand and marketing, software, e-commerce and IT services for growing brands.",
  applicationName: "NextGrid IT",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "NextGrid IT",
    locale: "en_GB",
    url: "/",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "NextGrid IT" }],
  },
  twitter: { card: "summary_large_image" },
  robots: isProd ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "{{BRAND_BLUE_HEX}}" };
```

```ts
// app/services/ecommerce/page.tsx (pattern for every page)
export const metadata: Metadata = {
  title: "Shopify & E-commerce Development",
  description:
    "Shopify stores, headless storefronts, integrations, inventory and order systems, plus ongoing e-commerce management and optimisation.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: { url: "/services/ecommerce" },
};
```

---

## 9. Structured data (JSON-LD)

Render JSON-LD server-side in a `<script type="application/ld+json">` tag. Never inject it client-side only.

### Organization (every page, via root layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nextgridit.co.uk/#organization",
  "name": "NextGrid IT",
  "legalName": "NEXTGRID IT LTD",
  "url": "https://nextgridit.co.uk",
  "logo": "https://nextgridit.co.uk/logo.png",
  "slogan": "Where IT meets reliability",
  "description": "One team that plans, builds and grows your digital business: brand and marketing, technology and software, e-commerce, and IT managed services.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Companies House company number",
    "value": "16591385"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{REGISTERED_OFFICE_STREET}}",
    "addressLocality": "{{REGISTERED_OFFICE_CITY}}",
    "postalCode": "{{REGISTERED_OFFICE_POSTCODE}}",
    "addressCountry": "GB"
  },
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Place", "name": "Europe" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Pakistan" }
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "{{EMAIL}}",
    "telephone": "{{PHONE_E164}}",
    "availableLanguage": ["English", "Urdu"]
  }],
  "sameAs": [
    "{{LINKEDIN_URL}}",
    "{{INSTAGRAM_URL}}",
    "{{FACEBOOK_URL}}",
    "{{TIKTOK_URL}}"
  ]
}
```

### WebSite (home page)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nextgridit.co.uk/#website",
  "url": "https://nextgridit.co.uk",
  "name": "NextGrid IT",
  "inLanguage": "en-GB",
  "publisher": { "@id": "https://nextgridit.co.uk/#organization" }
}
```

### Service (each service area and service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify & E-commerce Development",
  "serviceType": "E-commerce development",
  "url": "https://nextgridit.co.uk/services/ecommerce",
  "provider": { "@id": "https://nextgridit.co.uk/#organization" },
  "areaServed": ["United Kingdom", "Europe", "Gulf region", "United States", "Pakistan"],
  "description": "Shopify stores, headless storefronts, integrations, inventory and order systems, plus ongoing e-commerce management and optimisation."
}
```

Never add `offers`, `price` or `priceRange`. The site carries no prices.

### Also required

- **BreadcrumbList** on every page below the home page
- **FAQPage** on any page with a visible FAQ (markup must match visible text exactly)
- **Article** on insight posts: headline, description, datePublished, dateModified, author (NextGrid IT organisation unless a named author is approved), publisher `@id`, image

### Approved FAQ content (home page)

| Question | Answer |
|---|---|
| What does NextGrid IT do? | NextGrid IT is one team that plans, builds and grows digital businesses. We cover brand and marketing, technology and software, e-commerce, and IT managed services. |
| Where is NextGrid IT based? | NextGrid IT Ltd is registered in England and Wales (company number 16591385). Our team works remotely and delivers all services online. |
| Which countries do you work with? | We work with clients in the United Kingdom, Europe, the Gulf region, the United States and Pakistan. |
| How much do your services cost? | Every engagement is scoped to the client's goals, so we quote per project. Submit a request for a quote and we will send a written proposal. |
| Do you work with product and service businesses? | Yes. We work with product-based and service-based brands, provided the business is ethical and legal. |
| Do you visit client premises? | Our services are delivered online. Site visits can be arranged when needed and are charged separately. |

---

## 10. Crawling and AI visibility

### robots.txt (production)

```
User-agent: *
Allow: /
Disallow: /api/

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://nextgridit.co.uk/sitemap.xml
```

Preview and staging deployments serve `User-agent: * / Disallow: /` plus `X-Robots-Tag: noindex`.

### sitemap.xml

Generate dynamically. Include all indexable pages and published insight posts with accurate `lastModified`. Exclude `/work` while it is noindex, plus 404 and API routes.

### llms.txt (at /llms.txt)

```
# NextGrid IT

> NextGrid IT is one team that plans, builds and grows digital businesses: brand and marketing, technology and software, e-commerce, and IT managed services. NEXTGRID IT LTD is registered in England and Wales (company number 16591385) and delivers services online to clients in the UK, Europe, the Gulf, the United States and Pakistan.

## Services
- [Brand & Marketing](https://nextgridit.co.uk/services/brand-marketing): brand strategy, identity, content, social media, paid advertising, SEO, CRM
- [Technology & Software](https://nextgridit.co.uk/services/technology): web, mobile apps, SaaS, custom software, APIs, automation, cloud
- [E-commerce](https://nextgridit.co.uk/services/ecommerce): Shopify, headless storefronts, inventory and order systems, optimisation
- [IT Managed Services & Recruitment](https://nextgridit.co.uk/services/it-managed-services): managed IT support, technical recruitment, IT resourcing

## Company
- [About](https://nextgridit.co.uk/about)
- [Industries](https://nextgridit.co.uk/industries)
- [Insights](https://nextgridit.co.uk/insights)
- [Contact and quotes](https://nextgridit.co.uk/contact)
```

### Search console setup

Verify the production domain in Google Search Console and Bing Webmaster Tools, then submit the sitemap to both.

---

## 11. Copy and voice rules

**Tone:** mature, formal, classic. Clear and plain, not techy, not theoretical.

**Style:**
- British English spelling (optimisation, organisation, colour)
- Specific over enthusiastic: name what is delivered, not vague promises of growth
- Short paragraphs, descriptive headings, one idea per section
- Every number on the site needs a named source or gets removed

**Never use:**
- The em dash character. Use commas, colons, parentheses or a new sentence.
- "I'd be happy to", "Great question", "Let me break this down", "In today's fast-paced world", "dive into", "delve into", "it's important to note", "navigate the complexities", "embark on a journey", "cutting-edge", "world-class", "unlock your potential"
- Hollow three-word lists unless every word carries meaning

**GEO and AEO structure (service pages and insights):**
1. Open with a direct answer to the page's main question in the first paragraph
2. Use headings phrased the way buyers ask questions
3. Keep each section answerable on its own
4. Source every claim and statistic by name
5. Link related services and articles internally
6. Add FAQ blocks with FAQPage schema where useful

---

## 12. Brand and design rules

- **Logo:** blue circular mark with the "NEXTGRID IT" wordmark and tagline. Only a PNG exists. It may be cropped or cleaned. Nothing in the logo itself may change: no recolouring, redrawing, stretching or effects.
- **Colour:** blue theme matching the logo. Sample the primary blue from the logo file and define all colours as CSS tokens:

```css
:root {
  --brand-blue: {{BRAND_BLUE_HEX}};
  --brand-blue-dark: {{BRAND_BLUE_DARK_HEX}};
  --ink: {{INK_HEX}};
  --surface: {{SURFACE_HEX}};
  --muted: {{MUTED_HEX}};
}
```

- **Typography:** not confirmed. Use `--font-display` and `--font-body` tokens so fonts can be swapped in one place. Direction: classic and mature.
- **Look:** mature, classic, uncluttered. Light or dark base, whichever suits the layout, with consistent contrast.
- **Imagery:** no stock photos of fake offices or fake teams. Use abstract, product, interface or illustrative visuals.
- **Accessibility:** WCAG 2.2 AA contrast, visible focus states, keyboard navigation, alt text on every meaningful image.

---

## 13. Technical requirements

- **Rendering:** all content pages server-rendered or statically generated. Content must be readable in the raw HTML without JavaScript. Client-side-only rendering is not acceptable for any page that should rank or be cited.
- **Performance:** Core Web Vitals in "good" range (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1). Full load under 3 seconds on a mid-range Android phone over 4G.
- **Images:** `next/image`, WebP or AVIF, explicit width and height, lazy loading below the fold, descriptive file names.
- **Mobile first:** design and test at 360px width first.
- **Contact:** reachable within two clicks from any page.
- **RTL ready:** use logical CSS properties (`margin-inline-start` etc.) so an Arabic version can be added later.
- **Environment variables:** `NEXT_PUBLIC_SITE_URL`, form endpoint keys, analytics IDs. Never hard-code secrets.

---

## 14. Forms, CTAs and contact

### Request a Quote form

| Field | Type | Required |
|---|---|---|
| Full name | text | yes |
| Company or brand | text | yes |
| Email | email | yes |
| Phone or WhatsApp | tel | no |
| Country | select | yes |
| Service areas | multi-select: Brand & Marketing, Technology, E-commerce, IT Managed Services | yes |
| Project details | textarea | yes |
| Timeline | select: As soon as possible, 1 to 3 months, 3+ months, Not sure | no |
| Privacy consent | checkbox, not pre-ticked, links to /privacy | yes |

Add a honeypot field and server-side validation. Show a clear success message. Do not promise a response time until confirmed.

### CTAs by region

- Pakistan and Gulf visitors: WhatsApp button prominent (`https://wa.me/{{WHATSAPP_NUMBER}}`)
- UK, Europe and US visitors: calendar booking prominent (`{{BOOKING_URL}}`)
- Primary site-wide CTA label: **Request a Quote**

---

## 15. Compliance, privacy and analytics

- GDPR-grade baseline for all visitors (UK GDPR and Data Protection Act 2018)
- Cookie consent banner from launch, with reject as easy as accept
- No analytics or ad pixels load before consent
- Google Analytics 4 with Consent Mode v2; Meta Pixel and TikTok Pixel only after consent
- Privacy notice covers: controller identity (NEXTGRID IT LTD), data collected, purposes, lawful bases, retention, recipients, international transfers, individual rights, right to complain to the ICO
- ICO registration number on the privacy notice: `{{ICO_REGISTRATION_NUMBER}}`
- Tax, VAT or corporate law wording on the site is accountant or solicitor territory; do not draft it unprompted

---

## 16. Hard rules

1. No prices, rates, package tiers or price ranges anywhere on the site or in schema. Clients use RFQ/RFP.
2. No fabricated testimonials, client logos, case study metrics, awards, certifications, team size claims or "trusted by" sections.
3. No client names without written permission.
4. No claim of in-house high-spend performance marketing or programmatic buying.
5. No physical office claims.
6. No changes to the logo artwork.
7. No em dash character in any copy, code comment or commit message.
8. No content pages that depend on client-side rendering.
9. Service areas always appear in the order: Brand & Marketing, Technology, E-commerce, IT Managed Services.
10. Staging and preview deployments are always noindex.

---

## 17. Placeholders to fill

| Placeholder | Needed for |
|---|---|
| `{{REGISTERED_OFFICE_ADDRESS}}` (street, city, postcode) | Footer, About, schema |
| `{{EMAIL}}` | Contact, schema |
| `{{PHONE_E164}}` | Schema, contact |
| `{{WHATSAPP_NUMBER}}` | WhatsApp CTA |
| `{{BOOKING_URL}}` | Calendar CTA |
| `{{LINKEDIN_URL}}`, `{{INSTAGRAM_URL}}`, `{{FACEBOOK_URL}}`, `{{TIKTOK_URL}}` | Footer, schema |
| `{{BRAND_BLUE_HEX}}` and other colour tokens | Design system, theme colour |
| Font choices | Typography tokens |
| `{{ICO_REGISTRATION_NUMBER}}` | Privacy notice |
| OG image artwork | /og/default.png |
