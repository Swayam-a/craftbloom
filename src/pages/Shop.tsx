import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, ArrowUpDown, Sparkles, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceFilter, setPriceFilter] = useState<number>(600);

  // Sync state if url param changes
  React.useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTag = product.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }
      // Price filter
      if (product.price > priceFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0); // featured default
    });
  }, [selectedCategory, searchQuery, sortBy, priceFilter]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-100 via-pink-50 to-amber-100 p-6 sm:p-10 border border-purple-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-white/70 px-3 py-1 rounded-full border border-purple-200">
            Handcrafted Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-purple-950 font-rounded mt-3">
            {activeCategoryObj ? activeCategoryObj.name : 'All Handmade Creations'}
          </h1>
          <p className="text-xs sm:text-sm text-purple-900/80 mt-2">
            {activeCategoryObj
              ? activeCategoryObj.description
              : 'Explore every single one-of-a-kind creation sculpted with pipe-cleaner velvet, faux pearls, gotapatti and festive love.'}
          </p>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="space-y-4">
        
        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              selectedCategory === 'all'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Secondary Filter & Sort Bar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-purple-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Search inside shop */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-7 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* Price Slider */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Max:</span>
              <span className="font-bold text-purple-900 font-rounded">₹{priceFilter}</span>
              <input
                type="range"
                min="100"
                max="650"
                step="50"
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="w-24 sm:w-32 accent-purple-700 cursor-pointer"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 border border-purple-200 rounded-xl px-2.5 py-1.5 bg-purple-50/50">
              <ArrowUpDown className="w-3.5 h-3.5 text-purple-700" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none font-semibold text-purple-950 cursor-pointer"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Active Results Summary */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>
          Showing <strong>{filteredProducts.length}</strong> creations
          {selectedCategory !== 'all' && ` in "${activeCategoryObj?.name}"`}
        </span>
        {(selectedCategory !== 'all' || searchQuery || priceFilter < 600) && (
          <button
            onClick={() => {
              handleCategorySelect('all');
              setSearchQuery('');
              setPriceFilter(600);
            }}
            className="text-purple-700 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-purple-100 shadow-sm max-w-md mx-auto">
          <div className="text-4xl mb-3">🌸</div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">No products match your criteria</h3>
          <p className="text-xs text-gray-500 mb-5">
            Try adjusting your search terms, category filters, or price slider.
          </p>
          <button
            onClick={() => {
              handleCategorySelect('all');
              setSearchQuery('');
              setPriceFilter(600);
            }}
            className="px-5 py-2.5 rounded-full bg-purple-700 text-white font-bold text-xs"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};

