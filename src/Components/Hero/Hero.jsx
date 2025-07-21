import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Shield, Server, Cloud, Code, Database, Wifi } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Transform Your Business with Expert IT Solutions",
    subtitle: "Comprehensive Managed Services",
    description: "Streamline operations, enhance security, and accelerate growth with our enterprise-grade IT managed services tailored for modern businesses.",
    buttonText: "Get Started",
    secondaryButtonText: "Watch Demo",
    background: "from-blue-900 via-blue-800 to-indigo-900",
    features: ["24/7 Support", "Cloud Migration", "Security First"],
    textColor: "text-white" // Added text color for better visibility
  },
  {
    id: 2,
    title: "Secure Your Digital Infrastructure",
    subtitle: "Advanced Cybersecurity Solutions",
    description: "Protect your business from evolving threats with our comprehensive cybersecurity framework and proactive monitoring services.",
    buttonText: "Learn More",
    secondaryButtonText: "Free Assessment",
    background: "from-indigo-900 via-purple-800 to-blue-900",
    features: ["Threat Detection", "Data Protection", "Compliance Ready"],
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Scale with Confidence in the Cloud",
    subtitle: "Cloud Infrastructure Management",
    description: "Migrate, manage, and optimize your cloud infrastructure with our expert team ensuring maximum performance and cost efficiency.",
    buttonText: "Explore Services",
    secondaryButtonText: "Case Studies",
    background: "from-blue-800 via-indigo-800 to-cyan-900",
    features: ["Auto-Scaling", "Cost Optimization", "Multi-Cloud"],
    textColor: "text-white"
  }
];

const floatingIcons = [
  { Icon: Shield, delay: 0, position: 'top-20 left-20' },
  { Icon: Server, delay: 500, position: 'top-32 right-32' },
  { Icon: Cloud, delay: 1000, position: 'bottom-40 left-32' },
  { Icon: Code, delay: 1500, position: 'top-1/2 right-20' },
  { Icon: Database, delay: 2000, position: 'bottom-20 right-40' },
  { Icon: Wifi, delay: 2500, position: 'bottom-32 left-20' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) %  Slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${currentSlideData.background} overflow-hidden transition-all duration-1000`}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-5 rounded-full animate-pulse"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 4 + 2) + 's'
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-30 scale-100 translate-x-0 translate-y-0' 
              : 'opacity-0 scale-50 translate-x-8 translate-y-8'
          }`}
          style={{ 
            transitionDelay: `${delay}ms`,
            animation: isVisible ? `float ${3 + (index * 0.5)}s ease-in-out infinite` : 'none'
          }}
        >
          <Icon size={24} className="text-white animate-pulse" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className={`inline-block px-4 py-2 bg-white bg-opacity-20 ${currentSlideData.textColor} text-sm font-medium rounded-full backdrop-blur-sm border border-white border-opacity-30 mb-6`}>
              {currentSlideData.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold ${currentSlideData.textColor} mb-6 leading-tight transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {currentSlideData.title}
          </h1>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl ${currentSlide.id === 1 ? 'text-blue-100' : 'text-blue-100'} mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {currentSlideData.description}
          </p>

          {/* Feature Tags */}
          <div 
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-10 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {currentSlideData.features.map((feature, index) => (
              <span
                key={index}
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-white/10 ${currentSlideData.textColor} rounded-full backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button className="group px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              {currentSlideData.buttonText}
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            
            <button className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              {currentSlideData.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Fixed position */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-80'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;