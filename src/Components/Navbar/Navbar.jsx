import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import dark from "../../assets/Images/dark.svg"
import light from "../../assets/Images/light.svg"
// import logo from "../../assets/Images/p;re.svg"

// The local image paths caused a compilation error previously. I've left the
// placeholders here to ensure the code works correctly. Please update these
// paths to your actual hosted logo files when you are ready.
const logoLight = light;
const logoDark = dark;

// Define all navigation items, including nested sub-links
const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  {
    name: "Services",
    path: "/services",
    subLinks: [
      { name: "IT Services", path: "/it-service" },
      { name: "Tech Recruitment", path: "/tech-recruitment" },
      { name: "IT Managed Services", path: "/managed-services" },
      { name: "IT Asset Management", path: "/ITAsset-Management" },
      { name: "Network & User Support", path: "/network-support" },
      { name: "Project Management", path: "/project-management" },
      { name: "Creative Support", path: "/creative-support" }
    ]
  },
  { name: "Contact us", path: "/contact-us" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedMobileService, setExpandedMobileService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page to determine navbar style
  const isHomePage = location.pathname === "/" || location.pathname === "/email-marketing";
  const isEmailMarketingPage = location.pathname === "/email-marketing";
  // Determine if the navbar should be non-transparent
  const isNavbarSolid = !isHomePage || scrolled;
  
  // Define page types that need specific spacing
  const needsDefaultSpacing = !isHomePage;

  // WhatsApp click handler (used by the compact top promo CTA)
  const handleWhatsAppClick = (e) => {
    // prevent Link navigation default if used
    if (e && e.preventDefault) e.preventDefault();
    const phoneNumber = "+923097972767";
    const message = "Hi! I'm interested in learning more about your email marketing services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    // open in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Measure promo bar height so the navbar sits flush without a gap
  const promoRef = useRef(null);
  const [promoHeight, setPromoHeight] = useState(0);
  useEffect(() => {
    const updatePromoHeight = () => {
      if (promoRef.current) {
        const { height } = promoRef.current.getBoundingClientRect();
        setPromoHeight(height);
      } else {
        setPromoHeight(0);
      }
    };

    updatePromoHeight();
    window.addEventListener('resize', updatePromoHeight);
    return () => window.removeEventListener('resize', updatePromoHeight);
  }, [isEmailMarketingPage]);

  const navTopOffset = isEmailMarketingPage ? Math.max(promoHeight - 1, 0) : 0;
  // Effect to handle the scroll event for changing navbar color
  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll threshold to 80px
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for mobile sub-menu expansion
  const toggleMobileSubMenu = (itemName) => {
    setExpandedMobileService(expandedMobileService === itemName ? null : itemName);
  };

  // Determine the text and logo color based on navbar state
  const textAndLogoColor = isNavbarSolid ? "text-gray-800" : "text-white";
  const logoSrc = isNavbarSolid ? logoDark : logoLight;

  return (
    <div className="relative">
      {isEmailMarketingPage && (
        <div ref={promoRef} className="fixed top-0 left-0 w-full z-[60]">
          <div className="bg-gradient-to-r from-[#00152d] via-[#042a53] to-[#0a3f7f] text-white/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] sm:text-xs leading-tight">
              <span className="font-semibold uppercase tracking-[0.18em] sm:tracking-[0.28em]">Black Friday Offer</span>

              <span className="text-white/80 normal-case sm:hidden">
                Save 20% on your first sprint this week.
              </span>
              <span className="hidden sm:inline text-white/80 normal-case">
                Secure 20% off your first email marketing sprint when you book this week.
              </span>

              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-1 rounded-full bg-white/15 hover:bg-white/25 text-white px-3 py-0.5 text-[10px] sm:text-xs font-semibold transition-colors duration-200"
                aria-label="Book a strategy call via WhatsApp"
              >
                Book a strategy call
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Main Navigation Bar */}
      <nav
        style={{ top: navTopOffset }}
        className={`fixed w-full left-0 z-50 transition-all duration-500
          ${isNavbarSolid
            ? "bg-white/90 backdrop-blur-md shadow-md text-gray-800"
            : "bg-transparent text-white"}`
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-10 md:h-14">
            {/* Logo - Dynamically changes based on screen size and scroll */}
            <Link to="/" className="flex-shrink-0">
              {/* Desktop Logo: Dynamic Source */}
              <img
                src={logoSrc}
                alt="Logo"
                className="h-16 w-auto hidden md:block transition-all duration-300"
              />
              {/* Mobile Logo: Always Dark */}
              <img
                src={logoDark}
                alt="Logo"
                className="h-16 w-auto block md:hidden transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium flex items-center rounded-full
                        hover:bg-white hover:text-[#003A75] transition-colors duration-200
                        ${textAndLogoColor}`
                      }
                    >
                      {item.name}
                      {item.subLinks && (
                        <span className="ml-1 text-xs">
                          <motion.span
                            animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            ▼
                          </motion.span>
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right-side Desktop Elements */}
            <div className="hidden md:flex items-center space-x-4">
              <div className={`flex items-center space-x-1 ${textAndLogoColor}`}>
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option className="text-gray-800">EN</option>
                  <option className="text-gray-800">PT</option>
                  <option className="text-gray-800">ES</option>
                </select>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-200 rounded-md
                  ${isNavbarSolid ? 'text-gray-800' : 'text-gray-800'} hover:bg-white/10`
                }
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Animated */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`md:hidden shadow-lg border-t z-50 ${
                isNavbarSolid
                  ? 'bg-white/95 border-gray-100'
                  : 'bg-[#0D1A2E]/95 border-white/10'
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-8 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subLinks ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubMenu(item.name)}
                          className={`w-full text-left px-3 py-2 text-base font-medium flex justify-between items-center rounded-md transition-colors ${
                            isNavbarSolid
                              ? 'text-gray-800 hover:bg-gray-100'
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {item.name}
                          <span
                            className={`transform transition-transform ${
                              expandedMobileService === item.name ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        <AnimatePresence>
                          {expandedMobileService === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div
                                className={`pl-4 pr-2 py-2 rounded-lg mx-3 mt-1 ${
                                  isNavbarSolid ? 'bg-gray-50' : 'bg-white/5'
                                }`}
                              >
                                {item.subLinks.map((link, idx) => (
                                  <Link
                                    key={idx}
                                    to={link.path}
                                    className={`block text-sm py-1 transition-colors ${
                                      isNavbarSolid
                                        ? 'text-gray-700 hover:text-[#003A75]'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                          isNavbarSolid
                            ? 'text-gray-800 hover:bg-gray-100'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Mobile Contact Button */}
                <div
                  className={`pt-4 mt-4 border-t ${
                    isNavbarSolid ? 'border-gray-200' : 'border-white/10'
                  }`}
                >
                  <Link
                    to="/contact-us"
                    className="w-full block text-center bg-[#003A75] hover:bg-[#1D5BA6] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Mega Menu for nested links */}
        <AnimatePresence>
          {hoveredItem && navItems.find(item => item.name === hoveredItem)?.subLinks && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40 transition-all duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredItem(hoveredItem)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navItems
                  .find((item) => item.name === hoveredItem)
                  .subLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="text-gray-800 hover:text-[#003A75] font-medium text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Conditional spacing div - only appears on non-home pages */}
      {/* {needsDefaultSpacing && <div className="h-16 md:h-20"></div>} */}
    </div>
  );
};

export default Navbar;
