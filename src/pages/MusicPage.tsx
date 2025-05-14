import React, { useState, useEffect } from 'react';
import { songs } from '../data/songs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MusicPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('singles');
  const [albumFilter, setAlbumFilter] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const albums = [
    { id: 'all', name: 'All Releases' },
    { id: 'island-vibes', name: 'Island Vibes EP' },
    { id: 'street-anthems', name: 'Street Anthems' },
    { id: 'midnight-sessions', name: 'Midnight Sessions' },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-0">
      {/* Navbar Component */}
      <Navbar />

      {/* Background Effects - Lower z-index to keep below footer */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(229,16,22)]/15 via-transparent to-transparent"></div>
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(229,16,22,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,16,22,0.2)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-100"></div>
      
      {/* Grid Intersection Points - Lower z-index */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="w-full h-full relative">
          {[...Array(15)].map((_, i) => (
            <div 
              key={`intersection-${i}`} 
              className="absolute w-1.5 h-1.5 rounded-full bg-[rgb(229,16,22)]/50"
              style={{
                left: `${Math.floor(Math.random() * 95)}%`,
                top: `${Math.floor(Math.random() * 95)}%`,
                boxShadow: '0 0 8px rgba(229,16,22,0.6)',
              }}
            ></div>
          ))}
          
          {/* Regular grid points */}
          {[...Array(10)].map((_, row) => (
            <div key={`row-${row}`} className="w-full flex justify-around absolute" style={{ top: `${row * 10}%` }}>
              {[...Array(10)].map((_, col) => (
                <div 
                  key={`dot-${row}-${col}`} 
                  className="w-1 h-1 rounded-full bg-[rgb(229,16,22)]/25"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Prominent Red Lines - Lower z-index */}
      <div className="fixed left-0 top-0 bottom-0 w-0.5 z-0 bg-gradient-to-b from-transparent via-[rgb(229,16,22)]/50 to-transparent"></div>
      <div className="fixed right-0 top-0 bottom-0 w-0.5 z-0 bg-gradient-to-b from-transparent via-[rgb(229,16,22)]/50 to-transparent"></div>
      <div className="fixed top-0 left-0 right-0 h-0.5 z-0 bg-gradient-to-r from-transparent via-[rgb(229,16,22)]/50 to-transparent"></div>
      <div className="fixed bottom-0 left-0 right-0 h-0.5 z-0 bg-gradient-to-r from-transparent via-[rgb(229,16,22)]/50 to-transparent"></div>
      
      {/* Red accent corner elements - Lower z-index */}
      <div className="fixed top-0 left-0 w-32 h-32 z-0 border-l-2 border-t-2 border-[rgb(229,16,22)]/40 rounded-tl-md"></div>
      <div className="fixed top-0 right-0 w-32 h-32 z-0 border-r-2 border-t-2 border-[rgb(229,16,22)]/40 rounded-tr-md"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 z-0 border-l-2 border-b-2 border-[rgb(229,16,22)]/40 rounded-bl-md"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 z-0 border-r-2 border-b-2 border-[rgb(229,16,22)]/40 rounded-br-md"></div>
      
      {/* Full-width Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden">
        {/* Lighter gradient overlays for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-10"></div>
        
        {/* Main background image with animation - increased visibility */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://i.ytimg.com/vi/WCCQj3cNwFk/maxresdefault.jpg" 
            alt="Music Background" 
            className="w-full h-full object-cover opacity-80 scale-110 animate-subtle-zoom"
            style={{ 
              objectPosition: "center 30%",
              filter: "contrast(1.2) brightness(1.1) saturate(1.25)"
            }}
          />
        </div>
        
        {/* Lighter Red gradient overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-[rgb(229,16,22)]/20 via-transparent to-transparent opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[rgb(229,16,22)]/5 mix-blend-color-burn"></div>
        
        {/* Enhanced Red Grid Lines for Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,16,22,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,16,22,0.2)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 z-20"></div>
        
        {/* Highlighted grid intersections - lighter for better image visibility */}
        <div className="absolute inset-0 z-20 opacity-40">
          {[...Array(6)].map((_, row) => (
            <div key={`row-${row}`} className="flex justify-around">
              {[...Array(8)].map((_, col) => (
                <div 
                  key={`dot-${row}-${col}`} 
                  className="w-1 h-1 rounded-full bg-[rgb(229,16,22)]/40"
                  style={{
                    marginTop: `${row * 3 + 3}rem`,
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-[rgb(229,16,22)]/10 blur-3xl animate-float-slow"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-[rgb(229,16,22)]/15 blur-3xl animate-float-delayed"></div>
        
        {/* Music Notes Decorations */}
        <div className="absolute top-1/4 right-[15%] text-4xl text-[rgb(229,16,22)]/20 animate-float">♪</div>
        <div className="absolute bottom-1/3 left-[20%] text-6xl text-[rgb(229,16,22)]/20 animate-float-slow">♫</div>
        <div className="absolute top-1/2 left-[40%] text-5xl text-[rgb(229,16,22)]/20 animate-float-delayed">♩</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="mb-20 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            <div className="md:w-1/2">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter relative">
                  <span className="absolute -left-2 -top-2 text-[rgb(229,16,22)]/20 blur-sm">MUSIC COLLECTION</span>
                  <span className="absolute -left-1 -top-1 text-[rgb(229,16,22)]/30 blur-[2px]">MUSIC COLLECTION</span>
                  <span className="relative bg-gradient-to-r from-[rgb(229,16,22)] via-white to-[rgb(229,16,22)] bg-clip-text text-transparent">MUSIC COLLECTION</span>
                </h1>
              </div>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Experience the sonic journey of Zany Inzane through a diverse catalog of tracks that blend Caribbean rhythms, urban beats, and authentic storytelling.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://open.spotify.com/artist/..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1DB954] rounded-full text-white font-medium hover:bg-[#1DB954]/90 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a 
                  href="https://youtube.com/c/..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] rounded-full text-white font-medium hover:bg-[#FF0000]/90 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="https://music.apple.com/artist/..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apple Music
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                {/* Glowing circular outline */}
                <div className="absolute -inset-5 bg-gradient-to-r from-[rgb(229,16,22)]/40 to-[rgb(229,16,22)]/20 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
                
                {/* Vinyl-style CD holder */}
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  {/* Outer vinyl ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/10 shadow-[0_0_25px_rgba(229,16,22,0.3)] animate-spin-slow" 
                    style={{ animationDuration: '60s' }}>
                    {/* Vinyl grooves */}
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full border border-white/5"
                        style={{ 
                          inset: `${8 + i * 6}px`, 
                          opacity: i % 2 === 0 ? 0.07 : 0.04
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Red glow effect */}
                  <div className="absolute inset-[15%] rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                        style={{ animationDuration: '50s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Main album image */}
                  <div className="absolute inset-[18%] rounded-full overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src="https://source.boomplaymusic.com/group10/M00/01/06/3ce8a881bf8c4c9585922ce82eac0834H3000W3000_464_464.jpg"
                      alt="Zany Inzane Music" 
                      className="w-full h-full object-cover transition-all duration-1000 hover:scale-110"
                    />
                    {/* Overlay sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30"></div>
                  </div>
                  
                  {/* CD center hole */}
                  <div className="absolute inset-0 m-auto w-[8%] h-[8%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/10"></div>
                  
                  {/* Small decorative CDs */}
                  <div className="absolute -top-12 -right-8 w-28 h-28 rounded-full overflow-hidden border border-white/10 shadow-lg rotate-12 bg-black">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvop6KD1cpHKV1FAC6ghETYTSOnC1Rz2rCCA&s" 
                      alt="Album" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 m-auto w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full overflow-hidden border border-white/10 shadow-lg -rotate-12 bg-black">
                    <img 
                      src="https://i1.sndcdn.com/artworks-5uX1zEFCKUOvLtBn-N4PwfQ-t500x500.jpg" 
                      alt="Album" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 m-auto w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="mb-12 mt-[100px]">
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            <button 
              onClick={() => setActiveTab('singles')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === 'singles' 
                  ? 'bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 text-white shadow-lg shadow-[rgb(229,16,22)]/20' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Singles & EPs
            </button>
            <button 
              onClick={() => setActiveTab('albums')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === 'albums' 
                  ? 'bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 text-white shadow-lg shadow-[rgb(229,16,22)]/20' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Albums
            </button>
            <button 
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === 'featured' 
                  ? 'bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 text-white shadow-lg shadow-[rgb(229,16,22)]/20' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Featured & Collaborations
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === 'videos' 
                  ? 'bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 text-white shadow-lg shadow-[rgb(229,16,22)]/20' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              Music Videos
            </button>
          </div>
        </div>
        
        {/* Singles & EPs Section */}
        {activeTab === 'singles' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest Releases</h2>
              <div className="flex gap-2">
                {albums.map((album) => (
                  <button
                    key={album.id}
                    onClick={() => setAlbumFilter(album.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      albumFilter === album.id 
                        ? 'bg-[rgb(229,16,22)]/20 text-[rgb(229,16,22)] border border-[rgb(229,16,22)]/30' 
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {album.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {songs.map((song) => (
                <div key={song.id} className="flex flex-col items-center">
                  {/* CD-styled album cover */}
                  <div className="relative aspect-square w-full max-w-[230px] mx-auto">
                    {/* CD outer ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.10)] animate-spin-slow" 
                      style={{ animationDuration: `${18 + Math.random() * 5}s` }}>
                      {/* CD track grooves */}
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute rounded-full border border-white/5"
                          style={{ 
                            inset: `${6 + i * 4}px`, 
                            opacity: i % 2 === 0 ? 0.07 : 0.04
                          }}
                        ></div>
                      ))}
                      
                      {/* Reflective highlights */}
                      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                      <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                    </div>
                    
                    {/* Red gradient ring */}
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                          style={{ animationDuration: `${15 + Math.random() * 5}s`, animationDirection: 'reverse' }}></div>
                    </div>
                    
                    {/* Main image container - with rotation effect on hover */}
                    <div className="absolute inset-[15%] rounded-full overflow-hidden z-10 transform transition-all duration-1000 ease-out hover:rotate-[360deg]">
                      <img 
                        src={song.image} 
                        alt={song.title} 
                        className="w-full h-full object-cover scale-[1.15] transition-all duration-1000 hover:scale-[1.25]"
                      />
                      {/* Overlay with CD-like sheen */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                    </div>
                    
                    {/* CD center hole */}
                    <div className="absolute inset-0 m-auto w-[15%] h-[15%] rounded-full bg-gradient-to-br from-gray-800 to-gray-900 z-20 border border-white/10 flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                    </div>
                    
                    {/* Play button overlay */}
                    <button 
                      onClick={() => setIsPlaying(isPlaying === song.id ? null : song.id)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-30"
                    >
                      <div className="w-16 h-16 bg-[rgb(229,16,22)] rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        {isPlaying === song.id ? (
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </div>
                    </button>
                  </div>
                  
                  {/* Song details below CD */}
                  <div className="mt-4 text-center w-full">
                    <h3 className="text-lg font-bold mb-2 text-white hover:text-[rgb(229,16,22)] transition-colors truncate">{song.title}</h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-xs font-medium">
                        {song.genre}
                      </span>
                      <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-xs">
                        {song.duration}
                      </span>
                    </div>
                    
                    {/* Streaming links */}
                    <div className="flex justify-center gap-3 mt-4">
                      {song.links.spotify && (
                        <a 
                          href={song.links.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-white/60 hover:text-[#1DB954] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </a>
                      )}
                      {song.links.youtube && (
                        <a 
                          href={song.links.youtube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-white/60 hover:text-[#FF0000] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      )}
                      {song.links.appleMusic && (
                        <a 
                          href={song.links.appleMusic} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-white/60 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Albums Section */}
        {activeTab === 'albums' && (
          <div>
            <h2 className="text-3xl font-bold mb-12">Albums & Full Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Album 1 */}
              <div className="flex flex-col items-center">
                {/* CD-styled album cover */}
                <div className="relative aspect-square w-full max-w-[230px] mx-auto">
                  {/* CD outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.10)] animate-spin-slow" 
                    style={{ animationDuration: '20s' }}>
                    {/* CD track grooves */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full border border-white/5"
                        style={{ 
                          inset: `${8 + i * 4}px`, 
                          opacity: i % 2 === 0 ? 0.07 : 0.04
                        }}
                      ></div>
                    ))}
                    
                    {/* Reflective highlights */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                  </div>
                  
                  {/* Red glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,16,22)]/30 to-[rgb(229,16,22)]/10 rounded-full blur-md opacity-70"></div>
                  
                  {/* Red gradient ring */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                        style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="absolute inset-[15%] rounded-full overflow-hidden z-10 transform transition-all duration-1000 ease-out hover:rotate-[360deg]">
                    <img 
                      src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cb/30/48/cb30481d-2a2f-0db7-c4f1-fed300d37682/7300340033120.jpg/800x800cc.jpg"
                      alt="Island Vibes EP" 
                      className="w-full h-full object-cover scale-[1.15] transition-all duration-1000"
                    />
                    {/* Overlay with CD-like sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                  </div>
                  
                  {/* CD center hole */}
                  <div className="absolute inset-0 m-auto w-[15%] h-[15%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/10 flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                  </div>
                </div>
                
                {/* Album details */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">Island Vibes EP</h3>
                  <p className="text-sm text-white/60 mb-4">Released: June 2022 • 5 Tracks</p>
                  
                  <div className="flex justify-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-xs font-medium">
                      Caribbean Hip-Hop
                    </span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-xs">
                      18:35
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm hover:bg-[rgb(229,16,22)]/90 transition-all inline-block"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
              
              {/* Album 2 */}
              <div className="flex flex-col items-center">
                {/* CD-styled album cover */}
                <div className="relative aspect-square w-full max-w-[230px] mx-auto">
                  {/* CD outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.10)] animate-spin-slow" 
                    style={{ animationDuration: '18s' }}>
                    {/* CD track grooves */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full border border-white/5"
                        style={{ 
                          inset: `${8 + i * 4}px`, 
                          opacity: i % 2 === 0 ? 0.07 : 0.04
                        }}
                      ></div>
                    ))}
                    
                    {/* Reflective highlights */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                  </div>
                  
                  {/* Red glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,16,22)]/30 to-[rgb(229,16,22)]/10 rounded-full blur-md opacity-70"></div>
                  
                  {/* Red gradient ring */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                        style={{ animationDuration: '17s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="absolute inset-[15%] rounded-full overflow-hidden z-10 transform transition-all duration-1000 ease-out hover:rotate-[360deg]">
                    <img 
                      src="https://i1.sndcdn.com/artworks-LovYj7kGK29A-0-t500x500.jpg"
                      alt="Street Anthems" 
                      className="w-full h-full object-cover scale-[1.15] transition-all duration-1000"
                    />
                    {/* Overlay with CD-like sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                  </div>
                  
                  {/* CD center hole */}
                  <div className="absolute inset-0 m-auto w-[15%] h-[15%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/10 flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                  </div>
                </div>
                
                {/* Album details */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">Street Anthems</h3>
                  <p className="text-sm text-white/60 mb-4">Released: January 2023 • 8 Tracks</p>
                  
                  <div className="flex justify-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-xs font-medium">
                      Urban Hip-Hop
                    </span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-xs">
                      28:40
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm hover:bg-[rgb(229,16,22)]/90 transition-all inline-block"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
              
              {/* Album 3 */}
              <div className="flex flex-col items-center">
                {/* CD-styled album cover */}
                <div className="relative aspect-square w-full max-w-[230px] mx-auto">
                  {/* CD outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.10)] animate-spin-slow" 
                    style={{ animationDuration: '22s' }}>
                    {/* CD track grooves */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full border border-white/5"
                        style={{ 
                          inset: `${8 + i * 4}px`, 
                          opacity: i % 2 === 0 ? 0.07 : 0.04
                        }}
                      ></div>
                    ))}
                    
                    {/* Reflective highlights */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                  </div>
                  
                  {/* Red glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,16,22)]/30 to-[rgb(229,16,22)]/10 rounded-full blur-md opacity-70"></div>
                  
                  {/* Red gradient ring */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                        style={{ animationDuration: '19s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="absolute inset-[15%] rounded-full overflow-hidden z-10 transform transition-all duration-1000 ease-out hover:rotate-[360deg]">
                    <img 
                      src="https://i1.sndcdn.com/artworks-5uX1zEFCKUOvLtBn-N4PwfQ-t500x500.jpg"
                      alt="Midnight Sessions" 
                      className="w-full h-full object-cover scale-[1.15] transition-all duration-1000"
                    />
                    {/* Overlay with CD-like sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                  </div>
                  
                  {/* CD center hole */}
                  <div className="absolute inset-0 m-auto w-[15%] h-[15%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/10 flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                  </div>
                </div>
                
                {/* Album details */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">Midnight Sessions</h3>
                  <p className="text-sm text-white/60 mb-4">Released: October 2023 • 6 Tracks</p>
                  
                  <div className="flex justify-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-xs font-medium">
                      R&B Hip-Hop
                    </span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-xs">
                      23:15
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm hover:bg-[rgb(229,16,22)]/90 transition-all inline-block"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
              
              {/* Album 4 */}
              <div className="flex flex-col items-center">
                {/* CD-styled album cover */}
                <div className="relative aspect-square w-full max-w-[230px] mx-auto">
                  {/* CD outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.10)] animate-spin-slow" 
                    style={{ animationDuration: '19s' }}>
                    {/* CD track grooves */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full border border-white/5"
                        style={{ 
                          inset: `${8 + i * 4}px`, 
                          opacity: i % 2 === 0 ? 0.07 : 0.04
                        }}
                      ></div>
                    ))}
                    
                    {/* Reflective highlights */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-white/40 blur-[1px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-white/30 blur-[1px]"></div>
                  </div>
                  
                  {/* Red glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,16,22)]/30 to-[rgb(229,16,22)]/10 rounded-full blur-md opacity-70"></div>
                  
                  {/* Red gradient ring */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-conic from-[rgb(229,16,22)] via-red-600 via-red-500 via-[rgb(229,16,22)]/80 via-red-800 to-[rgb(229,16,22)] opacity-30 animate-spin-slow"
                        style={{ animationDuration: '21s', animationDirection: 'reverse' }}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="absolute inset-[15%] rounded-full overflow-hidden z-10 transform transition-all duration-1000 ease-out hover:rotate-[360deg]">
                    <img 
                      src="https://source.boomplaymusic.com/group10/M00/01/06/3ce8a881bf8c4c9585922ce82eac0834H3000W3000_464_464.jpg"
                      alt="Summer Anthems" 
                      className="w-full h-full object-cover scale-[1.15] transition-all duration-1000"
                    />
                    {/* Overlay with CD-like sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 z-10"></div>
                  </div>
                  
                  {/* CD center hole */}
                  <div className="absolute inset-0 m-auto w-[15%] h-[15%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full z-20 border border-white/10 flex items-center justify-center">
                    <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                  </div>
                </div>
                
                {/* Album details */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-2 text-white truncate">Summer Anthems</h3>
                  <p className="text-sm text-white/60 mb-4">Released: May 2024 • 7 Tracks</p>
                  
                  <div className="flex justify-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[rgb(229,16,22)]/10 rounded-full text-[rgb(229,16,22)] text-xs font-medium">
                      Summer Vibes
                    </span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-xs">
                      24:10
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-[rgb(229,16,22)] rounded-full text-white text-sm hover:bg-[rgb(229,16,22)]/90 transition-all inline-block"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Section Placeholder */}
        {activeTab === 'featured' && (
          <div className="min-h-[400px] flex items-center justify-center">
            <p className="text-xl text-white/50">Collaborations coming soon</p>
          </div>
        )}

        {/* Videos Section Placeholder */}
        {activeTab === 'videos' && (
          <div className="min-h-[400px] flex items-center justify-center">
            <p className="text-xl text-white/50">Music videos coming soon</p>
          </div>
        )}
      </div>
      
      {/* Footer Component with higher z-index */}
      <div className="relative z-20 bg-black mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default MusicPage; 