import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, CheckCircle, ArrowRight, FileText, MapPin, Calendar, DollarSign } from 'lucide-react';
import { VERIFIED_COMPANY_INFO } from '../data/verifiedCompanyInfo';

function Permits() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Verified Permit History</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete transparency with {VERIFIED_COMPANY_INFO.totalPermits} completed permits valued at {VERIFIED_COMPANY_INFO.totalValuation}, all with 100% code compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{VERIFIED_COMPANY_INFO.totalPermits}</div>
              <div className="text-gray-600 font-medium">Total Permits</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">{VERIFIED_COMPANY_INFO.totalValuation}</div>
              <div className="text-gray-600 font-medium">Total Value</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-600 font-medium">Jurisdictions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Records */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Permit Record</h2>
            <p className="text-xl text-gray-600">All permits are publicly available and can be verified with local building departments.</p>
          </div>

          <div className="space-y-6">
            {VERIFIED_COMPANY_INFO.permits.map((permit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{permit.type}</h3>
                        <p className="text-sm text-gray-500">Permit #{permit.permitNumber}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{permit.description}</p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-medium">{permit.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium text-gray-900">{permit.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Date</div>
                        <div className="font-medium text-gray-900">{permit.date}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Valuation</div>
                      <div className="text-xl font-bold text-gray-900">{permit.valuation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuildZoom Verification */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BuildZoom Verification</h2>
            <p className="text-xl text-gray-600">Our permit history is verified by BuildZoom for transparency and accountability.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-blue-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">BuildZoom Score: {VERIFIED_COMPANY_INFO.buildZoomScore}</div>
                    <div className="text-gray-600">{VERIFIED_COMPANY_INFO.buildZoomRanking}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Verified {VERIFIED_COMPANY_INFO.verificationDate}</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Verification Criteria</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Verified permit history</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Transparent business practices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Passed code inspections on all permits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Permits publicly listed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Permit Jurisdictions</h4>
                  <div className="space-y-2">
                    {VERIFIED_COMPANY_INFO.permitJurisdictions.map((jurisdiction, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{jurisdiction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Add to Our Permit History?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us for your next home improvement project. We handle all permits and ensure 100% code compliance.
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
              to="/services"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Permits;