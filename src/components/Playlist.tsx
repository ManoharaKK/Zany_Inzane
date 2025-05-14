import React, { useState } from 'react';
import { songs, Song } from '../data/songs';

const Playlist: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openModal = (song: Song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSong(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 5 >= songs.length ? 0 : prevIndex + 5
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 5 < 0 ? Math.max(0, songs.length - 5) : prevIndex - 5
    );
  };

  const visibleSongs = showAll ? songs : songs.slice(currentIndex, currentIndex + 5);

  return (
    <section className="w-full py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(229,16,22)]/30 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-[rgb(229,16,22)]/25 via-transparent to-transparent animate-float-delayed"></div>
      
      {/* Red Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e51616_1px,transparent_1px),linear-gradient(to_bottom,#e51616_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-10 animate-grid"></div>

      {/* Red Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(229,16,22)]/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(229,16,22)]/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-6 py-2 bg-[rgb(229,16,22)]/20 rounded-full text-[rgb(229,16,22)] text-lg font-medium tracking-wider uppercase border border-[rgb(229,16,22)]/30">
            Music Collection
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white bg-gradient-to-r from-[rgb(229,16,22)] via-[rgb(229,16,22)]/80 to-[rgb(229,16,22)] bg-clip-text text-transparent">
            Discography
          </h2>
          <p className="text-white/80 text-xl sm:text-2xl max-w-2xl mx-auto font-light">
            Experience the evolution of sound through our vinyl-inspired collection
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show when not in "See All" mode */}
          {!showAll && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-[rgb(229,16,22)] flex items-center justify-center text-white hover:bg-[rgb(229,16,22)]/90 transition-colors shadow-lg shadow-[rgb(229,16,22)]/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-[rgb(229,16,22)] flex items-center justify-center text-white hover:bg-[rgb(229,16,22)]/90 transition-colors shadow-lg shadow-[rgb(229,16,22)]/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Vinyl Records Grid */}
          <div className={`grid ${showAll ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-5'} gap-8 transition-all duration-500`}>
            {visibleSongs.map((song, index) => (
              <div
                key={song.id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Vinyl Record Container */}
                <div 
                  className="relative aspect-square rounded-full overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105"
                  onClick={() => openModal(song)}
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-8 border-[rgb(229,16,22)] animate-spin-slow"></div>
                  
                  {/* Inner Ring */}
                  <div className="absolute inset-4 rounded-full border-4 border-[rgb(229,16,22)]/50"></div>
                  
                  {/* Center Circle */}
                  <div className="absolute inset-8 rounded-full bg-black flex items-center justify-center">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgb(229,16,22)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{song.title}</h3>
                      <p className="text-white/80 text-sm">{song.genre}</p>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-[rgb(229,16,22)] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-[rgb(229,16,22)]/30">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Song Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[rgb(229,16,22)] transition-colors">{song.title}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="px-3 py-1 bg-[rgb(229,16,22)]/20 rounded-full text-[rgb(229,16,22)] text-sm font-medium border border-[rgb(229,16,22)]/30">
                      {song.genre}
                    </span>
                    <span className="px-3 py-1 bg-black/50 rounded-full text-white/80 text-sm border border-white/10">
                      {song.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-[rgb(229,16,22)] rounded-full text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-[rgb(229,16,22)]/20"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                {showAll ? 'Show Less' : 'See All Tracks'}
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Carousel Indicators - Only show when not in "See All" mode */}
          {!showAll && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(songs.length / 5) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 5)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index * 5 
                      ? 'bg-[rgb(229,16,22)] shadow-lg shadow-[rgb(229,16,22)]/30' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedSong && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[rgb(229,16,22)]/20">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-[rgb(229,16,22)] transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side - Vinyl Display */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-square rounded-full overflow-hidden">
                      <div className="absolute inset-0 rounded-full border-8 border-[rgb(229,16,22)] animate-spin-slow"></div>
                      <div className="absolute inset-4 rounded-full border-4 border-[rgb(229,16,22)]/50"></div>
                      <div className="absolute inset-8 rounded-full bg-black">
                        <img
                          src={selectedSong.image}
                          alt={selectedSong.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Song Details */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-4">{selectedSong.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-1 bg-[rgb(229,16,22)]/20 rounded-full text-[rgb(229,16,22)] text-sm font-medium border border-[rgb(229,16,22)]/30">
                          {selectedSong.genre}
                        </span>
                        <span className="px-4 py-1 bg-black/50 rounded-full text-white/80 text-sm border border-white/10">
                          {selectedSong.releaseDate}
                        </span>
                        <span className="px-4 py-1 bg-black/50 rounded-full text-white/80 text-sm border border-white/10">
                          {selectedSong.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed">
                      {selectedSong.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/50 rounded-lg p-4 border border-[rgb(229,16,22)]/20">
                        <h4 className="text-[rgb(229,16,22)] text-sm mb-2">Writer</h4>
                        <p className="text-white font-medium">{selectedSong.credits.writer}</p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 border border-[rgb(229,16,22)]/20">
                        <h4 className="text-[rgb(229,16,22)] text-sm mb-2">Composer</h4>
                        <p className="text-white font-medium">{selectedSong.credits.composer}</p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 border border-[rgb(229,16,22)]/20">
                        <h4 className="text-[rgb(229,16,22)] text-sm mb-2">Producer</h4>
                        <p className="text-white font-medium">{selectedSong.credits.producer}</p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 border border-[rgb(229,16,22)]/20">
                        <h4 className="text-[rgb(229,16,22)] text-sm mb-2">Mix Master</h4>
                        <p className="text-white font-medium">{selectedSong.credits.mixMaster}</p>
                      </div>
                    </div>

                    {/* Streaming Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {selectedSong.links.spotify && (
                        <a
                          href={selectedSong.links.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#1DB954] rounded-full text-white font-medium hover:bg-[#1DB954]/90 transition-colors shadow-lg shadow-[#1DB954]/20"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          Spotify
                        </a>
                      )}
                      {selectedSong.links.youtube && (
                        <a
                          href={selectedSong.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] rounded-full text-white font-medium hover:bg-[#FF0000]/90 transition-colors shadow-lg shadow-[#FF0000]/20"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          YouTube
                        </a>
                      )}
                      {selectedSong.links.appleMusic && (
                        <a
                          href={selectedSong.links.appleMusic}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-medium hover:bg-white/90 transition-colors shadow-lg shadow-white/20"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          Apple Music
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>

    
  );
};

export default Playlist; 