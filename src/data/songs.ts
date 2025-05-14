export interface Song {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  releaseDate: string;
  duration: string;
  genre: string;
  credits: {
    writer: string;
    composer: string;
    producer: string;
    mixMaster: string;
  };
  links: {
    spotify?: string;
    youtube?: string;
    appleMusic?: string;
  };
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Island Vibes",
    description: "A fusion of Caribbean rhythms with modern hip-hop beats, creating an infectious groove that transports you to paradise.",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQW1-Djj-iK_uAbCFMmjJBNDfrOiNSHKlToBBNEJzRjCv-F73c4RQXxG8Uk66BH0vZYhqXSc2dJdcJGuG5196SLAgEwSs-tVECJKOQjo3s",
    videoUrl: "https://youtu.be/QYo4M6wbxAI?si=k5j6mWJFn91a3vDj",
    releaseDate: "June 15, 2024",
    duration: "3:45",
    genre: "Caribbean Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Marcus Chen",
      producer: "Sarah Williams",
      mixMaster: "David Park"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "2",
    title: "Fire & Soul",
    description: "Raw energy meets soulful melodies in this powerful track that showcases the perfect blend of passion and precision.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvop6KD1cpHKV1FAC6ghETYTSOnC1Rz2rCCA&s",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "July 1, 2024",
    duration: "4:20",
    genre: "Soul Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Emma Rodriguez",
      producer: "Michael Chang",
      mixMaster: "Lisa Anderson"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "3",
    title: "Midnight Dreams",
    description: "Late night vibes and smooth melodies that take you on a journey through the city streets.",
    image: "https://i1.sndcdn.com/artworks-5uX1zEFCKUOvLtBn-N4PwfQ-t500x500.jpg",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "July 15, 2024",
    duration: "3:55",
    genre: "R&B Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Daniel Kim",
      producer: "Rachel Martinez",
      mixMaster: "Kevin Thompson"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "4",
    title: "Urban Legends",
    description: "A powerful narrative-driven track that weaves street stories with modern beats, creating an anthem for the urban experience.",
    image: "https://songlanka.sgp1.cdn.digitaloceanspaces.com/images/webp/view/Nagazaki-Zany-Inzane-Ft-Dilo-Cover-www.song.lk_view.webp",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "August 1, 2024",
    duration: "4:15",
    genre: "Urban Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "James Wilson",
      producer: "Sophia Lee",
      mixMaster: "Alex Rivera"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "5",
    title: "Neon Lights",
    description: "An electrifying fusion of synthwave and hip-hop that creates an immersive nightlife atmosphere.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cb/30/48/cb30481d-2a2f-0db7-c4f1-fed300d37682/7300340033120.jpg/800x800cc.jpg",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "August 15, 2024",
    duration: "3:50",
    genre: "Synthwave Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Lucas Chen",
      producer: "Maya Patel",
      mixMaster: "Ryan Cooper"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "6",
    title: "Street Poetry",
    description: "Raw and authentic storytelling meets innovative production in this lyrical masterpiece.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5rL2UdNODnR202C5lwjjnBv6L-tkL2pR5A&s",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "September 1, 2024",
    duration: "4:05",
    genre: "Lyrical Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "David Martinez",
      producer: "Sarah Johnson",
      mixMaster: "Mike Wilson"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "7",
    title: "Tropical Storm",
    description: "A high-energy fusion of dancehall and hip-hop that brings the heat of the Caribbean.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8c/df/ae/8cdfaece-c842-9a12-fa04-ac113ecb217a/7300340752090.jpg/1200x1200bf-60.jpg",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "September 15, 2024",
    duration: "3:40",
    genre: "Dancehall Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Jamaal Williams",
      producer: "Lisa Chen",
      mixMaster: "Tom Anderson"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "8",
    title: "Midnight Run",
    description: "A high-octane track that captures the energy of late-night city life with its driving beats.",
    image: "https://i1.sndcdn.com/artworks-LovYj7kGK29A-0-t500x500.jpg",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "October 1, 2024",
    duration: "3:55",
    genre: "Trap Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Alex Thompson",
      producer: "Maria Garcia",
      mixMaster: "Chris Lee"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "9",
    title: "Sunset Boulevard",
    description: "A smooth, laid-back track that combines West Coast vibes with modern hip-hop production.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvNAvCJ2avTc2B-dJ9yMwEwvbDhUEuP_Vhg&s",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "October 15, 2024",
    duration: "4:10",
    genre: "West Coast Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Ryan Cooper",
      producer: "Jessica Lee",
      mixMaster: "David Park"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  },
  {
    id: "10",
    title: "Electric Dreams",
    description: "A futuristic blend of electronic elements and hip-hop that pushes the boundaries of sound.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5rL2UdNODnR202C5lwjjnBv6L-tkL2pR5A&s",
    videoUrl: "https://www.youtube.com/watch?v=...",
    releaseDate: "November 1, 2024",
    duration: "4:00",
    genre: "Electronic Hip-Hop",
    credits: {
      writer: "Zany Inzane",
      composer: "Sophia Chen",
      producer: "Marcus Williams",
      mixMaster: "Emma Rodriguez"
    },
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtube: "https://youtube.com/watch?v=...",
      appleMusic: "https://music.apple.com/track/..."
    }
  }
]; 