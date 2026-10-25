import { Headline, PullLine } from "../../components/Editorial";
import { COMPANY, METHOD } from "../../lib/site";
import { Breadcrumbs, CtaBanner } from "../../components/Sections";

export const metadata = {
  title: { absolute: "About NextGrid IT | UK-Registered Digital Partner" },
  description:
    "NextGrid IT Ltd is a UK-registered company with a remote, distributed team delivering brand, marketing, technology and e-commerce services online.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
          />
          <p className="kicker">About</p>
          <Headline text="One team behind every part of your digital business" accent="your digital business" />
          <p className="lede">
            NextGrid IT exists so growing brands do not have to coordinate
            separate agencies, developers and freelancers. Strategy, build and
            growth sit with one accountable team.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap prose">
          <h2>The company</h2>
          <p>
            <PullLine text={`${COMPANY.legalName} is registered in ${COMPANY.registeredIn}, company number ${COMPANY.companyNumber}.`} /> Our delivery team is remote and
            distributed, based in Lahore, Pakistan, and all services are
            delivered online. Client site visits are arranged separately and
            charged separately.
          </p>
          <p>
            We work with clients in the United Kingdom, Europe, the Gulf region,
            the United States and Pakistan, across product-based and
            service-based brands, provided the business is ethical and legal.
          </p>

          <h2>How we work</h2>
          <p>
            <PullLine text="Every engagement follows the same method: plan, build, grow." /> The
            work begins with a written scope, is delivered against agreed
            milestones by a named lead, and is reported on clearly once live.
          </p>
          <ul>
            {METHOD.map((m) => (
              <li key={m.t}>
                <strong>{m.t}:</strong> {m.d}
              </li>
            ))}
          </ul>

          <h2>What we value</h2>
          <ul>
            <li>
              <strong>Accountability:</strong> one team, one written scope and
              one point of contact for the whole engagement.
            </li>
            <li>
              <strong>Clarity:</strong> plain commercial terms, defined
              deliverables and honest reporting, with no inflated claims.
            </li>
            <li>
              <strong>Continuity:</strong> what we build stays supported through
              IT managed services after launch.
            </li>
          </ul>

          <h2>Where we are in our own journey</h2>
          <p>
            <PullLine text="NextGrid IT is its own first project." /> We are building our company in
            the open, applying the same planning, engineering and growth
            discipline we offer clients. Our first case studies will be
            published with client permission.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
