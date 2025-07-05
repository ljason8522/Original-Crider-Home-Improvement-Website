import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, CheckCircle, ArrowRight, Shield, Users, Clock } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ParallaxSection from '../components/ParallaxSection';
import OptimizedImage from '../components/OptimizedImage';

function Home() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        backgroundImage="/IMG_7061.JPG"
        speed={0.3}
        className="pt-20 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">5.0 Rating</span>
                <div className="flex items-center space-x-2 ml-4">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">BuildZoom Score: 91</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="text-blue-400 block">Home Dreams</span>
                Into Reality
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Professional home improvement services in Rock Island, IL. From basement remodeling to complete renovations, we deliver exceptional craftsmanship with honest, reliable service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  onClick={handleNavClick}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg text-center"
                >
                  Get Free Quote
                </Link>
                <Link 
                  to="/projects"
                  onClick={handleNavClick}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg text-center"
                >
                  View Our Work
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <AnimatedCounter end={10} suffix="+" />
                  <div className="text-white/80 font-medium">Permitted Projects</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={100} suffix="%" />
                  <div className="text-white/80 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={91} />
                  <div className="text-white/80 font-medium">BuildZoom Score</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">BuildZoom Verified</div>
                    <div className="text-sm text-gray-600">Top 37% of IL contractors</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Every project is properly permitted, inspected, and completed to code specifications for your safety and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive home improvement solutions with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basement Remodeling</h3>
              <p className="text-gray-600 mb-4">Complete basement transformations with professional framing and finishing.</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Siding Installation</h3>
              <p className="text-gray-600 mb-4">Professional siding installation and replacement for complete exterior protection.</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Remodeling</h3>
              <p className="text-gray-600 mb-4">Complete kitchen renovations that combine functionality with stunning design.</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roofing Services</h3>
              <p className="text-gray-600 mb-4">Expert roof repair and replacement services, including emergency restoration.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              onClick={handleNavClick}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonial with Parallax */}
      <ParallaxSection 
        backgroundImage="/IMG_7070.JPG"
        speed={0.4}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90">Real feedback from satisfied homeowners</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Michel K.</div>
                    <div className="text-gray-600">Davenport, IA</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">March 22, 2024</div>
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                "Zach is amazing. I owned a house in Davenport while I lived in Georgia, and he was very helpful. I used him on multiple projects, including remodeling my entire basement and completing a few touches in my kitchen. When it came time to sell, I rehired him, and he fixed everything in the house, which led to the buyer not requesting any additional repairs. He is real and honest. I definitely recommend him all day."
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Project Type</div>
                  <div className="text-gray-700">Basement remodeling, Kitchen touches, Selling repairs</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Project Value</div>
                  <div className="text-xl font-bold text-blue-600">$15,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Crider Home Improvement</h2>
            <p className="text-xl text-gray-600">Experience the difference of working with true professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BuildZoom Verified</h3>
              <p className="text-gray-600">BuildZoom Score of 91, ranking in the top 37% of 65,686 Illinois contractors with verified permit history.</p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">Years of experience delivering high-quality workmanship on every project, with all work completed to code specifications.</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl border border-purple-100">
              <div className="bg-purple-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Compliant</h3>
              <p className="text-gray-600">Every project meets or exceeds local building codes with proper permits and inspections for your safety and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free, no-obligation quote for your home improvement project. We're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;