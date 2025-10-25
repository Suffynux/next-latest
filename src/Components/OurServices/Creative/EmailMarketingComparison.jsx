import React from "react";
import { Check, X } from "lucide-react";

const comparisonItems = [
  {
    feature: "Channel-exclusive email strategists",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Klaviyo & ESP migration support",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Lifecycle automations built in 30 days",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Transparent testing roadmap",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Deliverability monitoring & remediation",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Integrated SMS + email playbooks",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Weekly performance analytics",
    traditional: false,
    nextgrid: true,
  },
  {
    feature: "Revenue accountability on every campaign",
    traditional: false,
    nextgrid: true,
  },
];

const EmailMarketingComparison = () => {
  return (
    <div style={{ position: "relative", zIndex: 10, background: "#fff", color: "#000", padding: "40px" }}>
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-[#f5f8ff] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs sm:text-sm tracking-[0.35em] uppercase text-[#1d5aa6]">Email-first partnership</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0b1622] leading-tight">
                Not your average email marketing agency
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#183258]/80 leading-relaxed">
              We hire strategists who live and breathe email. From segmentation and copywriting to deliverability and attribution, our team plugs into your brand like an in-house revenue squad.
            </p>
            <p className="text-sm sm:text-base text-[#183258]/80 leading-relaxed">
              You get the same specialists who build high-performing flows for our top ecommerce partners—no hand-offs, no fluff retainers, just proven channel growth.
            </p>
            <button
              onClick={() => {
                const phoneNumber = "+923097972767";
                const message = "Hi! I want to learn how your email team can support our brand.";
                const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#1d5aa6] via-[#183258] to-[#0b1622] shadow-lg shadow-[#183258]/20 hover:shadow-xl hover:shadow-[#183258]/25 transition-all duration-300"
            >
              Get your free consultation
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-[#dce3f5] overflow-hidden">
            <div className="grid grid-cols-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#0b1622]/60">
              <div className="px-4 sm:px-6 py-4 text-left">Capability</div>
              <div className="px-4 sm:px-6 py-4 text-center">Traditional agencies</div>
              <div className="px-4 sm:px-6 py-4 text-center text-[#1d5aa6]">NextGrid email team</div>
            </div>
            <div className="divide-y divide-[#eef2fb]">
              {comparisonItems.map((item) => (
                <div
                  key={item.feature}
                  className="grid grid-cols-3 items-center gap-3 px-2 sm:px-6 py-4 sm:py-5 bg-white hover:bg-[#f7f9ff] transition-colors"
                >
                  <div className="text-sm sm:text-base md:text-[13px] font-medium text-[#0b1622]">
                    {item.feature}
                  </div>
                  <div className="flex justify-center">
                    {item.traditional ? (
                      <Check className="h-5 w-5 text-[#6a7b9a]" aria-hidden="true" />
                    ) : (
                      <X className="h-5 w-5 text-[#c5cddd]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.nextgrid ? (
                      <Check className="h-5 w-5 text-[#1d5aa6]" aria-hidden="true" />
                    ) : (
                      <X className="h-5 w-5 text-[#c5cddd]" aria-hidden="true" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default EmailMarketingComparison;
