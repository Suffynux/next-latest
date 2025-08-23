import React from "react";
import { CheckCircle, MapPin, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseNextGrid = () => {
 
 
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#1c2b46] via-[#20325a] to-[#162039] py-20 text-white">
      {/* Subtle Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      <CostComparison/>

    
    </section>
  );
};

export default WhyChooseNextGrid;

const CostComparison = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <h3 className="md:text-4xl sm:text-3xl font-bold text-center text-white mb-[30px]">
        Cost Comparison: NextGrid IT vs Typical  IT Provider
      </h3>
      {/* <p className="text-center text-gray-600 max-w-2xl mb-6 text-sm sm:text-base">
        <span className="font-semibold">Note:</span> NextGrid provides rapid-response IT support, project delivery, and managed services for businesses. We do <span className="font-semibold">not</span> offer Virtual Assistant (VA) services. The comparison below highlights the value of our IT solutions versus a typical UK-based IT provider.
      </p> */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Gradient background */}
          <div className="absolute inset-0 rounded-lg z-0 bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#ffe4e6] opacity-80"></div>
          {/* Table content */}
          <div className="relative z-10 overflow-x-auto shadow-lg rounded-lg border border-orange-200 bg-white">
            <table className="min-w-full text-sm text-gray-800">
              <thead>
                <tr className="bg-[#f8fafc] border-b">
                  <th className="py-3 px-4 text-left font-semibold">Feature / Cost Factor</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#003A75]">NextGrid IT Services</th>
                  <th className="py-3 px-4 text-left font-semibold text-[#2a4d8e]">Typical UK-Based IT Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Monthly Cost</td>
                  <td className="py-2 px-4">Custom, pay-as-you-go or retainer</td>
                  <td className="py-2 px-4">£800 – £2,000+ (fixed contracts)</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Hourly Rate</td>
                  <td className="py-2 px-4">From £35/hour (all-inclusive)</td>
                  <td className="py-2 px-4">£60 – £120/hour</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Minimum Commitment</td>
                  <td className="py-2 px-4">No minimum (ad-hoc available)</td>
                  <td className="py-2 px-4">12 months typical</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Setup/Onboarding Fees</td>
                  <td className="py-2 px-4">£0</td>
                  <td className="py-2 px-4">£100 – £500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Remote & Onsite Support</td>
                  <td className="py-2 px-4">Included</td>
                  <td className="py-2 px-4">Often extra</td>
                </tr>
                <tr className="bg-[#f8fafc] border-b">
                  <td className="py-2 px-4">Monitoring & Reporting</td>
                  <td className="py-2 px-4">Included</td>
                  <td className="py-2 px-4">Extra or limited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Money-Back Guarantee</td>
                  <td className="py-2 px-4"><span className="inline-block align-middle text-green-600 font-bold">✔</span> 7 days</td>
                  <td className="py-2 px-4 text-red-500">Rare</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="py-2 px-4">Working Hours Flexibility</td>
                  <td className="py-2 px-4">High (24/7, global coverage)</td>
                  <td className="py-2 px-4">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
