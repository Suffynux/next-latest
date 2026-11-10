import { Arrow, ButtonContent, Headline } from "../components/Editorial";
import HeroStage from "../components/HeroStage";
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
import { FaqSection, CtaBanner, ServiceCards } from "../components/Sections";

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

const stageAreas = AREAS.map((a) => ({
  slug: a.slug,
  order: a.order,
  label: a.tileLabel,
  say: a.tileSay,
  items: a.groups[0].items.slice(0, 3).map((s) => s.t),
}));

const ticker = AREAS.flatMap((a) => a.groups.flatMap((g) => g.items.map((s) => s.t)));

const SCOPE = ["Deliverables", "Exclusions", "Timeline", "Commercial terms"];
const MILESTONES = [
  ["Design", "0%", "46%"],
  ["Develop", "22%", "58%"],
  ["Launch", "58%", "30%"],
  ["Support", "70%", "30%"],
];
const GROWTH = [22, 30, 27, 41, 52, 49, 68, 84, 100];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteLd} />

      <section className="hero dark">
        <div className="floor" aria-hidden="true"><b /><i /></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">NextGrid IT Ltd</p>
            <Headline text="One team that plans, builds and grows your digital business." accent="plans, builds and grows" motion="hero-words" />
            <div className="hero-sub">
              <p className="lede">
                Clients usually hire separate companies for strategy, marketing,
                technology, software and e-commerce. NextGrid IT connects all of
                it under one team, so plans, builds and growth work stay aligned.
              </p>
              <div className="actions">
                <Link className="btn" href="/contact"><ButtonContent>Request a Quote</ButtonContent></Link>
                <Link className="btn ghost" href="/services"><ButtonContent>View services</ButtonContent></Link>
              </div>
            </div>
          </div>
          <HeroStage areas={stageAreas} />
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

      <div className="ticker" aria-hidden="true">
        <div>
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="block requirements">
        <div className="wrap">
          <div className="tiles-head">
            <h2>Where would you like to start?</h2>
            <p className="kicker">Select your requirement</p>
          </div>
          <ol className="rows">
            {AREAS.map((a, i) => (
              <li key={a.slug} className="reveal" style={{ "--d": `${i * 0.06}s` }}>
                <Link href={`/services/${a.slug}`}>
                  <span className="n">{a.order}</span>
                  <span className="title">{a.tileLabel}</span>
                  <span className="desc">{a.tileSay}</span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block tight-top" aria-labelledby="areas-title">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Services</p>
            <Headline as="h2" id="areas-title" text="Four service areas, one point of accountability" accent="one point of accountability" motion="scroll-words" />
            <p>
              Each area covers the situations in which clients engage us, the
              services included and how engagements are structured.
            </p>
          </div>
        </div>
        <div style={{ paddingInline: "var(--inset)" }}>
          <ServiceCards />
        </div>
      </section>

      <section className="block tight-top" aria-labelledby="who-title">
        <div className="wrap split">
          <div className="head">
            <p className="kicker">Who we work with</p>
            <Headline as="h2" id="who-title" text="Product and service brands, across markets" accent="across markets" motion="scroll-words" />
            <p>
              We work with product-based and service-based businesses, provided
              the business is ethical and legal, from the UK and Europe to the
              Gulf, the United States and Pakistan.
            </p>
            <Link className="lead-link" href="/industries">
              See the industries we serve <Arrow />
            </Link>
          </div>
          <div className="cards industry-list">
            {INDUSTRIES.slice(0, 6).map((ind, i) => (
              <div key={ind.t} className="card reveal" style={{ "--d": `${(i % 2) * 0.06}s` }}>
                <h3>{ind.t}</h3>
                <p>{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel dark" aria-labelledby="method-title">
        <div className="wrap">
          <div className="head center">
            <p className="kicker">How we work</p>
            <h2 id="method-title">Plan, build, grow</h2>
            <p>
              The same method applies to every engagement, whether you need a
              brand, a platform, a store or ongoing IT support.
            </p>
          </div>
          <div className="bento method">
            <div className="card reveal">
              <div className="viz" aria-hidden="true">
                <p className="lbl"><span>Written scope</span><span>01</span></p>
                {SCOPE.map((row) => <div className="viz-row" key={row}><i>&#10003;</i>{row}</div>)}
              </div>
              <div className="txt"><h3>{METHOD[0].t}</h3><p>{METHOD[0].d}</p></div>
            </div>
            <div className="card reveal" style={{ "--d": "0.07s" }}>
              <div className="viz" aria-hidden="true">
                <p className="lbl"><span>Agreed milestones</span><span>02</span></p>
                <div className="gantt">
                  {MILESTONES.map(([name, s, w], i) => <span key={name} style={{ "--s": s, "--w": w, "--i": i }}>{name}</span>)}
                </div>
              </div>
              <div className="txt"><h3>{METHOD[1].t}</h3><p>{METHOD[1].d}</p></div>
            </div>
            <div className="card reveal" style={{ "--d": "0.14s" }}>
              <div className="viz" aria-hidden="true">
                <p className="lbl"><span>Report and refine</span><span>03</span></p>
                <div className="bars">
                  {GROWTH.map((h, i) => <span key={i} style={{ "--h": `${h}%`, "--i": i }} />)}
                </div>
              </div>
              <div className="txt"><h3>{METHOD[2].t}</h3><p>{METHOD[2].d}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="why-title">
        <div style={{ paddingInline: "var(--inset)" }}>
          <div className="duo">
            <div className="card">
              <div className="head">
                <p className="kicker">Why one team</p>
                <h2 id="why-title">Separate suppliers pull in separate directions</h2>
                <p>
                  When strategy, build and marketing sit with different companies,
                  handovers slow delivery and accountability blurs. One team keeps
                  the plan, the product and the growth work aligned.
                </p>
              </div>
              <ul className="when">
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
            <div className="card dark merge reveal" aria-hidden="true">
              <div className="group">
                <p className="lbl">Separate suppliers</p>
                <div className="chips"><span>Agency</span><span>Developer</span><span>Freelancer</span></div>
              </div>
              <p className="join">Connected under</p>
              <div className="one">
                <p className="lbl">NextGrid IT</p>
                <strong>One team</strong>
                <p className="lbl">Plan / Build / Grow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="stats">
            <div className="reveal"><b>04</b><span>Service areas</span></div>
            <div className="reveal" style={{ "--d": "0.07s" }}><b>01</b><span>Point of accountability</span></div>
            <div className="reveal" style={{ "--d": "0.14s" }}><b>05</b><span>Markets served</span></div>
          </div>
          <p className="fine">
            Markets served: the United Kingdom, Europe, the Gulf region, the United States and Pakistan.
          </p>
        </div>
      </section>

      <section className="block tight-top" aria-labelledby="insights-title">
        <div className="wrap split">
          <div className="head">
            <p className="kicker">Insights</p>
            <h2 id="insights-title">Guidance on brand, technology and e-commerce</h2>
            <p>
              Practical articles across {INSIGHT_CATEGORIES.join(", ")}. Our
              first articles are in preparation.
            </p>
            <Link className="lead-link" href="/insights">
              Visit Insights <Arrow />
            </Link>
          </div>
          <div className="category-list">
            {INSIGHT_CATEGORIES.map((category, i) => <div className="category-row reveal" style={{ "--d": `${(i % 2) * 0.06}s` }} key={category}><span className="count">0{i + 1}</span><h3>{category}</h3></div>)}
          </div>
        </div>
      </section>

      <FaqSection items={HOME_FAQS} />

      <CtaBanner />
    </>
  );
}
