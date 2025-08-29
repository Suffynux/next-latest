import React from "react";
import { CheckCircle, MapPin, Users, Briefcase, Shield, Clock, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseNextGrid = () => {
 
 
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#1c2b46] via-[#20325a] to-[#162039] py-20 text-white">
      {/* Subtle Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      <ObjectionHandling/>

    
    </section>
  );
};

export default WhyChooseNextGrid;

const ObjectionHandling = () => {
  const objectionItems = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      concern: "We don't want hidden fees.",
      response: "Transparency guaranteed – all services clearly defined upfront."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-400" />,
      concern: "We don't want to be locked in.",
      response: "No minimum commitment – flexible ad-hoc or retainer options."
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      concern: "What if engineers don't know our systems?",
      response: "Certified experts across APEC & EMEA with strong local knowledge."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      concern: "How do we know you'll deliver?",
      response: "SLA-backed support plus a 7-day satisfaction guarantee."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      concern: "Will you keep our data secure?",
      response: "GDPR, ISO, and regional compliance built-in."
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      concern: "Do you actually provide 24/7 support?",
      response: "24/7 multilingual helpdesk & onsite dispatch network."
    },
    {
      icon: <Scale className="w-6 h-6 text-green-400" />,
      concern: "Can we scale up/down easily?",
      response: "Fully flexible, pay-as-you-go model – scale on demand."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center mt-10 mb-12">
        <h2 className="md:text-4xl sm:text-3xl font-bold text-center text-white mb-4">
          Common Concerns, Addressed
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mb-10">
          We understand the challenges of finding the right IT partner. Here's how NextGrid addresses your key concerns.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff10] to-[#ffffff03] opacity-80 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 p-6 border border-[#ffffff30] rounded-lg h-full">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="ml-3 text-lg font-semibold text-white">{item.concern}</h3>
              </div>
              <p className="text-gray-300">{item.response}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
