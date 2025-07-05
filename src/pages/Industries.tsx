import React from 'react';
import { ArrowRight, Shield, Award, TrendingUp, FileText, Users, Zap } from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized BhriguOne configurations for highly regulated manufacturing industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pharmaceuticals */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Pharmaceuticals</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions for drug manufacturing with FDA, EMA, and global regulatory compliance built-in.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'API Manufacturing Control',
                  'Clinical Trial Management',
                  'Batch Record Automation',
                  'Quality Control Integration',
                  'Regulatory Reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Medical Devices */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Medical Devices</h2>
              </div>
              <p className="text-gray-600 mb-6">
                ISO 13485 compliant manufacturing solutions for medical device production and quality management.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Device History Records',
                  'Design Controls',
                  'Risk Management (ISO 14971)',
                  'Post-Market Surveillance',
                  'FDA 510(k) Support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Food & Beverage */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🍎</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Food & Beverage</h2>
              </div>
              <p className="text-gray-600 mb-6">
                HACCP and FDA food safety compliant solutions for food and beverage manufacturing.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Recipe Management',
                  'Allergen Control',
                  'Traceability Systems',
                  'Temperature Monitoring',
                  'Nutritional Analysis'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Biotech */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🧬</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Biotech</h2>
              </div>
              <p className="text-gray-600 mb-6">
                GMP compliant solutions for biotechnology manufacturing with advanced process control.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Bioreactor Management',
                  'Cell Culture Monitoring',
                  'Purification Tracking',
                  'Biosafety Protocols',
                  'Scale-up Management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nutraceuticals Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nutraceuticals</h2>
              </div>
              <p className="text-gray-600 mb-8">
                cGMP compliant solutions for dietary supplement and nutraceutical manufacturing with comprehensive quality control.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Ingredient Tracking',
                  'Potency Testing',
                  'Label Claims Verification',
                  'Stability Studies',
                  'Supplier Qualification',
                  'Contamination Control'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center">
                Explore Nutraceutical Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Benefits Across All Industries</h2>
            <p className="text-xl text-gray-600">
              Regardless of your industry, BhriguOne delivers consistent value and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compliance Assurance',
                description: 'Built-in regulatory compliance reduces audit preparation time by 75%.',
                icon: Shield
              },
              {
                title: 'Quality Excellence',
                description: 'Automated quality control processes improve consistency and reduce defects.',
                icon: Award
              },
              {
                title: 'Operational Efficiency',
                description: 'Streamlined workflows and automation increase productivity by 40%.',
                icon: Zap
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how BhriguOne can revolutionize your manufacturing operations with industry-specific solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Schedule Industry Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                Download Industry Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};