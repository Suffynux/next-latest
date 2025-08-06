import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      title: 'Rapid-Response Support',
      description: '24/7 IT support with on-site or remote solutions',
    },
    {
      title: 'Project Delivery',
      description: 'End-to-end IT project implementation',
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="overflow-hidden bg-gray-50 rounded-xl shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="px-6 py-10 sm:p-12">
            <motion.div
              className="prose prose-lg text-gray-600 max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className=''>
                NextGrid provides businesses with rapid-response IT support, project delivery,
                and managed services across EMEA and APAC. Whether you need a one-time fix
                or full-time support, we connect you to certified engineers.
              </p>
            </motion.div>

            {/* Services List */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex bg-white rounded-lg p-4 shadow transition-transform hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-[#2a4d8e]"
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
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#003A75]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{service.description}</p>
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
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#003A75] to-[#2a4d8e] rounded-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a4d8e]"
            >
              Explore Our Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
