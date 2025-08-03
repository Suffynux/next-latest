
import React from 'react';
import { Users, Clock, Zap, ShieldCheck, Fingerprint, FileSearch, Mail, Calendar, Phone } from 'lucide-react';

const MetricsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#f5f7fa] p-8 rounded-lg">
            <Users className="w-10 h-10 text-[#2a4d8e] mb-4" />
            <h3 className="text-xl font-semibold text-[#284885] mb-2">200+ IT Engineers</h3>
            <p className="text-gray-600">supported since 2020</p>
          </div>
          
          <div className="bg-[#f5f7fa] p-8 rounded-lg">
            <Clock className="w-10 h-10 text-[#2a4d8e] mb-4" />
            <h3 className="text-xl font-semibold text-[#284885] mb-2">24/7 Coverage</h3>
            <p className="text-gray-600">across Europe & APAC</p>
          </div>
          
          <div className="bg-[#f5f7fa] p-8 rounded-lg">
            <Zap className="w-10 h-10 text-[#2a4d8e] mb-4" />
            <h3 className="text-xl font-semibold text-[#284885] mb-2">10-min Response</h3>
            <p className="text-gray-600">avg. coordination time</p>
          </div>
        </div>

        {/* Certifications & Process */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-[#284885] mb-8 pb-2 border-b border-[#2a4d8e]">
              Certifications & Quality Markers
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-[#2a4d8e] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-[#284885]">GDPR-aligned service protocols</h3>
                </div>
              </li>
              <li className="flex items-start">
                <Fingerprint className="w-6 h-6 text-[#2a4d8e] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-[#284885]">Background-verified field engineers</h3>
                </div>
              </li>
              <li className="flex items-start">
                <FileSearch className="w-6 h-6 text-[#2a4d8e] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-[#284885]">SLA-based resolution and proactive tracking</h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-bold text-[#284885] mb-8 pb-2 border-b border-[#2a4d8e]">
              Our 3-Step Support Process
            </h2>
            <ol className="space-y-8">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2a4d8e] text-white font-bold mr-4">1</span>
                <div>
                  <h3 className="font-medium text-[#284885] mb-1">Submit Your Request</h3>
                  <p className="text-gray-600">Reach out with your issue — our team is on standby 24/7.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2a4d8e] text-white font-bold mr-4">2</span>
                <div>
                  <h3 className="font-medium text-[#284885] mb-1">Engineer Dispatched Within 10 Minutes</h3>
                  <p className="text-gray-600">We instantly locate and assign the nearest certified engineer to your site.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2a4d8e] text-white font-bold mr-4">3</span>
                <div>
                  <h3 className="font-medium text-[#284885] mb-1">Get It Fixed & Only Pay When You Need Us</h3>
                  <p className="text-gray-600">Your issue is resolved, no strings attached — you're billed per task, not by contract.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#284885] rounded-lg p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Need an engineer now or planning a rollout? We're ready.
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-6 py-3 bg-white text-[#284885] font-semibold rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Engineer
            </button>
            <button className="px-6 py-3 text-white font-semibold rounded-md border-2 border-white hover:bg-white/10 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;