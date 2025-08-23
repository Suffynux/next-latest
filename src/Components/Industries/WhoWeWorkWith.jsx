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
  // Out-of-scope tasks for NextGrid IT services
  const outOfScopeTasks = [
    "Graphic design or long-form copywriting",
    "Full website design or web development projects",
    "Paid ad campaign management",
    "Cold calling, call answering, or telemarketing",
    "Sales negotiations or outbound sales",
    "Data extraction or domain warm-up",
    "Professional accountancy or consultancy",
    "Social media management outside CRM platforms",
    "Third party software license or related cost",
    "Requests exceeding 10 hours per week",
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
    <div className="bg-white min-h-screen flex flex-col gap-0 items-stretch py-0 px-0">
      {/* Out-of-Scope Tasks Section */}
      <section className="w-full py-14 px-4 sm:px-10 bg-gradient-to-br from-[#3a1c71] via-[#5f2c82] to-[#1e2a78] relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Out-of-Scope Tasks</h2>
          <p className="text-white/90 mb-8 text-base sm:text-lg max-w-2xl">To keep our IT services cost-effective and focused, here’s what’s not included:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
            {outOfScopeTasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/20 text-white text-lg font-bold">&#8250;</span>
                <span className="text-white text-base">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NextGrid Section */}
      <section className="w-full bg-[#a21caf] py-12 px-4 sm:px-10 flex flex-col md:flex-row items-stretch gap-0">
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Why NextGrid</h2>
          <p className="text-white/90 mb-4 text-base sm:text-lg">Based in the United Kingdom, NextGrid is a trusted global IT services provider with regional offices and a presence in over 50 countries.</p>
          <p className="text-white/90 text-base sm:text-lg">We’ve delivered technology talent and managed services to clients worldwide for over a decade. Our engineers and consultants are handpicked based on your requirements and trained to deliver consistent, reliable results.</p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <img src="/public/asset.jpg" alt="Professional at work" className="rounded-xl object-cover w-full max-w-md shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default WhoWeWorkWith;
