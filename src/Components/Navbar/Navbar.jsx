import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import logo from "../../assets/Images/logo.png"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Nextgrid IT Logo" 
              className="h-[80px] md:h-[100px] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Solutions", "Industries", "Insights", "About us", "Careers"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#003A75] hover:text-[#1D5BA6] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-[20px]">
            {/* Contact Us Button */}
            <button className="bg-[#003A75] hover:bg-[#1D5BA6] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center">
              Contact Us
              <span className="ml-2">→</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-[#003A75]">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                <option>EN</option>
                <option>PT</option>
                <option>ES</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#003A75] hover:text-[#1D5BA6] p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {["Solutions", "Industries", "Insights", "Stefanini", "Careers"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#003A75] hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-100">
                <button className="w-full bg-[#003A75] hover:bg-[#1D5BA6] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mb-3">
                  Contact Us →
                </button>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
