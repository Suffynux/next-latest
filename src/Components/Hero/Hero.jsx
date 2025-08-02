import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const videos = [
    "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/31710198/13510814_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/7140928/7140928-uhd_2560_1440_24fps.mp4"
  ];

  // Initialize video playback when component mounts
  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handlePlayback = () => {
      if (videoElement) {
        videoElement.play().catch(error => {
          console.error("Autoplay failed:", error);
          // Fallback: Try playing after user interaction
          document.addEventListener('click', () => {
            videoElement.play().catch(e => console.error("Still can't play:", e));
          }, { once: true });
        });
      }
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      handlePlayback();
    };

    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('ended', () => handleNextVideo());
      
      // Try to play immediately if already loaded
      if (videoElement.readyState >= 3) {
        handleLoadedData();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('ended', () => handleNextVideo());
      }
    };
  }, []);

  // Handle video index changes
  useEffect(() => {
    setIsVideoLoaded(false);
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        videoElement.play().catch(error => {
          console.error("Playback failed on video change:", error);
        });
      };

      videoElement.addEventListener('canplay', handleCanPlay, { once: true });
      
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [videoIndex]);

  const handleNextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <section className="relative w-full h-screen flex items-start justify-start text-white overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        key={videoIndex}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${isVideoLoaded ? 'opacity-50' : 'opacity-0'}`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={videos[videoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10"></div>

      {/* Content Aligned Left */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 pt-32 max-w-3xl text-left">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
          IT Managed Support. Wherever You Need It.
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          Trusted by businesses across Europe and APAC to deliver fast, expert IT solutions—on-site and on-demand.
        </p>
        <div className="space-x-4">
          <Link to="/contact-us" className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md  transition-colors duration-300 hover:bg-[#1D5BA6] hover:text-white">
            Contact us
          </Link>
          <Link to="/services" className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-[#1D5BA6] hover:text-white   transition-colors duration-300">
            Services
          </Link>
        </div>
      </div>

      {/* Video Navigation Arrows - Fixed Click Area */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
        <div 
          onClick={handlePrevVideo}
          className="p-4 text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer pointer-events-auto"
          aria-label="Previous Video"
          role="button"
        >
          <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </div>
        
        <div 
          onClick={handleNextVideo}
          className="p-4 text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer pointer-events-auto"
          aria-label="Next Video"
          role="button"
        >
          <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </div>
      </div>

      {/* Bottom Center Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === videoIndex ? 'bg-white w-4' : 'bg-white/30'}`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;