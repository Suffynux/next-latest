import { motion } from 'framer-motion';
import { HeartPulse, Banknote, ShieldCheck } from 'lucide-react';

const industries = [
  {
    icon: <HeartPulse className="w-10 h-10 text-[#003a75]" />,
    title: 'Healthcare',
    description: 'HIPAA-compliant solutions to safeguard sensitive health data.',
  },
  {
    icon: <Banknote className="w-10 h-10 text-[#003a75]" />,
    title: 'Financial Services',
    description: 'End-to-end encryption and fraud prevention tools.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#003a75]" />,
    title: 'Public Sector',
    description: 'Government-grade security for digital infrastructures.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
};

const Industry = () => {
  return (
    <section className="py-20 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-[#003a75] mb-4">
            Trusted by Leading Industries
          </motion.h2>
          <motion.p variants={item} className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Tailored cybersecurity solutions for your sector's unique challenges.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md transition duration-300"
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-[#003a75] mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industry;
