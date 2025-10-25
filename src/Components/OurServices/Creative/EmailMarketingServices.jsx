import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const emailServices = [
  {
    image: "https://images.pexels.com/photos/7734576/pexels-photo-7734576.jpeg",
    title: "Email Campaign Strategy",
    description:
      "Tailored email marketing strategies designed to maximize engagement, conversions, and ROI for your eCommerce business.",
  },
  {
    image: "https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg",
    title: "Automation & Segmentation",
    description:
      "Advanced email automation and audience segmentation to deliver the right message to the right person at the right time.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1681883457631-e21611e38757?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=876",
    title: "SMS & Multi-Channel Marketing",
    description:
      "Integrated SMS campaigns combined with email for comprehensive customer outreach and engagement across all channels.",
  },
];

const EmailMarketingServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    emailServices.map(() => false)
  );
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
    const cardObservers = cardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardVisibility((prev) => {
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
      cardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923097972767";
    const message = "Hi! I'm interested in learning more about your email marketing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
        <div style={{ position: "relative", zIndex: 10, background: "#fff", color: "#000", padding: "40px" }}>
    <section ref={sectionRef} className="" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`mt-[60px] text-3xl sm:text-2xl md:text-3xl font-bold text-[#0b1622] mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Our Email Marketing Services
          </h2>
          <p
            className={`text-gray-600 text-sm sm:text-base md:text-md max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Customized solutions to fit your brand’s email marketing needs

          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {emailServices.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={
                cardVisibility[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 md:h-42 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-md font-bold mb-3 text-[#0b1622]">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* WhatsApp CTA Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#284885] text-white font-semibold text-xs sm:text-base rounded-lg hover:bg-[#2a4d8e] mt-6 w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 transition-all duration-300 hover:shadow-lg active:scale-95"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm sm:text-base">Talk with us</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default EmailMarketingServices;
