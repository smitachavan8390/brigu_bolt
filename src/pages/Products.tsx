import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Database, Shield, BarChart3, Cloud, Zap } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BhriguOne Platform Modules
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive modules designed to work seamlessly together for complete manufacturing intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Execution System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing Execution System (MES)</h2>
              <p className="text-lg text-gray-600 mb-8">
                Real-time production control and monitoring with complete batch genealogy and traceability for regulated manufacturing.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time production scheduling and dispatching',
                  'Batch record automation and electronic signatures',
                  'Material tracking and genealogy',
                  'Equipment integration and control',
                  'Quality checkpoint integration',
                  'Regulatory compliance reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Cpu className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Manufacturing Control</h3>
              <p className="text-blue-100 mb-6">
                Automate production workflows while maintaining complete compliance with regulatory requirements.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Explore MES Module
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIMS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Intelligent Lab Management</h3>
              <p className="text-purple-100 mb-6">
                Streamline laboratory operations with automated sample tracking, instrument integration, and results management.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Explore LIMS Module
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Laboratory Information Management System (LIMS)</h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete laboratory data management with instrument integration, automated workflows, and comprehensive reporting.
              </p>
              <div className="space-y-4">
                {[
                  'Sample registration and tracking',
                  'Instrument data integration',
                  'Automated testing workflows',
                  'Out-of-specification (OOS) management',
                  'Certificate of analysis generation',
                  'Stability study management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Management System (QMS)</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive quality management with document control, change management, and CAPA workflows.
              </p>
              <div className="space-y-4">
                {[
                  'Document control and versioning',
                  'Change control workflows',
                  'CAPA (Corrective and Preventive Actions)',
                  'Deviation management',
                  'Supplier quality management',
                  'Audit and inspection readiness'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Excellence</h3>
              <p className="text-green-100 mb-6">
                Maintain the highest quality standards with automated workflows and comprehensive tracking.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Explore QMS Module
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Compliance Assurance</h3>
              <p className="text-orange-100 mb-6">
                Built-in regulatory compliance with automated reporting and audit trail management.
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Explore Compliance Module
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Regulatory Compliance Engine</h2>
              <p className="text-lg text-gray-600 mb-8">
                Automated compliance management with built-in regulatory frameworks and audit trail capabilities.
              </p>
              <div className="space-y-4">
                {[
                  'GxP compliance framework',
                  'Electronic signature management',
                  'Audit trail and data integrity',
                  'Regulatory submission support',
                  'Validation documentation',
                  'Risk assessment integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Analytics & Reporting</h2>
              <p className="text-lg text-gray-600 mb-8">
                Advanced analytics and reporting with real-time dashboards and predictive insights.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time KPI dashboards',
                  'Predictive analytics and forecasting',
                  'Trend analysis and pattern recognition',
                  'Custom report builder',
                  'Automated alert systems',
                  'Executive summary reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Data-Driven Insights</h3>
              <p className="text-indigo-100 mb-6">
                Transform manufacturing data into actionable insights with advanced analytics and AI.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Explore Analytics Module
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Hub */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration Hub</h2>
            <p className="text-xl text-gray-600">
              Seamlessly connect all your systems and data sources through our comprehensive integration platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'API Management',
                description: 'RESTful APIs and GraphQL for seamless system integration',
                icon: Cloud,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Data Synchronization',
                description: 'Real-time data sync across all connected systems',
                icon: Zap,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Legacy System Support',
                description: 'Connect with existing ERP, MES, and laboratory systems',
                icon: Database,
                color: 'from-purple-500 to-purple-600'
              }
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${integration.color} rounded-full flex items-center justify-center mb-4`}>
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{integration.title}</h3>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Configuration</h2>
              <p className="text-xl text-gray-600">
                Select individual modules or deploy the complete BhriguOne platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Essential',
                  price: 'Custom Pricing',
                  description: 'Core modules for small to medium operations',
                  modules: ['MES', 'QMS', 'Basic Analytics'],
                  features: ['Up to 5 users', 'Basic reporting', 'Email support']
                },
                {
                  name: 'Professional',
                  price: 'Custom Pricing',
                  description: 'Complete solution for regulated manufacturing',
                  modules: ['MES', 'LIMS', 'QMS', 'Compliance', 'Analytics'],
                  features: ['Up to 50 users', 'Advanced analytics', 'Priority support'],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom Pricing',
                  description: 'Full platform with custom integrations',
                  modules: ['All Modules', 'Custom Development', 'Integration Hub'],
                  features: ['Unlimited users', 'Custom features', 'Dedicated support']
                }
              ].map((plan, index) => (
                <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-gray-50'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`text-3xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</p>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`} />
                        <span className={plan.popular ? 'text-blue-100' : 'text-gray-700'}>{module}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:shadow-lg' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how BhriguOne modules can revolutionize your operations with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Schedule Product Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                Download Product Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};