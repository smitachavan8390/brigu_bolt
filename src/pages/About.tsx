import React from 'react';
import { ArrowRight, Users, Award, Globe, Target, Heart, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Bhrigu Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Engineering Intelligence. Empowering Compliance. Transforming regulated manufacturing for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Founding Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We recognized a <span className="font-semibold text-blue-600">critical gap in digital transformation</span> 
                  for regulated industries. While traditional manufacturing rapidly adopted automation and smart technologies, 
                  highly regulated sectors faced unique challenges that standard solutions couldn't address.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of experts in AI, IoT, and compliance-driven systems came together to bridge this gap, 
                  creating the first truly intelligent platform designed specifically for regulated manufacturing.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">Redefining how regulated industries embrace Industry 4.0/5.0</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Why Bhrigu?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <p className="text-blue-100">Named after the ancient sage Bhrigu, representing wisdom and innovation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <p className="text-blue-100">Symbolizes our commitment to intelligent, thoughtful solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <p className="text-blue-100">Represents our bridge between ancient wisdom and modern technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Bhrigu.tech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Engineering intelligent compliance, from the ground up',
                description: 'We build compliance into every feature, not as an afterthought.',
                icon: Zap,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Building smart, future-ready platforms',
                description: 'Our solutions are designed to evolve with advancing technologies.',
                icon: Globe,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Enabling safe, efficient, and fully compliant operations',
                description: 'We prioritize both operational excellence and regulatory compliance.',
                icon: Award,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Helping partners lead tomorrow\'s innovation',
                description: 'We empower our clients to be pioneers in their industries.',
                icon: Heart,
                color: 'from-orange-500 to-orange-600'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Industry veterans with deep expertise in regulated manufacturing and advanced technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'CEO & Co-Founder',
                expertise: 'Pharmaceutical Manufacturing',
                background: '15+ years in pharma operations and digital transformation',
                image: '👩‍💼'
              },
              {
                name: 'Michael Rodriguez',
                role: 'CTO & Co-Founder',
                expertise: 'AI & IoT Architecture',
                background: 'Former lead architect at major tech companies',
                image: '👨‍💻'
              },
              {
                name: 'Dr. James Wilson',
                role: 'Chief Compliance Officer',
                expertise: 'Regulatory Affairs',
                background: 'Former FDA inspector with 20+ years experience',
                image: '👨‍🔬'
              }
            ].map((leader, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.expertise}</p>
                  <p className="text-sm text-gray-500">{leader.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Bhrigu by the Numbers</h2>
            <p className="text-xl opacity-90">
              Our growth reflects the trust industry leaders place in our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Manufacturing Sites', description: 'Across 5 countries' },
              { number: '99.9%', label: 'System Uptime', description: 'Guaranteed reliability' },
              { number: '75%', label: 'Compliance Cost Reduction', description: 'Average customer savings' },
              { number: '24/7', label: 'Expert Support', description: 'Global support team' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600">
              Collaborating with industry leaders to drive innovation in regulated manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Technology Partners',
                description: 'Leading cloud providers and technology platforms',
                partners: ['AWS', 'Microsoft Azure', 'Google Cloud', 'NVIDIA']
              },
              {
                category: 'Industry Associations',
                description: 'Active members of key regulatory organizations',
                partners: ['ISPE', 'PDA', 'AAMI', 'IIoT Consortium']
              },
              {
                category: 'Academic Institutions',
                description: 'Research partnerships with leading universities',
                partners: ['MIT', 'Stanford', 'Berkeley', 'Carnegie Mellon']
              }
            ].map((partnership, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.category}</h3>
                <p className="text-gray-600 mb-4">{partnership.description}</p>
                <div className="space-y-2">
                  {partnership.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your regulated manufacturing operations with intelligent compliance solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                Learn More About Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};