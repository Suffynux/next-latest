// import React, { useState } from 'react';
// import { Globe, Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from "../../assets/Images/logo.png";

// const navItems = ["Services", "Industries", "About us", "Contact us"];

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div
//             className="flex-shrink-0"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src={logo}
//               alt="Nextgrid IT Logo"
//               className="h-[80px] md:h-[100px] w-auto"
//             />
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <motion.div
//               className="ml-10 flex items-baseline space-x-8"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.1,
//                   },
//                 },
//               }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item}
//                   href="#"
//                   className="text-[#003A75] hover:text-[#1D5BA6] px-3 py-2 text-sm font-medium transition-colors"
//                   variants={{
//                     hidden: { opacity: 0, y: -10 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right side controls */}
//           <div className="hidden md:flex items-center space-x-[20px]">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#003A75] hover:bg-[#1D5BA6] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
//             >
//               Contact Us
//               <span className="ml-2">→</span>
//             </motion.button>

//             <div className="flex items-center space-x-1 text-[#003A75]">
//               <Globe className="w-4 h-4" />
//               <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
//                 <option>EN</option>
//                 <option>PT</option>
//                 <option>ES</option>
//               </select>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-[#003A75] hover:text-[#1D5BA6] p-2"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               className="md:hidden border-t border-gray-100"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//                 {navItems.map((item) => (
//                   <motion.a
//                     key={item}
//                     href="#"
//                     className="text-[#003A75] hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors"
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {item}
//                   </motion.a>
//                 ))}
//                 <div className="pt-4 pb-2 border-t border-gray-100">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full bg-[#003A75] hover:bg-[#1D5BA6] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mb-3"
//                   >
//                     Contact Us →
//                   </motion.button>
//                   <div className="flex items-center justify-center px-3">
//                     <div className="flex items-center space-x-1 text-[#003A75]">
//                       <Globe className="w-4 h-4" />
//                       <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
//                         <option>EN</option>
//                         <option>PT</option>
//                         <option>ES</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    name: "Services",
    content: {
      sections: [
        {
          title: "IT Infrastructure & Support",
          items: [
            "IT Managed Services",
            "24/7 Remote Monitoring & Support",
            "On-Demand Field Support (FSO)",
            "Network & User Support",
            "Proactive Maintenance"
          ]
        },
        {
          title: "Asset & Project Management",
          items: [
            "IT Asset Management",
            "IT Asset Disposal (ITAD)",
            "Project & Change Management",
            "Cloud Migration Support",
            "Office Moves & Tech Upgrades"
          ]
        },
        {
          title: "Staffing & Creative Services",
          items: [
            "Technical & IT Recruitment",
            "Offshore & Onshore Hiring",
            "UI/UX Design & Prototyping",
            "Website Design (WordPress/Custom)",
            "Brand Identity & Logo Creation"
          ]
        }
      ],
      rightSections: [
        "End-to-end Infrastructure Management",
        "SLA-driven Service Delivery",
        "Device Deployment & Relocation",
        "Engineer Dispatch Across UK",
        "Procurement Support",
        "Vendor Coordination",
        "Network Performance Optimization",
        "Software Installations & Updates",
        "Infrastructure Scaling",
        "Technical Interview Screening",
        "Content Writing & Visual Assets"
      ],
      featured: {
        title: "Comprehensive IT Solutions Tailored for Your Business Growth",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop"
      }
    }
  },
  { name: "Industries" },
  { name: "About us" },
  { name: "Contact us" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[80px] md:h-[100px] w-32 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                LOGO
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div
                className="ml-10 flex items-baseline space-x-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <a
                      href="#"
                      className="text-[#003A75] hover:text-[#1D5BA6] px-3 py-2 text-sm font-medium transition-colors flex items-center"
                    >
                      {item.name}
                      {item.content && <span className="ml-1">▼</span>}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side controls */}
            <div className="hidden md:flex items-center space-x-[20px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#003A75] hover:bg-[#1D5BA6] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Contact Us
                <span className="ml-2">→</span>
              </motion.button>

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
                    <motion.a
                      key={item.name}
                      href="#"
                      className="text-[#003A75] hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div className="pt-4 pb-2 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#003A75] hover:bg-[#1D5BA6] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mb-3"
                    >
                      Contact Us →
                    </motion.button>
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

      {/* Mega Menu Dropdown */}
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Featured Content */}
                <div className="col-span-3">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <img 
                      src={navItems.find(item => item.name === hoveredItem)?.content.featured.image}
                      alt="Featured"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {navItems.find(item => item.name === hoveredItem)?.content.featured.title}
                    </h3>
                    <button className="text-[#003A75] hover:text-[#1D5BA6] text-sm font-medium flex items-center">
                      LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Main Sections */}
                <div className="col-span-6">
                  <div className="grid grid-cols-3 gap-6">
                    {navItems.find(item => item.name === hoveredItem)?.content.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a 
                                href="#" 
                                className="text-gray-600 hover:text-[#003A75] text-sm transition-colors flex items-center group"
                              >
                                {subItem}
                                <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side Items */}
                <div className="col-span-3">
                  <div className="space-y-3">
                    {navItems.find(item => item.name === hoveredItem)?.content.rightSections.map((rightItem, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="block text-gray-600 hover:text-[#003A75] text-sm transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          {rightItem}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;