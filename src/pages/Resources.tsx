import React from 'react';
import { ArrowRight, BookOpen, FileText, Video, Calendar, Download, Award } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Knowledge & Innovation Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead with insights, best practices, and innovations in regulated manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured White Paper */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 mr-3" />
                <span className="text-blue-100 font-medium">Featured White Paper</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Digital Transformation in Regulated Industries: The Complete Guide
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Comprehensive analysis of Industry 4.0/5.0 adoption challenges and solutions for pharmaceutical, medical device, and food manufacturing sectors.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-100">42 pages</span>
                  <span className="text-blue-100">•</span>
                  <span className="text-blue-100">Published Dec 2024</span>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center">
                  Download Free
                  <Download className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Latest Blog Posts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Latest Insights</h3>
              {[
                {
                  title: 'AI in Pharmaceutical Manufacturing',
                  excerpt: 'How artificial intelligence is transforming drug production and quality control.',
                  date: 'Dec 15, 2024',
                  readTime: '5 min read'
                },
                {
                  title: 'IoT Implementation in Food Safety',
                  excerpt: 'Best practices for deploying IoT sensors in food manufacturing environments.',
                  date: 'Dec 10, 2024',
                  readTime: '7 min read'
                },
                {
                  title: 'Medical Device Compliance Automation',
                  excerpt: 'Streamlining ISO 13485 compliance with automated quality systems.',
                  date: 'Dec 5, 2024',
                  readTime: '6 min read'
                }
              ].map((post, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Resource Categories</h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive library of industry-specific content and technical resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'White Papers',
                description: 'In-depth analysis and research on regulated manufacturing trends',
                icon: FileText,
                count: '15+',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Case Studies',
                description: 'Real-world implementation success stories from industry leaders',
                icon: Award,
                count: '20+',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Webinars',
                description: 'Expert-led sessions on compliance, technology, and best practices',
                icon: Video,
                count: '30+',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Blog Articles',
                description: 'Regular insights and updates from our industry experts',
                icon: BookOpen,
                count: '100+',
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Documentation',
                description: 'Technical guides, API docs, and implementation resources',
                icon: FileText,
                count: '50+',
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Events',
                description: 'Industry conferences, workshops, and networking opportunities',
                icon: Calendar,
                count: '25+',
                color: 'from-red-500 to-red-600'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <span className="text-sm font-medium text-gray-500">{category.count}</span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Explore <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured White Papers</h2>
            <p className="text-xl text-gray-600">
              Deep dive into the latest trends and innovations in regulated manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI in Pharmaceutical Manufacturing',
                description: 'Comprehensive guide to implementing AI and machine learning in drug production.',
                pages: 35,
                category: 'Pharmaceuticals',
                featured: true
              },
              {
                title: 'IoT Implementation in Food Safety',
                description: 'Best practices for deploying IoT sensors and systems in food manufacturing.',
                pages: 28,
                category: 'Food & Beverage'
              },
              {
                title: 'Medical Device Compliance Automation',
                description: 'Streamlining ISO 13485 compliance with automated quality management systems.',
                pages: 42,
                category: 'Medical Devices'
              }
            ].map((paper, index) => (
              <div key={index} className={`rounded-2xl p-6 ${paper.featured ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {paper.category}
                  </span>
                  {paper.featured && (
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{paper.pages} pages</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
                    Download <Download className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how industry leaders have transformed their operations with BhriguOne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: 'Global Pharma Corp',
                industry: 'Pharmaceuticals',
                challenge: 'Reducing compliance costs and audit preparation time',
                solution: 'BhriguOne MES and QMS implementation',
                results: ['75% reduction in audit prep time', '50% lower compliance costs', '99.9% system uptime'],
                image: '🏭'
              },
              {
                company: 'MedDevice Solutions',
                industry: 'Medical Devices',
                challenge: 'Streamlining ISO 13485 compliance processes',
                solution: 'Complete BhriguOne platform deployment',
                results: ['40% faster product launches', '60% reduction in documentation errors', '100% audit success rate'],
                image: '🏥'
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{study.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read Full Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us at industry conferences and exclusive webinars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry 4.0 in Pharmaceuticals',
                type: 'Webinar',
                date: 'Jan 15, 2025',
                time: '2:00 PM EST',
                description: 'Explore the latest trends in pharmaceutical manufacturing digitization.',
                status: 'Registration Open'
              },
              {
                title: 'ISPE Annual Meeting',
                type: 'Conference',
                date: 'Mar 20-22, 2025',
                time: 'San Diego, CA',
                description: 'Visit us at booth #245 to see BhriguOne in action.',
                status: 'Coming Soon'
              },
              {
                title: 'FDA Compliance Workshop',
                type: 'Workshop',
                date: 'Feb 10, 2025',
                time: '10:00 AM EST',
                description: 'Deep dive into FDA compliance requirements and automation.',
                status: 'Limited Seats'
              }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {event.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, white papers, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};