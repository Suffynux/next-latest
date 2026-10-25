# NextGrid IT website redesign prompt

You are redesigning the UI of an existing Next.js website. The content, routing, SEO and data layer are already built and correct. Your job is to replace the visual design with a bold, editorial, typography-led design in the spirit of monks.com, adapted to the NextGrid IT brand. Do not copy Monks' name, logo, images, copy or any brand asset. Reproduce the design *principles* described below, not their identity.

Read this whole document before writing code.

---

## 1. Context: what already exists

- Stack: Next.js 15 App Router, plain CSS in `app/globals.css`, JSX components, no Tailwind, no UI library.
- All page content and copy lives in `lib/site.js` and the page files under `app/`. Keep every word of copy, every route, every `metadata` export, all JSON-LD, robots, sitemap, llms.txt and redirects exactly as they are unless this document says otherwise.
- Components: `components/Header.jsx`, `Footer.jsx`, `Reveal.jsx`, `QuoteForm.jsx`, `Sections.jsx`, `ConsentBanner.jsx`, `JsonLd.jsx`.
- Pages: `/` `/services` `/services/[slug]` (4 areas) `/industries` `/about` `/work` `/insights` `/contact` `/privacy` `/cookies` `/terms` plus 404.
- Everything is server-rendered. That must stay true: all text must exist in the raw HTML. Animation may hide and reveal, but never inject content client-side.

## 2. Non-negotiable rules (from the company spec)

1. No em dash character anywhere: copy, code comments, commit messages. Use commas, colons, parentheses or a new sentence.
2. British English spelling.
3. No prices, no fabricated testimonials, logos, metrics, awards or team claims.
4. Service areas always in this order: Brand & Marketing, Technology (Websites, Apps & Software), E-commerce, IT Managed Services.
5. The logo artwork may not be altered, recoloured or redrawn. It may be placed on light backgrounds as supplied.
6. WCAG 2.2 AA contrast, visible focus states, keyboard navigation, `prefers-reduced-motion` respected everywhere.
7. Mobile first: design and verify at 360px width before desktop.
8. Core Web Vitals in the good range. No animation library above 30KB gzip. Prefer CSS and IntersectionObserver. No heavy WebGL.

## 3. The design direction in one paragraph

Typography is the design. The current site looks like a generic dark tech template: glowing sphere, gradient text, card grids. Replace that with a calm, confident, editorial system: enormous grotesque headlines that mix a serif italic accent inside the same sentence, a warm paper-like background with near-black ink, huge whitespace, tiny uppercase kicker labels, numbered sections with oversized ghost numerals, hairline rules, pill-shaped buttons with a separate circular arrow chip, and sections that invert from light to dark for rhythm. Motion is scroll-driven and restrained: words of a headline brighten one by one as you scroll, cards rise a few pixels with stagger, nothing bounces, nothing spins.

## 4. Design tokens

Define all of these as CSS custom properties on `:root` and use them exclusively. Sample the exact brand blue from `public/logo.png` before choosing the two blue values.

```css
:root {
  /* Surfaces */
  --paper: #EDEAE3;      /* warm bone, main background */
  --paper-2: #E3DFD6;    /* slightly deeper bone for alternate blocks */
  --ink: #15161A;        /* near-black text on paper */
  --ink-soft: #4D4F56;   /* secondary text on paper */
  --coal: #101117;       /* dark section background, near black with a cold cast */
  --coal-2: #16181F;     /* raised dark surface */
  --bone-on-coal: #EDEAE3;
  --muted-on-coal: #9A9DA6;

  /* Brand accent, used sparingly: links, arrow chips, annotations, focus */
  --blue: /* sample from logo, approx #2F5FBF */;
  --blue-deep: /* darker companion, approx #1E3F86 */;

  /* Hairlines */
  --rule: rgba(21, 22, 26, 0.18);
  --rule-on-coal: rgba(237, 234, 227, 0.16);

  --radius-pill: 999px;
  --radius-card: 6px;    /* cards are nearly square, not rounded blobs */
  --wrap: 1360px;
  --gutter: clamp(20px, 4vw, 56px);
}
```

Colour rules:
- The site is two-tone. Paper sections and coal sections. Nothing else fills large areas.
- The blue appears only in small doses: link hover, arrow chips, the hand-drawn annotation, selection colour, focus rings. If a screen is more than roughly 5 percent blue, it is wrong.
- No gradients on text. No glowing shadows. No glassmorphism. Shadows barely exist: at most a 1px hairline border and a very soft lift on hover.

## 5. Typography

Load three Google fonts through `next/font/google`:

1. Display: **Archivo**, weights 500 to 800, with `font-stretch` expanded where supported (use "Archivo Expanded" class names via the variable font axes if available, otherwise weight 700/800 tight tracking).
2. Serif accent: **Instrument Serif**, regular and italic. Used only for accent words inside display headlines and for occasional pull quotes.
3. Body and UI: **Inter**, weights 400 and 500.

Type scale (desktop, scale down fluidly with clamp):
- Hero H1: clamp(3rem, 9vw, 8.5rem), line-height 0.95, letter-spacing -0.03em, weight 700.
- Section H2: clamp(2.2rem, 5.5vw, 4.5rem), line-height 1.0, weight 700.
- Card H3: 1.35rem, weight 600.
- Kicker: 0.78rem, uppercase, letter-spacing 0.08em, weight 500, colour `--ink-soft` (or `--muted-on-coal`).
- Body: 1.06rem, line-height 1.6, max measure 38em.

The signature headline pattern: inside a display headline, one or two key phrases switch to Instrument Serif italic at the same optical size. Example treatment of the existing H1 copy:

> ONE TEAM THAT *plans, builds and grows* YOUR DIGITAL BUSINESS.

Grotesque words set in Archivo 700, the phrase "plans, builds and grows" in Instrument Serif italic. Do this mixing on the home hero, each page hero, and the two big banner headings. Never more than one serif phrase per headline.

## 6. Layout system

- 12-column grid inside `--wrap`, gutter `--gutter`. Use CSS grid directly.
- Editorial asymmetry: kicker labels sit in columns 1 to 2, content starts at column 3 or 4 and runs wide. Headlines may hang into column 1. Avoid centred sections entirely except the final CTA.
- Whitespace is a feature: section padding-block clamp(96px, 14vw, 200px). Let big headlines breathe. When in doubt, double the space.
- Hairline rules (`1px solid var(--rule)`) separate major sections and index rows. Rules run full bleed to the viewport edges, not just the wrap.
- Section rhythm on the home page: coal hero, paper, paper-2, coal band, paper, coal mega-footer. Inner pages: paper hero on coal header strip, then paper body, coal footer.

## 7. Component specs

### Header
- Slim bar, height 72px, background transparent over the hero then solid on scroll (backdrop blur allowed, subtle).
- Logo at left placed directly on the background (remove the white plate box; on coal sections place the logo inside a small bone rounded rectangle only if contrast demands it).
- Nav centre-right: Services (dropdown), Industries, Insights, About, Contact. Dropdown panel is a plain paper card with hairline border, items in a single column, each row showing the area number (01 to 04), name, and a small arrow that appears on hover.
- CTA at far right: pill button "Request a Quote" plus a separate circular arrow chip (see Buttons). On mobile the menu becomes a full-screen coal overlay with the nav items at display size (2rem+), numbered.

### Buttons
Two pieces, like a pill and a coin sitting side by side with a 4px gap:
- Pill: `border-radius: var(--radius-pill)`, 1px border, padding 0.8em 1.6em, Inter 500, 0.95rem. Filled bone-on-coal or ink-on-paper depending on surface.
- Arrow chip: separate circle, same height as the pill, containing a thin arrow glyph. On hover the pill background shifts one step and the arrow slides 4px right then back (180ms ease). The whole pair is one link with the chip decorative.
- Ghost variant: transparent with 1px border.
No other button shapes exist.

### Service cards with ghost numbers (home and services overview)
- A 4-column row on desktop (stack to 1 column at 760px, 2 at 1100px) where each card has a different top offset (0, 48px, 24px, 72px) so the row feels staggered, offsets collapse on mobile.
- Behind each card title sits an enormous ghost numeral ("01" to "04"), font-size around 9rem, colour transparent ink at 6 percent opacity, overlapping the card top, clipped by the section.
- Card itself: flat `--paper` on paper sections (so it reads through spacing and rules, not boxes) with a 1px hairline top border, kicker "Solutions", title in H3, one-line description, and a text link with arrow chip.
- On service cards, replace imagery with a flat abstract block for now: a solid `--coal` rectangle with the area number set huge in bone, 4:3 ratio. When real images arrive they drop into the same slot. Hover: the block scales to 1.03 inside an overflow-hidden frame, 300ms.

### Index rows (insights list, FAQ alternative, footer policy links)
A full-width row with hairline top border: left cell small label, middle cell the title (weight 600, with the rest of the sentence in regular weight ink-soft), right cell meta, far right a pill "Read" plus arrow chip. Rows highlight on hover by shifting background one step. Use this pattern for the insights empty-state categories and for the home FAQ (keep `<details>` semantics: summary styled as an index row, answer opens below with a 240ms height ease).

### Hand-drawn annotation
On the contact CTA heading ("Request a quote or submit an RFP") circle one word, for example "quote", with an inline SVG ellipse that looks hand drawn: 2px stroke in `--blue`, slightly rotated, drawn with a dash-offset animation over 600ms when it first enters the viewport. This is the only decorative flourish on the site. Keep the SVG inline and accessible-hidden.

### Mega footer
Coal background, generous height:
- Row 1 left: kicker "Keep exploring". Centre: giant nav links at display size (Services, Industries, Insights, About, Contact), stacked, Archivo 600, hover shifts them 8px right with the arrow chip appearing.
- Row 1 right: two columns of small links with tiny arrow chips: the four service areas, then Privacy, Cookies, Terms.
- Row 2 after a hairline: social icons (LinkedIn plus the others when URLs exist), email and WhatsApp links, then the legal line (keep the exact registered-company sentence that exists today) and the logo small at far right.

### Forms (contact page)
Keep all existing fields, names, validation and API wiring. Restyle: inputs become borderless with only a 1px bottom hairline on paper, 1.1rem text, generous 28px row spacing, labels as kickers above. Focus: the hairline thickens to 2px `--blue`. The RFQ and RFP tabs become two index-row style toggles with the active one underlined by a 2px ink rule. Checkbox cards become plain checkboxes with pill-shaped selected states. Submit is the pill plus arrow chip.

### Cookie banner
Bottom-left paper card, hairline border, small, same pill buttons. Unchanged behaviour.

## 8. Page-by-page

### Home `/`
1. **Hero (coal).** Full viewport height. Kicker "NextGrid IT Ltd" top left. The H1 (existing copy, mixed-face treatment) fills the width across columns 1 to 11. Under it, offset to columns 4 to 8: the existing supporting paragraph in `--muted-on-coal`, then the pill pair CTAs. No sphere, no orb, no grid texture, no imagery. The type is the hero. Scroll-scrub word reveal (see Motion).
2. **Meta strip.** Hairline-bounded row with the three existing facts (Registered, Delivery team, Clients in), small type, spread across the row.
3. **Requirement tiles become an index list (paper).** Heading "Where would you like to start?" as H2 columns 1 to 6. The four tiles become four full-width index rows: number, the requirement sentence as the title, area name as meta, arrow chip. Hover inverts the row to coal with bone text.
4. **Service areas (paper-2).** H2 "Four service areas, one point of accountability". The staggered ghost-number card row described above.
5. **Who we work with (coal band).** Kicker left, H2 with serif accent on "any ethical, legal brand" idea using existing copy. Industries render as a simple two-column list of index rows, not cards. Link to /industries.
6. **How we work (paper).** The three METHOD steps as three wide columns under a hairline, each with an oversized ghost numeral, step name in H3, description. No boxes.
7. **Why one team (paper).** H2 plus the four existing points as a 2x2 list with hairline separators, no pill bullets, no cards.
8. **Insights teaser.** One index row per category, plus the empty-state line.
9. **FAQ.** Index-row details as specified. Keep FAQPage JSON-LD matching visible text.
10. **Final CTA (coal).** Full-width, centred exception: huge mixed-face headline "Unsure where to begin?" with the existing paragraph and pill pair. This replaces the gradient banner.

### Services overview `/services`
Paper hero with mixed-face H1, then the ghost-number staggered cards, then the process timeline restyled: remove the glowing nodes, use a plain vertical hairline with small ink circles, numerals in Archivo, generous spacing. Final CTA band.

### Service area pages `/services/[slug]`
- Hero: coal strip with breadcrumbs, big numeral "01 / 04" as kicker, mixed-face H1 of the area name plus tagline.
- "When to engage us": index rows, not pill-dotted boxes.
- Scope of services: two-column definition grid with hairline top borders per item, no card boxes, title weight 600, description ink-soft.
- Engagement model and support notes: a narrow sticky side column in italic serif for the first sentence, then regular body.
- Process, related areas (two wide flat teasers), FAQ index rows, CTA band. Keep all JSON-LD.

### Industries, About, Work, Insights
Same system: paper hero with mixed-face H1, content as index rows and wide text columns, prose pages set at 38em measure with serif italic pull-lines for the first sentence of each section. Work and Insights keep their empty states, styled as a single hairline-bounded statement in large serif italic.

### Legal pages
Prose at 38em, H2s with hairline top borders, no decoration.

## 9. Motion spec

Global rules: every animation is opacity, transform or clip-path only. Durations 200 to 600ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`. Everything inside `@media (prefers-reduced-motion: no-preference)` with full content visible when motion is off or JS absent (keep the existing `html.js` gating pattern in `Reveal.jsx`).

1. **Hero word scrub.** The H1 renders every word wrapped in a span (done at render time on the server, so the words are in the HTML). On load the words are at 18 percent opacity in bone; they brighten to full opacity one by one, 40ms stagger, triggered immediately for the hero. For the two coal band headlines deeper in the page, tie the brightening to scroll progress through the section using an IntersectionObserver-driven progress value or CSS `animation-timeline: view()` with the IO fallback. The effect must degrade to fully visible text.
2. **Section reveal.** Keep the existing Reveal mechanism: elements fade and rise 16px with stagger. Tune: 500ms, stagger 60ms, max 5 staggered items per group.
3. **Ghost numerals parallax.** Numerals translate vertically at 0.85x scroll speed within their section (a few pixels of drift, CSS `transform` updated from one shared scroll listener with rAF, or `animation-timeline: view()`). Subtle: max 40px total travel.
4. **Index row hover.** Background shifts one surface step, arrow chip slides 4px, 180ms.
5. **Card image hover.** Scale 1.03 inside overflow-hidden, 300ms.
6. **Footer giant links.** Slide 8px right on hover, arrow chip fades in.
7. **Annotation draw-on.** Dash-offset draw over 600ms once, when visible.
8. Nothing else moves. No marquees, no floating tags, no spinning rings, no parallax images, no cursor followers.

## 10. Accessibility and performance

- Contrast: verify ink on paper and bone on coal pass AA at all sizes used. The 18 percent opacity scrub start state is decorative only and must end at full contrast; users with reduced motion see full contrast immediately.
- Focus: 2px `--blue` outline, 3px offset, on every interactive element, visible on both surfaces.
- The mobile overlay menu traps focus, closes on Escape, and returns focus to the trigger.
- Fonts: three families maximum as listed, loaded via `next/font` with `display: swap`. Subset latin.
- No layout shift from animations: reserve space, animate transform and opacity only.
- Budget: first load JS stays within 10KB of the current build. No GSAP, no Framer Motion, no Lottie.
- Verify at 360px, 768px, 1280px, 1600px. At 360px: hero H1 around 3rem, offsets collapse, index rows wrap label above title, pill pair stays on one line.

## 11. Deliverables and QA checklist

Deliver by editing `app/globals.css`, the components and the page JSX. Do not touch `lib/site.js` copy, metadata exports, JSON-LD, `app/robots.js`, `app/sitemap.js`, `app/manifest.js`, `public/llms.txt`, `next.config.mjs` redirects, or the API route.

Before finishing, verify:
- [ ] `npm run build` passes, all pages static except the API route.
- [ ] Raw HTML of every page contains the full copy (curl and grep for the H1 text).
- [ ] No em dash anywhere in the diff.
- [ ] All four service areas render in the fixed order everywhere.
- [ ] FAQ JSON-LD still matches visible FAQ text exactly.
- [ ] Keyboard-only pass: header, dropdown, mobile menu, forms, FAQ details.
- [ ] `prefers-reduced-motion` shows a fully static, fully readable site.
- [ ] 360px screenshots of home, a service area page and contact look intentional, not squeezed.
- [ ] Lighthouse performance and accessibility 90+ on home and one service page.
