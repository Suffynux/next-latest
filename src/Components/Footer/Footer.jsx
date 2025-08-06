import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Send,
  Heart,
  Globe,
  Shield,
  Award,
  Clock,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const AnimatedFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/company/nextgrid-it",
      color: "hover:bg-blue-700",
      bgColor: "bg-blue-600",
    },
  ];

  const quickLinks = [
    { name: "About Us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact-us" },
  ];

  const services = [
    { name: "IT Managed Services", url: "/managed-services" },
    { name: "On-Demand Field Support (FSO)", url: "/it-service" },
    { name: "IT Asset Management", url: "/ITAsset-Management" },
    { name: "Network & User Support", url: "/network-support" },
    { name: "Project & Change Management", url: "/project-management" },
    { name: "Recruitment Services (Technical & IT)", url: "/tech-recruitment" },
    { name: "Creative & Digital Support", url: "/creative-support" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
    { name: "GDPR", url: "#" },
  ];

  const trustBadges = [
    { icon: <Shield className="w-6 h-6" />, text: "SSL Secured" },
    { icon: <Globe className="w-6 h-6" />, text: "Global Reach" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-pink-400 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-indigo-400 rotate-12 animate-bounce delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Stay Updated with Latest IT Trends
                </h3>
                <p className="text-gray-300">
                  Subscribe to our newsletter and get exclusive insights, IT
                  tips, and technology updates delivered to your inbox.
                </p>
              </div>
              <div className="relative">
                <div className="flex gap-3">
                  <div className="flex-1 relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-blue-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    type="button"
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                      isSubscribed
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                    }`}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <>
                        <span>Subscribed!</span>
                        <Heart className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                {isSubscribed && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium animate-bounce">
                    Thank you for subscribing! 🎉
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  NextGrid IT
                </h3>
                <p className="text-gray-300">
                  Transforming businesses through innovative technology
                  solutions. We're your trusted partner in digital
                  transformation and growth.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="text-blue-400 w-5 h-5 mt-1" />
                  <span>+44 783 262-2054</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="text-green-400 w-5 h-5 mt-1" />
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextgridit.co.uk"
                  >
                    {" "}
                    <span>info@nextgridit.co.uk</span>
                  </a>
                </div>
                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="text-red-400 w-5 h-5 mt-1" />
                  <span>
                    483 Green Lanes, London
                    <br />
                    United Kingdom, N13 4BS
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-4 border border-gray-700/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">Business Hours</span>
                </div>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>

                  <div>Sat - Sun: Urgent Support Only</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.url}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:text-blue-400">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.url}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition"
                    >
                      <ChevronRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:text-purple-400">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-6 text-white">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl ${social.bgColor} text-white hover:scale-105 transform transition`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <h5 className="text-lg font-semibold text-white mb-4">
                Trust & Security
              </h5>
              <div className="space-y-3">
                {trustBadges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-gray-300 group"
                  >
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition">
                      {badge.icon}
                    </div>
                    <span className="group-hover:text-white">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <span>© 2025 NextGrid IT</span>
                <span>|</span>
                  <span>Developed by <span><a 
                  target="_blank"
                  href="https://sufiyan-nine.vercel.app/">Suffynux</a></span></span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-4 m-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl z-50 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;
