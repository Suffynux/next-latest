import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Lina Ortega",
    role: "Retention Director · GlowWave Beauty",
    date: "June 12, 2024",
    rating: 5,
    quote:
      "Our Klaviyo revenue doubled within a quarter. The team mapped out automation plays we had never considered and owned copy, creative, and deliverability without missing a beat.",
    highlight: "Campaign revenue up 118% in 90 days",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Marcus Eldridge",
    role: "Founder · Inbox Living",
    date: "May 27, 2024",
    rating: 5,
    quote:
      "We finally have a predictable email calendar. Segmentation, testing, and reporting happen every week so we know exactly which flows are driving repeat orders.",
    highlight: "Repeat purchase rate climbed to 36%",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Sofia Kash",
    role: "Head of Growth · Halo Jewelry",
    date: "April 14, 2024",
    rating: 5,
    quote:
      "They rebuilt our lifecycle from scratch—welcome, browse, post-purchase, loyalty. Every send feels on-brand and the reporting is crystal clear.",
    highlight: "Average order value up 62%",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Daniela Mead",
    role: "CRM Lead · Mama Bird Nutrition",
    date: "March 03, 2024",
    rating: 5,
    quote:
      "Deliverability was tanking before NextGrid jumped in. We now monitor inbox placement weekly and our replenishment automations are crushing it.",
    highlight: "Inbox placement stabilized at 99%",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Tomas Lee",
    role: "CMO · Onyx Performance",
    date: "February 19, 2024",
    rating: 5,
    quote:
      "Launches are no longer guesswork. Their email + SMS playbooks keep our community hyped and buying every time we drop new gear.",
    highlight: "3.2x ROI on product drops",
    avatar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=160&q=80",
  },
];

const EmailMarketingTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: 3 }, (_, offset) => {
      const index = (startIndex + offset) % testimonials.length;
      return { ...testimonials[index], slot: offset };
    });
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ position: "relative", zIndex: 10, background: "#edf4ff", color: "#edf4ff", padding: "40px" }}>
    <section className="relative overflow-hidden  py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#1d5aa6]">
              Verified Reviews
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0b1622]">
              What email leaders say about NextGrid
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-[#183258]/15 text-[#0b1622] hover:bg-[#183258]/10 transition-colors"
              aria-label="Show previous reviews"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-[#183258]/15 text-[#0b1622] hover:bg-[#183258]/10 transition-colors"
              aria-label="Show next reviews"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={handlePrev}
            className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-[#183258]/20 bg-white/80 text-[#0b1622] shadow-md backdrop-blur transition-colors"
            aria-label="Show previous review"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-[#183258]/20 bg-white/80 text-[#0b1622] shadow-md backdrop-blur transition-colors"
            aria-label="Show next review"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial) => {
              const visibilityClass =
                testimonial.slot === 0
                  ? ""
                  : testimonial.slot === 1
                  ? "hidden sm:block"
                  : "hidden lg:block";

              return (
                <article
                  key={`${testimonial.name}-${testimonial.date}`}
                  className={`relative bg-white/90 backdrop-blur rounded-3xl shadow-lg shadow-[#0b1622]/5 border border-white/60 px-6 py-7 sm:px-7 sm:py-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183258]/10 ${visibilityClass}`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#d6e3ff]"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#0b1622]">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#183258]/80">{testimonial.role}</p>
                      <p className="text-[11px] text-[#7790b6]">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${index < testimonial.rating ? "fill-[#f2b91f] text-[#f2b91f]" : "text-[#d0d7e6]"}`}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#183258]/90 leading-relaxed">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d5aa6]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#1d5aa6]" aria-hidden="true" />
                    {testimonial.highlight}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[13px] sm:text-sm text-[#183258]/70">
          <p>
            TrustPulse rating score: <span className="font-semibold text-[#0b1622]">4.9 out of 5</span>, based on
            <span className="font-semibold text-[#1d5aa6]"> 112 verified ecommerce reviews</span>.
          </p>
          <div className="flex items-center gap-2 text-[#0b1622]">
            <span className="font-semibold">100%</span>
            <span>of clients recommend our email marketing team.</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default EmailMarketingTestimonials;
