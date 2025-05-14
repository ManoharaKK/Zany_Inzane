import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section - adjusted to account for navbar */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Top gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://www.creative-flyers.com/wp-content/uploads/2020/07/Hip-Hop-Flyer-Template.jpg" 
            alt="Home Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[rgb(229,16,22)] via-[rgb(229,16,22)]/80 to-[rgb(229,16,22)] bg-clip-text text-transparent tracking-tighter">
            ZANY INZANE
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light mb-8">
            Bringing music and style to the streets
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-[rgb(229,16,22)] rounded-full text-white text-lg font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105">
              Latest Music
            </button>
            <Link to="/store">
              <button className="px-8 py-4 bg-white/10 rounded-full text-white text-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Visit Store
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-[rgb(229,16,22)]">Latest Music</h3>
            <p className="text-white/80 mb-4">Check out our latest tracks and albums. New releases every month.</p>
            <button className="text-white font-bold hover:text-[rgb(229,16,22)] transition-colors duration-200">
              Listen Now →
            </button>
          </div>
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-[rgb(229,16,22)]">Streetwear Collection</h3>
            <p className="text-white/80 mb-4">Explore our latest fashion drops. Limited edition pieces available now.</p>
            <Link to="/store" className="text-white font-bold hover:text-[rgb(229,16,22)] transition-colors duration-200">
              Shop Collection →
            </Link>
          </div>
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-[rgb(229,16,22)]">Upcoming Events</h3>
            <p className="text-white/80 mb-4">Find out where we'll be performing next and get your tickets early.</p>
            <button className="text-white font-bold hover:text-[rgb(229,16,22)] transition-colors duration-200">
              View Schedule →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Our Story</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Artists</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Music</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Albums</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Singles</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Videos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Store</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Clothing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Accessories</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Instagram</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Twitter</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Zany Inzane. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 