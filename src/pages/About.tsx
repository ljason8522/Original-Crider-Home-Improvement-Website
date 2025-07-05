import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, CheckCircle, ArrowRight, Shield, Users, Clock, FileText, MapPin, Phone, Mail } from 'lucide-react';
import { VERIFIED_COMPANY_INFO } from '../data/verifiedCompanyInfo';

function About() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Crider Home Improvement</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BuildZoom verified contractor serving the Quad Cities area with transparent, code-compliant home improvement services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 Rating (1 verified review)</span>
                <div className="flex items-center space-x-2 ml-4">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold">BuildZoom Score: {VERIFIED_COMPANY_INFO.buildZoomScore}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Verified Excellence in Home Improvement
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Crider Home Improvement is a BuildZoom verified contractor based in {VERIFIED_COMPANY_INFO.location}, 
                serving {VERIFIED_COMPANY_INFO.serviceArea}. With a BuildZoom score of {VERIFIED_COMPANY_INFO.buildZoomScore}, 
                we rank in the {VERIFIED_COMPANY_INFO.buildZoomRanking}.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{VERIFIED_COMPANY_INFO.totalPermits} completed permits with 100% code compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">BuildZoom verified since {VERIFIED_COMPANY_INFO.verificationDate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Transparent permit history across Rock Island and Moline</span>
                </div>
              </div>

              <Link 
                to="/permits"
                onClick={handleNavClick}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span>View Permit History</span>
              </Link>
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
                    <div className="text-sm text-gray-600">{VERIFIED_COMPANY_INFO.buildZoomRanking}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your home improvement project?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">{VERIFIED_COMPANY_INFO.location}</p>
              <p className="text-sm text-gray-500 mt-2">Serving {VERIFIED_COMPANY_INFO.serviceArea}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${VERIFIED_COMPANY_INFO.phone}`} className="text-gray-600 hover:text-green-600 transition-colors">
                {VERIFIED_COMPANY_INFO.phone}
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${VERIFIED_COMPANY_INFO.email}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                {VERIFIED_COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
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

export default About;