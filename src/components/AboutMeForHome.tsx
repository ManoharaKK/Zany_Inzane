import React, { useState, useRef, useEffect } from 'react';

type Category = {
  id: string;
  title: string;
  content: string;
};

const AboutMeForHome: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('artist');
  const contentRef = useRef<HTMLDivElement>(null);
  const [bgImageLoaded, setBgImageLoaded] = useState(true);
  
  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = 'https://i.ytimg.com/vi/PVfzVU8AxzY/maxresdefault.jpg';
    img.onload = () => setBgImageLoaded(true);
    img.onerror = () => setBgImageLoaded(false);
  }, []);
  
  const categories: Category[] = [
    {
      id: 'artist',
      title: 'Artist',
      content: 'As an artist, I blend raw emotion with authentic storytelling, creating music that resonates across genres. My Caribbean roots and global influences shape my unique sound, allowing me to connect with audiences through genuine expression and innovative production.'
    },
    {
      id: 'producer',
      title: 'Producer',
      content: 'Behind the boards, I craft immersive soundscapes that push boundaries while maintaining musical integrity. My production philosophy balances technical precision with creative experimentation, resulting in tracks that feel both polished and organic.'
    },
    {
      id: 'songwriter',
      title: 'Songwriter',
      content: 'My songwriting draws from personal experiences and observations, transforming everyday moments into universal narratives. I pride myself on lyrics that balance clever wordplay with emotional depth, creating songs that resonate long after the first listen.'
    }
  ];

  return (
    <section 
      className="w-full py-24 bg-black relative overflow-hidden" 
      id="about-me"
      style={
        bgImageLoaded 
        ? {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.75)), url('https://i.ytimg.com/vi/PVfzVU8AxzY/maxresdefault.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }
        : {}
      }
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-[rgb(229,16,22)] inline-block mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-[rgb(229,16,22)] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Center Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* CD-styled main image with glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[rgb(229,16,22)] to-red-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
              
              {/* CD styling container */}
              <div className="relative aspect-square w-64 md:w-80 overflow-visible group">
                {/* CD outer ring with reflective effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 
                              shadow-[0_0_15px_rgba(255,255,255,0.15)] animate-spin-slow" 
                     style={{ animationDuration: '20s' }}>
                  {/* Reflective highlights */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                  <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                  
                  {/* CD track grooves */}
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute rounded-full border border-white/5"
                      style={{ 
                        inset: `${10 + i * 5}px`, 
                        opacity: i % 2 === 0 ? 0.07 : 0.04
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* CD rainbow reflection ring */}
                <div className="absolute inset-[4px] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                       style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
                
                {/* Main image container - with rotation effect on hover */}
                <div className="absolute inset-[15px] rounded-full overflow-hidden transform transition-all duration-1000 ease-out group-hover:rotate-[360deg] z-10">
                  {/* Overlay with CD-like sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                  
                  <img 
                    src="https://i.ytimg.com/vi/PVfzVU8AxzY/maxresdefault.jpg" 
                    alt="Zany Inzane"
                    className="w-full h-full object-cover scale-[1.15] transition-all duration-1000 group-hover:scale-[1.25]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "./images/zany.png"; // Fallback image
                    }}
                  />
                </div>
                
                {/* CD center hole */}
                <div className="absolute inset-0 m-auto w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/20">
                  <div className="absolute inset-0 m-auto w-3 h-3 bg-black rounded-full border border-white/10"></div>
                </div>
                
                {/* CD label text - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                  <div className="rounded-full bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wide font-medium">
                    ZANY • INZANE
                  </div>
                </div>
                
                {/* Shine effect that follows mouse movement */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-full bg-gradient-radial from-[rgb(229,16,22)]/20 to-transparent w-1/2 h-1/2 translate-x-full -translate-y-1/2 mix-blend-overlay group-hover:animate-[shine_2s_ease-in-out_infinite_alternate]"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-5 -right-3 w-5 h-5 bg-[rgb(229,16,22)] rounded-full animate-ping"></div>
              <div className="absolute bottom-8 -left-4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-6 left-10 w-20 h-20 opacity-70 animate-float-slow">
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-xl">🎵</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-10 w-16 h-16 opacity-80 animate-float">
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-xl">🎤</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-10 w-14 h-14 opacity-70 animate-float-delayed">
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
              </div>
              
              {/* Mini album artwork */}
              <div className="absolute -left-16 top-32 w-24 h-24 rotate-12 shadow-xl transform hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="w-full h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-md overflow-hidden">
                  <img 
                    src="https://i.scdn.co/image/ab67616d00001e0226fffb0098599e52c4394199" 
                    alt="Album artwork" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Vinyl record */}
              <div className="absolute top-0 -right-12 w-20 h-20 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-black border-4 border-[rgb(229,16,22)]/10 flex items-center justify-center relative">
                  <div className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[rgb(229,16,22)]/40 to-red-700/60 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-black"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[rgb(229,16,22)]/10"></div>
                </div>
              </div>
              
              {/* Sound wave visualization */}
              <div className="absolute -bottom-12 left-0 right-0 mx-auto w-32 h-12 flex items-end justify-center space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 bg-gradient-to-t from-[rgb(229,16,22)]/80 to-red-500/40 rounded-t-md animate-pulse-slow ${
                      i % 2 === 0 ? 'h-8' : i % 3 === 0 ? 'h-4' : 'h-6'
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2" ref={contentRef}>
            {/* Category Tabs */}
            <div className="flex space-x-2 mb-8 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-red-600 to-[rgb(229,16,22)] text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* Category Content */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    activeCategory === category.id
                      ? 'opacity-100 max-h-96'
                      : 'opacity-0 max-h-0 hidden'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{category.content}</p>
                  
                  {/* Stats or highlights - different for each category */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {category.id === 'artist' && (
                      <>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-[rgb(229,16,22)]">10+</div>
                          <div className="text-white/80">Singles Released</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-red-500">5+</div>
                          <div className="text-white/80">Music Videos</div>
                        </div>
                      </>
                    )}
                    
                    {category.id === 'producer' && (
                      <>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-[rgb(229,16,22)]">40+</div>
                          <div className="text-white/80">Tracks Produced</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-red-500">3+</div>
                          <div className="text-white/80">Studios Worked In</div>
                        </div>
                      </>
                    )}
                    
                    {category.id === 'songwriter' && (
                      <>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-[rgb(229,16,22)]">20+</div>
                          <div className="text-white/80">Songs Written</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all">
                          <div className="text-xl font-bold text-red-500">2+</div>
                          <div className="text-white/80">Genres Explored</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeForHome; 