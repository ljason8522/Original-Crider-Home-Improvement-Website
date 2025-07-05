import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    // Smooth scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" onClick={handleNavClick} className="flex items-center space-x-4">
            <img 
              src="/blue logo transparent (1).png" 
              alt="Crider Home Improvement" 
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Crider Home Improvement</h1>
              <p className="text-sm text-blue-600 font-medium">Rock Island, IL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${isActive('/projects') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Projects
            </Link>
            <Link 
              to="/permits" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${isActive('/permits') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Permits
            </Link>
            <Link 
              to="/about" 
              onClick={handleNavClick}
              className={`transition-colors font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={handleNavClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive('/projects') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Projects
              </Link>
              <Link 
                to="/permits" 
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive('/permits') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Permits
              </Link>
              <Link 
                to="/about" 
                onClick={handleNavClick}
                className={`transition-colors font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={handleNavClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;