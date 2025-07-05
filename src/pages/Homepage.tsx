import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, BarChart3, Users, Award, TrendingUp } from 'lucide-react';

export const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Pioneering Industry 4.0/5.0 for Regulated Manufacturing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Engineering Intelligence.
              <br />
              Empowering Compliance.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Redefining how regulated industries embrace Industry 4.0/5.0 through intelligent, compliant, and future-ready platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Bhrigu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bhrigu</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We identified a <span className="font-semibold text-blue-600">critical gap in digital transformation</span> for regulated industries. 
              While traditional manufacturing embraces automation, highly regulated sectors like pharmaceuticals, medical devices, 
              and food manufacturing face unique compliance challenges that standard solutions cannot address.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Compliance-First Design</h3>
              <p className="text-gray-600">Built from the ground up with GxP compliance and regulatory requirements at the core.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered Intelligence</h3>
              <p className="text-gray-600">Advanced AI and machine learning capabilities for predictive analytics and quality assurance.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Future-Ready Platform</h3>
              <p className="text-gray-600">Scalable, cloud-native architecture designed for Industry 4.0/5.0 transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BhriguOne Platform Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">BhriguOne - Our Flagship Product</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              <span className="font-semibold text-blue-600">An Omni Connected Software Platform Trusted By Industry Leaders</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">GxP Friendly</h3>
                  <p className="text-gray-600">Built specifically for regulated environments with comprehensive compliance features.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customizable</h3>
                  <p className="text-gray-600">Tailored to specific industry needs with flexible module configurations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud/Hybrid Hosted</h3>
                  <p className="text-gray-600">Flexible deployment options including cloud, on-premises, and hybrid solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">All-in-One Solution</h3>
                  <p className="text-gray-600">Seamless integration of all manufacturing and quality modules in one platform.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">BhriguOne Platform</h3>
                  <p className="text-blue-100 mt-2">Interactive Demo Available</p>
                </div>
              </div>
              <Link
                to="/solutions"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Explore Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Specialized solutions for highly regulated industries requiring comprehensive compliance and quality management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Pharmaceuticals', color: 'from-blue-500 to-blue-600', icon: '💊' },
              { name: 'Medical Devices', color: 'from-red-500 to-red-600', icon: '🏥' },
              { name: 'Food & Beverage', color: 'from-green-500 to-green-600', icon: '🍎' },
              { name: 'Biotech', color: 'from-purple-500 to-purple-600', icon: '🧬' },
              { name: 'Nutraceuticals', color: 'from-orange-500 to-orange-600', icon: '💊' },
            ].map((industry, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-r ${industry.color} rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Comprehensive compliance solutions tailored for {industry.name.toLowerCase()} manufacturing.
                  </p>
                  <Link
                    to="/industries"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BhriguOne Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">BhriguOne Advantages</h2>
            <p className="text-xl text-gray-600">Why leading manufacturers choose BhriguOne over traditional solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Traditional Solutions</h3>
              {[
                '❌ High Capital Expenditure',
                '❌ Separate implementation costs',
                '❌ Complex qualification processes',
                '❌ Limited site compatibility',
                '❌ Expensive hardware requirements'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">BhriguOne Platform</h3>
              {[
                '✅ Low Capital Expenditure',
                '✅ All-in-one pricing includes implementation',
                '✅ Built-in Qualification & Compliance',
                '✅ Multiple site compatibility included',
                '✅ Competitive hardware pricing with advanced secure designs'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Technology Stack</h2>
            <p className="text-xl text-gray-600">
              Powered by cutting-edge AI, IoT, and data analytics technologies designed for regulated manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'AI & Machine Learning', icon: '🤖', description: 'Predictive analytics and quality assurance' },
              { name: 'IoT Integration', icon: '🌐', description: 'Real-time sensor monitoring and control' },
              { name: 'Data Analytics', icon: '📊', description: 'Advanced reporting and insights' },
              { name: 'Cloud Architecture', icon: '☁️', description: 'Scalable and secure deployment' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-First Approach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance-First Approach</h2>
            <p className="text-xl text-gray-600">
              Built from the ground up with regulatory compliance at the core of every feature and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'GxP Compliance', description: 'FDA, EMA, and global regulatory standards built-in', icon: Shield },
              { title: 'Audit Trail', description: 'Complete traceability and electronic records', icon: BarChart3 },
              { title: 'Quality Assurance', description: 'Automated quality control and validation', icon: Award },
              { title: 'Data Integrity', description: 'ALCOA+ principles and secure data handling', icon: Shield },
              { title: 'Risk Management', description: 'Integrated risk assessment and mitigation', icon: TrendingUp },
              { title: 'Regulatory Reporting', description: 'Automated compliance reporting and submissions', icon: BarChart3 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Customer Success Stories</h2>
            <p className="text-xl text-gray-600">
              Industry leaders trust BhriguOne to transform their manufacturing operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '50%', label: 'Reduction in Compliance Costs', color: 'text-blue-600' },
              { metric: '75%', label: 'Faster Time to Market', color: 'text-green-600' },
              { metric: '90%', label: 'Improved Quality Metrics', color: 'text-purple-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50">
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.metric}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Pipeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovation Pipeline</h2>
            <p className="text-xl text-gray-600">
              Continuously advancing the future of regulated manufacturing with cutting-edge research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Advanced AI Analytics', status: 'In Development', color: 'bg-blue-100 text-blue-800' },
              { title: 'Quantum Computing Integration', status: 'Research Phase', color: 'bg-purple-100 text-purple-800' },
              { title: 'Augmented Reality QC', status: 'Beta Testing', color: 'bg-green-100 text-green-800' }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${project.color}`}>
                  {project.status}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600">Next-generation capabilities to further enhance manufacturing intelligence.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Digitize Your Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join industry leaders who are transforming their manufacturing with BhriguOne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};