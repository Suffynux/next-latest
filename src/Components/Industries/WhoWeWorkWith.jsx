import React from 'react';
import { Building2, Cpu, Store, Warehouse, Server, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // or your preferred routing method

const WhoWeWorkWith = () => {
  const clientTypes = [
    {
      icon: <Building2 size={32} className="text-blue-600" />,
      title: "Mid-Sized Businesses & Enterprises",
      description: "Need scale without building massive in-house teams? We deliver reliable, regionally distributed IT support that adapts to your operations — no overhead, no delays."
    },
    {
      icon: <Cpu size={32} className="text-blue-600" />,
      title: "Managed Service Providers (MSPs)",
      description: "Expand your service reach with our on-ground engineer network. We support your SLAs with dispatch-ready technicians across Europe and APAC."
    },
    {
      icon: <Store size={32} className="text-blue-600" />,
      title: "Retail Chains & Co-Working Operators",
      description: "Multiple sites, shifting tech needs? We handle rollouts, maintenance, and troubleshooting so your locations stay online and connected."
    },
    {
      icon: <Warehouse size={32} className="text-blue-600" />,
      title: "Logistics & Warehouse Operations",
      description: "We keep your backend systems and on-site infrastructure running smoothly — from connectivity to hardware replacement."
    },
    {
      icon: <Server size={32} className="text-blue-600" />,
      title: "Data Centre Providers",
      description: "From smart hands to ongoing technical support, we deliver experienced engineers that understand high-uptime environments."
    },
    {
      icon: <AlertCircle size={32} className="text-blue-600" />,
      title: "Any Business That Needs Instant IT Support",
      description: "Hardware failed? Network down? No IT team nearby? We dispatch certified engineers fast — so you get expert hands on-site exactly when and where you need them."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
            WHO WE WORK WITH
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with organizations across industries to deliver tailored IT solutions that drive operational excellence.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group hover:shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  {client.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {client.title}
                  </h3>
                  <p className="text-gray-600">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to experience NextGrid support?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need immediate on-site assistance or ongoing IT management, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact-us" 
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact us
            </Link>
            <Link 
              to="/services" 
              className="px-6 py-3 text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-300"
            >
              See Our Services
            </Link>
          </div>
        </div>

        {/* Logo Cloud (replace with actual client logos) */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-32 bg-gray-200 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;