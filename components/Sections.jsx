import { ButtonContent, Headline } from "./Editorial";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { PROCESS, SITE_URL } from "../lib/site";

export function Breadcrumbs({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <JsonLd data={data} />
      <ol>
        {items.map((it, i) =>
          i < items.length - 1 ? (
            <li key={it.href}>
              <Link href={it.href}>{it.name}</Link>
            </li>
          ) : (
            <li key={it.href} aria-current="page">
              {it.name}
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export function ProcessTimeline() {
  return (
    <ol className="timeline">
      {PROCESS.map((s, i) => (
        <li key={s.n} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
          <span className="node">{s.n}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqSection({ items, title = "Frequently asked questions", kicker = "FAQ" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="block" aria-labelledby="faq-title">
      <div className="wrap">
        <JsonLd data={data} />
        <div className="head">
          <p className="kicker">{kicker}</p>
          <h2 id="faq-title">{title}</h2>
        </div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
              <summary><span className="count" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><span>{f.q}</span></summary>
              <p className="a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({
  title = "Unsure where to begin?",
  text = "Describe the challenge you are facing. We will recommend the most appropriate starting point, however small.",
}) {
  return (
    <section className="block coal cta-band">
      <div className="wrap">
        <div className="unsure reveal">
          <div>
            <Headline as="h2" text={title} motion="scroll-words" />
            <p>{text}</p>
          </div>
          <div className="actions">
            <Link className="btn" href="/contact"><ButtonContent>Request a Quote</ButtonContent></Link>
            <Link className="btn ghost" href="/contact?tab=rfp"><ButtonContent>Submit an RFP</ButtonContent></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
