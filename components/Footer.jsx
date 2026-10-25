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
    <footer className="site coal">
      <div className="wrap">
        <div className="foot-grid">
          <div className="footer-intro">
            <p className="kicker">Keep exploring</p>
            <p>Brand and marketing, websites and software, e-commerce and IT
              managed services, delivered by one team.</p>
          </div>
          <div className="footer-nav">
            <h2 className="footer-label">Company</h2>
            <ul>{[["Services", "/services"], ["Industries", "/industries"], ["Insights", "/insights"], ["About", "/about"], ["Contact", "/contact"]].map(([name, href]) => <li key={href}><Link href={href}>{name}<Arrow /></Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-label">Services</h2>
            <ul>{AREAS.map(a => <li key={a.slug}><Link href={`/services/${a.slug}`}>{a.name}<Arrow /></Link></li>)}</ul>
          </div>
          <div>
            <h2 className="footer-label">Legal</h2>
            <ul>{["Privacy", "Cookies", "Terms"].map(name => <li key={name}><Link href={`/${name.toLowerCase()}`}>{name}<Arrow /></Link></li>)}</ul>
            <Link className="footer-quote" href="/contact">Request a Quote<Arrow /></Link>
          </div>
        </div>
        <div className="footer-contact">
          <h2 className="footer-label">Contact</h2>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={WHATSAPP_URL} rel="noopener">WhatsApp<Arrow /></a>
          <div className="social-links">{socials.map(([name, url]) => <a key={name} href={url} rel="noopener">{name === "LinkedIn" && <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 9v11M5 4v.2M10 20V9m0 5c0-7 9-7 9 0v6" /></svg>}{name}<Arrow /></a>)}</div>
        </div>
        <div className="legal">
          <span>
            &copy; {year} {COMPANY.legalName} is a company registered in{" "}
            {COMPANY.registeredIn}, company number {COMPANY.companyNumber}.
            {/* TODO {{REGISTERED_OFFICE_ADDRESS}}: append "Registered office: ..." when confirmed. */}
            {COMPANY.registeredOffice
              ? ` Registered office: ${COMPANY.registeredOffice}.`
              : ""}
          </span>
          <Link className="plate" href="/" aria-label="NextGrid IT home"><Image src="/logo.png" alt="NextGrid IT" width={480} height={152} sizes="150px" /></Link>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
