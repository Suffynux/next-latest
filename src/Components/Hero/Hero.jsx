import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../../assets/Images/heroBg1.jpg";
import gradient from "../../assets/Images/gradient.jpeg";
// import girlImage from "../../assets/Images/girl.svg";
import girlImage from "../../assets/Images/boy.png";
import networkBg from "../../assets/Images/heroBg2.jpg";
import bodyBg from "../../assets/Images/bodyBg.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mt-[80px] md:mt-0">
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-row">      
        {/* Left side - Background image with overlay */}
        <div className="hidden md:block w-[45%] h-full relative overflow-hidden">
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
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center p-8">
        
        {/* Left Side - Girl Image */}
        <div className="mt-[80px] hidden md:flex w-full md:w-[60%] h-full items-center justify-center relative pt-8">
          <img
            src={girlImage}
            alt="Girl with laptop"
            className="w-auto h-auto max-h-[100%] max-w-[500px] object-contain drop-shadow-2xl z-20 -mr-20"
            style={{ filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[70%] h-full flex flex-col justify-center px-6 sm:px-10 md:pl-16 text-white relative">
          {/* Content */}
          <div className="relative z-20 w-full mx-auto text-center md:text-left flex flex-col justify-center items-center md:items-start gap-2 md:pt-[90px]">
            <h1 className="font-['Montserrat'] tracking-tight mb-4 md:mb-6 leading-none">
              <span className="text-white text-[20px] sm:text-4xl md:text-4xl lg:text-[55px] font-semibold block mb-2 tracking-tight">
                IT Managed Support
              </span>
              <span className="text-[19px] sm:text-2xl md:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 tracking-wide block">
                Wherever You Need It
              </span>
            </h1>

            <p className="font-['Montserrat'] text-white text-base text-[15px]sm:text-lg font-light max-w-[400px] md:max-w-2xl opacity-90 mb-6 md:mb-8">
              Trusted by businesses across EMEA and APAC to deliver fast, expert
              IT solutions on-site and on-demand.
            </p>

              <div className="flex flex-row gap-3 sm:gap-6 w-full sm:w-auto justify-center md:justify-start">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Montserrat'] inline-block px-4 py-2 sm:px-8 sm:py-4 bg-[#284885] text-white font-semibold text-xs sm:text-base rounded-lg hover:bg-[#2a4d8e] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[100px] sm:min-w-[160px] text-center"
                >
                  Contact us 
                </a>

                <Link
                  to={"/services"}
                  className="font-['Montserrat'] inline-block px-4 py-2 sm:px-8 sm:py-4 border-2 border-white text-white font-semibold text-xs sm:text-base rounded-lg hover:bg-white hover:text-[#284885] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[100px] sm:min-w-[160px] text-center"
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




