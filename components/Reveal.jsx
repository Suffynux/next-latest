"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    function setup() {
      cleanup();
      root.classList.remove("js");
      if (preference.matches || !("IntersectionObserver" in window)) return;
      const els = [...document.querySelectorAll(".reveal, .annotation")];
      const headings = [...document.querySelectorAll(".scroll-words")];
      const numerals = [...document.querySelectorAll(".ghost-number")];
      root.classList.add("js");
      const io = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      }), { threshold: 0.05 });
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("in");
        else io.observe(el);
      });
      let frame;
      const active = new Set();
      const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting ? active.add(entry.target) : active.delete(entry.target));
        schedule();
      }, { rootMargin: "100px" });
      [...headings, ...numerals].forEach(el => progressObserver.observe(el));
      function update() {
        frame = null;
        active.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (el.classList.contains("ghost-number")) {
            const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
            el.style.setProperty("--drift", `${(progress - 0.5) * 40}px`);
          } else {
            const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.35)));
            const words = el.querySelectorAll(".word");
            words.forEach((word, i) => word.style.opacity = Math.max(0.18, Math.min(1, progress * (words.length + 2) - i)));
            if (progress === 1) { active.delete(el); progressObserver.unobserve(el); }
          }
        });
      }
      function schedule() { if (!frame) frame = requestAnimationFrame(update); }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      cleanup = () => {
        io.disconnect(); progressObserver.disconnect(); cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule);
        document.querySelectorAll(".word").forEach(el => el.style.removeProperty("opacity"));
        numerals.forEach(el => el.style.removeProperty("--drift"));
      };
    }
    setup();
    preference.addEventListener("change", setup);
    return () => { cleanup(); root.classList.remove("js"); preference.removeEventListener("change", setup); };
  }, [pathname]);
  return null;
}
