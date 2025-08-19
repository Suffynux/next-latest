import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keyServices = [
  {
    image:
      "/field.jpg",
    title: "Global Field Services",
    description:
      "Rapid engineer dispatch, on-site troubleshooting, and hardware support delivered at your location",
  },
  {
    image:
      "/managed.jpg",
    title: "IT Managed Services",
    description:
      "End-to-end support, including remote helpdesk, IT asset management, and proactive monitoring",
  },
  {
    
    image: "/recurite.jpg",

    title: "Technical Recruitment",
    description:
      "Skilled IT professionals, sourced and screened by expert recruiters, ready for permanent or contract roles",
  },
  {
    image:
      "/creative.jpg",
    title: "Creative & Digital Support",
    description:
      "UI/UX, branding, websites, and content tailored to tech firms and MSPs",
  },
];

const LandingService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyCardVisibility, setKeyCardVisibility] = useState(
    keyServices.map(() => false)
  );
  const sectionRef = useRef(null);
  const keyCardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const keyCardObservers = keyCardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setKeyCardVisibility((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef) {
        observer.observe(cardRef);
      }

      return observer;
    });

    return () => {
      keyCardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-5xl font-extrabold text-center text-[#003A75] mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          KEY SERVICE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyServices.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (keyCardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={
                keyCardVisibility[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h5 className="text-xl font-semibold mb-2 text-[#003A75]">
                    {service.title}
                  </h5>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <button
                    className="text-blue-600 hover:underline bg-transparent border-0 cursor-pointer"
                    onClick={() => (window.location.href = "/services")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CostComparison />
    </section>
  );
};

export default LandingService;

const CostComparison = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <h3 className="md:text-4xl sm:text-3xl font-bold text-center text-[#003A75] mb-6">
        Cost Comparison: NextGrid IT vs Typical  IT Provider
      </h3>
      <p className="text-center text-gray-600 max-w-2xl mb-6 text-sm sm:text-base">
        <span className="font-semibold text-[#2a4d8e]">Note:</span> NextGrid provides rapid-response IT support, project delivery, and managed services for businesses. We do <span className="font-semibold">not</span> offer Virtual Assistant (VA) services. The comparison below highlights the value of our IT solutions versus a typical UK-based IT provider.
      </p>
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Gradient background */}
          <div className="absolute inset-0 rounded-lg z-0 bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#ffe4e6] opacity-80"></div>
          {/* Table content */}
          <div className="relative z-10 overflow-x-auto shadow-lg rounded-lg border border-orange-200 bg-white">
            <table className="min-w-full text-sm text-gray-800">
              <thead>
                <tr className="bg-[#f8fafc] border-b">
                  <th className="py-3 px-4 text-left font-semibold">Feature / Cost Factor</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#003A75]">NextGrid IT Services</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#2a4d8e]">Typical UK-Based IT Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Monthly Cost</td>
                  <td className="py-2 px-4">Custom, pay-as-you-go or retainer</td>
                  <td className="py-2 px-4">£800 – £2,000+ (fixed contracts)</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Hourly Rate</td>
                  <td className="py-2 px-4">From £35/hour (all-inclusive)</td>
                  <td className="py-2 px-4">£60 – £120/hour</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Minimum Commitment</td>
                  <td className="py-2 px-4">No minimum (ad-hoc available)</td>
                  <td className="py-2 px-4">12 months typical</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Setup/Onboarding Fees</td>
                  <td className="py-2 px-4">£0</td>
                  <td className="py-2 px-4">£100 – £500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Remote & Onsite Support</td>
                  <td className="py-2 px-4">Included</td>
                  <td className="py-2 px-4">Often extra</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Monitoring & Reporting</td>
                  <td className="py-2 px-4">Included</td>
                  <td className="py-2 px-4">Extra or limited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Money-Back Guarantee</td>
                  <td className="py-2 px-4"><span className="inline-block align-middle text-green-600 font-bold">✔</span> 7 days</td>
                  <td className="py-2 px-4 text-red-500">Rare</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="py-2 px-4">Working Hours Flexibility</td>
                  <td className="py-2 px-4">High (24/7, global coverage)</td>
                  <td className="py-2 px-4">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}





