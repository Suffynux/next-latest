import { Headline } from "../../components/Editorial";
import { INSIGHT_CATEGORIES } from "../../lib/site";
import { Breadcrumbs, CtaBanner } from "../../components/Sections";

export const metadata = {
  title: "Insights on Brand, Marketing & Technology",
  description:
    "Practical guidance on brand strategy, digital marketing, SEO, software and e-commerce from the NextGrid IT team.",
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/insights" },
            ]}
          />
          <p className="kicker">Insights</p>
          <Headline text="Insights on brand, marketing and technology" accent="brand, marketing" />
          <p className="lede">
            Practical guidance written by the team, structured to answer the
            questions buyers actually ask.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Categories</p>
            <h2>What we write about</h2>
          </div>
          <div className="category-list">
            {INSIGHT_CATEGORIES.map((c, i) => (
              <div key={c} className="category-row reveal" style={{ "--d": `${Math.min(i, 4) * 0.06}s` }}>
                <span className="count">0{i + 1}</span><h3>{c}</h3>
              </div>
            ))}
          </div>
          <div className="empty" style={{ marginTop: 32 }}>
            <p>Our first articles are in preparation and will be published here.</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
