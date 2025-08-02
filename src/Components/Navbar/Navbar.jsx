import React, { useState } from 'react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/Images/logo.svg";
import { Link } from 'react-router-dom';

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    content: {
      sections: [
        {
          title: "IT Managed Services",
          items: [
            "End-to-end infrastructure management",
            "24/7 remote monitoring & support",
            "Proactive maintenance and issue resolution",
            "SLA-driven service delivery"
          ]
        },
        {
          title: "On-Demand Field Support (FSO)",
          items: [
            "On-site troubleshooting and hardware support",
            "Device deployment and relocation",
            "Engineer dispatch and hands-on assistance across the UK"
          ]
        },
        {
          title: "IT Asset Management",
          items: [
            "IT asset tracking and lifecycle management",
            "Procurement support and vendor coordination",
            "IT Asset Disposal (ITAD) – secure and compliant"
          ]
        }
      ],
      rightSections: [
        {
          title: "Network & User Support",
          items: [
            "Network performance optimization",
            "User account and access management",
            "Software installations, updates, and troubleshooting"
          ]
        },
        {
          title: "Project & Change Management",
          items: [
            "Office moves and tech upgrades",
            "Infrastructure scaling",
            "Cloud migration support",
            "Transition planning and execution"
          ]
        },
        {
          title: "Recruitment Services (Technical & IT)",
          items: [
            "Full-time and contract-based IT staffing",
            "Technical interview screening and assessments",
            "Offshore and onshore hiring support"
          ]
        },
        {
          title: "Creative & Digital Support",
          items: [
            "UI/UX design and prototyping",
            "Logo and brand identity creation",
            "Website design (WordPress/Custom)",
            "Content writing and visual assets for tech companies"
          ]
        }
      ]
    }
  },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedMobileService, setExpandedMobileService] = useState(null);

  const handleMobileServiceClick = (serviceName) => {
    setExpandedMobileService(prev =>
      prev === serviceName ? null : serviceName
    );
  };

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                      {item.content && <span className="ml-1">▼</span>}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side desktop */}
            <div className="hidden md:flex items-center space-x-[20px]">
              <Link
                to="/contact-us"
                className="bg-[#003A75] hover:bg-[#1D5BA6] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
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
                      {item.content ? (
                        <>
                          <button
                            onClick={() => handleMobileServiceClick(item.name)}
                            className="w-full text-left text-[#003A75] hover:bg-blue-50 px-3 py-2 text-base font-medium flex justify-between items-center"
                          >
                            {item.name}
                            <span className={`transform transition-transform ${expandedMobileService === item.name ? 'rotate-180' : ''}`}>▼</span>
                          </button>

                          <AnimatePresence>
                            {expandedMobileService === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 bg-gray-50 rounded-lg mx-3 mb-2">
                                  {[...item.content.sections, ...item.content.rightSections].map((section, idx) => (
                                    <div key={idx} className="mb-4">
                                      <h4 className="font-semibold text-[#003A75] text-sm mb-2">{section.title}</h4>
                                      <ul className="space-y-1">
                                        {section.items.map((subItem, subIndex) => (
                                          <li key={subIndex} className="text-gray-600 text-xs py-1 hover:text-[#003A75]">• {subItem}</li>
                                        ))}
                                      </ul>
                                    </div>
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
      <AnimatePresence>
        {hoveredItem && navItems.find(item => item.name === hoveredItem)?.content && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setHoveredItem(hoveredItem)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 gap-8">
              {[...navItems.find(item => item.name === hoveredItem).content.sections,
                ...navItems.find(item => item.name === hoveredItem).content.rightSections
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((subItem, i) => (
                      <li key={i} className="text-gray-600 hover:text-[#003A75] text-sm flex items-center group transition-colors">
                        {subItem}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
