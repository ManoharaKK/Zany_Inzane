import React, { useState, useEffect } from "react";

const Upcomingsong = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Island Vibes",
      date: "June 15, 2024",
      description: "Caribbean rhythms with modern hip-hop beats.",
      genre: "Caribbean",
      duration: "3:45",
      bpm: "92"
    },
    {
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/aa/22/ca/aa22ca51-ed12-805b-f535-e00c796659f5/pr_source.png/486x486bb.png",
      profile: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000",
      title: "Fire & Soul",
      date: "July 1, 2024",
      description: "Raw energy meets soulful melodies. melodies",
      genre: "Soul",
      duration: "4:20",
      bpm: "88"
    },
    {
      image: "https://i.scdn.co/image/ab67616d00001e02d0dc170499d44c1781e6644e",
      profile: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
      title: "Midnight Dreams",
      date: "July 15, 2024",
      description: "Late night vibes and smooth melodies.",
      genre: "R&B",
      duration: "3:55",
      bpm: "85"
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95"
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95"
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273bc262cd6c176868c09342ef0",
      profile: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      title: "Summer Vibes",
      date: "August 1, 2024",
      description: "Perfect summer anthem for your playlist.",
      genre: "Pop",
      duration: "3:30",
      bpm: "95"
    }
  ];

  const totalSlides = Math.ceil(cards.length / (window.innerWidth < 768 ? 1 : 3));
  const showNavigation = cards.length > (window.innerWidth < 768 ? 1 : 3);

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
      
      <section className="max-w-[1000px] mx-auto relative z-10">
        <h2 className="text-4xl font-black text-white mb-10 text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Upcoming Releases</h2>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="group bg-white/5 backdrop-blur-md rounded-xl p-4 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 h-[500px] flex flex-col">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 transform group-hover:scale-[1.02] transition-transform duration-500">
                    <img src={card.image} alt="Song cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <img src={card.profile} alt="Song profile" className="w-12 h-12 rounded-full object-cover relative z-10" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FF6B6B] transition-colors truncate">{card.title}</h3>
                      <p className="text-white/80 mb-2 text-sm">{card.date}</p>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{card.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-white/5 rounded-md p-2 border border-white/10">
                      <p className="text-white/60 text-[10px] mb-0.5">Genre</p>
                      <p className="text-white text-xs font-medium truncate">{card.genre}</p>
                    </div>
                    <div className="bg-white/5 rounded-md p-2 border border-white/10">
                      <p className="text-white/60 text-[10px] mb-0.5">Duration</p>
                      <p className="text-white text-xs font-medium">{card.duration}</p>
            </div>
                    <div className="bg-white/5 rounded-md p-2 border border-white/10">
                      <p className="text-white/60 text-[10px] mb-0.5">BPM</p>
                      <p className="text-white text-xs font-medium">{card.bpm}</p>
              </div>
            </div>
          </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots - Only show if more than 3 cards */}
          {showNavigation && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-red-500 w-4' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows - Only show if more than 3 cards */}
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
      </section>

      <style>
        {`
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