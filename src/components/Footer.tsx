import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG, CATEGORIES } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF5FF] to-[#F3E8FF] border-t border-purple-100 pt-16 pb-12 overflow-hidden">
      
      {/* Decorative floral background orbs */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter / Custom Enquiry Studio Card */}
        <div className="mb-14 bg-gradient-to-r from-purple-800 via-purple-900 to-pink-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl">🌸</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Custom Handmade Orders
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-rounded leading-tight">
                Want a personalized floral gift or wedding bulk set?
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm mt-2 max-w-md">
                We craft custom color palettes, festive bulk hampers, and personalized wedding floral accessories with love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CraftBloom! I'd like to ask about a custom handmade craft order 🌸")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-2xl text-sm shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl text-sm border border-white/20 transition"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-purple-200/60">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-sm">
                🌸
              </div>
              <span className="font-rounded font-extrabold text-2xl bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
                {BRAND_CONFIG.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              CraftBloom is an independent handmade lifestyle studio dedicated to whimsical pipe-cleaner flora, festive tealights, and handcrafted home treasures. Each creation is poured with patience, joy, and love.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition border border-emerald-200"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white flex items-center justify-center transition border border-pink-200"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white flex items-center justify-center transition border border-purple-200"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><Link to="/" className="hover:text-purple-700 transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-purple-700 transition">Shop All Creations</Link></li>
              <li><Link to="/collections" className="hover:text-purple-700 transition">Curated Collections</Link></li>
              <li><Link to="/about" className="hover:text-purple-700 transition">Artisan Story</Link></li>
              <li><Link to="/contact" className="hover:text-purple-700 transition">Contact & FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Handmade Range</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              {CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link to={`/shop?category=${c.id}`} className="hover:text-purple-700 transition">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Studio Contact</h4>
            <div className="space-y-2.5 text-xs text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Handcrafted in India • Pan-India shipping with express courier</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{BRAND_CONFIG.whatsappDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-700 shrink-0" />
                <span>{BRAND_CONFIG.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} {BRAND_CONFIG.name} Studio. All rights reserved.</p>
          <p className="flex items-center gap-1 text-purple-900 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 inline" />
            <span>for art lovers, dreamers & makers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
