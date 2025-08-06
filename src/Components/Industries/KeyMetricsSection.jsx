import React from 'react';
import {
  Users,
  Clock,
  Zap,
  ShieldCheck,
  Fingerprint,
  FileSearch,
} from 'lucide-react';
import { motion } from 'framer-motion';

const MetricsSection = () => {
  // Reusable fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const metrics = [
    {
      icon: <Users className="w-10 h-10 text-white mb-4" />,
      title: '4000+ IT Engineers',
      subtitle: 'supported since 2020',
    },
    {
      icon: <Clock className="w-10 h-10 text-white mb-4" />,
      title: '24/7 Coverage',
      subtitle: 'across EMEA & APAC',
    },
    {
      icon: <Zap className="w-10 h-10 text-white mb-4" />,
      title: '10-min Response',
      subtitle: 'avg. coordination time',
    },
  ];

  const certifications = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      text: 'GDPR aligned service protocols',
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-white" />,
      text: 'Background verified field engineers',
    },
    {
      icon: <FileSearch className="w-6 h-6 text-white" />,
      text: 'SLA-based resolution and proactive tracking',
    },
  ];

  const processSteps = [
    {
      title: 'Submit Your Request',
      desc: 'Reach out with your issue our team is on standby 24/7.',
    },
    {
      title: 'Engineer Dispatched Within 10 Minutes',
      desc: 'We instantly locate and assign the nearest certified engineer to your site.',
    },
    {
      title: 'Get It Fixed & Only Pay When You Need Us',
      desc: 'Your issue is resolved under a clear contract no surprise fees, no per‑task billing.',
    },
  ];

  return (
    <section
      className="relative py-10 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8204356/pexels-photo-8204356.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003a75]/90 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/10 rounded-xl p-8 shadow-md border border-white/10 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              {metric.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {metric.title}
              </h3>
              <p className="text-blue-100">{metric.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Process */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-blue-300">
              Certifications & Quality Markers
            </h2>
            <ul className="space-y-6">
              {certifications.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <h3 className="text-white font-medium">{item.text}</h3>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-blue-300">
              Our 3-Step Support Process
            </h2>
            <ol className="space-y-8">
              {processSteps.map((step, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#003A75] font-bold mr-4">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-blue-100">{step.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
