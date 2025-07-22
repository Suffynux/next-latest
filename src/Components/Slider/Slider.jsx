import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const reviews = [
  {
    logo: "https://via.placeholder.com/120x60/4F46E5/ffffff?text=ACME+Corp",
    companyName: "ACME Corporation",
    quote: "The team is engaged and proud to work for our clients and adapt to changing needs quickly. Their dedication to excellence has transformed our entire digital infrastructure.",
    name: "Sarah Johnson",
    title: "Global IT Director",
    industry: "Technology & Software",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/EC4899/ffffff?text=SJ",
    featured: true
  },
  {
    logo: "https://via.placeholder.com/120x60/059669/ffffff?text=GreenTech",
    companyName: "GreenTech Solutions",
    quote: "They are very flexible when we need additional resources or shift priorities. The level of professionalism and technical expertise exceeded our expectations.",
    name: "Michael Chen",
    title: "Director of IT Operations",
    industry: "Energy & Utilities",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/0EA5E9/ffffff?text=MC",
    featured: false
  },
  {
    logo: "https://via.placeholder.com/120x60/DC2626/ffffff?text=TechFlow",
    companyName: "TechFlow Industries",
    quote: "Processes are well followed, and issues are resolved quickly when escalated. Their proactive approach has significantly reduced our operational overhead.",
    name: "Emily Rodriguez",
    title: "IT Manager",
    industry: "Manufacturing",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/7C3AED/ffffff?text=ER",
    featured: false
  },
  {
    logo: "https://via.placeholder.com/120x60/F59E0B/ffffff?text=InnovateCo",
    companyName: "InnovateCo",
    quote: "Outstanding service delivery and innovation. They've helped us scale our operations seamlessly while maintaining the highest security standards.",
    name: "David Park",
    title: "Chief Technology Officer",
    industry: "Financial Services",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/10B981/ffffff?text=DP",
    featured: true
  },
  {
    logo: "https://via.placeholder.com/120x60/8B5CF6/ffffff?text=DataCorp",
    companyName: "DataCorp Analytics",
    quote: "Their expertise in cloud migration and data management is unparalleled. The project was delivered on time and exceeded all performance metrics.",
    name: "Lisa Wang",
    title: "VP of Engineering",
    industry: "Data & Analytics",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/F97316/ffffff?text=LW",
    featured: false
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
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-sm">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-gray-600">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results
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

                      {/* Company Logo */}
                      <div className="flex justify-center mb-8">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <img
                            src={review.logo}
                            alt={`${review.companyName} Logo`}
                            className="h-12 object-contain"
                          />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-6">
                        {renderStars(review.rating)}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                        "{review.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-6">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-16 h-16 rounded-full shadow-lg"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-lg text-gray-900">{review.name}</h4>
                          <p className="text-blue-600 font-medium">{review.title}</p>
                          <p className="text-sm text-gray-500">{review.industry}</p>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div className="mt-6 text-center">
                        <p className="text-sm font-medium text-gray-500">
                          {review.companyName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / reviews.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
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