import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Stethoscope, GraduationCap, ShoppingCart,
  Factory, Briefcase, Truck, Banknote
} from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const IndustriesPage = () => {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property management systems and digital solutions for real estate professionals.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "HIPAA-compliant systems and telemedicine solutions for healthcare organizations.",
      image: "https://images.pexels.com/photos/4266942/pexels-photo-4266942.jpeg"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management systems and digital classroom solutions for institutions.",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Custom online stores and digital marketing solutions for retail businesses.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "ERP systems and IoT solutions for manufacturing and industrial companies.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Secure banking solutions and compliance management for financial institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={fadeInUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Industries We Serve
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              NextGrid IT delivers specialized technology solutions across diverse industries 
              with proven expertise and measurable results.
            </motion.p>
          </div>
        </div>

        {/* Industries Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            className="mt-20 text-center"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.7}
          >
            <div className="bg-blue-600 rounded-2xl p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Discuss Your Industry Needs?
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Contact our team to learn how we can deliver tailored IT solutions 
                for your specific industry requirements.
              </p>
              <a
                href="mailto:info@nextgridit.com?subject=Industry Solutions Inquiry"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.9}
          >
            {[
              { count: '6+', label: 'Industries' },
              { count: '50+', label: 'Projects' },
              { count: '3+', label: 'Years' },
              { count: '24/7', label: 'Support' }
            ].map((item, idx) => (
              <motion.div key={idx} custom={1 + idx} variants={fadeInUpVariant}>
                <div className="text-3xl font-bold text-blue-600 mb-1">{item.count}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustriesPage;
