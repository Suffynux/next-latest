import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { motion } from "framer-motion";
import Container from "../Layout/Container";

const services = [
  { image: "/itServices.jpg", title: "IT Services", path: "/it-service" },
  { image: "/recurite.jpg", title: "Tech Recruitment", path: "/tech-recruitment" },
  { image: "/managed.jpg", title: "Managed Services", path: "/managed-services" },
  { image: "/asset.jpg", title: "IT Asset Management", path: "/ITAsset-Management" },
  { image: "/support.jpg", title: "Network & User Support", path: "/network-support" },
  { image: "https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg", title: "Project & Change Management", path: "/project-management" },
  { image: "https://images.pexels.com/photos/8636609/pexels-photo-8636609.jpeg", title: "Creative & Digital Support", path: "/creative-support" },
];

const ServicesSection = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')" }}
        />
        
        {/* Blue branding overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A75]/80 via-[#1e2a78]/80 to-[#000]/70"></div>
        
        <Container maxWidth="md:w-[1199px]">
          <div className="relative z-10 text-center py-16">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
            >
              Our Comprehensive IT Services
            </motion.h1>
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/90 mb-8 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Delivering enterprise-grade IT solutions tailored to your business needs
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <Container>
        <section className="w-full py-16 px-6 sm:px-12 -mt-10 bg-white relative z-20 rounded-t-3xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] mb-10 text-center">
              Explore Our Services
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow border-t border-gray-100">
                    <h3 className="text-xl font-semibold text-[#003A75] mb-4">
                      {service.title}
                    </h3>
                    <Link
                      to={service.path}
                      className="mt-auto inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2a4d8e] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-[#2a4d8e] hover:to-[#1e3a8a]"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      {/* Bottom CTA Section */}
      <Container>
        <section className="w-full py-12 px-4 sm:px-10 flex flex-col mt-5 md:flex-row items-stretch md:gap-[10px] mb-16">
          <div className="md:w-[900px] flex flex-col justify-center p-6 md:p-10 bg-gradient-to-r from-[#1e3a8a] via-[#0b2e78] to-[#1a4780] rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-white/90 mb-6 text-base sm:text-lg">
              Our team of certified engineers and consultants is ready to help you implement the right IT solutions that align with your business objectives.
            </p>
            <Link
              to="/contact"
              className="self-start inline-block px-8 py-4 bg-white text-[#1e3a8a] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] text-center"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};

export default ServicesSection;
