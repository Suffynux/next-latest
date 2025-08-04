import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const videos = [
    "https://videos.pexels.com/video-files/8302395/8302395-uhd_2732_1440_25fps.mp4",
  ];

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayback = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.error("Autoplay failed:", error);
          document.addEventListener(
            "click",
            () => {
              videoElement
                .play()
                .catch((e) => console.error("Still can't play:", e));
            },
            { once: true }
          );
        });
      }
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      handlePlayback();
    };

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
      videoElement.addEventListener("ended", handleNextVideo);

      if (videoElement.readyState >= 3) {
        handleLoadedData();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
        videoElement.removeEventListener("ended", handleNextVideo);
      }
    };
  }, []);

  const handleNextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    setIsVideoLoaded(false);
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        videoElement.play().catch((error) => {
          console.error("Playback failed on video change:", error);
        });
      };

      videoElement.addEventListener("canplay", handleCanPlay, { once: true });

      return () => {
        videoElement.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [videoIndex]);

  return (
    <section className="min-h-screen h-screen relative w-full flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black px-4 sm:px-6">
      {/* Video Background */}
      <video
        ref={videoRef}
        key={videoIndex}
        className={`absolute top-0 left-0 min-h-screen w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-50" : "opacity-0"
        }`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={videos[videoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-white font-bold uppercase leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-[60px] tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#284885] to-[#2a4d8e]">
          IT Managed Support
          <br className="hidden sm:block" />
          <span className="block">Wherever You Need It</span>
        </h1>



        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl font-light max-w-[400px] md:max-w-2xl opacity-90 mb-8">
          Trusted by businesses across ENEA and APAC to deliver fast, expert
          IT solutions on-site and on-demand.
        </p>

        <div className=" flex-col sm:flex-row gap-4 sm:gap-6 hidden md:flex ">
          <Link
            to={"/contact-us"}
            className="inline-block px-8 py-4 bg-[#284885] text-white font-semibold rounded-lg hover:bg-[#2a4d8e] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] text-center"
          >
            Contact Us
          </Link>

          <Link
            to={"/services"}
            className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#284885] transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] text-center"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs uppercase tracking-wider font-medium rotate-90 whitespace-nowrap">
            Scroll Down
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
