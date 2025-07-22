import { useState, useEffect } from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Play,
  CheckCircle,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

const AboutUsLanding = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [countUp, setCountUp] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      years: 12,
      clients: 500,
      projects: 1200,
      satisfaction: 98
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCountUp(prev => {
        const newValues = {};
        let allComplete = true;

        Object.keys(targets).forEach(key => {
          if (prev[key] < targets[key]) {
            newValues[key] = Math.min(
              prev[key] + Math.ceil(targets[key] / steps),
              targets[key]
            );
            allComplete = false;
          } else {
            newValues[key] = targets[key];
          }
        });

        if (allComplete) clearInterval(timer);
        return { ...prev, ...newValues };
      });
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: countUp.years,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Delivering innovative solutions'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      value: countUp.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Across global markets'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      value: countUp.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'With 100% success rate'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      value: countUp.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently high ratings'
    }
  ];

  const values = [
    {
      key: 'mission',
      icon: <Target className="w-6 h-6" />,
      title: 'Our Mission',
      content: 'To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in transforming challenges into opportunities through strategic digital transformation.',
      highlights: [
        'Digital transformation leadership',
        'Innovation-driven solutions',
        'Sustainable business growth',
        'Client success partnership'
      ]
    },
    {
      key: 'vision',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Our Vision',
      content: 'To be the global leader in technology consulting, recognized for our expertise, integrity, and commitment to delivering exceptional value to our clients across all industries.',
      highlights: [
        'Global technology leadership',
        'Industry expertise recognition',
        'Exceptional client value',
        'Sustainable innovation'
      ]
    },
    {
      key: 'values',
      icon: <Heart className="w-6 h-6" />,
      title: 'Our Values',
      content: 'We are guided by principles of excellence, integrity, collaboration, and continuous learning. These values shape every interaction and drive our commitment to client success.',
      highlights: [
        'Excellence in execution',
        'Integrity in all dealings',
        'Collaborative partnerships',
        'Continuous innovation'
      ]
    }
  ];

  const teamHighlights = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Security First',
      description: 'Enterprise-grade security in every solution we deliver'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: 'Rapid Deployment',
      description: 'Fast, efficient implementation with minimal disruption'
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry expertise'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            About Our Company
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Transforming Business
            <span className="block">Through Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists, strategists, and innovators dedicated to helping 
            businesses thrive in the digital age. With over a decade of experience, we've mastered the 
            art of turning complex challenges into elegant solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Mission/Vision/Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              What Drives Us Forward
            </h3>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 mb-8">
              {values.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === item.key
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {item.icon}
                  {item.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {values.map((item) => (
                activeTab === item.key && (
                  <div key={item.key} className="animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {item.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="space-y-8">
            {/* Hero Image/Video Placeholder */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video flex items-center justify-center text-white relative">
                  <img 
                    src="https://via.placeholder.com/600x400/4F46E5/ffffff?text=Our+Team+at+Work"
                    alt="Our Team"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-sm text-gray-600">Watch our story</div>
                <div className="font-bold text-gray-900">2 min video</div>
              </div>
            </div>

            {/* Team Highlights */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h4>
              {teamHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already experienced the power of our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutUsLanding;