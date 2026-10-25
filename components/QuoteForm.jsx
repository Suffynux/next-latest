"use client";

import { ButtonContent } from "./Editorial";


import { useEffect, useState } from "react";
import { AREAS, COMPANY } from "../lib/site";

const COUNTRIES = [
  "United Kingdom",
  "Ireland",
  "Germany",
  "Netherlands",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "United States",
  "Pakistan",
  "Other",
];

const TIMELINES = ["As soon as possible", "1 to 3 months", "3+ months", "Not sure"];

function Status({ state }) {
  if (!state.msg) return null;
  return (
    <div className="done full" role="status">
      {state.msg}
      {state.fallback ? (
        <>
          {" "}
          You can also email{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> directly.
        </>
      ) : null}
    </div>
  );
}

function FormInner() {
  const [tab, setTab] = useState("rfq");
  const [rfqState, setRfqState] = useState({ msg: "", fallback: false });
  const [rfpState, setRfpState] = useState({ msg: "", fallback: false });
  const [sending, setSending] = useState(false);
  const [preselect, setPreselect] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTab(params.get("tab") === "rfp" ? "rfp" : "rfq");
    setPreselect(params.get("service"));
    const selected = AREAS.find(area => area.slug === params.get("service"));
    const box = [...document.querySelectorAll('#form-rfq input[name="areas"]')].find(input => input.value === selected?.name);
    if (box) {
      box.checked = true;
      box.defaultChecked = true;
    }
  }, []);
  function onTabKey(event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? "rfq" : event.key === "End" ? "rfp" : tab === "rfq" ? "rfp" : "rfq";
    setTab(next);
    document.getElementById(`tab-${next}`).focus();
  }

  async function submit(e, kind, setState) {
    e.preventDefault();
    const form = e.currentTarget;
    let firstBad = null;
    form.querySelectorAll("[required]").forEach((el) => {
      let bad =
        el.type === "checkbox" ? !el.checked : !String(el.value).trim();
      if (el.type === "email" && !bad)
        bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
      el.classList.toggle("invalid", bad);
      if (bad && !firstBad) firstBad = el;
    });
    if (kind === "rfq") {
      const boxes = form.querySelectorAll('input[name="areas"]');
      const anyChecked = Array.from(boxes).some((b) => b.checked);
      boxes.forEach((b) =>
        b.closest("label").classList.toggle("invalid", !anyChecked)
      );
      if (!anyChecked && !firstBad) firstBad = boxes[0];
    }
    if (firstBad) {
      setState({
        msg: "Please complete the highlighted fields, then submit again.",
        fallback: false,
      });
      firstBad.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    data.areas = Array.from(
      form.querySelectorAll('input[name="areas"]:checked')
    ).map((b) => b.value);
    data.kind = kind;
    setSending(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setState({
          msg: "Thank you. Your request has been received. We will reply by email.",
          fallback: false,
        });
      } else {
        setState({
          msg: "Your request could not be sent right now.",
          fallback: true,
        });
      }
    } catch {
      setState({
        msg: "Your request could not be sent right now.",
        fallback: true,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="form-card">
      <div className="tabs" role="tablist" aria-label="Enquiry type" onKeyDown={onTabKey}>
        <button
          type="button"
          role="tab"
          className="tab"
          aria-selected={tab === "rfq"}
          id="tab-rfq"
          tabIndex={tab === "rfq" ? 0 : -1}
          aria-controls="form-rfq"
          onClick={() => setTab("rfq")}
        >
          Request a Quote
        </button>
        <button
          type="button"
          role="tab"
          className="tab"
          aria-selected={tab === "rfp"}
          id="tab-rfp"
          tabIndex={tab === "rfp" ? 0 : -1}
          aria-controls="form-rfp"
          onClick={() => setTab("rfp")}
        >
          Submit an RFP
        </button>
      </div>

      <form
        id="form-rfq"
        aria-labelledby="tab-rfq"
        className={`qform${tab === "rfq" ? "" : " is-hidden"}`}
        role="tabpanel"
        noValidate
        onSubmit={(e) => submit(e, "rfq", setRfqState)}
      >
        <div className="field">
          <label htmlFor="q-name">Full name</label>
          <input type="text" id="q-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="q-company">Company or brand</label>
          <input
            type="text"
            id="q-company"
            name="company"
            required
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="q-email">Email</label>
          <input type="email" id="q-email" name="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="q-phone">
            Phone or WhatsApp <span className="opt">(optional)</span>
          </label>
          <input type="tel" id="q-phone" name="phone" autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="q-country">Country</label>
          <select id="q-country" name="country" required defaultValue="">
            <option value="" disabled>
              Select your country
            </option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <fieldset className="full">
          <legend>Service areas required</legend>
          <div className="checks">
            {AREAS.map((a) => (
              <label key={a.slug}>
                <input
                  type="checkbox"
                  name="areas"
                  value={a.name}
                  defaultChecked={preselect === a.slug}
                />{" "}
                {a.name}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="field full">
          <label htmlFor="q-details">Project details</label>
          <textarea
            id="q-details"
            name="details"
            required
            placeholder="For example: we sell skincare online and want to increase repeat purchases."
          />
        </div>
        <div className="field full">
          <label htmlFor="q-time">
            Timeline <span className="opt">(optional)</span>
          </label>
          <select id="q-time" name="timeline" defaultValue="">
            <option value="">Select a timeline</option>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="full checks one">
          <label>
            <input type="checkbox" name="consent" required /> I agree to the
            processing of my details as described in the&nbsp;
            <a href="/privacy">privacy notice</a>
          </label>
        </div>
        <div className="hp" aria-hidden="true">
          <label>
            Leave this field empty
            <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="full">
          <button className="btn" type="submit" disabled={sending}><ButtonContent>{sending ? "Sending..." : "Send request"}</ButtonContent></button>
        </div>
        <Status state={rfqState} />
      </form>

      <form
        id="form-rfp"
        aria-labelledby="tab-rfp"
        className={`qform${tab === "rfp" ? "" : " is-hidden"}`}
        role="tabpanel"
        noValidate
        onSubmit={(e) => submit(e, "rfp", setRfpState)}
      >
        <div className="field">
          <label htmlFor="r-org">Organisation</label>
          <input type="text" id="r-org" name="company" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="r-contact">Contact person</label>
          <input type="text" id="r-contact" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="r-email">Email</label>
          <input type="email" id="r-email" name="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="r-phone">
            Phone <span className="opt">(optional)</span>
          </label>
          <input type="tel" id="r-phone" name="phone" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="r-deadline">Submission deadline</label>
          <input type="date" id="r-deadline" name="deadline" required />
        </div>
        <div className="field">
          <label htmlFor="r-link">
            Link to RFP document <span className="opt">(optional)</span>
          </label>
          <input
            type="text"
            id="r-link"
            name="details"
            placeholder="A shared drive or document link"
          />
        </div>
        <p className="privacy full">
          You can also email your RFP document to{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
        <div className="full checks one">
          <label>
            <input type="checkbox" name="nda" /> A non-disclosure agreement is
            required before full documents are shared
          </label>
        </div>
        <div className="full checks one">
          <label>
            <input type="checkbox" name="consent" required /> I agree to the
            processing of my details as described in the&nbsp;
            <a href="/privacy">privacy notice</a>
          </label>
        </div>
        <div className="hp" aria-hidden="true">
          <label>
            Leave this field empty
            <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="full">
          <button className="btn" type="submit" disabled={sending}><ButtonContent>{sending ? "Sending..." : "Submit RFP"}</ButtonContent></button>
        </div>
        <Status state={rfpState} />
      </form>
    </div>
  );
}

export default function QuoteForm() {
  return (
    <FormInner />
  );
}
