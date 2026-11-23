import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_CONFIG } from '../data/products';

export const Navbar: React.FC = () => {
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-amber-500 text-white text-xs py-1.5 px-4 font-medium text-center flex items-center justify-center gap-2 overflow-hidden">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse hidden sm:inline" />
        <span>🌸 <strong>Festive Craft Sale:</strong> Use code <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">BLOOM10</span> for 10% off | Free Pan-India Delivery over ₹499!</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse hidden sm:inline" />
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-purple-900 hover:bg-purple-50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-lg overflow-hidden">
                <span className="transform group-hover:rotate-12 transition-transform duration-300">🌸</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-rounded font-bold text-2xl tracking-tight bg-gradient-to-r from-purple-800 via-pink-600 to-purple-900 bg-clip-text text-transparent">
                {BRAND_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-purple-600 font-semibold -mt-1 hidden sm:block">
                {BRAND_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'text-purple-950 hover:text-purple-700 hover:bg-purple-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full text-purple-900 hover:bg-purple-50 hover:text-purple-700 transition"
              title="Search handmade creations"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CraftBloom! I'd like to ask a question about your handmade products 🌸")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition"
              title="Chat with maker on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>Ask Maker</span>
            </a>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-full text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-pink-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm animate-scale">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              title="View Cart"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 bg-amber-400 text-purple-950 text-xs font-extrabold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-purple-100 bg-white/98 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold ${
                  location.pathname === link.path
                    ? 'bg-purple-700 text-white'
                    : 'text-purple-950 hover:bg-purple-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CraftBloom! I'm browsing your site and had a question 🌸")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 font-semibold text-sm bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

