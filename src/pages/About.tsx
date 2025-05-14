import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Navbar */}
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About page content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Zany Inzane</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content will go here */}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
