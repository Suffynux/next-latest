import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const features = [
    "Search Engine Optimization (SEO) for tech companies",
    "Pay-Per-Click (PPC) campaign management",
    "Content marketing and strategy",
    "Social media management and advertising",
    "Email marketing and automation",
    "Analytics and performance reporting"
  ];

  return (
    <MainLayout>
      <section className="bg-white text-[#284885] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <button
              onClick={() => navigate('/creative-support')}
              className="inline-flex items-center text-[#284885] hover:text-[#2a4d8e] font-semibold transition-colors group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Creative Services
            </button>
          </div>

          <div className="text-center mb-16">
            <BarChart3 className="mx-auto h-16 w-16 text-[#2a4d8e] mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2a4d8e]">Digital Marketing</h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Data-driven marketing strategies designed to grow your brand and generate leads.
            </p>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-semibold text-[#2a4d8e] mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#2a4d8e] mt-1 flex-shrink-0" size={20} />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact-us"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2a4d8e] to-[#284885] text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Grow Your Business
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalMarketing;