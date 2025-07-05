import React from 'react';
import { ArrowRight, Cpu, Cloud, Shield, Database, BarChart3, Zap, Globe, Lock } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Platform Architecture
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Built on cutting-edge technology stack designed for the future of regulated manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Architecture</h2>
            <p className="text-xl text-gray-600">
              Microservices-based architecture with cloud-native design for scalability and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Microservices Architecture',
                description: 'Modular, scalable services that can be deployed independently.',
                icon: Cpu,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Cloud-Native Design',
                description: 'Built for cloud deployment with containerization and orchestration.',
                icon: Cloud,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Security First',
                description: 'Enterprise-grade security with encryption and compliance controls.',
                icon: Shield,
                color: 'from-red-500 to-red-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI & Machine Learning</h2>
              <p className="text-lg text-gray-600 mb-8">
                Advanced AI capabilities that transform manufacturing data into actionable insights and predictive intelligence.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Predictive Maintenance',
                    description: 'AI algorithms predict equipment failures before they occur, reducing downtime by 60%.'
                  },
                  {
                    title: 'Quality Prediction',
                    description: 'Machine learning models predict product quality based on process parameters.'
                  },
                  {
                    title: 'Anomaly Detection',
                    description: 'Real-time detection of process deviations and quality issues.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <div className="aspect-square bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Cpu className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Analytics</h3>
              <p className="text-purple-100 mb-6">
                Advanced machine learning models trained on manufacturing data to provide intelligent insights.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Ecosystem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">IoT Ecosystem</h2>
            <p className="text-xl text-gray-600">
              Comprehensive IoT integration for real-time monitoring and control of manufacturing processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Sensor Integration',
                description: 'Connect thousands of sensors for real-time monitoring.',
                icon: Database,
                metric: '10,000+'
              },
              {
                title: 'Edge Computing',
                description: 'Process data at the edge for faster response times.',
                icon: Zap,
                metric: '<10ms'
              },
              {
                title: 'Data Streaming',
                description: 'Real-time data streaming and processing capabilities.',
                icon: BarChart3,
                metric: '1M+/sec'
              },
              {
                title: 'Device Management',
                description: 'Centralized management of all connected devices.',
                icon: Globe,
                metric: '24/7'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Real-Time Analytics Dashboard</h3>
              <div className="space-y-4">
                {[
                  { label: 'Production Efficiency', value: '94%', color: 'bg-green-400' },
                  { label: 'Quality Score', value: '98.7%', color: 'bg-blue-400' },
                  { label: 'Compliance Status', value: '100%', color: 'bg-purple-400' }
                ].map((metric, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-100">{metric.label}</span>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className={`${metric.color} h-2 rounded-full`} style={{ width: metric.value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Data Analytics</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform manufacturing data into actionable insights with our advanced analytics platform.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time performance monitoring',
                  'Predictive quality analytics',
                  'Trend analysis and forecasting',
                  'Custom KPI dashboards',
                  'Automated reporting and alerts'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cloud Infrastructure</h2>
            <p className="text-xl text-gray-600">
              Scalable, secure, and compliant cloud infrastructure designed for regulated industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Cloud Support',
                description: 'Deploy on AWS, Azure, or Google Cloud with consistent performance.',
                icon: Cloud,
                features: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Options']
              },
              {
                title: 'Security & Compliance',
                description: 'Enterprise-grade security with SOC 2, ISO 27001, and GxP compliance.',
                icon: Lock,
                features: ['SOC 2 Type II', 'ISO 27001', 'GxP Validated', 'GDPR Compliant']
              },
              {
                title: 'Scalability',
                description: 'Auto-scaling infrastructure that grows with your business needs.',
                icon: TrendingUp,
                features: ['Auto-scaling', 'Load Balancing', 'Global CDN', '99.9% Uptime']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration Capabilities</h2>
            <p className="text-xl text-gray-600">
              Seamlessly connect with existing systems and third-party applications through our robust API platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">API Management</h3>
              <div className="space-y-4">
                {[
                  'RESTful API architecture',
                  'GraphQL support',
                  'Webhook integrations',
                  'Real-time data sync',
                  'API versioning and documentation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">System Integrations</h3>
              <div className="space-y-4">
                {[
                  'ERP systems (SAP, Oracle)',
                  'Laboratory instruments',
                  'Manufacturing equipment',
                  'Quality management systems',
                  'Regulatory databases'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Technology?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our advanced platform architecture can transform your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Schedule Technical Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                Download Architecture Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);