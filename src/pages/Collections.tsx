import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Collections: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
          Thematic Curations
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-rounded">
          Curated Craft Collections
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          From festive diya illumination and welcoming doorway torans to everlasting desk blooms and wearable floral jewellery — discover pieces crafted for life's special moments.
        </p>
      </div>

      {/* Collections Sections */}
      <div className="space-y-16">
        {CATEGORIES.map((cat, index) => {
          const categoryProducts = PRODUCTS.filter((p) => p.category === cat.id);
          const isEven = index % 2 === 0;

          return (
            <section
              key={cat.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm space-y-6"
            >
              {/* Collection Header Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-purple-50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-purple-50 shrink-0 border border-purple-100">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 font-rounded">
                        {cat.name}
                      </h2>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                        {categoryProducts.length} items
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/shop?category=${cat.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 text-purple-800 hover:bg-purple-700 hover:text-white font-bold text-xs transition shrink-0"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Collection Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};

