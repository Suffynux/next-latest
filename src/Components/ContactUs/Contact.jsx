import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle, Users, Zap, CheckCircle } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s ease-out'
  };

  const fadeInLeft = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'all 0.8s ease-out'
  };

  const fadeInRight = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    transition: 'all 0.8s ease-out'
  };

  const staggeredDelay = (index, baseDelay = 0.2) => ({
    transitionDelay: `${baseDelay + index * 0.1}s`
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message and we'll respond within 24 hours",
      value: "info@nextgridit.co.uk",
      action: "https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk",
      isEmail: true
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team during business hours",
      value: "+44 1234 567890",
      action: "tel:+441234567890"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters location",
      value: "483 Green Lanes, London United Kingdom, N13 4BS",
      action: "https://maps.google.com"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 overflow-hidden">
        {/* ... (previous floating background elements and hero section remain the same) ... */}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Contact Methods */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl font-bold text-[#284885] mb-6"
                style={{
                  ...fadeInUp,
                  transitionDelay: '0.3s'
                }}
              >
                How to Reach Us
              </h2>
              <p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                style={{
                  ...fadeInUp,
                  transitionDelay: '0.4s'
                }}
              >
                Choose your preferred contact method below
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                    style={{
                      ...fadeInUp,
                      ...staggeredDelay(index, 0.5)
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#284885] to-[#2a4d8e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#284885] mb-4">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{method.description}</p>
                    <a 
                      href={method.action} 
                      target={method.isEmail ? "_blank" : undefined}
                      rel={method.isEmail ? "noopener noreferrer" : undefined}
                      className="text-lg font-semibold text-[#284885] hover:text-[#2a4d8e] transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ... (rest of the sections remain the same until the CTA section) ... */}

          {/* CTA Section */}
          <div 
            className="bg-gradient-to-r from-[#284885] to-[#2a4d8e] rounded-3xl p-12 text-center text-white relative overflow-hidden"
            style={{
              ...fadeInUp,
              transitionDelay: '1s'
            }}
          >
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div 
                className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              ></div>
              <div 
                className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
                style={{ animation: 'float 5s ease-in-out infinite reverse' }}
              ></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ready to get immediate IT support
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact NextGrid IT today to discuss your requirements or schedule an on-site visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#284885] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message via Gmail
                </a>
                <a 
                  href="tel:+441234567890"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-10px) translateX(5px); }
            66% { transform: translateY(5px) translateX(-5px); }
          }
        `}</style>
      </div>
    </MainLayout>
  );
};

export default ContactPage;