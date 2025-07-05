import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" onClick={handleNavClick} className="flex items-center space-x-4 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/blue logo transparent (1).png" 
                  alt="Crider Home Improvement" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Crider Home Improvement</h3>
                <p className="text-gray-400">Professional Home Improvement Services</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming homes across Rock Island, Moline, and Davenport with expert craftsmanship and honest service. BuildZoom verified contractor with extensive permit history.
            </p>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">BuildZoom Score: 91 - Top 37% in Illinois</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" onClick={handleNavClick} className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" onClick={handleNavClick} className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/permits" onClick={handleNavClick} className="hover:text-white transition-colors">Permits</Link></li>
              <li><Link to="/about" onClick={handleNavClick} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" onClick={handleNavClick} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rock Island, IL 61204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:3095588076" className="hover:text-white transition-colors">
                  (309) 558-8076
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:criderhomeimprove@live.com" className="hover:text-white transition-colors">
                  criderhomeimprove@live.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Crider Home Improvement. All rights reserved. BuildZoom verified contractor serving the Quad Cities area.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;