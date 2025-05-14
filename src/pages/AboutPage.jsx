import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage = () => {
  // Refs for scroll animation
  const zanyContentRef = useRef(null);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  
  // Track active section
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (zanyContentRef.current) {
        const scrollPosition = window.scrollY;
        const sectionElement = zanyContentRef.current;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        
        // Only apply scroll effects when section is in viewport
        if (scrollPosition >= sectionTop - 300 && 
            scrollPosition <= sectionTop + sectionHeight) {
          
          // Determine which section is most visible
          let mostVisibleIndex = 0;
          let highestVisibility = 0;
          
          // Apply animation styles to each subsection
          sectionRefs.forEach((ref, index) => {
            if (ref.current) {
              const rect = ref.current.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight * 0.8;
              const percentVisible = 1 - (Math.max(0, rect.top) / window.innerHeight);
              
              if (percentVisible > highestVisibility) {
                highestVisibility = percentVisible;
                mostVisibleIndex = index;
              }
              
              if (isVisible) {
                ref.current.style.opacity = "1";
                ref.current.style.transform = "translateY(0)";
              } else {
                ref.current.style.opacity = "0.3";
                ref.current.style.transform = "translateY(40px)";
              }
            }
          });
          
          setActiveSection(mostVisibleIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set initial states
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Top gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://i.ytimg.com/vi/WJQaRdR1OYQ/maxresdefault.jpg" 
            alt="About Us Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[rgb(229,16,22)] via-[rgb(229,16,22)]/80 to-[rgb(229,16,22)] bg-clip-text text-transparent tracking-tighter">
            ABOUT MEa
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light mb-8">
            The story behind Zany Inzane
          </p>
        </div>
      </section>

      {/* About Zany Section - Modern Design */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Remove the side progress indicator */}

          <div className="flex flex-col lg:flex-row">
            {/* Fixed Left Image */}
            <div className="lg:w-1/2 relative lg:sticky lg:top-24 lg:h-[80vh]">
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
                      {/* <span className={activeSection === 0 ? "text-white font-medium" : "text-white/60"}>Artist</span>
                      <span className="text-white/40">•</span>
                      <span className={activeSection === 1 ? "text-white font-medium" : "text-white/60"}>Producer</span>
                      <span className="text-white/40">•</span>
                      <span className={activeSection === 2 ? "text-white font-medium" : "text-white/60"}>Songwriter</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modern Scrollable Right Content */}
            <div className="lg:w-1/2 px-8 lg:pl-16 relative flex items-center" ref={zanyContentRef}>
              {/* Mobile tab navigation - only visible on small screens */}
              <div className="flex lg:hidden justify-center gap-3 mb-6 overflow-x-auto absolute top-0 left-0 right-0">
                {[
                  { title: "ARTIST", color: "bg-[rgb(229,16,22)]" },
                  { title: "PRODUCER", color: "bg-[rgb(229,16,22)]" },
                  { title: "SONGWRITER", color: "bg-[rgb(229,16,22)]" }
                ].map((tab, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeSection === index 
                        ? `${tab.color} text-white` 
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              <div className="space-y-32 py-8 w-full">
                {/* Section 1: Zany as Artist */}
                <div 
                  ref={sectionRefs[0]} 
                  className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out min-h-[70vh] flex items-center"
                >
                  {/* Modern content card */}
                  <div className="relative pl-6 pb-8 w-full">
                    {/* Gradient vertical line replacing the solid border-left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                        ARTIST
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black mb-6">
                        The Visionary <span className="text-[rgb(229,16,22)]">Performer</span>
                      </h3>
                    </div>
                    
                    <div className="space-y-6 text-lg text-white/70">
                      <p>
                        With a stage presence that electrifies crowds and a vocal range that spans genres, Zany has established himself as one of the most dynamic performers of his generation. His artistic vision combines raw emotion with technical precision, creating unforgettable musical experiences.
                      </p>
                      <p>
                        Since his debut in 2015, he's headlined sold-out venues across three continents, collaborating with industry legends and pushing the boundaries of live performance. His innovative approach to blending musical styles has earned him critical acclaim and a devoted global fanbase.
                      </p>
                      
                      {/* Stats in a modern grid */}
                      <div className="grid grid-cols-3 gap-4 pt-8">
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">5</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Global Tours</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">2M+</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Live Audience</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">6</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Zany as Producer */}
                <div 
                  ref={sectionRefs[1]} 
                  className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out min-h-[70vh] flex items-center"
                >
                  {/* Modern content card */}
                  <div className="relative pl-6 pb-8 w-full">
                    {/* Gradient vertical line replacing the solid border-left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                        PRODUCER
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black mb-6">
                        The Sound <span className="text-[rgb(229,16,22)]">Architect</span>
                      </h3>
                    </div>
                    
                    <div className="space-y-6 text-lg text-white/70">
                      <p>
                        Behind the boards, Zany transforms raw sound into immersive sonic landscapes. His production signature balances cutting-edge techniques with an intuitive understanding of what makes music resonate emotionally with listeners.
                      </p>
                      <p>
                        With credits on over 35 albums and a reputation for elevating every project he touches, his studio has become a creative haven for artists looking to evolve their sound. His production style – characterized by innovative percussion, rich harmonies, and unexpected sonic elements – has influenced an entire generation of producers.
                      </p>
                      
                      {/* Stats in a modern grid */}
                      <div className="grid grid-cols-3 gap-4 pt-8">
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">3</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Platinum Records</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">35+</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Album Credits</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">9</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Collaborations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Zany as Songwriter */}
                <div 
                  ref={sectionRefs[2]} 
                  className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out min-h-[70vh] flex items-center"
                >
                  {/* Modern content card */}
                  <div className="relative pl-6 pb-8 w-full">
                    {/* Gradient vertical line replacing the solid border-left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(229,16,22)] via-[rgb(229,16,22)]/70 to-transparent rounded-full"></div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/10 text-[rgb(229,16,22)] text-sm font-bold rounded-full mb-3">
                        SONGWRITER
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black mb-6">
                        The Lyrical <span className="text-[rgb(229,16,22)]">Storyteller</span>
                      </h3>
                    </div>
                    
                    <div className="space-y-6 text-lg text-white/70">
                      <p>
                        Words flow through Zany's pen with a rare authenticity that captures the complexity of human experience. His lyrics blend poetic imagery with street-wise observation, creating songs that are both personally intimate and universally relatable.
                      </p>
                      <p>
                        Having written over 200 songs for himself and other artists, his storytelling ability crosses genres and connects with listeners on a profound level. From chart-topping anthems to soul-searching ballads, his writing captures the zeitgeist while remaining timelessly honest.
                      </p>
                      
                      {/* Stats in a modern grid */}
                      <div className="grid grid-cols-3 gap-4 pt-8">
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">200+</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Songs Written</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">7</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">#1 Hits</div>
                        </div>
                        <div className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                          <div className="text-3xl text-[rgb(229,16,22)] font-bold mb-1">4</div>
                          <div className="text-xs text-white/60 uppercase tracking-wide">Writing Awards</div>
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

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[rgb(229,16,22)]">Our Story</h2>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                Founded in 2018, Zany Inzane began as a creative outlet for a group of friends with a shared passion for music and street culture. What started as a small local venture has now grown into a recognized brand with a global presence.
              </p>
              <p>
                Our journey has been driven by authenticity, creativity, and a deep connection to urban roots. We've always believed that music and fashion are powerful forms of self-expression that break boundaries and bring people together.
              </p>
              <p>
                Today, Zany Inzane represents more than just clothing and music—it's a lifestyle and a community that celebrates individuality and artistic expression in all its forms.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,16,22)]/20 to-transparent rounded-lg blur-lg"></div>
            <img 
              src="https://i.ytimg.com/vi/PVfzVU8AxzY/maxresdefault.jpg" 
              alt="Zany Inzane" 
              className="relative rounded-lg shadow-2xl shadow-black/50 border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[rgb(229,16,22)]">Our Mission</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              To create a platform that empowers artists, musicians, and creators to express themselves authentically while building a community that celebrates urban culture and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-lg p-8 border border-white/10 hover:border-[rgb(229,16,22)]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[rgb(229,16,22)]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(229,16,22)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Music Innovation</h3>
              <p className="text-white/70">
                We push the boundaries of music production and distribution, giving artists the platform to share their unique sound with the world.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-lg p-8 border border-white/10 hover:border-[rgb(229,16,22)]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[rgb(229,16,22)]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(229,16,22)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative Expression</h3>
              <p className="text-white/70">
                Our clothing and accessories are designed to help you express your individuality and stand out from the crowd with bold, unique designs.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-lg p-8 border border-white/10 hover:border-[rgb(229,16,22)]/30 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[rgb(229,16,22)]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(229,16,22)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Building</h3>
              <p className="text-white/70">
                We're creating more than products—we're building a global community connected by shared passions for music, fashion, and urban culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-[rgb(229,16,22)]">Meet The Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black/50 rounded-lg overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Marcus Reynolds</h3>
              <p className="text-[rgb(229,16,22)] mb-4">Founder & Creative Director</p>
              <p className="text-white/70 text-sm">Visionary behind Zany Inzane, with over 15 years in the music industry and a passion for streetwear design.</p>
            </div>
          </div>
          
          <div className="bg-black/50 rounded-lg overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Alicia Chen</h3>
              <p className="text-[rgb(229,16,22)] mb-4">Head of Design</p>
              <p className="text-white/70 text-sm">Award-winning fashion designer bringing innovative street style to our clothing collections.</p>
            </div>
          </div>
          
          <div className="bg-black/50 rounded-lg overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Jerome Wilson</h3>
              <p className="text-[rgb(229,16,22)] mb-4">Music Producer</p>
              <p className="text-white/70 text-sm">Grammy-nominated producer who discovers and develops our music talent and productions.</p>
            </div>
          </div>
          
          <div className="bg-black/50 rounded-lg overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Sophia Rodriguez</h3>
              <p className="text-[rgb(229,16,22)] mb-4">Community Manager</p>
              <p className="text-white/70 text-sm">Social media expert who builds and nurtures our global community of creators and fans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-black to-[rgb(229,16,22)]/30 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Want to collaborate with us?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            We're always looking for new talent, partnerships, and creative collaborations. 
            Reach out to us and let's create something amazing together.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-[rgb(229,16,22)] rounded-full text-white text-lg font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 