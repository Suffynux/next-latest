import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';


const ProjectChangeManagement = () => {
  // Navigation handler - replace with Link component in your app
  const navigator = useNavigate()
  const handleNavigation = () => {
    // For React Router: navigate('/contact-us')
    navigator('/contact-us');
  };

  const content = (
    <MainLayout>
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-[#284885] px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section with Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2a4d8e] mb-4">
              Project & Change Management
            </h1>
            <p className="text-lg text-[#284885] opacity-90">
              Seamless delivery of critical IT projects and infrastructure transitions.
            </p>
            <div className="pt-4">
              <button
                onClick={handleNavigation}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
              >
                Planning a move or upgrade? We're ready
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-xl overflow-hidden h-80 shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project & Change Management" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a4d8e]/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="pt-12">
          <h2 className="text-3xl font-semibold text-[#2a4d8e] mb-8 pb-2 border-b border-[#284885]/20">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Office relocation planning, IT setup, and vendor coordination',
              'Cloud migration for storage, productivity, and compute workloads',
              'Infrastructure scaling and backup modernisation',
              'Transition governance, change control, and communication planning',
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

        {/* Two Column Layout for Additional Info */}
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
                <span className="text-[#284885]">End-user training and documentation</span>
              </li>
            </ul>
          </div>

          {/* Who It's For */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2a4d8e] to-[#284885] rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h2 className="text-2xl text-[#2a4d8e] font-semibold">Who It's For</h2>
            </div>
            <p className="text-[#284885] leading-relaxed">
              Businesses expanding, modernising legacy tech, or consolidating IT systems.
            </p>
            <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Who It's For" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a4d8e]/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Value Proposition Card */}
        <div className="relative bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white p-8 rounded-xl mt-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4">Why It Works</h2>
            <p className="text-white/90 max-w-2xl">
              We manage everything from planning to post-migration support — so you can focus on continuity.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-16">
          <h3 className="text-2xl text-[#2a4d8e] font-medium mb-6">
            Ready to execute your next IT transformation?
          </h3>
          <button
            onClick={handleNavigation}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
    </MainLayout>
  );


  
  return content;
};

export default ProjectChangeManagement;