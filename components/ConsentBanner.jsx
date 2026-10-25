"use client";

import { ButtonContent } from "./Editorial";


import { useEffect, useState } from "react";

// Cookie consent. No analytics or ad pixels load before an explicit accept.
// Rejecting is as easy as accepting. The stored value gates any future
// analytics scripts (GA4 Consent Mode, Meta Pixel, TikTok Pixel).
const KEY = "nextgrid-consent";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // Storage unavailable: leave the banner hidden rather than nag on every view.
    }
  }, []);

  function choose(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // Ignore storage failures.
    }
    setShow(false);
  }

  if (!show) return null;
  return (
    <div className="consent" role="dialog" aria-label="Cookie preferences">
      <p>
        We use cookies only to understand how the site is used. Nothing loads
        until you choose. See the <a href="/cookies">cookie policy</a>.
      </p>
      <div className="actions">
        <button className="btn" onClick={() => choose("accepted")}><ButtonContent>Accept</ButtonContent></button>
        <button className="btn ghost" onClick={() => choose("rejected")}><ButtonContent>Reject</ButtonContent></button>
      </div>
    </div>
  );
}
