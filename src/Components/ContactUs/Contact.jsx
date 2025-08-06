// import React from 'react';
// import { Mail, MapPin, Clock, Phone } from 'lucide-react';
// import MainLayout from "../Layout/MainLayout"

// const ContactPage = () => {
//   return (
//     <MainLayout>  
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
//             <p className="text-lg text-gray-600">Get in touch with our team of experts</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Column - Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 Ready to transform your business with innovative IT solutions? Our team of experts 
//                 is here to help you achieve your digital goals. Reach out to us and let's discuss 
//                 how we can drive your success forward.
//               </p>
//             </div>

//             {/* Contact Cards */}
//             <div className="space-y-6">
              
//               {/* Email Card */}
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
//                     <p className="text-gray-600 mb-4">Send us a message and we'll respond within 24 hours</p>
//                     <a 
//                       href="mailto:info@nextgridit.com"
//                       className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
//                     >
//                       info@nextgridit.com
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Business Hours Card */}
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
//                     <Clock className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
//                     <div className="space-y-2 text-gray-600">
//                       <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
//                       <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
//                       <p><span className="font-medium">Sunday:</span> Closed</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Response Time Card */}
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-700 transition-colors duration-300">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
//                     <p className="text-gray-600">
//                       We pride ourselves on fast response times. Most inquiries are answered within 
//                       24 hours during business days.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - CTA Section */}
//           <div className="lg:pl-8">
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white relative overflow-hidden">
//               {/* Background decoration */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
//                 <p className="text-blue-100 text-lg mb-8 leading-relaxed">
//                   Transform your business with our comprehensive IT solutions. From web development 
//                   to digital marketing, we have the expertise to elevate your digital presence.
//                 </p>
                
//                 <div className="space-y-6 mb-8">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
//                     <span className="text-blue-100">Web Development & Design</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
//                     <span className="text-blue-100">Mobile App Development</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
//                     <span className="text-blue-100">SEO & Digital Marketing</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
//                     <span className="text-blue-100">Software Development</span>
//                   </div>
//                 </div>
                
//                 <a
//                   href="mailto:info@nextgridit.com?subject=Project Inquiry&body=Hello NextGrid IT team,%0D%0A%0D%0AI'm interested in learning more about your services."
//                   className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <Mail className="w-5 h-5 mr-2" />
//                   Send Us a Message
//                 </a>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose NextGrid IT?</h4>
//               <div className="space-y-4 text-gray-600">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
//                   <p>Expert team with years of industry experience</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
//                   <p>Cutting-edge technology and modern solutions</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
//                   <p>Dedicated support and maintenance</p>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
//                   <p>Competitive pricing and flexible packages</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer CTA */}
//       <div className="bg-gray-50 border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="text-center">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               Let's Build Something Amazing Together
//             </h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Every great project starts with a conversation. Reach out to us today and let's 
//               discuss how we can help bring your vision to life.
//             </p>
//             <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//               <Clock className="w-4 h-4" />
//               <span>Usually responds within 24 hours</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </MainLayout >
//   );
// };

// export default ContactPage;

import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import MainLayout from "../Layout/MainLayout"

const ContactPage = () => {
  // Function to handle email click with better compatibility
  const handleEmailClick = (email, subject = '', body = '') => {
    console.log("clicked");
    console.log(email , subject,body);
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <MainLayout>  
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
            <p className="text-lg text-gray-600">Get in touch with our team of experts</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to transform your business with innovative IT solutions? Our team of experts 
                is here to help you achieve your digital goals. Reach out to us and let's discuss 
                how we can drive your success forward.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-4">Send us a message and we'll respond within 24 hours</p>
                    <button 
                      onClick={() => handleEmailClick('info@nextgridit.com')}
                      className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 text-left"
                    >
                      info@nextgridit.com
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM</p>
                      <p><span className="font-medium">Saturday:</span>      Urgent Support Only</p>
                      <p><span className="font-medium">Sunday:</span> Urgent Support Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-700 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-600">
                      We pride ourselves on fast response times. Most inquiries are answered within 
                      24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Section */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Transform your business with our comprehensive IT solutions. From web development 
                  to digital marketing, we have the expertise to elevate your digital presence.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Web Development & Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Mobile App Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">SEO & Digital Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Software Development</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleEmailClick(
                    'info@nextgridit.com', 
                    'Project Inquiry', 
                    'Hello NextGrid IT team,\n\nI\'m interested in learning more about your services.'
                  )}
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Us a Message
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose NextGrid IT?</h4>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <p>Expert team with years of industry experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <p>Cutting-edge technology and modern solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <p>Dedicated support and maintenance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <p>Competitive pricing and flexible packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
    </MainLayout >
  );
};

export default ContactPage;