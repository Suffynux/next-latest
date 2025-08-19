import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../../assets/Images/heroBg1.jpg";
import gradient from "../../assets/Images/gradient.jpeg";
import girlImage from "../../assets/Images/girl.svg";
import networkBg from "../../assets/Images/heroBg2.jpg";
import bodyBg from "../../assets/Images/bodyBg.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mt-[80px] md:mt-0">
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-row">      
        {/* Left side - Background image with overlay */}
        <div className="hidden md:block w-[50%] h-full relative overflow-hidden">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${gradient})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          {/* Dark overlay with blue tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/80 to-[#284885]/70"></div>
        </div>
        
        {/* Right side - Background image with dark overlay */}
        <div className="w-full md:w-[ 0%] h-full relative">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('/heroImage.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          ></div>
          {/* Dark overlay with increased opacity for better text contrast */}
          <div className="absolute inset-0 bg-black/80
          
          
          
          "></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center">
        
        {/* Left Side - Girl Image */}
        <div className="mt-[100px] hidden md:flex w-full md:w-[50%] h-full items-center justify-center relative pt-4 ">
          <img
            src={girlImage}
            alt="Girl with laptop"
            className="w-auto h-auto max-h-[80%] max-w-[85%] object-contain drop-shadow-2xl z-20"
            style={{ filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-6 sm:px-10 md:px-12 text-white relative"
        >

        {/* Content */}
        <div className="relative z-20 w-full mx-auto text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h1 className="text-white font-bold uppercase leading-tight text-3xl sm:text-5xl md:text-5xl tracking-tight mb-4">
            IT Managed Support
            <br className="hidden sm:block" />
              <span className="block text-blue-300 font-medium">Wherever You Need It</span>
          </h1>

          <p className="text-white text-sm sm:text-lg md:text-md lg:text-md font-light max-w-[250px] md:max-w-2xl opacity-90 mb-8">
            Trusted by businesses across EMEA and APAC to deliver fast, expert
            IT solutions on-site and on-demand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#284885] text-white font-semibold rounded-lg hover:bg-[#2a4d8e] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] text-center"
            >
              Contact us 
            </a>

            <Link
              to={"/services"}
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#284885] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;