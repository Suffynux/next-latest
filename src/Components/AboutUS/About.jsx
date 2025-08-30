import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Users, Shield, Zap, Target, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [counters, setCounters] = useState({ regions: 0, engineers: 0, response: 0 });

  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.ceil(start) }));
        }
      }, 16);
      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(50, 'regions');
          animateCounter(4000, 'engineers');
          animateCounter(10, 'response');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const counterElement = document.querySelector('#stats-section');
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, []);

  const benefits = [
    { icon: Clock, title: "No Delays", description: "We dispatch engineers based on proximity and availability, ensuring rapid response times." },
    { icon: Target, title: "No Guesswork", description: "Every engagement is meticulously scoped, scheduled, and documented for full transparency." },
    { icon: Shield, title: "No Drop-offs", description: "Your issue remains our top priority from start to finish, with consistent updates until resolution." }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <MainLayout>
      <div className="bg-[#0D1A2E] text-white overflow-hidden">
        
        {/* --- Hero Section --- */}
        <section className="relative py-24 md:py-32 text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1A2E] via-[#0D1A2E]/80 to-[#0D1A2E]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-['Montserrat']"
            >
              The On-Demand IT Force Behind Global Business
            </motion.h1>
            <motion.p 
              initial="hidden" animate="visible" variants={{...fadeUp, transition: { delay: 0.2, ...fadeUp.transition }}}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              NextGrid IT delivers fast, reliable, on-demand IT field support across EMEA and APAC, connecting you with certified engineers exactly when and where you need them.
            </motion.p>
          </div>
        </section>

        {/* --- Stats Section --- */}
        <section id="stats-section" className="py-16 bg-[#102039]">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h2 className="text-5xl font-bold text-cyan-400 mb-2">{counters.regions}+</h2>
              <p className="text-gray-400">Regions Covered</p>
            </div>
            <div className="p-4">
              <h2 className="text-5xl font-bold text-cyan-400 mb-2">{counters.engineers}+</h2>
              <p className="text-gray-400">Vetted Engineers in Our Network</p>
            </div>
            <div className="p-4">
              <h2 className="text-5xl font-bold text-cyan-400 mb-2">&lt;{counters.response} min</h2>
              <p className="text-gray-400">Average Initial Response Time</p>
            </div>
          </div>
        </section>

        {/* --- The Challenge & Our Solution Section --- */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 space-y-20">
            {/* The Challenge */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                <img src="https://images.pexels.com/photos/6964133/pexels-photo-6964133.jpeg" alt="Business challenge" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge Most Businesses Face</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Urgent issues demand boots on the ground, but building and maintaining IT teams in every region is inefficient and costly.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When hardware fails or projects stall, businesses are often left relying on rigid SLAs, inconsistent freelancers, or overstretched internal teams, leading to costly downtime.
                </p>
              </div>
            </div>

            {/* Our Solution */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The NextGrid Solution</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We are your globally distributed, locally available IT team. We bridge the gap with a flexible network of certified engineers, ready to deploy for any task.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />One-off break-fix or multi-region rollouts.</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />Short-term staff augmentation or long-term projects.</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />Specialized talent matched to your specific job.</li>
                </ul>
              </div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="order-1 md:order-2">
                <img src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg" alt="NextGrid solution" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- "Working With Us Means" Section --- */}
        <section className="py-20 md:py-28 bg-[#102039]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-16">Working With Us Is Simple & Effective</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{...fadeUp, visible: {...fadeUp.visible, transition: { delay: index * 0.2, ...fadeUp.visible.transition }}}}
                  className="bg-gradient-to-br from-[#ffffff08] to-transparent p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
              <h2 className="text-4xl font-bold mb-6">Ready to Stop Chasing Support and Start Getting Results?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's talk. Message NextGrid IT to book your service call or project consultation and experience the difference of a truly on-demand IT partner.
              </p>
              <Link
                to="/contact-us"
                className='inline-flex items-center justify-center bg-cyan-500 text-[#0D1A2E] font-semibold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20'
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Book a Service Call
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;