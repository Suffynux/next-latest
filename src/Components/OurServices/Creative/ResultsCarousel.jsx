import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    brand: "GlowWave Beauty",
    industry: "Beauty & Skincare",
    resultHeadline: "71% lift in welcome flow revenue",
    resultDetail: "+38% click-through rate after copy and creative refresh",
    narrative:
      "Segmented welcome flows, product-education drip emails, and rigorous subject line testing converted first-time subscribers into loyal customers.",
    summary:
      "We rebuilt the welcome journey with serialized storytelling, before-and-after proof, and dynamic product blocks that adjusted to subscriber interests.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    brand: "Inbox Living",
    industry: "Home & Lifestyle",
    resultHeadline: "4x revenue from automation rebuild",
    resultDetail: "36% lift in conversion on replenishment emails",
    narrative:
      "Lifecycle automations powered by predictive send times and replenishment reminders kept their home essentials customers returning month after month.",
    summary:
      "We layered seasonal storytelling with automated back-in-stock alerts, tapping browsing data to trigger relevant, high-performing campaigns.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    brand: "Halo Jewelry",
    industry: "Jewelry & Accessories",
    resultHeadline: "62% boost in campaign AOV",
    resultDetail: "+48% click rate on curated bundle drops",
    narrative:
      "Long-form editorial emails paired with data-backed product recommendations drove premium bundle purchases without discounting.",
    summary:
      "We used audience tags to dynamically feature complementary pieces, while educational content answered objections right in the inbox.",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    brand: "Mama Bird Nutrition",
    industry: "Health & Supplements",
    resultHeadline: "99% inbox placement month-over-month",
    resultDetail: "220% engagement uptick after deliverability overhaul",
    narrative:
      "Domain warm-up, suppressing unengaged contacts, and content hygiene restored deliverability for this prenatal supplement brand.",
    summary:
      "We audited their sender reputation, refreshed template code, and launched a win-back email series that reactivated lapsed subscribers.",
    image:
      "https://images.unsplash.com/photo-1587502537150-878287aa4d27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    brand: "Onyx Performance",
    industry: "Fitness & Apparel",
    resultHeadline: "3.2x ROI from campaign calendar",
    resultDetail: "Launch-day revenue beat forecast by 185%",
    narrative:
      "A refreshed campaign calendar with teaser, launch, and follow-up email pulses built anticipation and repeat purchases for every drop.",
    summary:
      "Using countdown timers, post-purchase education, and loyalty segmentation, we kept their community opening every send.",
    image:
      "https://images.unsplash.com/photo-1594737625785-c66858b5373c?auto=format&fit=crop&w=1200&q=80",
  },
];

const accentGradient =
  "linear-gradient(135deg, rgba(12, 27, 45, 0.85) 0%, rgba(24, 50, 88, 0.75) 45%, rgba(29, 91, 166, 0.85) 100%)";

const getSlideIndex = (current, offset) => {
  const total = slides.length;
  return (current + offset + total) % total;
};

const ResultsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlide = (offset) => {
    const index = getSlideIndex(activeIndex, offset);
    const slide = slides[index];
    const isActive = offset === 0;

    return (
        
      <div
        key={`${slide.brand}-${index}-${offset}`}
        className={`relative transition-all duration-500 ease-out rounded-[28px] overflow-hidden shadow-xl border border-white/10 bg-[#0b1622]
          ${
            isActive
              ? "basis-full sm:basis-[68%] lg:basis-[58%] h-[360px] sm:h-[420px] scale-100"
              : "hidden sm:block basis-[28%] lg:basis-[22%] h-[240px] sm:h-[300px] scale-95 opacity-80"
          }
        `}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden={!isActive}
      >
        <div className="absolute inset-0" style={{ background: accentGradient }} />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/75">
            <Sparkles size={18} />
            <span>{slide.industry}</span>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">{slide.brand}</h3>
            <p className="text-base sm:text-lg font-semibold text-blue-100">
              {slide.resultHeadline}
            </p>
            <p className="text-sm sm:text-base text-blue-50/90 mt-2">
              {slide.resultDetail}
            </p>
            {isActive && (
              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                {slide.summary}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
     style={{ position: "relative", zIndex: 10, background: "#fff", color: "#000", padding: "40px" }}>
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute -bottom-20 left-0 right-0 h-32 bg-gradient-to-r from-[#0b1622] via-[#183258] to-[#1d5aa6] opacity-80" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-sm uppercase tracking-[0.35em] text-[#0b1622]/70">Companies hire us because of the</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1622]">
              Results We Provide
            </h2>
            <p className="text-sm sm:text-base text-[#183258]/80 leading-relaxed">
              {activeSlide.narrative}
            </p>
            <div className="rounded-2xl bg-[#0b1622] text-white/90 p-5 shadow-lg flex flex-col gap-2">
              <div className="text-xs uppercase tracking-[0.25em] text-blue-200">
                {activeSlide.industry}
              </div>
              <div className="text-lg font-semibold">{activeSlide.resultHeadline}</div>
              <div className="text-sm text-blue-100">{activeSlide.resultDetail}</div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#183258]/20 text-[#0b1622] hover:bg-[#183258]/10 transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#183258]/20 text-[#0b1622] hover:bg-[#183258]/10 transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 ml-2">
                {slides.map((slide, index) => (
                  <span
                    key={slide.brand}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-gradient-to-r from-[#1d5aa6] to-[#183258]"
                        : "bg-[#d6dce8]"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative flex items-center justify-center gap-4 sm:gap-6">
              {[-1, 0, 1].map((offset) => renderSlide(offset))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ResultsCarousel;
    