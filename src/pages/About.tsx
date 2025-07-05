import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Users, Clock, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

function About() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Michel K.",
      location: "Davenport, IA",
      rating: 5,
      date: "March 22, 2024",
      text: "Zach is amazing. I owned a house in Davenport while I lived in Georgia, and he was very helpful. I used him on multiple projects, including remodeling my entire basement and completing a few touches in my kitchen. When it came time to sell, I rehired him, and he fixed everything in the house, which led to the buyer not requesting any additional repairs. He is real and honest. I definitely recommend him all day. There is not much like him in Iowa/Illinois.",
      project: "Basement remodeling, Selling Repairs, Cleaning Service",
      value: "$15,000"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About Crider Home Improvement</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a BuildZoom verified contractor serving the Quad Cities area with honest, professional home improvement services. Our commitment to quality craftsmanship and code compliance sets us apart.
              </p>
              
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 Rating</span>
                <div className="flex items-center space-x-2 ml-4">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold">BuildZoom Score: 91</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-gray-600 text-sm">Permitted Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Code Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional home improvement work" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
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
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Crider Home Improvement was founded on the principles of honest work, quality craftsmanship, and complete transparency. We believe that every homeowner deserves to work with a contractor they can trust.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our approach is simple: we do what we say we'll do, when we say we'll do it, and we do it right the first time. Every project we take on is properly permitted and completed to code specifications. We're not just building and remodeling homes – we're building lasting relationships with our clients.
              </p>
              <p className="text-lg leading-relaxed">
                With a BuildZoom score of 91, placing us in the top 37% of Illinois contractors, we've proven our commitment to excellence. Our extensive permit history and satisfied customers speak to the quality of our work and the integrity of our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">What sets us apart from other contractors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">BuildZoom Verified</h3>
              <p className="text-gray-600">
                BuildZoom Score of 91, ranking in the top 37% of 65,686 Illinois contractors with verified permit history and transparent business practices.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Years of experience delivering high-quality workmanship on every project, with all work completed to code specifications and proper permits.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Honest & Reliable</h3>
              <p className="text-gray-600">
                We do what we say we'll do, when we say we'll do it. No surprises, no hidden costs, just honest communication and reliable service.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Compliant</h3>
              <p className="text-gray-600">
                Every project meets or exceeds local building codes with proper permits and inspections for your safety and peace of mind.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of local building codes, permit requirements, and weather considerations specific to the Quad Cities area.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Extensive portfolio of successful projects with satisfied customers and a 5-star rating based on real client experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied homeowners</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Project:</span> {testimonial.project}
                  </div>
                  <div className="text-sm font-semibold text-blue-600">
                    {testimonial.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">Proudly serving the Quad Cities area</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rock Island, IL</h3>
              <p className="text-gray-600">Our home base with extensive project history</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Moline, IL</h3>
              <p className="text-gray-600">Regular service area with satisfied customers</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Davenport, IA</h3>
              <p className="text-gray-600">Cross-state service with proven results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the difference of working with a BuildZoom verified contractor. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Your Free Quote
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

export default About;