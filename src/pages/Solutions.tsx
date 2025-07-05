import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Cpu, Database, Cloud } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BhriguOne Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The comprehensive solution for regulated manufacturing, combining AI, IoT, and compliance in one powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">All-in-One Manufacturing Intelligence</h2>
              <p className="text-lg text-gray-600 mb-8">
                BhriguOne integrates every aspect of regulated manufacturing into a single, intelligent platform. 
                From production planning to quality control, compliance reporting to predictive maintenance.
              </p>
              <div className="space-y-4">
                {[
                  'Manufacturing Execution System (MES)',
                  'Laboratory Information Management (LIMS)',
                  'Quality Management System (QMS)',
                  'Regulatory Compliance Engine',
                  'Advanced Analytics & AI',
                  'IoT Integration Hub'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="aspect-square bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Platform Demo</h3>
              <p className="text-blue-100 mb-6">
                See BhriguOne in action with our interactive demonstration showcasing real manufacturing scenarios.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Platform Modules</h2>
            <p className="text-xl text-gray-600">
              Integrated modules designed specifically for regulated manufacturing environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing Execution',
                description: 'Real-time production control, scheduling, and monitoring with full traceability.',
                icon: Cpu,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Quality Management',
                description: 'Comprehensive QMS with automated workflows and compliance tracking.',
                icon: Shield,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Laboratory Management',
                description: 'Complete LIMS solution for sample tracking and analytical data management.',
                icon: Database,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Regulatory Compliance',
                description: 'Built-in GxP compliance with automated reporting and audit trails.',
                icon: CheckCircle,
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Advanced Analytics',
                description: 'AI-powered insights, predictive maintenance, and performance optimization.',
                icon: BarChart3,
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Cloud Integration',
                description: 'Secure cloud deployment with hybrid options and scalable architecture.',
                icon: Cloud,
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center mb-4`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BhriguOne?</h2>
            <p className="text-xl text-gray-600">
              Experience the advantages of a purpose-built platform for regulated manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: 'Reduced Implementation Time',
                  description: 'Pre-configured modules and templates accelerate deployment by 60%.',
                  metric: '60%'
                },
                {
                  title: 'Lower Total Cost of Ownership',
                  description: 'Integrated platform eliminates multiple vendor costs and complexity.',
                  metric: '40%'
                },
                {
                  title: 'Improved Compliance',
                  description: 'Built-in GxP compliance reduces audit preparation time significantly.',
                  metric: '75%'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">{benefit.metric}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Manufacturing?</h3>
              <p className="text-blue-100 mb-8">
                Join leading manufacturers who have already modernized their operations with BhriguOne.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                  Schedule Demo
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};