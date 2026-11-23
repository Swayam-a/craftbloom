import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Sparkles, Heart, ShoppingBag, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_CONFIG } from '../data/products';

export const MobileBottomNav: React.FC = () => {
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen } = useShop();
  const location = useLocation();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white/98 backdrop-blur-md border-t border-purple-100 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-pb">
      <div className="flex items-center justify-around">
        
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
              isActive ? 'text-purple-700 font-extrabold scale-105' : 'text-gray-500 hover:text-purple-600'
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </NavLink>

        {/* Shop */}
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
              isActive ? 'text-purple-700 font-extrabold scale-105' : 'text-gray-500 hover:text-purple-600'
            }`
          }
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px]">Shop</span>
        </NavLink>

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-gray-500 hover:text-pink-600 relative transition active:scale-95"
        >
          <div className="relative">
            <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px]">Wishlist</span>
        </button>

        {/* Cart Bag */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-gray-500 hover:text-purple-700 relative transition active:scale-95"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-purple-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-amber-400 text-purple-950 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold text-purple-900">Bag</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CraftBloom! I'm shopping on your mobile store and would like to ask a question 🌸")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-emerald-600 hover:text-emerald-700 transition active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
          <span className="text-[10px] font-semibold">Chat</span>
        </a>

      </div>
    </div>
  );
};

