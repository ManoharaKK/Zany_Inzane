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
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 gap-8 md:gap-16 relative z-20">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 -translate-y-5 relative z-20">
            <h1 className="text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] font-black mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent shadow-sm leading-none tracking-tighter">
              Zany Inzane
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6 font-normal max-w-[600px] mx-auto md:mx-0 shadow-sm">
              Blending fiery bars with island soul, Zany Inzane brings raw energy, real stories, and a sound that hits different.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-end relative z-20 mt-8 md:mt-[100px] w-full md:w-auto">
            <img 
              src="./images/zany.png" 
              alt="Zany placeholder" 
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full h-auto rounded-[20px]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] bg-black z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] whitespace-nowrap text-white text-base sm:text-lg md:text-2xl font-bold animate-scroll flex items-center z-20 overflow-hidden">
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

      <Upcoming />
    </div>
  );
};

export default HomePage;
