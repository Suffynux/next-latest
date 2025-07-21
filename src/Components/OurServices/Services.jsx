import React, { useEffect, useRef, useState } from "react";
import { Code, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "High-performance websites and scalable applications tailored to your business needs.",
  },
  {
    icon: <Globe size={32} />,
    title: "Digital Transformation", 
    description: "Modernize your operations with cloud, automation, and agile tools.",
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to safeguard your digital infrastructure.",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(services.map(() => false));
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
              setCardVisibility(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // Stagger animation
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
      cardObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with slide-down animation */}
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-[#003A75] mb-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          Our Services
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-xl shadow-md p-6 group transition-all duration-700 transform ${
                cardVisibility[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              } hover:shadow-xl hover:-translate-y-2 hover:scale-105`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Icon with bounce animation */}
              <div 
                className={`text-[#003A75] mb-4 transition-all duration-500 transform ${
                  cardVisibility[index] 
                    ? 'scale-100 rotate-0' 
                    : 'scale-50 rotate-45'
                } group-hover:scale-110 group-hover:text-blue-600`}
                style={{
                  transitionDelay: `${(index * 100) + 200}ms`
                }}
              >
                {service.icon}
              </div>
              
              {/* Title with slide-in animation */}
              <h3 
                className={`text-xl font-semibold mb-2 text-[#003A75] transition-all duration-600 transform ${
                  cardVisibility[index] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                } group-hover:text-blue-600`}
                style={{
                  transitionDelay: `${(index * 100) + 300}ms`
                }}
              >
                {service.title}
              </h3>
              
              {/* Description with typewriter-like effect */}
              <div className="overflow-hidden">
                <p 
                  className={`text-gray-600 text-sm transition-all duration-800 transform ${
                    cardVisibility[index] 
                      ? 'opacity-100 translate-y-0 max-h-20' 
                      : 'opacity-0 translate-y-4 max-h-0'
                  } group-hover:text-gray-800`}
                  style={{
                    transitionDelay: `${(index * 100) + 400}ms`
                  }}
                >
                  {service.description}
                </p>
              </div>
              
              {/* Decorative bottom border that animates in */}
              <div 
                className={`h-1 bg-gradient-to-r from-[#003A75] to-blue-500 rounded-full mt-4 transition-all duration-500 transform origin-left ${
                  cardVisibility[index] 
                    ? 'scale-x-100 opacity-100' 
                    : 'scale-x-0 opacity-0'
                } group-hover:from-blue-500 group-hover:to-blue-600`}
                style={{
                  transitionDelay: `${(index * 100) + 600}ms`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Additional animated elements */}
        <div className="mt-16 text-center">
          <div 
            className={`inline-block transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-50 rotate-180'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#003A75] to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <p 
            className={`mt-6 text-gray-600 max-w-2xl mx-auto transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            We combine cutting-edge technology with industry expertise to deliver solutions that drive your business forward.
          </p>
        </div>
      </div>
      

    </section>
  );
};

export default ServicesSection;