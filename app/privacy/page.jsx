import { COMPANY } from "../../lib/site";
import { Breadcrumbs } from "../../components/Sections";

export const metadata = {
  title: "Privacy Notice",
  description:
    "How NextGrid IT Ltd collects, uses and protects personal data under UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Privacy", href: "/privacy" },
            ]}
          />
          <p className="kicker">Legal</p>
          <h1>Privacy notice</h1>
          <p className="lede">
            How we collect, use and protect personal data under UK GDPR and the
            Data Protection Act 2018. Last updated: 25 October 2026.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap prose">
          <h2>Who we are</h2>
          <p>
            {COMPANY.legalName} ("NextGrid IT", "we") is the controller of
            personal data collected through this website. We are registered in{" "}
            {COMPANY.registeredIn}, company number {COMPANY.companyNumber}.
            {/* TODO {{REGISTERED_OFFICE_ADDRESS}} and {{ICO_REGISTRATION_NUMBER}}:
                add the registered office address and ICO registration number here
                once confirmed. */}
          </p>
          <p>
            You can contact us about this notice or your data at{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <h2>What data we collect</h2>
          <ul>
            <li>
              <strong>Enquiry data:</strong> name, company, email address,
              phone or WhatsApp number, country, and the details you include in
              a quote request or RFP.
            </li>
            <li>
              <strong>Communication data:</strong> the content of emails and
              WhatsApp messages you send us.
            </li>
            <li>
              <strong>Usage data:</strong> only if you accept analytics
              cookies, anonymised information about how the site is used. No
              analytics load before consent.
            </li>
          </ul>

          <h2>Why we use it and our lawful bases</h2>
          <ul>
            <li>
              <strong>Responding to enquiries and preparing quotations:</strong>{" "}
              our legitimate interest in responding to a request you made, and
              steps taken at your request before entering a contract.
            </li>
            <li>
              <strong>Providing contracted services:</strong> performance of a
              contract.
            </li>
            <li>
              <strong>Site analytics:</strong> your consent, which you can
              withdraw at any time.
            </li>
            <li>
              <strong>Legal and accounting obligations:</strong> legal
              obligation.
            </li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            Enquiry data is kept for up to 24 months after our last contact, so
            we can respond if you return to a project. Data connected to a
            contract is kept for the period required by law. Data no longer
            needed is deleted.
          </p>

          <h2>Who receives it</h2>
          <p>
            We share personal data only with the service providers that run our
            website hosting, email and form delivery, and only so far as needed
            to operate this site and respond to you. We do not sell personal
            data.
          </p>

          <h2>International transfers</h2>
          <p>
            Our delivery team works remotely from Pakistan, and our hosting and
            email providers may process data outside the UK. Where personal
            data leaves the UK we rely on appropriate safeguards, including
            contractual protections, and limit access to what the work
            requires.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK GDPR you can ask us to access, correct, delete or restrict
            the personal data we hold about you, object to processing based on
            legitimate interest, ask for your data in a portable format, and
            withdraw consent at any time. Email{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> and we will
            respond within one month.
          </p>

          <h2>Complaints</h2>
          <p>
            You have the right to complain to the Information Commissioner's
            Office (ICO) at{" "}
            <a href="https://ico.org.uk" rel="noopener">
              ico.org.uk
            </a>
            . We would welcome the chance to address any concern first.
          </p>
        </div>
      </section>
    </>
  );
}
