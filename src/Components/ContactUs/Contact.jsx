import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';
import { motion } from 'framer-motion';

const ContactPage = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "For project inquiries, support, and general questions.",
      value: "info@nextgridit.co.uk",
      action: "https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance.",
      value: "+44 1234 567890",
      action: "tel:+441234567890"
    },
    {
      icon: MapPin,
      title: "Our Headquarters",
      description: "483 Green Lanes, London, United Kingdom, N13 4BS",
      action: "https://www.google.com/maps/search/?api=1&query=483+Green+Lanes,+London"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-[#0D1A2E] text-white overflow-hidden">
        
        {/* --- Hero Section --- */}
        <section className="relative py-24 md:py-32 text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1A2E] via-[#0D1A2E]/80 to-[#0D1A2E]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial="hidden" animate="visible" variants={{...fadeUp, transition: { delay: 0.2, ...fadeUp.transition }}}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Whether you have a question about our services, need a project consultation, or require immediate support, our team is ready to help.
            </motion.p>
          </div>
        </section>

        {/* --- Contact Details Section --- */}
        <section className="py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="space-y-10"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2 text-cyan-400">Contact Information</h2>
                  <p className="text-gray-400">Use one of the methods below to connect with us directly.</p>
                </div>
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col sm:flex-row items-start gap-5 bg-gradient-to-br from-[#ffffff08] to-transparent p-8 rounded-2xl border border-white/10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{...fadeUp, transition: { delay: index * 0.1, ...fadeUp.transition }}}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <h3 className="text-xl font-bold">{method.title}</h3>
                      <p className="text-gray-400 mb-2">{method.description}</p>
                      <a 
                        href={method.action} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors break-words"
                      >
                        {method.value || 'View on Map'}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactPage;