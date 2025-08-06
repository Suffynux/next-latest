import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause, Building2, MapPin } from "lucide-react";

const reviews = [
  {
    companyName: "Retail Group",
    quote: "We had a last-minute issue with a client office in Paris and no one on our team could get there. NextGrid sent someone within hours knew exactly what to do, handled it, and even followed up the next day. That's the kind of reliability you don't find often.",
    name: "IT Lead",
    title: "IT Lead",
    industry: "Retail & E-commerce",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    featured: true,
    location: "France"
  },
  {
    companyName: "Logistics Firm",
    quote: "I've hired freelancers before it's always hit or miss. But working with NextGrid felt like having our own local IT team, just without the overhead. Everything was smooth: scheduling, updates, reporting. Zero headaches.",
    name: "COO",
    title: "Chief Operations Officer",
    industry: "Logistics & Transportation",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    featured: false,
    location: "Germany"
  },
  {
    companyName: "Co-Working Startup",
    quote: "When we expanded into five new cities, the biggest stress was figuring out how to support our teams technically. NextGrid just handled it. Engineers on the ground, remote support, setup. We didn't miss a beat.",
    name: "Founder",
    title: "Founder & CEO",
    industry: "Co-Working & Real Estate",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    featured: true,
    location: "Netherlands"
  },
  {
    companyName: "Fintech Scale-up",
    quote: "We needed hands-on support during an office move and didn't have enough internal staff. NextGrid filled the gap brilliantly. The team was on time, proactive, and completely in sync with our internal IT.",
    name: "IT Manager",
    title: "IT Manager",
    industry: "Financial Technology",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    featured: false,
    location: "UK"
  },
  {
    companyName: "Design Agency",
    quote: "I used to waste hours chasing freelance techs who'd go quiet mid-job. With NextGrid, one message and it's handled. No chasing, no follow-ups, they just get it done.",
    name: "Founder",
    title: "Founder & Creative Director",
    industry: "Design & Creative Services",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    featured: false,
    location: "UK"
  }
];

const AdvancedReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-5 h-5 transition-colors duration-200 ${
          idx < rating 
            ? "text-amber-400 fill-amber-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-sm">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-gray-600">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#003A75] to-[#2a4d8e] bg-clip-text text-transparent tracking-tight mb-4 ">
            Why Businesses Trust NextGrid IT
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real testimonials from clients who've experienced our reliable, professional IT support across Europe
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4 text-gray-600" />
                ) : (
                  <Play className="w-4 h-4 text-gray-600" />
                )}
                <span className="text-sm font-medium text-gray-600">
                  {isAutoPlaying ? "Pause" : "Play"}
                </span>
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? "bg-blue-600 scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider */}
          <div 
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                    {/* Featured Badge */}
                    {review.featured && (
                      <div className="absolute top-6 right-6 z-10">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Featured Review
                        </div>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 md:p-12">
                      {/* Quote Icon */}
                      <div className="absolute top-8 left-8 opacity-10">
                        <Quote className="w-16 h-16 text-blue-600" />
                      </div>

                      {/* Industry Information */}
                      <div className="flex justify-center mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100">
                          <div className="flex items-center gap-3">
                            <Building2 className="w-6 h-6 text-blue-600" />
                            <div className="text-center">
                              <h3 className="font-semibold text-lg text-gray-900">{review.industry}</h3>
                              <div className="flex items-center justify-center gap-1 mt-1">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-blue-600 font-medium">{review.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-8">
                        {renderStars(review.rating)}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center font-medium">
                        "{review.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-6 bg-gray-50 rounded-xl p-6">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                          <p className="text-blue-600 font-semibold">{review.title}</p>
                          <p className="text-sm text-gray-600 font-medium">{review.companyName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / reviews.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 text-sm text-gray-600 font-medium">
              <span>Review {currentSlide + 1}</span>
              <span>of {reviews.length}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedReviewSlider;