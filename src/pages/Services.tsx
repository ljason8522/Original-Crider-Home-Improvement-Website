import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Paintbrush, Hammer, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';
import OptimizedImage from '../components/OptimizedImage';

function Services() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Home,
      title: "Basement Remodeling",
      description: "Complete basement transformations including framing walls, resupporting flooring, and finishing touches - all to code specifications.",
      image: "/IMG_7070.JPG",
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
      image: "/IMG_7063.JPG",
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
      image: "/IMG_7086.JPG",
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
      features: [
        "Complete roof replacement",
        "Emergency repair services",
        "Fire damage restoration",
        "Structural report compliance",
        "Quality materials and warranty"
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultation", description: "Free in-home assessment and detailed quote", icon: "💬" },
    { step: "02", title: "Planning", description: "Design review and permit acquisition", icon: "📋" },
    { step: "03", title: "Execution", description: "Professional installation with quality materials", icon: "🔨" },
    { step: "04", title: "Completion", description: "Final inspection and customer walkthrough", icon: "✅" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From concept to completion, we provide comprehensive home improvement solutions with meticulous attention to detail and superior craftsmanship.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="text-gray-700 font-medium">All work properly permitted and code compliant</span>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Expert Services</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 font-medium">5-Star Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">91</div>
              <div className="text-gray-600 font-medium">BuildZoom Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-4">
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
                    className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    <span>Get Quote for This Service</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="rounded-3xl shadow-2xl w-full h-96"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-900">Code Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection 
        title="Our Process"
        subtitle="How we bring your vision to life"
        steps={processSteps}
      />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you bring your home improvement vision to life with professional craftsmanship and honest service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Your Free Quote
            </Link>
            <Link 
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
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