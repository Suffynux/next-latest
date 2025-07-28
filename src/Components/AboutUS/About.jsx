import React, { useEffect, useState } from 'react';
import { Code, Smartphone, Search, TrendingUp, Shield, Headphones, Users, Award, Target, Zap } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, support: 0 });

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
      animateCounter(50, 'projects');
      animateCounter(3, 'years');
      animateCounter(24, 'support');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "IT Managed Services",
      description: "Complete IT infrastructure management and monitoring to ensure optimal performance and security.",
      link: "/services"
    },
    {
      icon: Headphones,
      title: "On-Demand Field Support (FSO)",
      description: "Professional on-site technical support services delivered by certified field service technicians.",
      link: "#"
    },
    {
      icon: Target,
      title: "IT Asset Management",
      description: "Comprehensive tracking and management of your IT assets throughout their entire lifecycle.",
      link: "#"
    },
    {
      icon: Users,
      title: "Network & User Support",
      description: "Complete network infrastructure support and end-user assistance for seamless operations.",
      link: "#"
    },
    {
      icon: Zap,
      title: "Project & Change Management",
      description: "Expert project management and change implementation services to ensure successful IT transformations.",
      link: "#"
    },
    {
      icon: Award,
      title: "Recruitment Services (Technical & IT)",
      description: "Specialized technical recruitment services to help you find the right IT talent for your organization.",
      link: "#"
    },
    {
      icon: TrendingUp,
      title: "Creative & Digital Support",
      description: "Creative design and digital marketing support to enhance your brand presence and engagement.",
      link: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every project is tailored to meet specific client needs, ensuring maximum value and satisfaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every aspect of our work, from code to customer service."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined processes and agile methodologies ensure timely delivery without compromising quality."
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl"
          style={{
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 
              className="text-4xl font-bold text-gray-900 mb-2"
              style={fadeInUp}
            >
              About NextGrid IT
            </h1>
            <p 
              className="text-lg text-gray-600"
              style={{
                ...fadeInUp,
                transitionDelay: '0.2s'
              }}
            >
              Transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div style={fadeInLeft}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At NextGrid IT, we are passionate about leveraging technology to solve complex business 
              challenges. Since our founding, we have been dedicated to helping businesses of all sizes 
              achieve their digital transformation goals through innovative, reliable, and scalable IT solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our team of experienced professionals brings together expertise in web development, mobile 
              applications, digital marketing, and enterprise software solutions. We don't just build 
              technology – we craft experiences that drive growth and success.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div 
                  className="text-3xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1s'
                  }}
                >
                  {counters.projects}+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div 
                  className="text-3xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1.2s'
                  }}
                >
                  {counters.years}+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group">
                <div 
                  className="text-3xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: '1.4s'
                  }}
                >
                  {counters.support}/7
                </div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative" style={fadeInRight}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden group">
              {/* Enhanced floating elements with animations */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transition-all duration-700 group-hover:scale-125"
                style={{
                  transform: 'translate(4rem, -4rem)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transition-all duration-700 group-hover:scale-125"
                style={{
                  transform: 'translate(-3rem, 3rem)',
                  animation: 'pulse 3s ease-in-out infinite reverse',
                  animationDelay: '1s'
                }}
              ></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create lasting competitive advantages in the digital marketplace.
                </p>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                  <h4 className="font-semibold mb-2">Our Commitment</h4>
                  <p className="text-blue-100 text-sm">
                    We are committed to delivering exceptional value through cutting-edge technology, 
                    personalized service, and long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{
                ...fadeInUp,
                transitionDelay: '0.3s'
              }}
            >
              Our Services
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                ...fadeInUp,
                transitionDelay: '0.4s'
              }}
            >
              We offer a comprehensive range of IT services designed to meet the diverse needs 
              of modern businesses, from startups to enterprise organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link to={service.link}
                 key={index} 
                
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group hover:transform hover:-translate-y-4 hover:rotate-1 block relative overflow-hidden"
                  style={{
                    ...fadeInUp,
                    ...staggeredDelay(index, 0.5)
                  }}>
                 
                
                
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-all duration-300 transform group-hover:translate-x-2">
                      Learn more →
                    </div>
                  </div>
                 </Link>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{
                ...fadeInUp,
                transitionDelay: '0.6s'
              }}
            >
              Our Core Values
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                ...fadeInUp,
                transitionDelay: '0.7s'
              }}
            >
              These principles guide everything we do and shape how we interact with our clients, 
              partners, and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{
                    ...fadeInUp,
                    ...staggeredDelay(index, 0.8)
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{
                ...fadeInUp,
                transitionDelay: '0.9s'
              }}
            >
              Our Process
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                ...fadeInUp,
                transitionDelay: '1s'
              }}
            >
              We follow a proven methodology that ensures successful project delivery and 
              client satisfaction at every step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 1, title: "Discovery", desc: "Understanding your needs, goals, and challenges" },
              { number: 2, title: "Planning", desc: "Developing comprehensive project strategy and roadmap" },
              { number: 3, title: "Development", desc: "Building your solution with regular updates and feedback" },
              { number: 4, title: "Launch", desc: "Deployment and ongoing support for continued success" }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{
                  ...fadeInUp,
                  ...staggeredDelay(index, 1.1)
                }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-125 group-hover:bg-blue-700 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                
                {/* Connection line (except for last item) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-6">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-1000"
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${1.5 + index * 0.3}s`
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden group"
          style={{
            ...fadeInUp,
            transitionDelay: '1.5s'
          }}
        >
          {/* Enhanced background effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            <div 
              className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            ></div>
            <div 
              className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full"
              style={{ animation: 'float 5s ease-in-out infinite reverse' }}
            ></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how NextGrid IT can help you achieve your digital transformation goals. 
              Contact us today for a free consultation.
            </p>
            <a
              href="mailto:info@nextgridit.com?subject=Project Consultation&body=Hello NextGrid IT team,%0D%0A%0D%0AI'd like to schedule a consultation to discuss my project needs."
              className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl group-hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        .group:hover .animate-float {
          animation-play-state: paused;
        }
      `}</style>
    </div>
    </ MainLayout>
  );
};

export default AboutPage;