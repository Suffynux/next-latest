import { Arrow, GhostNumber, Headline } from "../../components/Editorial";
import Link from "next/link";
import { AREAS } from "../../lib/site";
import { Breadcrumbs, CtaBanner, ProcessTimeline } from "../../components/Sections";

export const metadata = {
  title: "Brand, Technology & E-commerce Services",
  description:
    "Explore NextGrid IT services across brand and marketing, technology and software, e-commerce, and IT managed services, delivered by one connected team.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
          />
          <p className="kicker">Services</p>
          <Headline text="What do you need?" accent="you need?" />
          <p className="lede">
            Four service areas, one point of accountability. Engage one area on
            its own, or combine them as a single programme with one plan and one
            team.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
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
                <span className="to"><span>View {a.navLabel}</span><Arrow /></span>
              </Link>
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
            <p>
              The same four stages apply to every engagement, whether you need a
              brand, a platform, a store or ongoing IT support.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
