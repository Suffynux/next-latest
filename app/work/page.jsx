import { Headline } from "../../components/Editorial";
import { Breadcrumbs, CtaBanner } from "../../components/Sections";

// Keep noindex until the first case study is published, then also add
// this page to the sitemap and the header navigation.
export const metadata = {
  title: "Our Work",
  description:
    "Case studies from NextGrid IT, published with client permission. Our first case studies are being prepared.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work" },
  robots: { index: false, follow: true },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
            ]}
          />
          <p className="kicker">Work</p>
          <Headline text="Our work" accent="work" />
          <p className="lede">
            We publish case studies only with client permission, and only with
            results we can stand behind.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="empty">
            <p>
              Our first case studies are being prepared and will be published
              with client permission.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start a project with us"
        text="Describe your requirement and we will respond with a written scope and quotation."
      />
    </>
  );
}
