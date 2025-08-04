import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Users, Shield, Zap, Target, CheckCircle, MessageCircle } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ regions: 0, engineers: 0, response: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(50, 'regions');
      animateCounter(200, 'engineers');
      animateCounter(10, 'response');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "No delays",
      description: "We dispatch engineers based on proximity and availability"
    },
    {
      icon: Target,
      title: "No guesswork",
      description: "Every engagement is scoped, scheduled, and documented"
    },
    {
      icon: Shield,
      title: "No drop-offs",
      description: "Your issue stays visible until it's resolved"
    }
  ];

  const fadeInUp = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s ease-out'
  };

  const fadeInLeft = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'all 0.8s ease-out'
  };

  const fadeInRight = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    transition: 'all 0.8s ease-out'
  };

  const staggeredDelay = (index, baseDelay = 0.2) => ({
    transitionDelay: `${baseDelay + index * 0.1}s`
  });

  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#284885]/10 rounded-full blur-3xl"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-[#2a4d8e]/5 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#284885]/5 rounded-full blur-3xl"
          style={{
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Header Section */}
    {/* About Section with Image */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-bold text-[#284885] mb-6">About NextGrid IT</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        We are IT support specialists delivering on-demand, location-based solutions across Europe and APAC.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our team connects you with nearby certified engineers for fast, reliable IT field support without the overhead of permanent teams in every region.
      </p>
    </div>

    {/* Image */}
    <div className="w-full">
      <img 
        src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg" 
        alt="NextGrid IT team at work"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
  </div>
</section>

<section className="bg-[#f6f9fc] py-20">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
      
      {/* Image on Left */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/7793097/pexels-photo-7793097.jpeg" // ⬅️ Replace with your actual image path
          alt="IT Challenge"
          className="rounded-3xl shadow-lg w-full object-cover h-[400px]"
        />
      </div>

      {/* Text on Right */}
      <div className="w-full lg:w-1/2 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#284885] mb-6 leading-tight">
          The Challenge Most Businesses Face
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Most businesses don’t have time to build IT teams in every region especially when urgent issues demand boots on the ground.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          When hardware fails, networks stall, or projects stall due to lack of technical hands, they’re forced to rely on rigid SLAs, inconsistent freelancers, or overstretched internal teams.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
      
        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div style={fadeInLeft}>
            <div className="bg-gradient-to-br from-[#284885] to-[#2a4d8e] rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">NextGrid IT was built to change that.</h2>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  We provide on-demand, location-based IT support across EMEA and APAC fast, reliable, and delivered by certified engineers near your sites.
                </p>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Whether you need a one-off fix, a multi-region rollout, or technical staff for a month, we move quickly to match the right talent to the right job.
                </p>
              </div>
            </div>
          </div>
          
          <div style={fadeInRight}>
            <h3 className="text-2xl font-bold text-[#284885] mb-8">
              From urgent break-fix calls to long-term field deployments, we're your IT team on the ground without the overhead.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We're not a generalist agency. We're IT support specialists with a proven network of engineers, backed by sharp recruiters, operational discipline, and a commitment to service that matches your urgency.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#284885] mb-2"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1s'
                  }}
                >
                  {counters.regions}+
                </div>
                <div className="text-sm text-gray-600">Regions Covered</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#284885] mb-2"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1.2s'
                  }}
                >
                  {counters.engineers}+
                </div>
                <div className="text-sm text-gray-600">Engineers Network</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#284885] mb-2"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1.4s'
                  }}
                >
                  {counters.response}min
                </div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Working with Us Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-[#284885] mb-6"
              style={{
                ...fadeInUp,
                transitionDelay: '0.3s'
              }}
            >
              Working with us means:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                  style={{
                    ...fadeInUp,
                    ...staggeredDelay(index, 0.5)
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#284885] to-[#2a4d8e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#284885] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-20">
          <div 
            className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 text-center"
            style={{
              ...fadeInUp,
              transitionDelay: '0.8s'
            }}
          >
            <h2 className="text-3xl font-bold text-[#284885] mb-8">
              Scaling, relocating, or solving a crisis?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We're ready when you are with people, processes, and presence in-region.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 border-2 border-[#284885]/20 rounded-xl hover:border-[#284885] transition-colors duration-300">
                <MapPin className="w-12 h-12 text-[#284885] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">On-Site Support</h3>
                <p className="text-gray-600 text-sm">Certified engineers at your location when you need them</p>
              </div>
              <div className="p-6 border-2 border-[#284885]/20 rounded-xl hover:border-[#284885] transition-colors duration-300">
                <Users className="w-12 h-12 text-[#284885] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Project Teams</h3>
                <p className="text-gray-600 text-sm">Dedicated technical staff for short or long-term projects</p>
              </div>
              <div className="p-6 border-2 border-[#284885]/20 rounded-xl hover:border-[#284885] transition-colors duration-300">
                <Zap className="w-12 h-12 text-[#284885] mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Response</h3>
                <p className="text-gray-600 text-sm">Rapid deployment for critical infrastructure issues</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-[#284885] to-[#2a4d8e] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{
            ...fadeInUp,
            transitionDelay: '1s'
          }}
        >
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div 
              className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            ></div>
            <div 
              className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
              style={{ animation: 'float 5s ease-in-out infinite reverse' }}
            ></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to stop chasing support and start getting results?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's talk. Message NextGrid IT to book your service call or project consult.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
                <Link
                to={"/contact-us"}
                className='inline-flex items-center justify-center bg-white text-[#284885] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
                >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Service Call
          </Link>
              <Link
                to={"/contact-us"}
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#284885] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Target className="w-5 h-5 mr-2" />
                Project Consult
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
      `}</style>
    </div>
    </MainLayout>
  );
};

export default AboutPage;