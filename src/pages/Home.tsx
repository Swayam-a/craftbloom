import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, PackageCheck, Award, Truck, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES, PRODUCTS, REVIEWS, BRAND_CONFIG } from '../data/products';

export const Home: React.FC = () => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-br from-[#FAF5FF] via-[#FCE7F3] to-[#FEF3C7] rounded-b-[2.5rem] sm:rounded-b-[4rem] border-b border-purple-100">
        
        {/* Floating background decorative blossoms */}
        <div className="absolute top-10 left-6 text-3xl sm:text-5xl animate-float opacity-70 select-none">🌸</div>
        <div className="absolute top-24 right-12 text-2xl sm:text-4xl animate-float opacity-60 select-none" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute bottom-12 left-1/4 text-2xl sm:text-3xl animate-float opacity-50 select-none" style={{ animationDelay: '2.5s' }}>🌻</div>
        <div className="absolute top-1/2 right-1/4 text-2xl sm:text-3xl animate-float opacity-40 select-none" style={{ animationDelay: '3s' }}>💖</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Text Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xs text-xs font-bold text-purple-900">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                <span>100% Handcrafted Boutique Studio</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-950 font-rounded tracking-tight leading-[1.12]">
                  Handmade <br />
                  <span className="text-pink-600 text-handwritten text-5xl sm:text-6xl lg:text-7xl block sm:inline font-normal -mt-2">
                    with Love ♡
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-purple-900/80 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2">
                  {BRAND_CONFIG.heroSubheadline}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>Shop Handmade</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/collections"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-purple-950 font-bold text-sm border-2 border-purple-200 hover:border-purple-400 shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Collections</span>
                </Link>
              </div>

              {/* Social Proof Badges */}
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-purple-900/70">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-pink-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">A</span>
                  <span className="w-7 h-7 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">P</span>
                  <span className="w-7 h-7 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">R</span>
                </div>
                <span>Loved by 1,200+ craft lovers across India ★ 4.9/5</span>
              </div>

            </div>

            {/* Right Hero Visual Banner Showcase */}
            <div className="lg:col-span-6 relative z-10">
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-white/70 backdrop-blur-md shadow-2xl border border-white/80 group">
                
                {/* Floating Highlights Badges */}
                <div className="absolute -top-3 -right-3 z-20 bg-amber-400 text-purple-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md rotate-3 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Artisan Made</span>
                </div>

                <div className="absolute -bottom-3 -left-3 z-20 bg-pink-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md -rotate-3 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Everlasting Blooms</span>
                </div>

                {/* Master Image Showcase */}
                <div className="overflow-hidden rounded-2xl relative aspect-[16/9] sm:aspect-[16/10] bg-purple-100">
                  <img
                    src="/images/products/hero-stage.jpg"
                    alt="CraftBloom Handmade Collection"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent flex items-end p-4 sm:p-6">
                    <p className="text-white text-xs sm:text-sm font-semibold backdrop-blur-xs bg-black/20 px-3 py-1 rounded-full">
                      Featuring: Royal Lotus Diyas, Velvet Roses & Festive Torans
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* VALUE PROPOSITION BAR (Matching the reference UI exactly) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-soft border border-purple-100 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-purple-100">
          
          <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0">
            <span className="text-xl">🌿</span>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-purple-950">100% Handmade</h4>
              <p className="text-[11px] text-gray-500">Crafted with care</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0">
            <span className="text-xl">🎁</span>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-purple-950">Perfect for Gifting</h4>
              <p className="text-[11px] text-gray-500">Festive packaging</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0">
            <span className="text-xl">✨</span>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-purple-950">Unique Designs</h4>
              <p className="text-[11px] text-gray-500">Original creations</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0">
            <span className="text-xl">🛡️</span>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-purple-950">Quality Assured</h4>
              <p className="text-[11px] text-gray-500">Premium materials</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0 col-span-2 md:col-span-1">
            <span className="text-xl">🚚</span>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-purple-950">Pan India Delivery</h4>
              <p className="text-[11px] text-gray-500">Fast & tracked</p>
            </div>
          </div>

        </div>
      </section>

      {/* EXPLORE BY CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-rounded flex items-center gap-2">
              Explore by Category <span className="text-amber-500">✦</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Browse our diverse range of handcrafted decorative art
            </p>
          </div>
          <Link
            to="/collections"
            className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid (Matching reference cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CATEGORIES.slice(0, 5).map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-purple-100 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-purple-50/70 mb-3 relative flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="w-full flex items-center justify-between pt-1">
                <span className="font-bold text-gray-900 text-xs sm:text-sm group-hover:text-purple-700 transition line-clamp-1">
                  {category.name}
                </span>
                <span className="w-6 h-6 rounded-full bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-1">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OUR BESTSELLERS SECTION (Matching bottom row of mock) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-rounded flex items-center gap-2">
              Our Bestsellers <span className="text-pink-500">✦</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Customer favorites handcrafted with authentic details
            </p>
          </div>
          <Link
            to="/shop"
            className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group"
          >
            <span>See Full Catalog</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CREATIVE SPOTLIGHT / CRAFT STORY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider border border-pink-400/30">
                The Beauty of Handmade
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-rounded leading-snug">
                Why Pipe-Cleaner Flowers & Artisan Diyas?
              </h2>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                Unlike mass-produced plastic artificial flowers that end up in landfills or fresh cut flowers that wither in days, our plush velvet creations are soft to touch, customizable to any shade, and last forever. Paired with pearl halos and golden gota work, they bring soulful warmth to modern homes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-xl">🌸</span>
                  <h4 className="font-bold text-xs sm:text-sm mt-1">Never Wilts</h4>
                  <p className="text-[11px] text-purple-200">Everlasting beauty</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <span className="text-xl">🎨</span>
                  <h4 className="font-bold text-xs sm:text-sm mt-1">Custom Colors</h4>
                  <p className="text-[11px] text-purple-200">Match your decor</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10 col-span-2 sm:col-span-1">
                  <span className="text-xl">💖</span>
                  <h4 className="font-bold text-xs sm:text-sm mt-1">Made with Care</h4>
                  <p className="text-[11px] text-purple-200">Zero machine replica</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-pink-300 hover:text-white transition"
                >
                  <span>Read Our Artisan Studio Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-purple-900/50">
                <img
                  src="/images/products/craftbloom-master.jpg"
                  alt="Craftbloom studio showcase"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER LOVE / REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-pink-600 font-bold text-xs uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-rounded mt-1">
            Loved by Happy Customers ♡
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real feedback from customers across India who brought CraftBloom into their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm hover:shadow-card transition flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 gap-1 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-purple-50 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-gray-900">{rev.author}</h4>
                  <p className="text-[10px] text-gray-400">{rev.location}</p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

