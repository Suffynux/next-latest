import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Cpu,
  Store,
  Warehouse,
  Server,
  AlertCircle,
} from 'lucide-react';

const WhoWeWorkWith = () => {
  const clientTypes = [
    {
      icon: <Building2 className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Mid Sized Businesses & Enterprises',
      description:
        'Reliable, distributed IT support that scales with your operations without the overhead.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Managed Service Providers (MSPs)',
      description:
        'Extend your reach with dispatch-ready engineers supporting SLAs across ENEA & APAC.',
    },
    {
      icon: <Store className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Retail Chains & Co-Working Operators',
      description:
        'Rollouts, maintenance, and troubleshooting for seamless multi-location tech support.',
    },
    {
      icon: <Warehouse className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Logistics & Warehouse Operations',
      description:
        'Maintain smooth backend systems, connectivity, and on-site infrastructure.',
    },
    {
      icon: <Server className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Data Centre Providers',
      description:
        'Smart hands and on-demand tech support for high-uptime environments.',
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#2a4d8e]" />,
      title: 'Any Business That Needs Instant IT Support',
      description:
        'Fast dispatch of certified engineers expert help, right when you need it.',
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#003A75] to-[#2a4d8e] bg-clip-text text-transparent tracking-tight">
            Who We Work With
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-[#003A75]">
            Trusted by Forward-Thinking Organizations
          </h2>
        </div>

        {/* Content Card */}
        <div className="overflow-hidden bg-gray-50 rounded-xl shadow-md">
          <div className="px-6 py-10 sm:p-12">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                NextGrid partners with businesses across sectors to deliver tailored,
                efficient, and scalable IT solutions from mid-size enterprises to MSPs
                and logistics providers.
              </p>
            </div>

            {/* Clients List */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {clientTypes.map((client, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 mt-1">{client.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#003A75]">{client.title}</h3>
                    <p className="mt-1 text-gray-600">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link to="/contact-us">
            <button className="px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#003A75] to-[#2a4d8e] rounded-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a4d8e]">
              Let’s Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeWorkWith;
