import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar, CheckCircle, Award, Star, Eye } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';
import OptimizedImage from '../components/OptimizedImage';

function Projects() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Complete House Remodel",
      location: "718 17th St, Rock Island, IL",
      value: "$17,000",
      image: "/IMG_7070.JPG",
      description: "Full house remodel including frame walls and resupport flooring all to code.",
      date: "December 2021",
      category: "Full Remodel",
      details: [
        "Complete structural framing",
        "Floor support reinforcement", 
        "Code-compliant electrical updates",
        "Professional finishing work"
      ]
    },
    {
      title: "Stairs & Landing Construction",
      location: "529 31st St, Rock Island, IL",
      value: "$10,000",
      image: "/IMG_7082.JPG",
      description: "North and south landings and stairs on new footings all to code.",
      date: "September 2021",
      category: "Construction",
      details: [
        "New concrete footings",
        "Custom stair construction",
        "Safety railings and balusters",
        "Weather-resistant materials"
      ]
    },
    {
      title: "Fire Damage Roof Restoration",
      location: "1405 7th Ave, Rock Island, IL",
      value: "$6,000",
      image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Remove and replace fire damaged roof system according to structural report all to code.",
      date: "January 2021",
      category: "Restoration",
      details: [
        "Complete roof system removal",
        "Structural damage assessment",
        "Code-compliant replacement",
        "Insurance coordination"
      ]
    },
    {
      title: "Duplex Siding Project",
      location: "801 5th Ave, Rock Island, IL", 
      value: "$2,800",
      image: "/IMG_7063.JPG",
      description: "Tear off and reside duplex to code. Use fanfold before siding.",
      date: "October 2020",
      category: "Siding",
      details: [
        "Complete siding removal",
        "Fanfold insulation installation",
        "New siding application",
        "Trim and finishing work"
      ]
    },
    {
      title: "Bathroom Renovation",
      location: "Rock Island, IL",
      value: "$3,500",
      image: "/IMG_7086.JPG",
      description: "Complete bathroom renovation with new tiles, vanity, and fixtures.",
      date: "August 2021",
      category: "Bathroom",
      details: [
        "Tile installation and design",
        "Vanity and fixture replacement",
        "Plumbing updates",
        "Professional finishing"
      ]
    },
    {
      title: "Flooring Installation",
      location: "Rock Island, IL",
      value: "$4,200",
      image: "/IMG_7081.JPG",
      description: "Professional carpet and flooring installation throughout multiple rooms.",
      date: "June 2021",
      category: "Flooring",
      details: [
        "Quality carpet installation",
        "Proper edge finishing",
        "Room transitions",
        "Clean professional work"
      ]
    }
  ];

  const totalValue = projects
    .reduce((sum, project) => sum + parseInt(project.value.replace(/[$,]/g, '')), 0);

  const processSteps = [
    { step: "01", title: "Consultation", description: "Free assessment and detailed project quote", icon: "💬" },
    { step: "02", title: "Planning", description: "Design finalization and permit acquisition", icon: "📋" },
    { step: "03", title: "Execution", description: "Professional installation with quality materials", icon: "🔨" },
    { step: "04", title: "Completion", description: "Final inspection and customer walkthrough", icon: "✅" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Recent Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful home improvement projects across Rock Island, Moline, and Davenport. Every project is properly permitted and code-compliant.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-gray-600 font-medium">Completed Projects</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">${totalValue.toLocaleString()}</div>
              <div className="text-gray-600 font-medium">Total Project Value</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600">Our most comprehensive transformation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <OptimizedImage
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="rounded-3xl shadow-2xl w-full h-96"
                />
                
                {/* Floating badges */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-900">{projects[0].date}</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                  <div className="text-lg font-bold">{projects[0].value}</div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-900">Permitted & Inspected</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-blue-50 p-2 rounded-xl mb-6 inline-block">
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
                  <div key={index} className="flex items-center space-x-4">
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
                className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                <span>Start Similar Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Complete portfolio of our recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.date}</span>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-lg font-bold">
                    {project.value}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
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
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold flex items-center space-x-1"
                    >
                      <span>Similar Project?</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessSection 
        title="Our Project Process"
        subtitle="How we deliver exceptional results"
        steps={processSteps}
      />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See something you like? Let's discuss how we can bring similar quality and craftsmanship to your home improvement project.
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
              to="/permits"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
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