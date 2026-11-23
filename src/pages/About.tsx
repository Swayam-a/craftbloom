import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Flower2, Scissors, Smile, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-amber-100 rounded-b-[2.5rem] sm:rounded-b-[4rem] text-center px-4 border-b border-purple-100">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Our Artisan Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-purple-950 font-rounded leading-tight">
            Little Pieces of Art. <br />
            <span className="text-pink-600 text-handwritten text-5xl sm:text-6xl font-normal">
              Made with Infinite Love ♡
            </span>
          </h1>
          <p className="text-sm sm:text-base text-purple-900/80 leading-relaxed max-w-2xl mx-auto">
            CraftBloom began with a simple belief: everyday living spaces become magical when filled with handmade artistry that never withers away.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
              The Craft Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-rounded leading-snug">
              From Fluffy Velvet Pipe Cleaners to Everlasting Botanical Heirlooms
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              In a world flooded with disposable plastic decorations and fleeting trends, we wanted to create objects of warmth and tactile wonder. Using premium plush velvet craft wire, shimmering pearl trims, and traditional Indian gota-patti, each CraftBloom creation is hand-formed petal by petal.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              No molds. No automated stamping presses. Just nimble hands, artistic intuition, and countless hours of shaping flexible wire into blossoms that mimic nature's grace while lasting forever.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-purple-900">
              <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
                <Scissors className="w-3.5 h-3.5 text-purple-700" />
                <span>Hand-Sculpted</span>
              </div>
              <div className="flex items-center gap-1.5 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-200">
                <Flower2 className="w-3.5 h-3.5 text-pink-600" />
                <span>Zero Wilting</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                <Smile className="w-3.5 h-3.5 text-amber-600" />
                <span>Gen-Z & Tween Friendly</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-purple-100 aspect-[4/3]">
              <img
                src="/images/products/craftbloom-master.jpg"
                alt="CraftBloom Handmade Studio Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Studio Values</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-rounded mt-1">
            What Makes CraftBloom Special
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-sm hover:shadow-card transition text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl">
              🎨
            </div>
            <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">Playful & Colourful Aesthetic</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We draw inspiration from Pinterest moodboards, pastel floral gardens, and festive Indian celebrations to design creations bursting with personality.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-sm hover:shadow-card transition text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
              🌿
            </div>
            <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">Sustainable & Everlasting</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Say goodbye to throwing away withered flower bouquets after 3 days. Our blooms stay vibrant for years with simple light dusting.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-sm hover:shadow-card transition text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">
              ✨
            </div>
            <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">Direct Artisan Care</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              When you message or order on WhatsApp, you speak directly with the creators. Custom color requests and personalized gift notes are handled with genuine joy.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-800 to-pink-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-rounded">
            Ready to Bring Handmade Joy into Your Space?
          </h3>
          <p className="text-xs sm:text-sm text-purple-100 max-w-md mx-auto">
            Browse our full catalog or message us to design a bespoke floral arrangement.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/shop"
              className="px-6 py-3 rounded-full bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs sm:text-sm shadow-md transition"
            >
              Shop Handcrafted Creations
            </Link>
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! I'd like to collaborate on a custom handmade design 🌸")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

