import { Headline } from "../../components/Editorial";
import Link from "next/link";
import { INDUSTRIES, AREAS } from "../../lib/site";
import { Breadcrumbs, CtaBanner } from "../../components/Sections";

export const metadata = {
  title: "Industries We Serve",
  description:
    "NextGrid IT works with product and service brands across retail, e-commerce, education, travel, health and beauty, real estate and professional services.",
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
            ]}
          />
          <p className="kicker">Industries</p>
          <Headline text="Industries we serve" accent="we serve" />
          <p className="lede">
            NextGrid IT works with any product or service brand, provided the
            business is ethical and legal. The sectors below are where our work
            is most often applied.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cards industry-list">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.t} className="card reveal" style={{ "--d": `${(i % 3) * 0.06}s` }}>
                <h3 style={{ fontSize: "1.15rem" }}>{ind.t}</h3>
                <p>{ind.d}</p>
              </div>
            ))}
            <div className="card reveal" style={{ "--d": "0.12s" }}>
              <h3 style={{ fontSize: "1.15rem" }}>Your sector</h3>
              <p>
                Not listed here? If your business is ethical and legal, we can
                work with it. Tell us what you do and we will recommend a
                starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="block"
        style={{ borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
        aria-labelledby="apply-title"
      >
        <div className="wrap">
          <div className="head">
            <p className="kicker">How this applies</p>
            <h2 id="apply-title">The same four service areas, applied to your sector</h2>
            <p>
              Whatever the industry, engagements draw on the same connected
              services: brand and marketing, websites and software, e-commerce,
              and IT managed services.
            </p>
          </div>
          <ul className="when" style={{ maxWidth: 900 }}>
            {AREAS.map((a, i) => (
              <li key={a.slug} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                <Link href={`/services/${a.slug}`}>{a.name}</Link>: {a.tagline}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
