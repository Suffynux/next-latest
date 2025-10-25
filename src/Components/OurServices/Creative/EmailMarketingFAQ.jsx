import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { div } from "framer-motion/client";

const faqItems = [
  {
    question: "How do you build an email marketing roadmap?",
    answer:
      "We begin with a deliverability review, segment your audience by lifecycle stage, then design 90-day campaign and automation sprints focused on revenue goals.",
  },
  {
    question: "Can you migrate us to Klaviyo or another ESP?",
    answer:
      "Yes. We handle migrations end-to-end—list hygiene, template rebuilds, automation mapping, and performance tracking—without disrupting live campaigns.",
  },
  {
    question: "What assets do you create for each send?",
    answer:
      "Every email includes conversion-focused copy, mobile-first design blocks, QA testing, and subject-line variants so your team receives a polished, ready-to-send asset.",
  },
  {
    question: "How often will we review performance together?",
    answer:
      "Expect weekly dashboards covering revenue attribution, list growth, and test outcomes, plus a monthly strategy session to prioritise upcoming experiments.",
  },
  {
    question: "Do you manage SMS alongside email?",
    answer:
      "Absolutely. We orchestrate SMS touchpoints that complement your email calendar, ensuring consistent messaging and compliant opt-in management.",
  },
];

const EmailMarketingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ position: "relative", zIndex: 10, background: "#fff", color: "#000", padding: "40px" }}>
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#1d5aa6]">Email Program FAQ</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#0b1622]">
            Clarity before we hit send
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#183258]/75 max-w-2xl mx-auto">
            Straight answers on how our email marketing team plugs into your brand and drives consistent lifecycle revenue.
          </p>
        </header>

        <div className="divide-y divide-[#e5ebf7] rounded-2xl border border-[#eef2fb] bg-white shadow-sm">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6 text-left hover:bg-[#f7f9ff] transition-colors"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[#0b1622]">
                      {item.question}
                    </h3>
                    {isActive && (
                      <p className="mt-3 text-sm text-[#183258]/80 leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#1d5aa6] transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default EmailMarketingFAQ;
