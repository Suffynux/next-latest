import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import supportImage from "../../assets/Images/support.jpeg"; // Update with your support image

const WhatWeDo = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const services = [
    {
      title: 'IT Services',
      path: '/it-service',
    },
    {
      title: 'Tech Recruitment',
      path: '/tech-recruitment',
    },
    {
      title: 'Managed Services',
      path: '/managed-services',
    },
    {
      title: 'IT Asset Management',
      path: '/ITAsset-Management',
    },
    {
      title: 'Network & User Support',
      path: '/network-support',
    },
    {
      title: 'Project & Change Management',
      path: '/project-management',
    },
    {
      title: 'Creative & Digital Support',
      path: '/creative-support',
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#003A75] to-[#2a4d8e] bg-clip-text text-transparent tracking-tight">
            What We Do
          </h1>
          <h2 className="mt-4 text-md sm:text-2xl font-semibold text-[#003A75]">
            B2B IT Services, Delivered with Precision
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-center">
            NextGrid provides businesses with rapid-response IT support, project delivery,
            and managed services across EMEA and APAC. Whether you need a one-time fix
            or full-time support, we connect you to certified engineers.
          </p>
        </motion.div>

        {/* What's included section with image + services list */}
        <motion.div
          className="mt-12 flex flex-col md:flex-row border border-gray-200 rounded-md overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Left side - Image */}
          <div className="w-full md:w-5/12 bg-gray-100 p-2">
            <img 
              src={supportImage} 
              alt="Support specialist with headset" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right side - Our Services */}
          <div className="w-full md:w-7/12 bg-gradient-to-br from-[#003A75] to-[#2a4d8e] p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <p className="text-white/90 text-sm mb-8">
              We provide comprehensive IT solutions to businesses of all sizes. Our expert team delivers reliable support for all your technology needs:
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 mr-2">
                    <svg
                      className="w-5 h-5 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link to={service.path} className="text-sm text-white hover:text-blue-200 transition-colors">
                      {service.title}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
       
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
