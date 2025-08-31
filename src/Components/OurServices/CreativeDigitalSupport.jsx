import React from 'react';
import { CheckCircle, ArrowRight, Code, ShoppingCart, BarChart3 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const CreativeDigitalSupport = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact-us');
  };

  const coreServices = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Bespoke websites and applications built for performance and scalability.',
      path: '/services/creative-support/custom-web-development'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      description: 'Custom themes, apps, and integrations for your Shopify e-commerce store.',
      path: '/services/creative-support/shopify-development'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Data-driven strategies including SEO, PPC, and content to grow your online presence.',
      path: '/services/creative-support/digital-marketing'
    }
  ];

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
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <Link
                  to={service.path}
                  key={index} 
                  className="flex flex-col p-6 bg-white hover:bg-[#284885]/5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 border border-gray-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2a4d8e]">{service.title}</h3>
                  </div>
                  <p className="text-[#284885] flex-grow">{service.description}</p>
                  <div className="mt-4 text-right">
                    <span className="text-[#2a4d8e] font-semibold group-hover:text-blue-500">
                      Learn More <ArrowRight className="inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
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
