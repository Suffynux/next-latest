"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TAB_TIME = 5200;

// Hero service switcher: four tabs that cycle on their own, each revealing
// a requirement card. Every card is server-rendered; only visibility changes.
export default function HeroStage({ areas }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const sync = () => setAuto(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!auto || held) return;
    const timer = setTimeout(() => setActive((active + 1) % areas.length), TAB_TIME);
    return () => clearTimeout(timer);
  }, [auto, held, active, areas.length]);

  const hold = index => { setActive(index); setHeld(true); };

  return (
    <>
      <div className="stage" aria-hidden="true">
        {areas.map((a, i) => (
          <div key={a.slug} className={`stage-card${i === active ? " on" : ""}`}>
            <p className="lbl"><span>Requirement</span><span>{a.order} / 04</span></p>
            <p className="say">{a.say}</p>
            <ol className="steps">
              {a.items.map((item, n) => (
                <li key={item}><span className="dot">{n + 1}</span>{item}<span className="tag">Scope</span></li>
              ))}
              <li className="go"><span className="dot">&rarr;</span>{a.label}<span className="tag">One team</span></li>
            </ol>
          </div>
        ))}
      </div>
      <ol
        className={`hero-tabs${auto && !held ? " auto" : ""}`}
        style={{ "--tab-time": `${TAB_TIME}ms` }}
        onMouseLeave={() => setHeld(false)}
        onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false); }}
      >
        {areas.map((a, i) => (
          <li key={a.slug} className={i === active ? "on" : undefined}>
            <Link href={`/services/${a.slug}`} onMouseEnter={() => hold(i)} onFocus={() => hold(i)}>
              <span className="thumb" aria-hidden="true">{a.order}</span>
              <span className="name">{a.label}</span>
              <span className="bar" aria-hidden="true"><i /></span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
