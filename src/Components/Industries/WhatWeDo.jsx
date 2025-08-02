import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            WHAT WE DO
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            B2B IT Services, Delivered with Precision
          </h2>
        </div>

        {/* Content Card */}
        <div className="overflow-hidden bg-gray-50 rounded-lg shadow-sm">
          <div className="px-6 py-8 sm:p-10">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                NextGrid provides businesses with rapid-response IT support, project delivery, 
                and managed services across Europe and APAC. Whether you need a one-time fix 
                or full-time support, we connect you to certified engineers—right where the issue is.
              </p>
            </div>

            {/* Optional Services Grid - Can be customized with your actual services */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Rapid-Response Support</h3>
                  <p className="mt-1 text-gray-600">24/7 IT support with on-site or remote solutions</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Project Delivery</h3>
                  <p className="mt-1 text-gray-600">End-to-end IT project implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link to={"/services"}>
          <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Explore Our Services
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;