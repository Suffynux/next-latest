import { ButtonContent } from "../components/Editorial";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "16px 0" }}>
          Page not found
        </h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: "36em", marginBottom: 28 }}>
          The page you are looking for could not be found. It may have moved
          during the site update.
        </p>
        <div className="actions">
          <Link className="btn" href="/"><ButtonContent>Go to the home page</ButtonContent></Link>
          <Link className="btn ghost" href="/services"><ButtonContent>View services</ButtonContent></Link>
        </div>
      </div>
    </section>
  );
}
