import React, { useEffect } from 'react';
import Upcoming from './Upcomingsong';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize Unicorn Studio after component mounts
    if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden relative flex flex-col justify-end p-0 m-0">
      <section className="mx-auto hero-section flex flex-col items-center justify-center w-full h-screen m-0 p-0 relative z-1">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 gap-6 md:gap-12 relative z-20">
          <div className="flex-1  mb-6 md:mb-0 relative z-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent shadow-sm leading-[1.1] tracking-tighter">
              Zany Inzane
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mb-4 sm:mb-6 font-normal max-w-[90%] sm:max-w-[80%] md:max-w-[500px] mx-auto shadow-sm">
              Blending fiery bars with island soul, Zany Inzane brings raw energy, real stories, and a sound that hits different.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center relative z-20 w-full md:w-auto">
            <img 
              src="./images/zany.png" 
              alt="Zany placeholder" 
              className="w-[80%] sm:w-[70%] md:w-[80%] max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-[20px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] bg-black z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] whitespace-nowrap text-white text-sm sm:text-base md:text-lg font-bold animate-scroll flex items-center z-20 overflow-hidden">
          <div className="animate-scroll-content">
            ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE
          </div>
        </div>
        {/* Unicorn Studio Embed */}
        <div
          data-us-project="NIzN1VeMk1PXcVV6BhjB"
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
        ></div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-5 md:py-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(229,16,22)]/40 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-[rgb(229,16,22)]/35 via-transparent to-transparent animate-float-delayed"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] animate-grid"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[rgb(229,16,22)]/40 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[rgb(229,16,22)]/35 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Additional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 animate-fade-in-out"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/20 animate-pulse-slow"></div>
        
        {/* Highlight Accents */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[rgb(229,16,22)]/60 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[rgb(229,16,22)]/60 to-transparent animate-slide-left"></div>
        
        {/* Additional Red Highlights */}
        <div className="absolute top-1/3 right-0 w-36 h-36 bg-[rgb(229,16,22)]/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-0 w-36 h-36 bg-[rgb(229,16,22)]/30 rounded-full blur-2xl animate-float-delayed"></div>
        
        <div className="max-w-[1100px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 animate-fade-in">
            {/* Image Container */}
            <div className="w-full lg:w-2/5 relative animate-slide-in-left">
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto rounded-xl overflow-hidden group">
                <img 
                  src="./images/zany.png" 
                  alt="Zany Inzane" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-all duration-700 ease-in-out animate-float"
                />
                <div className="absolute inset-0 bZ to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-3/5 space-y-4 animate-slide-in-right">
              <div className="space-y-3">
                <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-sm font-medium tracking-wider uppercase border border-[rgb(229,16,22)]/20">About</span>
                <div className="space-y-1">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-10xl font-black bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 bg-clip-text text-transparent animate-gradient tracking-tight leading-tight">
                    Zany
                  </h2>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(229,16,22)]/80 to-[rgb(229,16,22)] bg-clip-text text-transparent animate-gradient tracking-tight leading-tight">
                    Inzane
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '200ms' }}>
                  Blending fiery bars with island soul, Zany Inzane brings raw energy, real stories, and a sound that hits different. Born from the vibrant streets and rich cultural heritage, his music transcends boundaries and creates a unique fusion of styles.
                </p>
                <p className="text-base sm:text-lg leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '400ms' }}>
                  With a passion for authentic storytelling and a distinctive voice, Zany Inzane crafts music that resonates with listeners on a deeper level. His journey from the streets to the stage is reflected in every beat and lyric.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-6 py-2.5 bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-up border border-[rgb(229,16,22)]/20" style={{ animationDelay: '600ms' }}>
                    Artist
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-6 py-2.5 bg-white/10 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-up border border-white/20" style={{ animationDelay: '700ms' }}>
                    Producer
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-6 py-2.5 bg-white/10 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 animate-fade-in-up border border-white/20" style={{ animationDelay: '800ms' }}>
                    Songwriter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Upcoming />
    </div>
  );
};

export default HomePage;
