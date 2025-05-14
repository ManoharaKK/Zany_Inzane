import React, { useEffect, useRef, useState } from 'react';

const AboutUsForHome: React.FC = () => {
  // Refs for scroll animation
  const zanyContentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  
  // Track active section
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll animations and scrolling behavior
  useEffect(() => {
    // Handle scroll when inside the component
    const handleContentScroll = () => {
      if (!zanyContentRef.current) return;
      
      const contentDiv = zanyContentRef.current;
      
      // Find which section is most visible
      let mostVisibleIndex = 0;
      let highestVisibility = 0;
      
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const contentRect = contentDiv.getBoundingClientRect();
          
          // Calculate visibility
          const sectionTop = rect.top - contentRect.top;
          const sectionBottom = rect.bottom - contentRect.top;
          const containerHeight = contentDiv.clientHeight;
          
          // Check how much of the section is visible in the viewport
          const visibleTop = Math.max(0, sectionTop);
          const visibleBottom = Math.min(containerHeight, sectionBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Calculate percentage of section that's visible
          const percentVisible = visibleHeight / rect.height;
          
          if (percentVisible > highestVisibility) {
            highestVisibility = percentVisible;
            mostVisibleIndex = index;
          }
        }
      });
      
      if (mostVisibleIndex !== activeSection) {
        setActiveSection(mostVisibleIndex);
      }
    };
    
    // Smooth scroll to a specific section
    const scrollToSection = (index: number) => {
      if (!zanyContentRef.current || !sectionRefs[index]?.current) return;
      
      const targetSection = sectionRefs[index].current;
      if (!targetSection) return;
      
      zanyContentRef.current.scrollTo({
        top: targetSection.offsetTop - 30, // Offset for better positioning
        behavior: 'smooth'
      });
      
      setActiveSection(index);
    };
    
    // Force all sections to be visible
    sectionRefs.forEach(ref => {
      if (ref.current) {
        ref.current.style.opacity = '1';
      }
    });
    
    // Add listeners for section buttons
    const sectionButtons = document.querySelectorAll('.section-tab');
    sectionButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => scrollToSection(index));
    });
    
    // Add scroll event listener to the content div
    const contentDiv = zanyContentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener('scroll', handleContentScroll);
    }
    
    return () => {
      // Clean up
      sectionButtons.forEach((btn, index) => {
        btn.removeEventListener('click', () => scrollToSection(index));
      });
      
      if (contentDiv) {
        contentDiv.removeEventListener('scroll', handleContentScroll);
      }
    };
  }, [activeSection]);

  return (
    <section ref={aboutSectionRef} className="py-24 relative bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row relative">
          {/* Fixed Left Image */}
          <div className="lg:w-1/2 relative lg:sticky lg:top-24 lg:h-[90vh]">
            <div className="h-full p-4 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Main image taking full column width */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 h-full w-full">
                  {/* Simple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  
                  {/* Main image with full width display */}
                  <img 
                    src="https://i.scdn.co/image/ab67616d00001e0226fffb0098599e52c4394199"
                    alt="Zany" 
                    className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Overlay text with clean styling */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 z-20">
                  <h2 className="text-5xl font-black mb-2 text-white">ZANY</h2>
                  <div className="h-1 w-24 bg-[rgb(229,16,22)] mb-4 rounded-full"></div>
                  <div className="flex items-center space-x-3 text-lg">
                    <span className={`section-tab cursor-pointer ${activeSection === 0 ? "text-white font-medium" : "text-white/60"}`}>Artist</span>
                    <span className="text-white/40">•</span>
                    <span className={`section-tab cursor-pointer ${activeSection === 1 ? "text-white font-medium" : "text-white/60"}`}>Producer</span>
                    <span className="text-white/40">•</span>
                    <span className={`section-tab cursor-pointer ${activeSection === 2 ? "text-white font-medium" : "text-white/60"}`}>Songwriter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scrollable Right Content */}
          <div 
            className="lg:w-1/2 px-8 lg:pl-16 relative h-[90vh] overflow-y-auto custom-scrollbar text-white" 
            ref={zanyContentRef}
          >
            {/* Mobile tab navigation - only visible on small screens */}
            <div className="flex lg:hidden justify-center gap-3 mb-6 overflow-x-auto sticky top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md py-2">
              {[
                { title: "ARTIST", color: "bg-[rgb(229,16,22)]" },
                { title: "PRODUCER", color: "bg-[rgb(229,16,22)]" },
                { title: "SONGWRITER", color: "bg-[rgb(229,16,22)]" }
              ].map((tab, index) => (
                <button 
                  key={index}
                  className={`section-tab px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeSection === index 
                      ? `${tab.color} text-white` 
                      : 'bg-white/5 text-white/60'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            <div className="pb-40 pt-10 w-full">
              {/* Section 1: Zany as Artist */}
              <div 
                ref={sectionRefs[0]} 
                className="opacity-100 min-h-[80vh] flex items-center mb-24"
                id="artist-section"
              >
                {/* Modern content card */}
                <div className="relative pl-6 pb-8 w-full">
                  {/* Gradient vertical line replacing the solid border-left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                      ARTIST
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                      The Visionary <span className="text-[rgb(229,16,22)]">Performer</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white">
                    <p className="text-white">
                      With a stage presence that electrifies crowds and a vocal range that spans genres, Zany has established himself as one of the most dynamic performers of his generation. His artistic vision combines raw emotion with technical precision, creating unforgettable musical experiences.
                    </p>
                    <p className="text-white">
                      Since his debut in 2015, he's headlined sold-out venues across three continents, collaborating with industry legends and pushing the boundaries of live performance. His innovative approach to blending musical styles has earned him critical acclaim and a devoted global fanbase.
                    </p>
                    
                    {/* Stats in a modern grid */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">5</div>
                        <div className="text-xs text-white uppercase tracking-wide">Global Tours</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">2M+</div>
                        <div className="text-xs text-white uppercase tracking-wide">Live Audience</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">6</div>
                        <div className="text-xs text-white uppercase tracking-wide">Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Zany as Producer */}
              <div 
                ref={sectionRefs[1]} 
                className="opacity-100 min-h-[80vh] flex items-center mb-24"
                id="producer-section"
              >
                {/* Modern content card */}
                <div className="relative pl-6 pb-8 w-full">
                  {/* Gradient vertical line replacing the solid border-left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                      PRODUCER
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                      The Sound <span className="text-[rgb(229,16,22)]">Architect</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white">
                    <p className="text-white">
                      Behind the boards, Zany transforms raw sound into immersive sonic landscapes. His production signature balances cutting-edge techniques with an intuitive understanding of what makes music resonate emotionally with listeners.
                    </p>
                    <p className="text-white">
                      With credits on over 35 albums and a reputation for elevating every project he touches, his studio has become a creative haven for artists looking to evolve their sound. His production style – characterized by innovative percussion, rich harmonies, and unexpected sonic elements – has influenced an entire generation of producers.
                    </p>
                    
                    {/* Stats in a modern grid */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">3</div>
                        <div className="text-xs text-white uppercase tracking-wide">Platinum Records</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">35+</div>
                        <div className="text-xs text-white uppercase tracking-wide">Album Credits</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">9</div>
                        <div className="text-xs text-white uppercase tracking-wide">Collaborations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Zany as Songwriter */}
              <div 
                ref={sectionRefs[2]} 
                className="opacity-100 min-h-[80vh] flex items-center mb-32"
                id="songwriter-section"
              >
                {/* Modern content card */}
                <div className="relative pl-6 pb-8 w-full">
                  {/* Gradient vertical line replacing the solid border-left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                      SONGWRITER
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                      The Lyrical <span className="text-[rgb(229,16,22)]">Storyteller</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white">
                    <p className="text-white">
                      Words flow through Zany's pen with a rare authenticity that captures the complexity of human experience. His lyrics blend poetic imagery with street-wise observation, creating songs that are both personally intimate and universally relatable.
                    </p>
                    <p className="text-white">
                      Having written over 200 songs for himself and other artists, his storytelling ability crosses genres and connects with listeners on a profound level. From chart-topping anthems to soul-searching ballads, his writing captures the zeitgeist while remaining timelessly honest.
                    </p>
                    
                    {/* Stats in a modern grid */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">200+</div>
                        <div className="text-xs text-white uppercase tracking-wide">Songs Written</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">7</div>
                        <div className="text-xs text-white uppercase tracking-wide">#1 Hits</div>
                      </div>
                      <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">4</div>
                        <div className="text-xs text-white uppercase tracking-wide">Writing Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsForHome;
