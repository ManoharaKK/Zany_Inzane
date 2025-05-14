import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Urban Legends Hoodie',
      category: 'hoodies',
      price: 79.99,
      image: 'https://www.onestophiphop.co.uk/cdn/shop/products/streetwear-styled-hoodie-mockup-featuring-a-man-on-the-street-m522_11_1024x1024.png?v=1678562799',
      description: 'Premium heavyweight hoodie with embroidered Zany Inzane logo and urban-inspired design',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Red', 'White']
    },
    {
      id: 2,
      name: 'Street Poetry T-Shirt',
      category: 'tshirts',
      price: 39.99,
      image: 'https://down-ph.img.susercontent.com/file/c34efb9306eb8b3427bba73a1e807c5e',
      description: 'Classic fit t-shirt featuring exclusive street art design',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White']
    },
    {
      id: 3,
      name: 'Neon Lights Cap',
      category: 'accessories',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/I/710lLtHVWxL._AC_UY1000_.jpg',
      description: 'Structured cap with neon-inspired embroidery',
      sizes: ['One Size'],
      colors: ['Black', 'Red']
    },
    {
      id: 4,
      name: 'Island Vibes Collection',
      category: 'new',
      price: 89.99,
      image: 'https://www.onestophiphop.co.uk/cdn/shop/products/mockup-of-a-man-wearing-a-pullover-hoodie-under-a-denim-garment-m525_1024x1024.png?v=1678561229',
      description: 'Limited edition summer collection featuring tropical designs',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Red', 'White']
    },
    {
      id: 5,
      name: 'Fire & Soul Hoodie',
      category: 'hoodies',
      price: 84.99,
      image: 'https://rukminim2.flixcart.com/image/850/1000/kod858w0/t-shirt/l/r/v/xxl-triangle-oversized-hiphop-tshirt-hiphop-clothing-india-original-imag2u9qmvtbyry7.jpeg?q=90&crop=false',
      description: 'Oversized hoodie with flame-inspired graphics',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Red']
    },
    {
      id: 6,
      name: 'Urban Legends T-Shirt',
      category: 'tshirts',
      price: 44.99,
      image: 'https://d12w0o72bw9xzs.cloudfront.net/lpsv4o8jna65ox87c1tk5ju209eg',
      description: 'Graphic t-shirt with urban street art design',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Red']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section - adjusted for navbar visibility */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Top gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://www.printnz.com/cdn/shop/products/3541.jpg?v=1701443454" 
            alt="Store Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[rgb(229,16,22)] via-[rgb(229,16,22)]/80 to-[rgb(229,16,22)] bg-clip-text text-transparent tracking-tighter">
            ZANY INZANE
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light mb-8">
            Streetwear that speaks your language
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-[rgb(229,16,22)] rounded-full text-white text-lg font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-full text-white text-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-[rgb(229,16,22)] text-white shadow-lg shadow-[rgb(229,16,22)]/30'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group relative bg-black/80 overflow-hidden hover:bg-black/90 transition-all duration-500 transform hover:-translate-y-1 border border-white/10 hover:border-[rgb(229,16,22)]/50"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1.5 bg-[rgb(229,16,22)]/90 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map(size => (
                      <span key={size} className="px-2 py-1 bg-black/90 backdrop-blur-sm text-xs font-bold border border-white/20">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-black tracking-tight text-white truncate">{product.name}</h3>
                  <span className="text-xl font-black text-[rgb(229,16,22)]">
                    ${product.price}
                  </span>
                </div>
                <p className="text-white/60 mb-4 text-sm font-light line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {product.colors.map(color => (
                      <span key={color} className="px-2 py-1 bg-black/50 backdrop-blur-sm text-xs font-bold border border-white/20">
                        {color}
                      </span>
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-[rgb(229,16,22)] text-white text-sm font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[rgb(229,16,22)]/20">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-b from-black to-[rgb(229,16,22)]/20 py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(229,16,22)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgb(229,16,22)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-gradient">
              Join the Movement
            </h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto text-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Subscribe for exclusive drops, early access, and special offers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[rgb(229,16,22)] text-lg transition-all duration-300 hover:bg-white/15 focus:bg-white/20"
            />
            <button className="group relative px-8 py-4 bg-[rgb(229,16,22)] rounded-full text-white font-bold hover:bg-[rgb(229,16,22)]/80 transition-all duration-300 transform hover:scale-105 text-lg overflow-hidden">
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(229,16,22)] to-[rgb(229,16,22)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Store;
