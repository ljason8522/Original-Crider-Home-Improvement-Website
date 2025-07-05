import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Filter, Eye, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { galleryData, categories, GalleryImage } from '../data/galleryData';
import OptimizedImage from '../components/OptimizedImage';

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
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera className="h-12 w-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-900">Project Gallery</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of completed home improvement projects. Every image represents quality craftsmanship, attention to detail, and satisfied customers across the Quad Cities area.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{galleryData.length}</div>
              <div className="text-gray-600 font-medium">Project Photos</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
              <div className="text-gray-600 font-medium">Service Categories</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Code Compliant</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
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
                    <div className="relative">
                      <OptimizedImage
                        src={pair.before.src}
                        alt={pair.before.title}
                        className="w-full h-80 rounded-2xl shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold border border-red-200">
                        Before
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{pair.before.title}</h3>
                      <p className="text-gray-600">{pair.before.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <OptimizedImage
                        src={pair.after.src}
                        alt={pair.after.title}
                        className="w-full h-80 rounded-2xl shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                        After
                      </div>
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 border border-gray-200'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                  
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
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{image.description}</p>
                  
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
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 max-w-md mx-auto">
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
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 rounded-t-2xl"
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Own Transformation?</h2>
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
              to="/projects"
              onClick={handleNavClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
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