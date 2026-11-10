import { Arrow, ButtonContent, Headline } from "./Editorial";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { AREAS, PROCESS, SITE_URL } from "../lib/site";

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

// Dark service cards: name, promise, four scope rows and a highlighted way in.
export function ServiceCards({ verb = "Explore" }) {
  return (
    <div className="svc-cards">
      {AREAS.map((a, i) => (
        <Link
          key={a.slug}
          href={`/services/${a.slug}`}
          className="svc-card dark reveal"
          style={{ "--d": `${(i % 2) * 0.08}s` }}
        >
          <span className="top">
            <span className="count">{a.order} / 04</span>
            <Arrow />
          </span>
          <h3>{a.name}</h3>
          <p className="sub-line">{a.tagline}</p>
          <p className="intro">{a.intro}</p>
          <ol className="steps">
            {a.groups[0].items.slice(0, 4).map((s, n) => (
              <li key={s.t}><span className="dot" aria-hidden="true">{n + 1}</span>{s.t}<span className="tag" aria-hidden="true">Scope</span></li>
            ))}
            <li className="go"><span className="dot" aria-hidden="true">&rarr;</span>{verb} {a.navLabel}<span className="tag" aria-hidden="true">{a.groups.reduce((sum, g) => sum + g.items.length, 0)} services</span></li>
          </ol>
        </Link>
      ))}
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <ol className="timeline">
      {PROCESS.map((s, i) => (
        <li key={s.n} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.07}s` }}>
          <span className="node">{s.n}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProcessSection({ text }) {
  return (
    <section className="panel dark" aria-labelledby="process-title">
      <div className="wrap">
        <div className="head center">
          <p className="kicker">How we work</p>
          <h2 id="process-title">
            A clear path from first conversation to measurable progress
          </h2>
          {text ? <p>{text}</p> : null}
        </div>
        <ProcessTimeline />
      </div>
    </section>
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
      <div className="wrap split">
        <JsonLd data={data} />
        <div className="head">
          <p className="kicker">{kicker}</p>
          <h2 id="faq-title">{title}</h2>
        </div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.05}s` }}>
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
    <section className="cta-band dark">
      <span className="floaty" aria-hidden="true">Plan</span>
      <span className="floaty" aria-hidden="true">Build</span>
      <span className="floaty" aria-hidden="true">Grow</span>
      <div className="wrap">
        <div className="unsure reveal">
          <div>
            <p className="kicker">Start a conversation</p>
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
