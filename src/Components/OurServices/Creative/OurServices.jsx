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
          className={`text-3xl md:text-4xl font-extrabold text-center text-[#003A75] mb-12 transition-all duration-1000 ${
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
      
    </section>
  );
};

export default LandingService;







