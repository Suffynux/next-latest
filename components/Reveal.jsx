"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = value => Math.max(0, Math.min(1, value));

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    let cleanup = () => {};

    function setup() {
      cleanup();
      root.classList.remove("js");
      if (preference.matches || !("IntersectionObserver" in window)) return;

      let disposed = false;
      let frame = null;
      let lenis;
      let menuObserver;
      const extra = [...document.querySelectorAll(".head > *, .tiles-head > *, .prose > *, .desk aside > *, .footer-nav li, .footer-intro, .footer-contact, .empty")]
        .filter(el => !el.matches(".reveal, .scroll-words"));
      extra.forEach(el => {
        el.classList.add("motion-enter");
        const index = [...el.parentElement.children].indexOf(el);
        el.style.setProperty("--motion-delay", `${Math.min(index, 4) * 60}ms`);
      });
      const els = [...document.querySelectorAll(".reveal, .annotation, .motion-enter")];
      const headings = [...document.querySelectorAll(".scroll-words")];
      const numerals = [...document.querySelectorAll(".ghost-number")];
      const timelines = [...document.querySelectorAll(".timeline")];
      const art = [...document.querySelectorAll(".service-frame")];
      const hero = document.querySelector(".hero");
      const words = new Map(headings.map(el => [el, [...el.querySelectorAll(".word")]]));
      const active = new Set();
      root.classList.add("js");

      const io = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }), { rootMargin: "0px 0px -24px 0px", threshold: 0.05 });
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("in");
        else io.observe(el);
      });

      const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) active.add(entry.target);
          else {
            active.delete(entry.target);
            // Never leave a skipped or previously visited heading dimmed.
            words.get(entry.target)?.forEach(word => word.style.removeProperty("opacity"));
          }
        });
        schedule();
      }, { rootMargin: "80px" });
      [...headings, ...numerals, ...timelines, ...art].forEach(el => progressObserver.observe(el));

      function update() {
        frame = null;
        const height = window.innerHeight;
        const distance = root.scrollHeight - height;
        root.style.setProperty("--scroll-progress", distance > 0 ? clamp(window.scrollY / distance) : 0);
        const measurements = [...active].map(el => [el, el.getBoundingClientRect()]);
        const heroRect = hero?.getBoundingClientRect();
        if (heroRect) hero.style.setProperty("--hero-drift", `${-clamp(-heroRect.top / heroRect.height) * 32}px`);
        measurements.forEach(([el, rect]) => {
          const progress = clamp((height - rect.top) / (height + rect.height));
          if (el.classList.contains("ghost-number")) {
            el.style.setProperty("--drift", `${(progress - 0.5) * 40}px`);
          } else if (el.classList.contains("service-frame")) {
            el.style.setProperty("--art-drift", `${(progress - 0.5) * 20}px`);
          } else if (el.classList.contains("timeline")) {
            el.style.setProperty("--line-progress", clamp((height * 0.75 - rect.top) / rect.height));
          } else {
            const amount = clamp((height - rect.top) / (height * 0.35));
            const list = words.get(el);
            list.forEach((word, i) => word.style.opacity = Math.max(0.18, Math.min(1, amount * (list.length + 2) - i)));
            if (amount === 1) { active.delete(el); progressObserver.unobserve(el); }
          }
        });
      }
      function schedule() { if (frame === null) frame = requestAnimationFrame(update); }
      function revealFocus(event) {
        const el = event.target.closest(".reveal, .motion-enter");
        if (el) { el.classList.add("in"); io.unobserve(el); }
        lenis?.scrollTo(window.scrollY, { immediate: true });
      }
      function interruptKeyboard(event) {
        if (["Tab", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
          lenis?.scrollTo(window.scrollY, { immediate: true });
        }
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      document.addEventListener("focusin", revealFocus);
      document.addEventListener("keydown", interruptKeyboard);
      // Disclosure and form changes can alter the reading progress denominator.
      const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
      resizeObserver?.observe(document.body);
      schedule();

      if (desktop.matches) {
        import("lenis").then(({ default: Lenis }) => {
          if (disposed) return;
          lenis = new Lenis({
            autoRaf: true,
            lerp: 0.14,
            smoothWheel: true,
            syncTouch: false,
            stopInertiaOnNavigate: true,
            prevent: node => node.matches("textarea, select, [data-lenis-prevent]"),
          });
          const syncMenu = () => document.body.style.overflow === "hidden" ? lenis.stop() : lenis.start();
          menuObserver = new MutationObserver(syncMenu);
          menuObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });
          syncMenu();
        }).catch(() => {
          // Native scrolling remains available if the optional chunk cannot load.
        });
      }

      cleanup = () => {
        disposed = true;
        lenis?.destroy();
        menuObserver?.disconnect();
        io.disconnect();
        progressObserver.disconnect();
        resizeObserver?.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("focusin", revealFocus);
        document.removeEventListener("keydown", interruptKeyboard);
        words.forEach(list => list.forEach(word => word.style.removeProperty("opacity")));
        numerals.forEach(el => el.style.removeProperty("--drift"));
        art.forEach(el => el.style.removeProperty("--art-drift"));
        timelines.forEach(el => el.style.removeProperty("--line-progress"));
        hero?.style.removeProperty("--hero-drift");
        root.style.removeProperty("--scroll-progress");
        extra.forEach(el => { el.classList.remove("motion-enter"); el.style.removeProperty("--motion-delay"); });
      };
    }

    setup();
    preference.addEventListener("change", setup);
    desktop.addEventListener("change", setup);
    return () => {
      cleanup();
      root.classList.remove("js");
      preference.removeEventListener("change", setup);
      desktop.removeEventListener("change", setup);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
