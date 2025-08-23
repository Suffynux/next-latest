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
import Container from "../../Components/Layout/Container"
import bgImage from "../../assets/Images/heroBg1.jpg";
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


    const advantages = [
    "24/7 proactive monitoring & support",
    "Fluent English-speaking technical team",
    "Flat monthly rate — no hidden charges",
    "Money-back guarantee in the first week",
    "No long-term contracts — cancel anytime",
    "Enterprise-grade security & compliance",
    "Cost includes tools, equipment, and connectivity",
    "Flexible working hours aligned to your timezone",
    "Dedicated account manager for every client",
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
    <>
   
    <div className="bg-white min-h-screen flex flex-col gap-0 items-stretch py-0 px-0 mt-5 mb-5">
      {/* Out-of-Scope Tasks Section */}
   
      {/* <section className="w-f ull py-14 px-4  sm:px-10 bg-gradient-to-br from-[#3a1c71] via-[#5f2c82] to-[#1e2a78] relative">
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
      </section> */}
      <Container maxWidth="md:w-[1199px]">

  <section className="w-full py-14 px-8 sm:px-10 relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#003A75]/80 via-[#1e2a78]/80 to-[#000]/70"></div>

  <div className="relative max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
      Out-of-Scope Tasks
    </h2>
    <p className="text-white/90 mb-8 text-base sm:text-lg max-w-2xl">
      To keep our IT services cost-effective and focused, here’s what’s not included:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
      {outOfScopeTasks.map((task, idx) => (
        <div key={idx} className="flex items-start gap-2 mb-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/20 text-white text-lg font-bold">
            &#8250;
          </span>
          <span className="text-white text-base">{task}</span>
        </div>
      ))}
    </div>
  </div>
</section>


</Container>


      {/* Why NextGrid Section */}
 <Container>
  <section className="w-full py-12 px-4 sm:px-10 flex flex-col mt-5 md:flex-row items-stretch md:gap-[10px]">
    
    {/* Text Section */}
    <div className="md:w-[900px] flex flex-col justify-center p-6 md:p-10 bg-gradient-to-r from-[#1e3a8a] via-[#0b2e78] to-[#1a4780]">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Why NextGrid</h2>
      <p className="text-white/90 mb-4 text-base sm:text-lg">
        Based in the United Kingdom, NextGrid is a trusted global IT services provider with regional offices and a presence in over 50 countries.
      </p>
      <p className="text-white/90 text-base sm:text-lg">
        We’ve delivered technology talent and managed services to clients worldwide for over a decade. Our engineers and consultants are handpicked based on your requirements and trained to deliver consistent, reliable results.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex">
      <img
        // src="/public/asset.jpg"
        src="https://images.pexels.com/photos/7658366/pexels-photo-7658366.jpeg"
        alt="Professional at work"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
    </div>

  </section>
</Container>


<Container>

         <section className="w-full py-16 px-6 sm:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mb-10">
          Our Advantages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-300 rounded-lg overflow-hidden">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 border border-gray-300 p-6 bg-white"
            >
              <span className="text-[#1e3a8a] text-lg">•</span>
              <p className="text-gray-800 text-base sm:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

</Container>


    </div>
    
    </>
  );
};

export default WhoWeWorkWith;
