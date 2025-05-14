import React, { useEffect, useState } from 'react';
import UpcomingSongForHome from '../components/UpcomingSongForHome';
import Playlist from '../components/Playlist';
import StoreForHome from '../components/StoreForHome';
import AboutMeForHome from '../components/AboutMeForHome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage: React.FC = () => {
  const [unicornLoaded, setUnicornLoaded] = useState<boolean>(false);
  const [initAttempts, setInitAttempts] = useState<number>(0);

  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Function to safely initialize Unicorn Studio
    const initUnicornStudio = () => {
      if (typeof window !== 'undefined' && window.UnicornStudio) {
        try {
          console.log('Initializing UnicornStudio...');
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
          setUnicornLoaded(true);
          console.log('UnicornStudio initialized successfully');
        } catch (error) {
          console.error('Error initializing UnicornStudio:', error);
          // If failed, we'll retry on the next attempt
        }
      }
    };

    // Initial attempt
    initUnicornStudio();

    // If not loaded and under max attempts, try again
    const maxAttempts = 3;
    if (!unicornLoaded && initAttempts < maxAttempts) {
      const timer = setTimeout(() => {
        console.log(`Retry attempt ${initAttempts + 1} of ${maxAttempts}...`);
        setInitAttempts(prev => prev + 1);
        initUnicornStudio();
      }, 1500); // Wait 1.5 seconds before retrying

      return () => clearTimeout(timer);
    }
  }, [unicornLoaded, initAttempts]);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden relative flex flex-col justify-end p-0 m-0">
      {/* Navbar */}
      <Navbar />
      
      <section className="fixed top-0 left-0 w-full h-screen mx-auto hero-section flex flex-col items-center justify-center m-0 p-0 z-0">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 gap-6 md:gap-12 relative z-20">
          <div className="flex-1 mb-6 md:mb-0 relative z-20">
            {/* Modern Hero Content */}
            <div className="relative overflow-hidden">
              {/* Animated accent line */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full mb-6 animate-pulse"></div>
              
              {/* Main heading with modern design */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4 sm:mb-6">
                <span className="block mb-2 sm:mb-3 text-white">THE</span>
                <span className="block bg-gradient-to-r from-[#FF6B6B] via-[#FFBB4A] to-[#4ECDC4] bg-clip-text text-transparent pb-1">
                  ZANY INZANE
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-white/60 mt-4 font-bold tracking-wide">EXPERIENCE</span>
              </h1>
              
              {/* Modern description with improved text styling */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mb-8 sm:mb-10 font-light max-w-[90%] sm:max-w-[85%] md:max-w-[500px]">
                Blending fiery bars with island soul, <span className="text-[#FFBB4A] font-medium">Zany Inzane</span> brings raw energy, real stories, and a sound that hits different.
              </p>
              
              {/* Call to action buttons with modern design */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#music" 
                  onClick={(e) => handleSmoothScroll(e, 'music')}
                  className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-full text-white font-bold hover:shadow-lg hover:shadow-[#FF6B6B]/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  Listen Now
                </a>
                <a 
                  href="#about-me" 
                  onClick={(e) => handleSmoothScroll(e, 'about-me')}
                  className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-white font-bold hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  Discover More
                </a>
              </div>
              
              {/* Social proof or stats */}
              <div className="mt-10 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#4ECDC4]">2M+</span>
                  <span className="text-sm text-white/60">Streams</span>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#FF6B6B]">15+</span>
                  <span className="text-sm text-white/60">Releases</span>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#FFBB4A]">50K</span>
                  <span className="text-sm text-white/60">Followers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative z-20 w-full md:w-auto">
            <img 
              src="/images/zany.png" 
              alt="Zany placeholder" 
              className="w-[80%] sm:w-[100%] md:w-[100%] max-w-[650px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] h-auto rounded-[20px] object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] bg-black z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] whitespace-nowrap text-white text-sm sm:text-base md:text-lg font-bold animate-scroll flex items-center z-20 overflow-hidden">
          <div className="animate-scroll-content">
            ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE &nbsp;&nbsp;&nbsp;&nbsp; ⚡️ ZANY INZANE
          </div>
        </div>
        
        {/* Fallback background in case Unicorn Studio doesn't load */}
        {!unicornLoaded && initAttempts >= 3 && (
          <div 
            className="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900 to-black"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.6
            }}
          />
        )}
        
        {/* Unicorn Studio Embed */}
        <div
          data-us-project="NIzN1VeMk1PXcVV6BhjB"
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
        ></div>
      </section>

      {/* Content Container */}
      <div className="relative z-10 bg-transparent">
        <div className="h-screen"></div> {/* Spacer to account for fixed hero */}
        <div id="music">
          <Playlist />
        </div>
        
        {/* About Me Section */}
        <AboutMeForHome />

        <UpcomingSongForHome />
        <StoreForHome />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
