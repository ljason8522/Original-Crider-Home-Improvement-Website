import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Calendar, Filter, Eye, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { galleryData, categories, GalleryImage } from '../data/galleryData';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredImages = selectedCategory === 'All Projects' 
    ? galleryData 
    : galleryData.filter(image => image.category === selectedCategory);

  const beforeAfterPairs = galleryData.reduce((pairs, image) => {
    if (image.beforeAfter === 'before') {
      const afterImage = galleryData.find(img => 
        img.category === image.category && 
        img.beforeAfter === 'after' &&
        img.location === image.location
      );
      if (afterImage) {
        pairs.push({ before: image, after: afterImage });
      }
    }
    return pairs;
  }, [] as Array<{ before: GalleryImage; after: GalleryImage }>);

  const getBadgeColor = (beforeAfter?: string) => {
    switch (beforeAfter) {
      case 'before': return 'bg-red-100 text-red-700 border-red-200';
      case 'after': return 'bg-green-100 text-green-700 border-green-200';
      case 'during': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Camera className="h-12 w-12 text-blue-600" />
              <h1 className="text-5xl font-bold text-gray-900">Project Gallery</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our portfolio of completed home improvement projects. Every image represents quality craftsmanship, attention to detail, and satisfied customers across the Quad Cities area.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up animation-delay-200">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{galleryData.length}</div>
              <div className="text-gray-600 font-medium">Project Photos</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
              <div className="text-gray-600 font-medium">Service Categories</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">91</div>
              <div className="text-gray-600 font-medium">BuildZoom Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      {beforeAfterPairs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Transformations</h2>
              <p className="text-xl text-gray-600">See the dramatic improvements we deliver</p>
            </div>

            <div className="space-y-16">
              {beforeAfterPairs.slice(0, 2).map((pair, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="relative group">
                      <img 
                        src={pair.before.src} 
                        alt={pair.before.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold border border-red-200">
                        Before
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{pair.before.title}</h3>
                      <p className="text-gray-600">{pair.before.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative group">
                      <img 
                        src={pair.after.src} 
                        alt={pair.after.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                        After
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-semibold text-gray-900">Completed</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{pair.after.title}</h3>
                      <p className="text-gray-600">{pair.after.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Filter className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Filter by Category</h3>
              </div>
              <div className="text-sm text-gray-600">
                Showing {filteredImages.length} of {galleryData.length} images
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/70 text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </div>
                    
                    {/* Before/After Badge */}
                    {image.beforeAfter && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold border ${getBadgeColor(image.beforeAfter)}`}>
                        {image.beforeAfter.charAt(0).toUpperCase() + image.beforeAfter.slice(1)}
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{image.description}</p>
                    
                    {image.location && (
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{image.location}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="font-medium">Code Compliant</span>
                      </div>
                      <button 
                        onClick={() => setSelectedImage(image)}
                        className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold flex items-center space-x-1 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-100 max-w-md mx-auto">
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
                <p className="text-gray-600">Try selecting a different category to view more projects.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                {selectedImage.beforeAfter && (
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getBadgeColor(selectedImage.beforeAfter)}`}>
                    {selectedImage.beforeAfter.charAt(0).toUpperCase() + selectedImage.beforeAfter.slice(1)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedImage.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Category:</span>
                      <span>{selectedImage.category}</span>
                    </div>
                    {selectedImage.location && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{selectedImage.location}</span>
                      </div>
                    )}
                    {selectedImage.date && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{selectedImage.date}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Code Compliant</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Properly Permitted</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span>BuildZoom Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Own Transformation?</h2>
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
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              View Project Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;