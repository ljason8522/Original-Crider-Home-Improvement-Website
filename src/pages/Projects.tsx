import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar, DollarSign, CheckCircle, Award, Star, Eye } from 'lucide-react';

function Projects() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Complete House Remodel",
      location: "718 17th St, Rock Island, IL",
      value: "$17,000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete house remodel including frame walls and resupport flooring all to code specifications. This comprehensive project involved structural improvements, electrical updates, and professional finishing work throughout the home.",
      date: "December 2021",
      category: "Full Remodel",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      details: [
        "Complete structural framing",
        "Floor support reinforcement", 
        "Code-compliant electrical updates",
        "Professional finishing work",
        "Proper permits and inspections"
      ]
    },
    {
      title: "Stairs & Landing Construction",
      location: "529 31st St, Rock Island, IL",
      value: "$10,000",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional construction of north and south landings and stairs on new concrete footings, all completed to code specifications. This project required careful structural planning and precise execution for safety and durability.",
      date: "September 2021",
      category: "Construction",
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      details: [
        "New concrete footings",
        "Custom stair construction",
        "Safety railings and balusters",
        "Weather-resistant materials",
        "Code-compliant design and installation"
      ]
    },
    {
      title: "Fire Damage Roof Restoration",
      location: "1405 7th Ave, Rock Island, IL",
      value: "$6,000",
      image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete removal and replacement of fire damaged roof system according to structural engineer's report, all work completed to code specifications. This restoration project required coordination with insurance and careful adherence to structural requirements.",
      date: "January 2021",
      category: "Restoration",
      gradient: "from-red-500 to-red-700",
      bgGradient: "from-red-50 to-red-100",
      details: [
        "Complete roof system removal",
        "Structural damage assessment",
        "Code-compliant replacement",
        "Insurance coordination",
        "Structural engineer report compliance"
      ]
    },
    {
      title: "Duplex Siding Project",
      location: "801 5th Ave, Rock Island, IL", 
      value: "$2,800",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete tear-off and re-siding of duplex property to code specifications, including fanfold insulation installation before new siding application. This project improved both appearance and energy efficiency.",
      date: "October 2020",
      category: "Siding",
      gradient: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      details: [
        "Complete siding removal",
        "Fanfold insulation installation",
        "New siding application",
        "Trim and finishing work",
        "Energy efficiency improvements"
      ]
    },
    {
      title: "Siding & Window Repair",
      location: "1110 4th St, Rock Island, IL",
      value: "$500",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional installation of siding squares and replacement of corner pieces on house and garage. Included repair of single pane windows for improved weatherproofing and appearance.",
      date: "August 2021",
      category: "Repair",
      gradient: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-50 to-orange-100",
      details: [
        "Partial siding replacement",
        "Corner piece installation",
        "Window glass replacement",
        "Weatherproofing improvements",
        "Garage and house exterior work"
      ]
    },
    {
      title: "Residential Siding Maintenance",
      location: "2414 23rd Ave, Moline, IL",
      value: "Maintenance",
      image: "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive residential maintenance and repair work focusing on siding replacement and updates. This preventive maintenance project helped extend the life of the home's exterior and maintain its appearance.",
      date: "June 2021",
      category: "Maintenance",
      gradient: "from-teal-500 to-teal-700",
      bgGradient: "from-teal-50 to-teal-100",
      details: [
        "Siding inspection and repair",
        "Weather damage restoration",
        "Preventive maintenance",
        "Quality materials and workmanship",
        "Long-term protection focus"
      ]
    }
  ];

  const totalValue = projects
    .filter(project => project.value !== "Maintenance")
    .reduce((sum, project) => sum + parseInt(project.value.replace(/[$,]/g, '')), 0);

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Recent Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful home improvement projects across Rock Island, Moline, and Davenport. Every project is properly permitted and code-compliant.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-slide-up animation-delay-200">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-gray-600 font-medium">Completed Projects</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">${totalValue.toLocaleString()}</div>
              <div className="text-gray-600 font-medium">Total Project Value</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600 font-medium">5-Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600">Our most comprehensive transformation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative">
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="rounded-3xl shadow-3xl w-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-900">{projects[0].date}</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl shadow-lg">
                    <div className="text-lg font-bold">{projects[0].value}</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">Permitted & Inspected</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full opacity-30 animate-float"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full opacity-40 animate-float animation-delay-1000"></div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-xl mb-6 inline-block">
                <span className="bg-white px-4 py-2 rounded-lg text-blue-600 font-semibold text-sm">{projects[0].category}</span>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-4">{projects[0].title}</h3>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{projects[0].location}</span>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{projects[0].description}</p>
              
              <div className="space-y-4 mb-8">
                {projects[0].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{detail}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Start Similar Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Complete portfolio of our recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.date}</span>
                    </div>
                    
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {project.category}
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-lg font-bold">
                      {project.value}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {project.details.slice(0, 2).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                      {project.details.length > 2 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{project.details.length - 2} more features
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="font-medium">Permitted & Inspected</span>
                      </div>
                      <Link 
                        to="/contact"
                        onClick={handleNavClick}
                        className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold flex items-center space-x-1 group/link"
                      >
                        <span>Similar Project?</span>
                        <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free assessment and detailed project quote", icon: "💬" },
              { step: "02", title: "Planning", desc: "Design finalization and permit acquisition", icon: "📋" },
              { step: "03", title: "Execution", desc: "Professional installation with quality materials", icon: "🔨" },
              { step: "04", title: "Completion", desc: "Final inspection and customer walkthrough", icon: "✅" }
            ].map((item, index) => (
              <div key={index} className="text-center group relative">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 mb-6 transform group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See something you like? Let's discuss how we can bring similar quality and craftsmanship to your home improvement project.
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
              to="/permits"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Our Permits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;