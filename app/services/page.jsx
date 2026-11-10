import { Headline } from "../../components/Editorial";
import { Breadcrumbs, CtaBanner, ProcessSection, ServiceCards } from "../../components/Sections";

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

      <section className="block" style={{ paddingInline: "var(--inset)", paddingTop: "var(--inset)" }}>
        <ServiceCards verb="View" />
      </section>

      <ProcessSection text="The same four stages apply to every engagement, whether you need a brand, a platform, a store or ongoing IT support." />

      <CtaBanner />
    </>
  );
}
