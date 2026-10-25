import { COMPANY } from "../../../lib/site";

// Receives RFQ and RFP submissions from the contact form.
// Sends an email through Resend when RESEND_API_KEY is configured.
// Without a configured provider it returns 503 so the form can show
// the email and WhatsApp fallback instead of a false success.

const MAX = 4000;

function clean(value, max = 300) {
  return String(value ?? "").slice(0, max).trim();
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (clean(body.website_url)) {
    return Response.json({ ok: true });
  }

  const kind = body.kind === "rfp" ? "RFP" : "RFQ";
  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email);
  const details = clean(body.details, MAX);
  const country = clean(body.country);
  const phone = clean(body.phone, 40);
  const timeline = clean(body.timeline, 60);
  const deadline = clean(body.deadline, 20);
  const areas = Array.isArray(body.areas)
    ? body.areas.map((a) => clean(a, 60)).filter(Boolean)
    : [];
  const consent = Boolean(body.consent);

  if (!name || !company || !email || !consent) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  if (kind === "RFQ" && (!details || !country || areas.length === 0)) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  if (!apiKey || !from) {
    // TODO: set RESEND_API_KEY and QUOTE_FROM_EMAIL (a verified sender)
    // in Vercel environment variables to activate delivery.
    console.warn("Quote received but no email provider is configured.");
    return Response.json({ error: "Not configured" }, { status: 503 });
  }

  const lines = [
    `Type: ${kind}`,
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    country && `Country: ${country}`,
    areas.length && `Service areas: ${areas.join(", ")}`,
    timeline && `Timeline: ${timeline}`,
    deadline && `RFP deadline: ${deadline}`,
    body.nda && "NDA required before sharing full documents",
    "",
    details && `Details:\n${details}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [COMPANY.email],
      reply_to: email,
      subject: `${kind} from ${company} (${country || "country not given"})`,
      text: lines,
    }),
  });

  if (!res.ok) {
    console.error("Email send failed", res.status, await res.text());
    return Response.json({ error: "Send failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
