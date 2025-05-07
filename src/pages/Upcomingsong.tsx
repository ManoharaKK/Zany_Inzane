import React, { useState, useEffect } from "react";

// Add font imports
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200;300;400;500;600;700&display=swap');
`;

interface CardCredits {
  writer: string;
  composer: string;
  producer: string;
  mixMaster: string;
  label: string;
}

interface Card {
  image: string;
  profile: string;
  title: string;
  date: string;
  description: string;
  genre: string;
  duration: string;
  bpm: string;
  isReleased: boolean;
  credits?: CardCredits;
  links: {
    spotify: string;
    youtube: string;
    appleMusic: string;
  };
}

const Upcomingsong = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards: Card[] = [
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Island Vibes",
      date: "June 15, 2024",
      description: "Caribbean rhythms with modern hip-hop beats.",
      genre: "Caribbean",
      duration: "3:45",
      bpm: "92",
      isReleased: false,
      credits: {
        writer: "Alex Thompson",
        composer: "Marcus Chen",
        producer: "Sarah Williams",
        mixMaster: "David Park",
        label: "Zany Records"
      },
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/aa/22/ca/aa22ca51-ed12-805b-f535-e00c796659f5/pr_source.png/486x486bb.png",
      profile: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000",
      title: "Fire & Soul",
      date: "July 1, 2024",
      description: "Raw energy meets soulful melodies.",
      genre: "Soul",
      duration: "4:20",
      bpm: "88",
      isReleased: false,
      credits: {
        writer: "James Wilson",
        composer: "Emma Rodriguez",
        producer: "Michael Chang",
        mixMaster: "Lisa Anderson",
        label: "Zany Records"
      },
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    },
    {
      image: "https://i.scdn.co/image/ab67616d00001e02d0dc170499d44c1781e6644e",
      profile: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
      title: "Midnight Dreams",
      date: "July 15, 2024",
      description: "Late night vibes and smooth melodies.",
      genre: "R&B",
      duration: "3:55",
      bpm: "85",
      isReleased: false,
      credits: {
        writer: "Sophia Lee",
        composer: "Daniel Kim",
        producer: "Rachel Martinez",
        mixMaster: "Kevin Thompson",
        label: "Zany Records"
      },
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95",
      isReleased: false,
      credits: {
        writer: "Olivia Parker",
        composer: "Ryan Chen",
        producer: "Jessica Wong",
        mixMaster: "Thomas Brown",
        label: "Zany Records"
      },
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95",
      isReleased: false,
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95",
      isReleased: false,
      links: {
        spotify: "https://open.spotify.com/track/...",
        youtube: "https://youtube.com/watch?v=...",
        appleMusic: "https://music.apple.com/track/..."
      }
    }
  ];

  const totalSlides = cards.length;
  const showNavigation = cards.length > 1;

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showNavigation) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [showNavigation, totalSlides]);

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950 animate-gradient-shift"></div>
      
      {/* Light Effects */}
      <div className="absolute inset-0">
        {/* Random Independent Lights */}
        <div className="absolute w-96 h-96 bg-red-600 rounded-full mix-blend-screen opacity-20 blur-3xl animate-random-light-1"></div>
        <div className="absolute w-96 h-96 bg-red-600 rounded-full mix-blend-screen opacity-20 blur-3xl animate-random-light-2"></div>
        <div className="absolute w-96 h-96 bg-red-600 rounded-full mix-blend-screen opacity-20 blur-3xl animate-random-light-3"></div>
        <div className="absolute w-96 h-96 bg-red-600 rounded-full mix-blend-screen opacity-20 blur-3xl animate-random-light-4"></div>
      </div>
      
      {/* Animated Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="relative z-20">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1 bg-[rgb(229,16,22)]/20 rounded-full text-[rgb(229,16,22)] text-sm font-medium tracking-wider uppercase border border-[rgb(229,16,22)]/30 mb-2">
            Coming Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 bg-clip-text text-transparent drop-shadow-lg">
            Upcoming Releases
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Get ready for the next wave of musical innovation. Each release brings a unique blend of energy, soul, and raw talent.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 h-[400px] flex flex-col">
                  <div className="flex gap-6 h-full">
                    <div className="w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                      <img src={card.image} alt="Song cover" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between overflow-y-auto">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <img src={card.profile} alt="Song profile" className="w-10 h-10 rounded-full object-cover relative z-10" />
                          </div>
                          <div>
                            <h3 className="text-lg font-gangster text-white mb-1 group-hover:text-[rgb(229,16,22)] transition-colors tracking-wider">{card.title}</h3>
                            <div className="flex items-center gap-2">
                              <p className="text-white/80 text-xs font-gangster-text">{card.date}</p>
                              {card.isReleased ? (
                                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-gangster-text">
                                  Released
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 bg-[rgb(229,16,22)]/20 text-[rgb(229,16,22)] text-xs rounded-full border border-[rgb(229,16,22)]/30 font-gangster-text">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed mb-3 font-gangster-text">{card.description}</p>
                        {card.credits && (
                          <>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <svg className="w-3.5 h-3.5 text-[rgb(229,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                  <p className="text-white/60 text-xs font-gangster-text">Writer</p>
                                </div>
                                <p className="text-white text-xs font-medium font-gangster-text">{card.credits.writer}</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <svg className="w-3.5 h-3.5 text-[rgb(229,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                  </svg>
                                  <p className="text-white/60 text-xs font-gangster-text">Composer</p>
                                </div>
                                <p className="text-white text-xs font-medium font-gangster-text">{card.credits.composer}</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <svg className="w-3.5 h-3.5 text-[rgb(229,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                  <p className="text-white/60 text-xs font-gangster-text">Producer</p>
                                </div>
                                <p className="text-white text-xs font-medium font-gangster-text">{card.credits.producer}</p>
                              </div>
                              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <svg className="w-3.5 h-3.5 text-[rgb(229,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                  </svg>
                                  <p className="text-white/60 text-xs font-gangster-text">Mix Master</p>
                                </div>
                                <p className="text-white text-xs font-medium font-gangster-text">{card.credits.mixMaster}</p>
                              </div>
                            </div>
                            <div className="mt-2 bg-white/5 rounded-lg p-2 border border-white/10">
                              <div className="flex items-center gap-1.5 mb-1">
                                <svg className="w-3.5 h-3.5 text-[rgb(229,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <p className="text-white/60 text-xs font-gangster-text">Label</p>
                              </div>
                              <p className="text-white text-xs font-medium font-gangster-text">{card.credits.label}</p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center gap-2">
                          <a href={card.links.spotify} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                            <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                          </a>
                          <a href={card.links.youtube} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                            <svg className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                          <a href={card.links.appleMusic} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          {showNavigation && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[rgb(229,16,22)] w-4' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows */}
          {showNavigation && (
            <>
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      <style>
        {`
          ${fontStyles}

          .font-gangster {
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 0.05em;
          }

          .font-gangster-text {
            font-family: 'Oswald', sans-serif;
            letter-spacing: 0.02em;
          }

          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes noise {
            0% {
              transform: translate(0, 0);
            }
            10% {
              transform: translate(-5%, -5%);
            }
            20% {
              transform: translate(-10%, 5%);
            }
            30% {
              transform: translate(5%, -10%);
            }
            40% {
              transform: translate(-5%, 15%);
            }
            50% {
              transform: translate(-10%, 5%);
            }
            60% {
              transform: translate(15%, 0);
            }
            70% {
              transform: translate(0, 10%);
            }
            80% {
              transform: translate(3%, 15%);
            }
            90% {
              transform: translate(-10%, 10%);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes random-light-1 {
            0%, 100% {
              transform: translate(10%, 20%) scale(1);
              opacity: 0;
            }
            20% {
              transform: translate(10%, 20%) scale(1.1);
              opacity: 0.2;
            }
            40% {
              transform: translate(10%, 20%) scale(1);
              opacity: 0;
            }
            60% {
              transform: translate(50%, 50%) scale(1.1);
              opacity: 0.2;
            }
            80% {
              transform: translate(50%, 50%) scale(1);
              opacity: 0;
            }
          }

          @keyframes random-light-2 {
            0%, 100% {
              transform: translate(90%, 30%) scale(1);
              opacity: 0;
            }
            20% {
              transform: translate(90%, 30%) scale(1.1);
              opacity: 0.2;
            }
            40% {
              transform: translate(90%, 30%) scale(1);
              opacity: 0;
            }
            60% {
              transform: translate(30%, 70%) scale(1.1);
              opacity: 0.2;
            }
            80% {
              transform: translate(30%, 70%) scale(1);
              opacity: 0;
            }
          }

          @keyframes random-light-3 {
            0%, 100% {
              transform: translate(50%, 10%) scale(1);
              opacity: 0;
            }
            20% {
              transform: translate(50%, 10%) scale(1.1);
              opacity: 0.2;
            }
            40% {
              transform: translate(50%, 10%) scale(1);
              opacity: 0;
            }
            60% {
              transform: translate(70%, 80%) scale(1.1);
              opacity: 0.2;
            }
            80% {
              transform: translate(70%, 80%) scale(1);
              opacity: 0;
            }
          }

          @keyframes random-light-4 {
            0%, 100% {
              transform: translate(85%, 60%) scale(1);
              opacity: 0;
            }
            20% {
              transform: translate(85%, 60%) scale(1.1);
              opacity: 0.2;
            }
            40% {
              transform: translate(85%, 60%) scale(1);
              opacity: 0;
            }
            60% {
              transform: translate(75%, 20%) scale(1.1);
              opacity: 0.2;
            }
            80% {
              transform: translate(75%, 20%) scale(1);
              opacity: 0;
            }
          }

          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 15s ease infinite;
          }

          .animate-noise {
            animation: noise 0.5s steps(10) infinite;
          }

          .animate-random-light-1 {
            animation: random-light-1 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .animate-random-light-2 {
            animation: random-light-2 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .animate-random-light-3 {
            animation: random-light-3 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .animate-random-light-4 {
            animation: random-light-4 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Upcomingsong;