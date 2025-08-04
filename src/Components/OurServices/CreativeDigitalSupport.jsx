import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const CreativeDigitalSupport = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  return (
    <MainLayout>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-[#284885] px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2a4d8e] mb-4">
                Creative & Digital Support
              </h1>
              <p className="text-lg text-[#284885] opacity-90">
                Tech-focused creative services to build and support your brand.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleNavigation}
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Let’s build your brand’s digital presence
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-xl overflow-hidden h-80 shadow-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Creative & Digital Support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a4d8e]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="pt-12">
            <h2 className="text-3xl font-semibold text-[#2a4d8e] mb-8 pb-2 border-b border-[#284885]/20">
              Our Core Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'UI/UX design for web and product interfaces',
                'Website builds (WordPress, headless CMS, custom platforms)',
                'Logo design and brand guideline development',
                'SEO-optimised copy and visual content for tech marketing',
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white hover:bg-[#284885]/5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
                >
                  <CheckCircle className="text-[#2a4d8e] mt-1 flex-shrink-0" size={22} />
                  <p className="text-[#284885]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Add-on Services */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h2 className="text-2xl text-[#2a4d8e] font-semibold">Add-on Services</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-[#2a4d8e] mt-1" size={18} />
                  <span className="text-[#284885]">Hosting, maintenance, and versioning support</span>
                </li>
              </ul>
            </div>

            {/* Best For */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h2 className="text-2xl text-[#2a4d8e] font-semibold">Best For</h2>
              </div>
              <p className="text-[#284885] leading-relaxed">
                Tech startups, SaaS companies, MSPs, and IT service providers looking to elevate their brand.
              </p>
              <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" 
                  alt="Best For" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a4d8e]/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Why Nextgrid Section */}
          <div className="relative bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white p-8 rounded-xl mt-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">Why Nextgrid</h2>
              <p className="text-white/90 max-w-2xl  ">
                We combine tech literacy with creative clarity — making your brand message feel current and professional.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center pt-16">
            <h3 className="text-2xl text-[#2a4d8e] font-medium mb-6 ">
              Ready to elevate your brand identity?
            </h3>
            <button
              onClick={handleNavigation}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Let’s Get Started
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreativeDigitalSupport;
