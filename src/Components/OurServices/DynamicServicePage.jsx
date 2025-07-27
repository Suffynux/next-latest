import React, { useState, useEffect } from 'react';

import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Award,
  Phone,
  Mail,
  ArrowLeft,
  PlayCircle,
  Download,
  ExternalLink,
  Heart,
  TrendingUp,
  Target,
  Globe
} from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

// Service data - this would typically come from your router params or API
const serviceData = {
  'it-managed-services': {
    title: 'IT Managed Services',
    subtitle: 'Complete Infrastructure Management Solutions',
    description: 'Transform your IT operations with our comprehensive managed services. We provide end-to-end infrastructure management, proactive monitoring, and expert support to keep your business running smoothly 24/7.',
    hero_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    features: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: 'End-to-end Infrastructure Management',
        description: 'Complete oversight of your IT infrastructure from servers to networks, ensuring optimal performance and reliability.'
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: '24/7 Remote Monitoring & Support',
        description: 'Round-the-clock monitoring and instant response to issues before they impact your business operations.'
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Proactive Maintenance',
        description: 'Preventive maintenance and updates to minimize downtime and maximize system performance.'
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: 'SLA-driven Service Delivery',
        description: 'Guaranteed service levels with transparent reporting and measurable performance metrics.'
      }
    ],
    benefits: [
      'Reduce IT costs by up to 40%',
      'Minimize downtime and disruptions',
      'Access to expert IT professionals',
      'Scalable solutions that grow with your business',
      'Improved security and compliance',
      'Focus on core business activities'
    ],
    process: [
      {
        step: '01',
        title: 'Assessment & Planning',
        description: 'We analyze your current IT infrastructure and create a customized management plan.'
      },
      {
        step: '02', 
        title: 'Implementation & Setup',
        description: 'Deploy monitoring tools and establish management protocols tailored to your needs.'
      },
      {
        step: '03',
        title: 'Ongoing Management',
        description: 'Continuous monitoring, maintenance, and optimization of your IT environment.'
      },
      {
        step: '04',
        title: 'Reporting & Optimization',
        description: 'Regular performance reports and recommendations for continuous improvement.'
      }
    ],
    stats: [
      { number: '99.9%', label: 'Uptime Guarantee' },
      { number: '24/7', label: 'Support Coverage' },
      { number: '500+', label: 'Clients Served' },
      { number: '15min', label: 'Response Time' }
    ],
    testimonial: {
      text: "NextGrid IT's managed services have transformed our operations. We've seen a 60% reduction in IT issues and can now focus entirely on growing our business.",
      author: 'Sarah Johnson',
      position: 'CEO, TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100&h=100&fit=crop&crop=face'
    },
    faq: [
      {
        question: 'What does IT Managed Services include?',
        answer: 'Our comprehensive package includes infrastructure monitoring, maintenance, security management, backup solutions, help desk support, and strategic IT planning.'
      },
      {
        question: 'How quickly can you respond to issues?',
        answer: 'We guarantee a 15-minute response time for critical issues and provide 24/7 monitoring to prevent problems before they occur.'
      },
      {
        question: 'Can you work with our existing IT setup?',
        answer: 'Absolutely! We conduct a thorough assessment of your current infrastructure and integrate our services seamlessly with your existing systems.'
      }
    ],
    pricing: {
      starting_price: '£299',
      billing: 'per month',
      popular: true
    }
  }
  // Add more services here for other routes
};

const DynamicServicePage = ({ serviceSlug = 'it-managed-services' }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const service = serviceData[serviceSlug];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!service) {
    return (
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Globe className="w-4 h-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="w-4 h-4" /> },
    { id: 'process', label: 'Process', icon: <Target className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <TrendingUp className="w-4 h-4" /> }
  ];


  return (

   <MainLayout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-blue-200">
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </button>
                <span>/</span>
                <span>{service.title}</span>
              </div>

              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {service.title}
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  {service.subtitle}
                </p>
                <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <img 
                  src={service.hero_image} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                {service.pricing.popular && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                    Most Popular
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Service?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic">
                  "{service.testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={service.testimonial.avatar} 
                    alt={service.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{service.testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{service.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="animate-fadeIn">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Simple, Transparent Pricing</h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                {service.pricing.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular Choice
                  </div>
                )}
                <div className={`${service.pricing.popular ? 'pt-8' : ''}`}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {service.pricing.starting_price}
                    <span className="text-lg text-gray-600 font-normal">/{service.pricing.billing}</span>
                  </div>
                  <p className="text-gray-600 mb-8">Starting price - custom quotes available</p>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 mb-6">
                    Get Custom Quote
                  </button>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      No setup fees
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Cancel anytime
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                    <div className="pt-4">{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your business with our {service.title.toLowerCase()}. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call +44 783 262-2054
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              info@nextgridit.co.uk
            </button>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
     </MainLayout>
  );
};

export default DynamicServicePage;