import React from 'react';
import { ArrowRight, Users, Award, Globe, Target, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Bhrigu Story
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Engineering Intelligence. Empowering Compliance. Transforming regulated manufacturing for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Our Founding Vision
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We recognized a <span className="font-semibold text-blue-400">critical gap in digital transformation</span> 
                  for regulated industries. While traditional manufacturing rapidly adopted automation and smart technologies, 
                  highly regulated sectors faced unique challenges that standard solutions couldn't address.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our team of experts in AI, IoT, and compliance-driven systems came together to bridge this gap, 
                  creating the first truly intelligent platform designed specifically for regulated manufacturing.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Mission</h3>
                    <p className="text-gray-300">Redefining how regulated industries embrace Industry 4.0/5.0</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">Why Bhrigu?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">1</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">Named after the ancient sage Bhrigu, representing wisdom and innovation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">2</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">Symbolizes our commitment to intelligent, thoughtful solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">3</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">Represents our bridge between ancient wisdom and modern technology</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The principles that guide everything we do at Bhrigu.tech
            </p>
          </motion.div>
          
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
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Industry veterans with deep expertise in regulated manufacturing and advanced technology.
            </p>
          </motion.div>
          
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
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{leader.image}</div>
                    <h3 className="text-xl font-semibold text-white mb-1">{leader.name}</h3>
                    <p className="text-blue-400 font-medium mb-2">{leader.role}</p>
                    <p className="text-sm text-gray-300 mb-3">{leader.expertise}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{leader.background}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Bhrigu by the Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our growth reflects the trust industry leaders place in our solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Manufacturing Sites', description: 'Across 5 countries' },
              { number: '99.9%', label: 'System Uptime', description: 'Guaranteed reliability' },
              { number: '75%', label: 'Compliance Cost Reduction', description: 'Average customer savings' },
              { number: '24/7', label: 'Expert Support', description: 'Global support team' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-xl font-semibold mb-1 text-white">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Partnerships
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Collaborating with industry leaders to drive innovation in regulated manufacturing.
            </p>
          </motion.div>
          
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
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{partnership.category}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{partnership.description}</p>
                  <div className="space-y-2">
                    {partnership.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your regulated manufacturing operations with intelligent compliance solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Learn More About Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};