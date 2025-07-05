import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, CheckCircle, ArrowRight, Shield, Users, Clock } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

function Home() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6 animate-fade-in">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 Rating</span>
                <div className="flex items-center space-x-2 ml-4">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold">BuildZoom Score: 91</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
                Transform Your
                <span className="text-blue-600 block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Home Dreams</span>
                Into Reality
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-200">
                Professional home improvement services in Rock Island, IL. From basement remodeling to complete renovations, we deliver exceptional craftsmanship with honest, reliable service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up animation-delay-400">
                <Link 
                  to="/contact"
                  onClick={handleNavClick}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-center group"
                >
                  <span className="group-hover:animate-pulse">Get Free Quote</span>
                </Link>
                <Link 
                  to="/projects"
                  onClick={handleNavClick}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg text-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  View Our Work
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 animate-slide-up animation-delay-600">
                <div className="text-center">
                  <AnimatedCounter end={8} suffix="+" />
                  <div className="text-gray-600 font-medium">Completed Permits</div>
                </div>
              <div className="text-gray-600 font-medium">Completed Permits</div>
                <div className="text-center">
                  <AnimatedCounter end={100} suffix="%" />
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={91} />
                  <div className="text-gray-600 font-medium">BuildZoom Score</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up animation-delay-800">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Beautiful home renovation" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">BuildZoom Verified</div>
                    <div className="text-sm text-gray-600">Top 37% of IL contractors</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-float animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive home improvement solutions with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basement Finishing</h3>
              <p className="text-gray-600 mb-4">Wall framing, insulation, electrical rough-ins, and media room builds.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exterior Improvements</h3>
              <p className="text-gray-600 mb-4">Siding replacement with insulation, concrete sidewalks, and corner repairs.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Remodeling</h3>
              <p className="text-gray-600 mb-4">Tile replacement, bathtub reglazing, vanity upgrades, and floor resupport.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roofing Services</h3>
              <p className="text-gray-600 mb-4">Fire damage roof restoration, tear-offs, and structural repairs to code.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              onClick={handleNavClick}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied homeowners</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-blue-100 relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              
              <div className="relative z-10">
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
                  "Zach is amazing. I owned a house in Davenport while I lived in Georgia, and he was very helpful. I used him on multiple projects, including remodeling my entire basement and completing a few touches in my kitchen. When it came time to sell, I rehired him, and he fixed everything in the house, which led to the buyer not requesting any additional repairs. He is real and honest. I definitely recommend him all day. There is not much like him in Iowa/Illinois."
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Crider Home Improvement</h2>
            <p className="text-xl text-gray-600">Experience the difference of working with true professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BuildZoom Verified</h3>
              <p className="text-gray-600">BuildZoom Score of 91, ranking in the top 37% of 65,686 Illinois contractors with verified permit history.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Work History</h3>
              <p className="text-gray-600">8 completed permits with 100% code compliance across Rock Island and Moline jurisdictions.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg border border-purple-100">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Honest & Reliable</h3>
              <p className="text-gray-600">Real customer feedback confirms honest work practices and reliable service across the Quad Cities area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free, no-obligation quote for your home improvement project. We're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
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