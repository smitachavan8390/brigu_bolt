import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    consultationType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Shape the Future Together
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to digitize your operations? Our experts are here to help you transform your regulated manufacturing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Industry</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="medical-devices">Medical Devices</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="biotech">Biotech</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type
                  </label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Product Demo</option>
                    <option value="compliance">Compliance Consultation</option>
                    <option value="implementation">Implementation Planning</option>
                    <option value="partnership">Partnership Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your manufacturing challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of experts is ready to help you transform your regulated manufacturing operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@bhrigu.tech</p>
                    <p className="text-gray-600">support@bhrigu.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568 (Support)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Innovation Drive</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Response within 1 hour during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24/7 support for critical issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Dedicated account manager for enterprise clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Consultations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Consultations</h2>
            <p className="text-xl text-gray-600">
              Our experts specialize in the unique challenges of each regulated industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Pharmaceuticals',
                expert: 'Dr. Sarah Chen, PharmD',
                specialty: 'FDA Compliance & cGMP',
                icon: '💊',
                color: 'from-blue-500 to-blue-600'
              },
              {
                industry: 'Medical Devices',
                expert: 'Michael Rodriguez, P.E.',
                specialty: 'ISO 13485 & FDA 510(k)',
                icon: '🏥',
                color: 'from-red-500 to-red-600'
              },
              {
                industry: 'Food & Beverage',
                expert: 'Dr. Lisa Park, PhD',
                specialty: 'HACCP & Food Safety',
                icon: '🍎',
                color: 'from-green-500 to-green-600'
              },
              {
                industry: 'Biotech',
                expert: 'Dr. James Wilson, PhD',
                specialty: 'GMP & Biosafety',
                icon: '🧬',
                color: 'from-purple-500 to-purple-600'
              },
              {
                industry: 'Nutraceuticals',
                expert: 'Dr. Amanda Foster, PharmD',
                specialty: 'Dietary Supplement cGMP',
                icon: '💊',
                color: 'from-orange-500 to-orange-600'
              },
              {
                industry: 'Technology',
                expert: 'David Kumar, CTO',
                specialty: 'AI & IoT Integration',
                icon: '💻',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((consultation, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${consultation.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl">{consultation.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{consultation.industry}</h3>
                <p className="text-gray-600 mb-2">{consultation.expert}</p>
                <p className="text-sm text-gray-500 mb-4">{consultation.specialty}</p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Request a Personalized Demo</h2>
                  <p className="text-blue-100 mb-6">
                    See BhriguOne in action with a customized demonstration tailored to your industry and use cases.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-200" />
                      <span className="text-blue-100">Industry-specific scenarios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-200" />
                      <span className="text-blue-100">Live Q&A with experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-200" />
                      <span className="text-blue-100">Custom ROI analysis</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-6 mb-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">30-Minute Demo</h3>
                    <p className="text-blue-100">Free consultation included</p>
                  </div>
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Schedule Demo Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiries */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in becoming a technology partner, reseller, or strategic alliance? Let's explore opportunities together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Technology Integration',
                  description: 'Integrate your solutions with BhriguOne platform',
                  icon: '🔧'
                },
                {
                  title: 'Reseller Program',
                  description: 'Join our global network of certified partners',
                  icon: '🤝'
                },
                {
                  title: 'Strategic Alliance',
                  description: 'Collaborate on industry-specific solutions',
                  icon: '🌟'
                }
              ].map((partnership, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{partnership.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.title}</h3>
                  <p className="text-gray-600 mb-4">{partnership.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};