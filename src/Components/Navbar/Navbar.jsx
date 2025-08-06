import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/Images/logo.svg";
import { Link } from 'react-router-dom';

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    subLinks: [
      { name: "IT Services", path: "/it-service" },
      { name: "Tech Recruitment", path: "/tech-recruitment" },
      { name: "Managed Services", path: "/managed-services" },
      { name: "IT Asset Management", path: "/ITAsset-Management" },
      { name: "Network & User Support", path: "/network-support" },
      { name: "Project Management", path: "/project-management" },
      { name: "Creative Support", path: "/creative-support" }
    ]
  },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedMobileService, setExpandedMobileService] = useState(false);

  return (
    <div className="relative">
      {/* Changed nav to fixed position with high z-index */}
      <nav className="fixed w-full bg-white shadow-sm border-b border-gray-100 z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Nextgrid IT Logo" className="h-[80px] w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.path}
                      className="text-[#003A75] hover:text-[#1D5BA6] px-3 py-2 text-sm font-medium flex items-center"
                    >
                      {item.name}
                      {item.subLinks && <span className="ml-1">▼</span>}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side desktop */}
            <div className="hidden md:flex items-center space-x-[20px]">
         
              <div className="flex items-center space-x-1 text-[#003A75]">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                  <option>EN</option>
                  <option>PT</option>
                  <option>ES</option>
                </select>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#003A75] hover:text-[#1D5BA6] p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden border-t border-gray-100"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.subLinks ? (
                        <>
                          <button
                            onClick={() => setExpandedMobileService(!expandedMobileService)}
                            className="w-full text-left text-[#003A75] hover:bg-blue-50 px-3 py-2 text-base font-medium flex justify-between items-center"
                          >
                            {item.name}
                            <span className={`transform transition-transform ${expandedMobileService ? 'rotate-180' : ''}`}>▼</span>
                          </button>

                          <AnimatePresence>
                            {expandedMobileService && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 bg-gray-50 rounded-lg mx-3 mb-2">
                                  {item.subLinks.map((link, idx) => (
                                    <Link
                                      key={idx}
                                      to={link.path}
                                      className="block text-sm text-gray-700 hover:text-[#003A75] py-1"
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
                          className="text-[#003A75] hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  <div className="pt-4 pb-2 border-t border-gray-100">
                    <Link
                      to="/contact-us"
                      className="w-full block text-center bg-[#003A75] hover:bg-[#1D5BA6] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mb-3"
                    >
                      Contact Us →
                    </Link>
                    <div className="flex items-center justify-center px-3">
                      <div className="flex items-center space-x-1 text-[#003A75]">
                        <Globe className="w-4 h-4" />
                        <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                          <option>EN</option>
                          <option>PT</option>
                          <option>ES</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mega Menu */}
   {/* Mega Menu */}
<AnimatePresence>
  {hoveredItem === "Services" && (
    <motion.div
      className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHoveredItem("Services")}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-6">
        {navItems.find(item => item.name === "Services").subLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="text-[#003A75] hover:text-[#1D5BA6] font-medium text-sm"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Add padding to the content below the navbar to prevent overlap */}
      <div className="pt-[80px]"></div>
    </div>
  );
};

export default Navbar;