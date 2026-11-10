import { Arrow } from "./Editorial";
import Link from "next/link";
import Image from "next/image";
import { AREAS, COMPANY, WHATSAPP_URL } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    ["LinkedIn", COMPANY.social.linkedin],
    ["Instagram", COMPANY.social.instagram],
    ["Facebook", COMPANY.social.facebook],
    ["TikTok", COMPANY.social.tiktok],
  ].filter(([, url]) => url);

  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="footer-intro">
            <p className="kicker">Keep exploring</p>
            <p className="say">Brand and marketing, websites and software, e-commerce and IT
              managed services, delivered by one team.</p>
            <Link className="foot-cta dark" href="/contact">
              <span className="lbl">{COMPANY.brand}</span>
              <strong>{COMPANY.tagline}.</strong>
              <span className="row">Request a Quote<Arrow /></span>
            </Link>
          </div>
          <div className="foot-cols">
            <div className="footer-nav">
              <h2 className="footer-label">Company</h2>
              <ul>{[["Services", "/services"], ["Industries", "/industries"], ["Insights", "/insights"], ["About", "/about"], ["Contact", "/contact"]].map(([name, href]) => <li key={href}><Link href={href}>{name}</Link></li>)}</ul>
            </div>
            <div className="footer-nav">
              <h2 className="footer-label">Services</h2>
              <ul>{AREAS.map(a => <li key={a.slug}><Link href={`/services/${a.slug}`}>{a.navLabel}</Link></li>)}</ul>
            </div>
            <div className="footer-nav">
              <h2 className="footer-label">Legal</h2>
              <ul>{["Privacy", "Cookies", "Terms"].map(name => <li key={name}><Link href={`/${name.toLowerCase()}`}>{name}</Link></li>)}</ul>
            </div>
            <div className="footer-nav footer-contact">
              <h2 className="footer-label">Contact</h2>
              <ul>
                <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
                <li><a href={WHATSAPP_URL} rel="noopener">WhatsApp</a></li>
                {socials.map(([name, url]) => <li key={name}><a href={url} rel="noopener">{name}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
        <p className="mega" aria-hidden="true">Plan. Build. <span>Grow.</span></p>
        <div className="legal">
          <span>
            &copy; {year} {COMPANY.legalName} is a company registered in{" "}
            {COMPANY.registeredIn}, company number {COMPANY.companyNumber}.
            {/* TODO {{REGISTERED_OFFICE_ADDRESS}}: append "Registered office: ..." when confirmed. */}
            {COMPANY.registeredOffice
              ? ` Registered office: ${COMPANY.registeredOffice}.`
              : ""}
          </span>
          <Link className="plate" href="/" aria-label="NextGrid IT home"><Image src="/logo.png" alt="NextGrid IT" width={480} height={152} sizes="120px" /></Link>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
