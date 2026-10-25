import { Arrow, ButtonContent, GhostNumber, Headline } from "../components/Editorial";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import {
  AREAS,
  METHOD,
  HOME_FAQS,
  INDUSTRIES,
  INSIGHT_CATEGORIES,
  SITE_URL,
} from "../lib/site";
import { FaqSection, CtaBanner } from "../components/Sections";

export const metadata = {
  title: {
    absolute: "NextGrid IT | Brand, Marketing, Technology & E-commerce",
  },
  description:
    "One team that plans, builds and grows your digital business: brand and marketing, software, e-commerce and IT services for growing brands.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "NextGrid IT",
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteLd} />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <p className="kicker reveal">NextGrid IT Ltd</p>
              <Headline text="One team that plans, builds and grows your digital business." accent="plans, builds and grows" motion="hero-words" />
              <p className="lede reveal" style={{ "--d": "0.06s" }}>
                Clients usually hire separate companies for strategy, marketing,
                technology, software and e-commerce. NextGrid IT connects all of
                it under one team, so plans, builds and growth work stay aligned.
              </p>
              <div className="actions reveal" style={{ "--d": "0.12s" }}>
                <Link className="btn" href="/contact"><ButtonContent>Request a Quote</ButtonContent></Link>
                <Link className="btn ghost" href="/services"><ButtonContent>View services</ButtonContent></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="meta">
        <div className="wrap">
          <ul>
            <li>
              <b>Registered</b> in England and Wales
            </li>
            <li>
              <b>Delivery team</b> based in Lahore, working remotely
            </li>
            <li>
              <b>Clients in</b> the UK, Europe, the Gulf, the United States and
              Pakistan
            </li>
          </ul>
        </div>
      </div>

      <section className="block requirements">
        <div className="wrap">
          <div className="tiles-head">
            <h2>Where would you like to start?</h2>
            <p className="kicker">Select your requirement</p>
          </div>
          <ol className="tiles">
            {AREAS.map((a, i) => (
              <li key={a.slug} className="reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                <Link href={`/services/${a.slug}`}>
                  <span className="n">{a.order}</span>
                  <span className="say">{a.tileSay}</span>
                  <span className="to">
                    <span>{a.tileLabel}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block paper-alt" aria-labelledby="areas-title">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Services</p>
            <h2 id="areas-title">Four service areas, one point of accountability</h2>
            <p>
              Each area covers the situations in which clients engage us, the
              services included and how engagements are structured.
            </p>
          </div>
          <div className="cards service-cards">
            {AREAS.map((a, i) => (
              <Link
                key={a.slug}
                href={`/services/${a.slug}`}
                className="card service-card reveal"
                style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}
              >
                <span className="count">{a.order} / 04</span>
                <div className="service-frame" aria-hidden="true"><div className="service-art">{a.order}</div></div>
                <span className="kicker">Solutions</span>
                <div className="service-title"><GhostNumber>{a.order}</GhostNumber><h3>{a.name}</h3></div>
                <p className="sub-line">{a.tagline}</p>
                <p>{a.intro}</p>
                <p className="svc-list">
                  {a.groups[0].items
                    .slice(0, 5)
                    .map((s) => s.t)
                    .join(" · ")}
                </p>
                <span className="to"><span>Explore {a.navLabel}</span><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="block coal"
        aria-labelledby="who-title"
      >
        <div className="wrap">
          <div className="head">
            <p className="kicker">Who we work with</p>
            <Headline as="h2" id="who-title" text="Product and service brands, across markets" accent="across markets" motion="scroll-words" />
            <p>
              We work with product-based and service-based businesses, provided
              the business is ethical and legal, from the UK and Europe to the
              Gulf, the United States and Pakistan.
            </p>
            <Link className="lead-link" href="/industries">
              See the industries we serve &rarr;
            </Link>
          </div>
          <div className="cards industry-list">
            {INDUSTRIES.slice(0, 6).map((ind, i) => (
              <div key={ind.t} className="card reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                <h3 style={{ fontSize: "1.1rem" }}>{ind.t}</h3>
                <p>{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="method-title">
        <div className="wrap">
          <div className="head">
            <p className="kicker">How we work</p>
            <h2 id="method-title">Plan, build, grow</h2>
            <p>
              The same method applies to every engagement, whether you need a
              brand, a platform, a store or ongoing IT support.
            </p>
          </div>
          <div className="cards three method">
            {METHOD.map((m, i) => (
              <div key={m.t} className="card reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                <GhostNumber>0{i + 1}</GhostNumber>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="block"
        aria-labelledby="why-title"
      >
        <div className="wrap">
          <div className="head">
            <p className="kicker">Why one team</p>
            <h2 id="why-title">Separate suppliers pull in separate directions</h2>
            <p>
              When strategy, build and marketing sit with different companies,
              handovers slow delivery and accountability blurs. One team keeps
              the plan, the product and the growth work aligned.
            </p>
          </div>
          <ul className="when" style={{ maxWidth: 900 }}>
            <li className="reveal">One written scope, one named lead, one point of accountability</li>
            <li className="reveal" style={{ "--d": "0.06s" }}>
              Decisions carry through from strategy to build to marketing
            </li>
            <li className="reveal" style={{ "--d": "0.12s" }}>
              No handover gaps between agency, developer and freelancer
            </li>
            <li className="reveal" style={{ "--d": "0.18s" }}>
              Support continues after launch through IT Managed Services
            </li>
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Insights</p>
            <h2 id="insights-title">Guidance on brand, technology and e-commerce</h2>
            <p>
              Practical articles across {INSIGHT_CATEGORIES.join(", ")}. Our
              first articles are in preparation.
            </p>
            <Link className="lead-link" href="/insights">
              Visit Insights &rarr;
            </Link>
          </div>
          <div className="category-list">
            {INSIGHT_CATEGORIES.map((category, i) => <div className="category-row reveal" key={category}><span className="count">0{i + 1}</span><h3>{category}</h3></div>)}
          </div>
        </div>
      </section>

      <FaqSection items={HOME_FAQS} />

      <CtaBanner />
    </>
  );
}
