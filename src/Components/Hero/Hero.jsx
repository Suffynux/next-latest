// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const videoRef = useRef(null);

//   const videos = [
//     "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
//     "https://videos.pexels.com/video-files/31710198/13510814_2560_1440_30fps.mp4",
//     "https://videos.pexels.com/video-files/7140928/7140928-uhd_2560_1440_24fps.mp4"
//   ];

//   // Initialize video playback when component mounts
//   useEffect(() => {
//     const videoElement = videoRef.current;
    
//     const handlePlayback = () => {
//       if (videoElement) {
//         videoElement.play().catch(error => {
//           console.error("Autoplay failed:", error);
//           // Fallback: Try playing after user interaction
//           document.addEventListener('click', () => {
//             videoElement.play().catch(e => console.error("Still can't play:", e));
//           }, { once: true });
//         });
//       }
//     };

//     const handleLoadedData = () => {
//       setIsVideoLoaded(true);
//       handlePlayback();
//     };

//     if (videoElement) {
//       videoElement.addEventListener('loadeddata', handleLoadedData);
//       videoElement.addEventListener('ended', () => handleNextVideo());
      
//       // Try to play immediately if already loaded
//       if (videoElement.readyState >= 3) {
//         handleLoadedData();
//       }
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener('loadeddata', handleLoadedData);
//         videoElement.removeEventListener('ended', () => handleNextVideo());
//       }
//     };
//   }, []);

//   // Handle video index changes
//   useEffect(() => {
//     setIsVideoLoaded(false);
//     const videoElement = videoRef.current;
    
//     if (videoElement) {
//       const handleCanPlay = () => {
//         setIsVideoLoaded(true);
//         videoElement.play().catch(error => {
//           console.error("Playback failed on video change:", error);
//         });
//       };

//       videoElement.addEventListener('canplay', handleCanPlay, { once: true });
      
//       return () => {
//         videoElement.removeEventListener('canplay', handleCanPlay);
//       };
//     }
//   }, [videoIndex]);

//   const handleNextVideo = () => {
//     setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//   };

//   const handlePrevVideo = () => {
//     setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
//   };

//   return (
//     <section className="relative w-full h-screen flex items-start justify-start text-white overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         key={videoIndex}
//         className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${isVideoLoaded ? 'opacity-50' : 'opacity-0'}`}
//         autoPlay
//         muted
//         playsInline
//         loop
//         preload="auto"
//       >
//         <source src={videos[videoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10"></div>

//       {/* Content Aligned Left */}
//       <div className="relative z-20 px-6 md:px-12 lg:px-24 pt-32 max-w-3xl text-left">
//         <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
//           IT Managed Support. Wherever You Need It.
//         </h1>
//         <p className="text-lg md:text-xl font-light mb-6">
//           Trusted by businesses across Europe and APAC to deliver fast, expert IT solutions—on-site and on-demand.
//         </p>
//         <div className="space-x-4">
//           <Link to="/contact-us" className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md  transition-colors duration-300 hover:bg-[#1D5BA6] hover:text-white">
//             Contact us
//           </Link>
//           <Link to="/services" className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-[#1D5BA6] hover:text-white   transition-colors duration-300">
//             Services
//           </Link>
//         </div>
//       </div>

//       {/* Video Navigation Arrows - Fixed Click Area */}
//       <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
//         <div 
//           onClick={handlePrevVideo}
//           className="p-4 text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer pointer-events-auto"
//           aria-label="Previous Video"
//           role="button"
//         >
//           <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
//         </div>
        
//         <div 
//           onClick={handleNextVideo}
//           className="p-4 text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer pointer-events-auto"
//           aria-label="Next Video"
//           role="button"
//         >
//           <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
//         </div>
//       </div>

//       {/* Bottom Center Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {videos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setVideoIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${index === videoIndex ? 'bg-white w-4' : 'bg-white/30'}`}
//             aria-label={`Go to video ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/30 to-black/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-start h-full">
          {/* Main Content */}
          <div className="max-w-4xl lg:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 sm:mb-6 leading-tight">
              IT Managed Support. 
              <span className="block">Wherever You Need It.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
              Trusted by businesses across Europe and APAC to deliver fast, expert IT solutions—on-site and on-demand.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start">
              <a 
                href="/contact-us" 
                className="w-full sm:w-auto inline-block px-8 py-4 bg-[#284885] text-white font-semibold rounded-lg hover:bg-[#2a4d8e] transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center min-w-[160px]"
              >
                Contact Us
              </a>
              <a 
                href="/services" 
                className="w-full sm:w-auto inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#284885] transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center min-w-[160px]"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
        <button 
          onClick={handlePrevVideo}
          className="p-2 sm:p-3 lg:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group cursor-pointer pointer-events-auto backdrop-blur-sm"
          aria-label="Previous Video"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
        
        <button 
          onClick={handleNextVideo}
          className="p-2 sm:p-3 lg:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group cursor-pointer pointer-events-auto backdrop-blur-sm"
          aria-label="Next Video"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Bottom Center Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setVideoIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 hover:bg-white/80 ${
              index === videoIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 w-2 hover:w-4'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs uppercase tracking-wider font-medium rotate-90 origin-center whitespace-nowrap">
            Scroll Down
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;