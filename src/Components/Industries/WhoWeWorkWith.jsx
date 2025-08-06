import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Cpu,
  Store,
  Warehouse,
  Server,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const WhoWeWorkWith = () => {
  const clientTypes = [
    {
      icon: <Building2 className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Mid Sized Businesses & Enterprises",
      description:
        "Reliable, distributed IT support that scales with your operations without the overhead.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Managed Service Providers (MSPs)",
      description:
        "Extend your reach with dispatch-ready engineers supporting SLAs across EMEA & APAC.",
    },
    {
      icon: <Store className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Retail Chains & Co-Working Operators",
      description:
        "Rollouts, maintenance, and troubleshooting for seamless multi-location tech support.",
    },
    {
      icon: <Warehouse className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Logistics & Warehouse Operations",
      description:
        "Maintain smooth backend systems, connectivity, and on-site infrastructure.",
    },
    {
      icon: <Server className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Data Centre Providers",
      description:
        "Smart hands and on-demand tech support for high-uptime environments.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#2a4d8e]" />,
      title: "Any Business That Needs Instant IT Support",
      description:
        "Rapid dispatch of certified engineers delivering expert support exactly when you need it",
    },
  ];

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
    <div className="bg-white min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#003A75] to-[#2a4d8e] bg-clip-text text-transparent tracking-tight">
            Who We Work With
          </h1>
          <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-[#003A75]">
            Trusted by Forward-Thinking Organizations
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
              <p>
                NextGrid partners with businesses across sectors to deliver
                tailored, efficient, and scalable IT solutions from mid-size
                enterprises to MSPs and logistics providers.
              </p>
            </motion.div>

            {/* Clients List */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {clientTypes.map((client, idx) => (
                <motion.div
                  key={idx}
                  className="flex bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: idx * 0.15, duration: 0.5 },
                    },
                  }}
                >
                  <div className="flex-shrink-0 mt-1">{client.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#003A75]">
                      {client.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk"
            target="_blank"
          >
            <button className="px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#003A75] to-[#2a4d8e] rounded-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a4d8e] transition-transform hover:scale-105">
              Let’s Talk
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeWorkWith;
