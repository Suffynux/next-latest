"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Arrow, ButtonContent } from "./Editorial";

// Work stays out of navigation until the first case study is published.
export default function Header({ areas }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => { setOpen(false); setSubOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (open) {
      document.body.style.overflow = "hidden";
      main.inert = true;
      footer.inert = true;
      headerRef.current.querySelector(".sub-btn").focus();
    }
    function onKey(event) {
      if (event.key === "Escape") {
        if (open) { setOpen(false); triggerRef.current.focus(); }
        else if (subOpen) headerRef.current.querySelector(".sub-btn").focus();
        setSubOpen(false);
      }
      if (event.key === "Tab" && open) {
        const elements = [...headerRef.current.querySelectorAll('a, button')].filter(el => el.getClientRects().length);
        const first = elements[0], last = elements.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    function onClick(event) {
      if (!subRef.current?.contains(event.target)) setSubOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1061px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onResize);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.body.style.overflow = "";
      main.inert = false;
      footer.inert = false;
      desktop.removeEventListener("change", onResize);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, subOpen]);
  const current = href => pathname === href ? "page" : undefined;
  return (
    <header ref={headerRef} className={`site coal${pathname === "/" ? " home-header" : ""}${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <noscript><style>{`header.site { position: static; } .bar { height: auto; flex-wrap: wrap; padding-block: 12px; } .menu-btn { display: none; } nav.main { display: block; position: static; height: auto; width: 100%; padding: 16px 0; } .sub[hidden] { display: block !important; position: static; width: auto; }`}</style></noscript>
      <div className="wrap bar">
        <Link className="plate" href="/" aria-label="NextGrid IT home">
          <Image src="/logo.png" alt="NextGrid IT, Where IT meets reliability" width={480} height={152} priority sizes="160px" />
        </Link>
        <button ref={triggerRef} type="button" className="menu-btn" aria-expanded={open} aria-controls="mainNav" onClick={() => { if (open) triggerRef.current.focus(); setOpen(!open); }}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav className={`main${open ? " open" : ""}`} id="mainNav" data-lenis-prevent aria-label="Main" onClick={event => {
          if (event.target.closest("a")) {
            setOpen(false);
            setSubOpen(false);
            if (open) triggerRef.current.focus();
          }
        }}>
          <ul>
            <li ref={subRef} className={`has-sub${subOpen ? " open" : ""}`} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setSubOpen(false); }}>
              <button type="button" className="sub-btn" aria-expanded={subOpen} aria-controls="service-menu" onClick={() => setSubOpen(!subOpen)}><span className="nav-number" aria-hidden="true">01</span>Services<span aria-hidden="true">{subOpen ? "−" : "+"}</span></button>
              <div className="sub" id="service-menu" hidden={!subOpen}>
                <Link href="/services" aria-current={current("/services")}><span className="count" aria-hidden="true">00</span>All services<Arrow /></Link>
                {areas.map(a => <Link key={a.slug} href={`/services/${a.slug}`} aria-current={current(`/services/${a.slug}`)}><span className="count" aria-hidden="true">{a.order}</span>{a.navLabel}<Arrow /></Link>)}
              </div>
            </li>
            {[["Industries", "/industries"], ["Insights", "/insights"], ["About", "/about"], ["Contact", "/contact"]].map(([name, href], i) => <li key={href}><Link href={href} aria-current={current(href)}><span className="nav-number" aria-hidden="true">0{i + 2}</span>{name}</Link></li>)}
            <li><Link className="btn cta" href="/contact"><ButtonContent>Request a Quote</ButtonContent></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
