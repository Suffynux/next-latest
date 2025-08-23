import React, { useEffect, useRef, useState } from "react";
import {
  Shield,
  Headphones,
  Target,
  Users,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Monitor,
  UserCheck,
  Palette
} from "lucide-react";

const services = [
  {
    icon: <Shield size={32} />,
    title: "IT Managed Services",
    description:
      "Complete IT infrastructure management and monitoring to ensure optimal performance and security.",
  },
  {
    icon: <Headphones size={32} />,
    title: "On-Demand Field Support (FSO)",
    description:
      "Professional on-site technical support services delivered by certified field service technicians.",
  },
  {
    icon: <Target size={32} />,
    title: "IT Asset Management",
    description:
      "Comprehensive tracking and management of your IT assets throughout their entire lifecycle.",
  },
  {
    icon: <Users size={32} />,
    title: "Network & User Support",
    description:
      "Complete network infrastructure support and end-user assistance for seamless operations.",
  },
  {
    icon: <Zap size={32} />,
    title: "Project & Change Management",
    description:
      "Expert project management and change implementation services to ensure successful IT transformations.",
  },
  {
    icon: <Award size={32} />,
    title: "Recruitment Services (Technical & IT)",
    description:
      "Specialized technical recruitment services to help you find the right IT talent for your organization.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Creative & Digital Support",
    description:
      "Creative design and digital marketing support to enhance your brand presence and engagement.",
  },
];

const keyServices = [
  {
    icon: <Globe size={40} />,
    title: "Global Field Services",
    description: "Rapid engineer dispatch, on-site troubleshooting, and hardware support—delivered at your location."
  },
  {
    icon: <Monitor size={40} />,
    title: "IT Managed Services",
    description: "End-to-end support, including remote helpdesk, IT asset management, and proactive monitoring."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Technical Recruitment",
    description: "Skilled IT professionals, sourced and screened by expert recruiters, ready for permanent or contract roles."
  },
  {
    icon: <Palette size={40} />,
    title: "Creative & Digital Support",
    description: "UI/UX, branding, websites, and content tailored to tech firms and MSPs."
  }
];

const keyServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(services.map(() => false));
  const [keyCardVisibility, setKeyCardVisibility] = useState(keyServices.map(() => false));
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
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
            }, index * 200);
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

  useEffect(() => {
    const keyCardObservers = keyCardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setKeyCardVisibility(prev => {
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
      keyCardObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Services Section */}
        <div className="mb-20">
          <h2 
            className={`text-3xl md:text-2xl font-bold text-center text-[#003A75] mb-12 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Key Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyServices.map((service, index) => (
              <div
                key={`key-${index}`}
                ref={el => keyCardRefs.current[index] = el}
                className={`bg-white rounded-xl shadow-lg p-8 group transition-all duration-500 transform ${
                  keyCardVisibility[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } hover:shadow-xl hover:-translate-y-2`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className={`text-[#003A75] mb-6 transition-all duration-500 transform ${
                    keyCardVisibility[index] 
                      ? 'scale-100 rotate-0' 
                      : 'scale-50 rotate-45'
                  } group-hover:scale-110 group-hover:text-blue-600`}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#003A75] group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="h-1 bg-gradient-to-r from-[#003A75] to-blue-500 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* All Services Section */}
  
      </div>
    </section>
  );
};

export default keyServicesSection;