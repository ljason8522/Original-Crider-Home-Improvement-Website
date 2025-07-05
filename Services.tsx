import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Paintbrush, Hammer, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';

function Services() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Home,
      title: "Basement Remodeling",
      description: "Complete basement transformations including framing walls, resupporting flooring, and finishing touches - all to code specifications.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        "Professional framing and drywall",
        "Flooring installation and repair",
        "Electrical and plumbing updates",
        "Insulation and moisture control",
        "Custom finishing touches"
      ]
    },
    {
      icon: Wrench,
      title: "Siding Installation",
      description: "Professional siding installation and replacement, including corner pieces, fanfold installation, and window repairs for complete exterior protection.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      features: [
        "Complete siding replacement",
        "Corner piece installation",
        "Fanfold insulation",
        "Window trim and repair",
        "Weather-resistant materials"
      ]
    },
    {
      icon: Paintbrush,
      title: "Kitchen Remodeling",
      description: "Complete kitchen renovations that combine functionality with stunning design aesthetics, including finishing touches and code compliance.",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        "Custom cabinet installation",
        "Countertop replacement",
        "Appliance integration",
        "Plumbing and electrical updates",
        "Tile and flooring work"
      ]
    },
    {
      icon: Hammer,
      title: "Roofing Services",
      description: "Expert roof repair and replacement services, including fire damage restoration according to structural reports - all to code specifications.",
      image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      features: [
        "Complete roof replacement",
        "Emergency repair services",
        "Fire damage restoration",
        "Structural report compliance",
        "Quality materials and warranty"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From concept to completion, we provide comprehensive home improvement solutions with meticulous attention to detail and superior craftsmanship.
            </p>
            <div className="flex items-center justify-center space-x-4 animate-slide-up animation-delay-200">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 font-medium">All work properly permitted and code compliant</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 animate-slide-up animation-delay-400">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Expert Services</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 font-medium">5-Star Rating</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">91</div>
              <div className="text-gray-600 font-medium">BuildZoom Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                  <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-4 group">
                        <div className="bg-green-100 p-1 rounded-full">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact"
                    onClick={handleNavClick}
                    className={`inline-flex items-center space-x-3 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 hover:scale-105 group`}
                  >
                    <span>Get Quote for This Service</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-up animation-delay-200`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="rounded-3xl shadow-3xl w-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-gray-900">Code Compliant</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${service.bgGradient} rounded-full opacity-30 animate-float`}></div>
                    <div className={`absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r ${service.bgGradient} rounded-full opacity-40 animate-float animation-delay-1000`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free in-home assessment and detailed quote" },
              { step: "02", title: "Planning", desc: "Design review and permit acquisition" },
              { step: "03", title: "Execution", desc: "Professional installation with quality materials" },
              { step: "04", title: "Completion", desc: "Final inspection and customer walkthrough" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 mb-6 transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you bring your home improvement vision to life with professional craftsmanship and honest service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Get Your Free Quote
            </Link>
            <Link 
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;