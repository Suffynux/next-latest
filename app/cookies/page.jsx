import { Breadcrumbs } from "../../components/Sections";

export const metadata = {
  title: "Cookie Policy",
  description:
    "How the NextGrid IT website uses cookies and how to manage your cookie preferences.",
  alternates: { canonical: "/cookies" },
  openGraph: { url: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Cookies", href: "/cookies" },
            ]}
          />
          <p className="kicker">Legal</p>
          <h1>Cookie policy</h1>
          <p className="lede">
            What this website stores in your browser, and how to change your
            choice. Last updated: 25 October 2026.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap prose">
          <h2>How this site uses cookies</h2>
          <p>
            This website sets no analytics or advertising cookies unless you
            accept them in the cookie banner. Rejecting is as easy as
            accepting, and the site works fully either way.
          </p>

          <h2>What is stored</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nextgrid-consent</td>
                <td>Local storage, strictly necessary</td>
                <td>Remembers whether you accepted or rejected cookies.</td>
              </tr>
              <tr>
                <td>Analytics (only after consent)</td>
                <td>Analytics</td>
                <td>
                  Anonymised usage measurement, loaded only if you choose
                  Accept. None are active at present.
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Changing your choice</h2>
          <p>
            Clear this site's data in your browser settings and the banner will
            ask again on your next visit. You can also block cookies entirely
            in your browser.
          </p>
        </div>
      </section>
    </>
  );
}
