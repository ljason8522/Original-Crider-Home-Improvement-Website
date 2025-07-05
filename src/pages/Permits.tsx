import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Calendar, CheckCircle, Shield, Award, DollarSign, ExternalLink, Filter, Search, Eye, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

function Permits() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const permits = [
    {
      address: "718 17th St, Rock Island, IL",
      date: "2021-12-16",
      valuation: "$17,000",
      description: "House remodel-frame walls and resupport flooring all to code",
      permit: "B212680",
      type: "Building Remodel",
      status: "Completed & Inspected",
      category: "remodel",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      address: "529 31st St, Rock Island, IL",
      date: "2021-09-13",
      valuation: "$10,000",
      description: "North and south landings and stairs on new footings all to code",
      permit: "B211926",
      type: "Building Remodel",
      status: "Completed & Inspected",
      category: "construction",
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      address: "1110 4th St, Rock Island, IL",
      date: "2021-08-11",
      valuation: "$500",
      description: "Installing (1) sq of siding and replacing corner pieces on the back of the house and garage. Repair (2) single pane windows",
      permit: "B211712",
      type: "Building Remodel",
      status: "Completed & Inspected",
      category: "repair",
      gradient: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      address: "1002 25th St, Moline, IL",
      date: "2021-07-20",
      valuation: "N/A",
      description: "Residential maintenance and repair - Siding",
      permit: "20-00001199-BRSD",
      type: "Siding Permit",
      status: "Completed & Inspected",
      category: "siding",
      gradient: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      address: "2414 23rd Ave, Moline, IL",
      date: "2021-06-05",
      valuation: "N/A",
      description: "Residential maintenance and repair - Siding",
      permit: "20-00000900-BRSD",
      type: "Siding Permit",
      status: "Completed & Inspected",
      category: "siding",
      gradient: "from-teal-500 to-teal-700",
      bgGradient: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      address: "1405 7th Ave, Rock Island, IL",
      date: "2021-01-13",
      valuation: "$6,000",
      description: "Remove and replace fire damaged roof system according to structural report all to code",
      permit: "B210045",
      type: "Building Remodel",
      status: "Completed & Inspected",
      category: "roofing",
      gradient: "from-red-500 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      address: "801 5th Ave, Rock Island, IL",
      date: "2020-10-21",
      valuation: "$2,800",
      description: "Tear off and reside duplex to code. Use fanfold before siding",
      permit: "B202247",
      type: "Building Remodel",
      status: "Completed & Inspected",
      category: "siding",
      gradient: "from-indigo-500 to-indigo-700",
      bgGradient: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  const totalValue = permits
    .filter(permit => permit.valuation !== "N/A")
    .reduce((sum, permit) => sum + parseInt(permit.valuation.replace(/[$,]/g, '')), 0);

  const filteredPermits = permits.filter(permit => {
    const matchesFilter = selectedFilter === 'all' || permit.category === selectedFilter;
    const matchesSearch = permit.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         permit.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Projects', count: permits.length },
    { id: 'remodel', label: 'Remodeling', count: permits.filter(p => p.category === 'remodel').length },
    { id: 'siding', label: 'Siding', count: permits.filter(p => p.category === 'siding').length },
    { id: 'roofing', label: 'Roofing', count: permits.filter(p => p.category === 'roofing').length },
    { id: 'construction', label: 'Construction', count: permits.filter(p => p.category === 'construction').length },
    { id: 'repair', label: 'Repairs', count: permits.filter(p => p.category === 'repair').length }
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Permits &
              <span className="text-blue-600 block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Verified Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete transparency with our permit history. All our work is properly permitted, inspected, and code-compliant. BuildZoom verified contractor with extensive documentation.
            </p>
          </div>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-slide-up animation-delay-200">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <AnimatedCounter end={permits.length} />
                <div className="text-gray-600 font-medium">Total Permits</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <AnimatedCounter end={Math.floor(totalValue / 1000)} prefix="$" suffix="K" />
                </div>
                <div className="text-gray-600 font-medium">Total Value</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <AnimatedCounter end={100} suffix="%" />
                <div className="text-gray-600 font-medium">Code Compliant</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
              <div className="relative overflow-hidden">
                <AnimatedCounter end={91} />
                <div className="text-gray-600 font-medium">BuildZoom Score</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BuildZoom Verified</h3>
              <p className="text-gray-600 leading-relaxed">Score of 91 - Top 37% of 65,686 Illinois contractors</p>
              <div className="mt-4 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-blue-600">Verified Excellence</span>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">All Permits Passed</h3>
              <p className="text-gray-600 leading-relaxed">Every project properly permitted and inspected</p>
              <div className="mt-4 flex items-center justify-center">
                <Award className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm font-medium text-green-600">100% Success Rate</span>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Code Compliant</h3>
              <p className="text-gray-600 leading-relaxed">Every project meets building standards</p>
              <div className="mt-4 flex items-center justify-center">
                <Shield className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-sm font-medium text-purple-600">Safety Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search permits by address or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedFilter(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedFilter === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/70 text-gray-700 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permits Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Permit History</h2>
            <p className="text-lg text-gray-600">
              Detailed record of all permitted work. Click on any permit to view public records.
            </p>
          </div>

          <div className="grid gap-8">
            {filteredPermits.map((permit, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${permit.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${permit.bgGradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r ${permit.bgGradient} rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 animation-delay-200`}></div>
                  
                  <div className="relative z-10">
                    <div className="grid lg:grid-cols-4 gap-8">
                      {/* Location & Date */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`${permit.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <MapPin className={`h-6 w-6 ${permit.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{permit.address}</h3>
                            <div className="flex items-center text-gray-600 mb-4">
                              <Calendar className="h-5 w-5 mr-2" />
                              <span className="font-medium">{new Date(permit.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">{permit.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Permit Details */}
                      <div>
                        <div className="space-y-6">
                          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                            <div className="text-sm font-medium text-gray-500 mb-2">Permit Number</div>
                            <div className="font-mono text-lg bg-gray-100 px-3 py-2 rounded-lg">{permit.permit}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2">Type</div>
                            <span className={`inline-block bg-gradient-to-r ${permit.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                              {permit.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Value & Status */}
                      <div>
                        <div className="space-y-6">
                          <div className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                            <div className="text-sm font-medium text-gray-500 mb-2">Project Value</div>
                            <div className={`text-3xl font-bold bg-gradient-to-r ${permit.gradient} bg-clip-text text-transparent`}>
                              {permit.valuation}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-500 mb-2">Status</div>
                            <div className="flex items-center justify-center text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-100">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              <span className="font-semibold">{permit.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <div className="text-gray-500 flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        <span className="text-sm">All permits are publicly available and can be verified with local building departments</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 transition-colors font-semibold flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl group/btn">
                        <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span>View Public Record</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPermits.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-100 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No permits found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BuildZoom Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white shadow-3xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">BuildZoom Verified Contractor</h2>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Our BuildZoom score of 91 places us in the top 37% of 65,686 Illinois contractors. This score is based on verified permit history, customer reviews, and business practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                    </div>
                    <span className="text-lg">Verified permit history</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                    </div>
                    <span className="text-lg">Licensed and insured</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                    </div>
                    <span className="text-lg">Transparent business practices</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                  <div className="text-8xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">91</div>
                  <div className="text-2xl font-bold mb-3">BuildZoom Score</div>
                  <div className="text-blue-200 text-lg">Top 37% in Illinois</div>
                  <div className="mt-6 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-200 mr-2" />
                    <span className="text-blue-200 font-medium">Verified Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Work with a Verified Contractor?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our permit history speaks for itself. Every project is properly permitted, inspected, and completed to code. Get your free quote today and experience the difference of working with a BuildZoom verified professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
            >
              <span className="group-hover:animate-pulse">Get Your Free Quote</span>
            </Link>
            <Link 
              to="/projects"
              onClick={handleNavClick}
              className="border-3 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Permits;