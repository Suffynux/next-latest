import { COMPANY } from "../../lib/site";
import { Breadcrumbs } from "../../components/Sections";

export const metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the NextGrid IT website.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Terms", href: "/terms" },
            ]}
          />
          <p className="kicker">Legal</p>
          <h1>Terms of use</h1>
          <p className="lede">
            The terms that apply when you use this website. Last updated: 25
            October 2026.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap prose">
          <h2>About these terms</h2>
          <p>
            This website is operated by {COMPANY.legalName}, registered in{" "}
            {COMPANY.registeredIn}, company number {COMPANY.companyNumber}. By
            using the site you accept these terms. They cover use of the
            website only; services we deliver to clients are governed by the
            written scope and agreement issued for each engagement.
          </p>

          <h2>Use of the site</h2>
          <ul>
            <li>
              You may browse the site and submit enquiries for legitimate
              business purposes.
            </li>
            <li>
              You must not attempt to disrupt the site, probe its security, or
              submit false or misleading enquiries.
            </li>
          </ul>

          <h2>Content and quotations</h2>
          <p>
            Content on this site is provided for general information and does
            not form an offer. A quotation becomes binding only when set out in
            a written proposal and accepted by both parties. We may update site
            content at any time.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The NextGrid IT name, logo and site content belong to{" "}
            {COMPANY.legalName} or its licensors. You may not reproduce them
            without permission, beyond normal browsing and sharing of links.
          </p>

          <h2>Liability</h2>
          <p>
            We take care to keep the site accurate and available, but provide
            it without warranties. To the extent permitted by law, we are not
            liable for loss arising from reliance on site content or from
            interruptions to the site. Nothing in these terms limits liability
            that cannot be limited by law.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the law of England and Wales, and the
            courts of England and Wales have exclusive jurisdiction.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
