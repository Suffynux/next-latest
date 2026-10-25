import { Headline } from "../../components/Editorial";
import { COMPANY, WHATSAPP_URL } from "../../lib/site";
import QuoteForm from "../../components/QuoteForm";
import { Breadcrumbs } from "../../components/Sections";

export const metadata = {
  title: "Contact & Request a Quote",
  description:
    "Tell us about your project and request a quote from NextGrid IT by form, email or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />
          <p className="kicker">Contact</p>
          <Headline text="Request a quote or submit an RFP" accent="quote" annotate />
          <p className="lede">
            Every engagement is scoped to your requirements. We prepare a
            quotation once we understand your objectives.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap desk">
          <aside>
            <h2>Tell us about your project</h2>
            <p>
              Use the quote form for most enquiries. If your organisation is
              running a formal tender, submit your RFP instead.
            </p>
            <ul>
              <li>Select every service area that applies</li>
              <li>Include your website or store address if you have one</li>
              <li>Describe the outcome you want, not just the deliverable</li>
            </ul>
            <p className="lbl" style={{ marginTop: 20 }}>
              Other ways to reach us
            </p>
            <div className="contact-ways">
              <a href={WHATSAPP_URL} rel="noopener">
                <span className="k">WhatsApp</span> Chat with us
              </a>
              <a href={`mailto:${COMPANY.email}`}>
                <span className="k">Email</span> {COMPANY.email}
              </a>
              {COMPANY.bookingUrl ? (
                <a href={COMPANY.bookingUrl} rel="noopener">
                  <span className="k">Calendar</span> Book a call
                </a>
              ) : null}
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
