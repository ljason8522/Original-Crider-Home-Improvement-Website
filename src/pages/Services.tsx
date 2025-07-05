import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, CheckCircle, ArrowRight, Shield, Users, Clock, Wrench, Home, Hammer } from 'lucide-react';
import { VERIFIED_COMPANY_INFO } from '../data/verifiedCompanyInfo';

function Services() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Verified Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional home improvement services backed by verified permits and BuildZoom certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basement Finishing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Basement Finishing</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.basementFinishing.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bathroom Remodeling */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Bathroom Remodeling</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.bathroomRemodeling.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exterior Improvements */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Exterior Improvements</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.exteriorImprovements.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flooring Installation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Flooring Installation</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.flooringInstallation.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roofing & Structural Repairs */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Roofing & Structural</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.roofingStructuralRepairs.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Small Repairs & Touch-Ups */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Small Repairs & Touch-Ups</h3>
              <ul className="space-y-3 text-gray-600">
                {VERIFIED_COMPANY_INFO.verifiedServices.smallRepairsTouchUps.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BuildZoom Verification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BuildZoom Verified Excellence</h2>
            <p className="text-xl text-gray-600">Our services are backed by verified permit history and transparent business practices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BuildZoom Score: {VERIFIED_COMPANY_INFO.buildZoomScore}</h3>
              <p className="text-gray-600">{VERIFIED_COMPANY_INFO.buildZoomRanking}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{VERIFIED_COMPANY_INFO.totalPermits} Completed Permits</h3>
              <p className="text-gray-600">100% code compliant across Rock Island and Moline jurisdictions</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg border border-purple-100">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.0 Star Rating</h3>
              <p className="text-gray-600">Based on verified customer review</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us for a free consultation and quote on your home improvement project.
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
              to="/permits"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Permit History
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;