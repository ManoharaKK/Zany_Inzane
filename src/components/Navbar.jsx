import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-black/20' 
          : 'bg-gradient-to-b from-black/90 to-black/50 py-5'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black bg-gradient-to-r from-[rgb(229,16,22)] via-[rgb(229,16,22)]/90 to-[rgb(229,16,22)] bg-clip-text text-transparent tracking-tighter">
              ZANY INZANE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white text-sm font-bold transition-colors duration-200">
              HOME
            </Link>
            <Link to="/store" className="text-white/90 hover:text-white text-sm font-bold transition-colors duration-200">
              STORE
            </Link>
            <Link to="/music" className="text-white/90 hover:text-white text-sm font-bold transition-colors duration-200">
              MUSIC
            </Link>
            <Link to="/about" className="text-white/90 hover:text-white text-sm font-bold transition-colors duration-200">
              ABOUT
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white text-sm font-bold transition-colors duration-200">
              CONTACT
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/cart" className="p-2 text-white/80 hover:text-white transition-colors duration-200 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[rgb(229,16,22)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button className="px-4 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105">
              SIGN IN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md mt-3 py-4">
          <div className="px-4 space-y-4">
            <Link 
              to="/" 
              className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/store" 
              className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              STORE
            </Link>
            <Link 
              to="/music" 
              className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MUSIC
            </Link>
            <Link 
              to="/about" 
              className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button className="px-4 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300">
                SIGN IN
              </button>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-white/80 hover:text-white transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link to="/cart" className="p-2 text-white/80 hover:text-white transition-colors duration-200 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-[rgb(229,16,22)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 