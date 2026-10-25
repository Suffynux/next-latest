import { ButtonContent, Headline, PullLine } from "../../../components/Editorial";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AREAS, getArea, SITE_URL } from "../../../lib/site";
import JsonLd from "../../../components/JsonLd";
import {
  Breadcrumbs,
  CtaBanner,
  FaqSection,
  ProcessTimeline,
} from "../../../components/Sections";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/services/${area.slug}` },
    openGraph: { url: `/services/${area.slug}` },
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const related = area.related.map((s) => getArea(s)).sort((a, b) => Number(a.order) - Number(b.order));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.metaTitle,
    serviceType: area.serviceType,
    url: `${SITE_URL}/services/${area.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      "United Kingdom",
      "Europe",
      "Gulf region",
      "United States",
      "Pakistan",
    ],
    description: area.metaDescription,
  };

  return (
    <>
      <JsonLd data={serviceLd} />

      <section className="page-hero service-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: area.name, href: `/services/${area.slug}` },
            ]}
          />
          <p className="count">{area.order} / 04</p>
          <Headline text={area.name} accent={area.name.includes("(") ? "Technology" : undefined} />
          <p className="tagline">{area.tagline}</p>
          <p className="lede">{area.intro}</p>
          <div className="actions">
            <Link className="btn" href={`/contact?service=${area.slug}`}><ButtonContent>Request a Quote</ButtonContent></Link>
            <Link
              className="btn ghost"
              href={`/contact?service=${area.slug}&tab=rfp`}
            ><ButtonContent>Submit an RFP</ButtonContent></Link>
          </div>
        </div>
      </section>

      <section className="area" style={{ borderTop: 0 }}>
        <div className="wrap area-grid">
          <div className="side">
            <div className="engage reveal">
              <p className="lbl">Engagement model</p>
              <p><PullLine text={area.engagement} /></p>
            </div>
            <div className="engage reveal" style={{ "--d": "0.06s" }}>
              <p className="lbl">Support and maintenance</p>
              <p>
                Everything we deliver can be supported after launch through{" "}
                {area.slug === "it-managed-services" ? (
                  "a monthly agreement"
                ) : (
                  <Link href="/services/it-managed-services">
                    IT Managed Services
                  </Link>
                )}
                , so nothing is left unowned once it goes live.
              </p>
            </div>
            {area.note ? <p className="note">{area.note}</p> : null}
          </div>
          <div>
            <p className="lbl">When to engage us</p>
            <ul className="when">
              {area.when.map((w, i) => (
                <li key={w} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                  {w}
                </li>
              ))}
            </ul>
            {area.groups.map((g) => (
              <div className="svc-group" key={g.label}>
                <p className="lbl">{g.label}</p>
                <dl className="svc">
                  {g.items.map((s, i) => (
                    <div key={s.t} className="reveal" style={{ "--d": `${(i % 4) * 0.06}s` }}>
                      <dt>{s.t}</dt>
                      <dd>{s.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="block"
        style={{ borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
        aria-labelledby="process-title"
      >
        <div className="wrap">
          <div className="head">
            <p className="kicker">How we work</p>
            <h2 id="process-title">
              A clear path from first conversation to measurable progress
            </h2>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="block" aria-labelledby="related-title">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Related services</p>
            <h2 id="related-title">Often combined with {area.navLabel}</h2>
          </div>
          <div className="cards">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="card reveal"
                style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}
              >
                <span className="count">{r.order} / 04</span>
                <h3>{r.name}</h3>
                <p>{r.intro}</p>
                <span className="to">View {r.navLabel} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={area.faqs}
        title={`Questions about ${area.navLabel}`}
      />

      <CtaBanner
        title={`Ready to discuss ${area.navLabel}?`}
        text="Describe your requirement and we will respond with a written scope and quotation."
      />
    </>
  );
}
