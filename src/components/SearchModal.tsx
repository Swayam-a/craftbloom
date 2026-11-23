import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const popularSearches = ['Tealight Diya', 'Rose Stem', 'Sunflower Pot', 'Floral Toran', 'Hair Accessory', 'Diya Plate'];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl z-10 overflow-hidden border border-purple-100 animate-slideDown">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center gap-3 bg-purple-50/40">
          <Search className="w-5 h-5 text-purple-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search flowers, diyas, torans, gifts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400 font-medium"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-700 text-xs font-semibold px-2 py-1 bg-white rounded-lg shadow-xs"
            >
              Clear
            </button>
          ) : (
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Popular Tags when input is empty */}
        {!query && (
          <div className="p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-medium transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 divide-y divide-purple-50">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-3xl mb-2">🔍</p>
                <p className="font-semibold text-gray-800 text-sm">No handmade creations found for "{query}"</p>
                <p className="text-xs text-gray-500 mt-1">Try searching for rose, diya, sunflower, or toran</p>
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-400 mb-3 font-semibold">
                  Found {filteredProducts.length} result{filteredProducts.length === 1 ? '' : 's'}
                </p>
                <div className="space-y-3">
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-2xl hover:bg-purple-50 transition group"
                    >
                      <img
                        src={p.primaryImage}
                        alt={p.name}
                        className="w-14 h-14 object-cover rounded-xl bg-purple-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-purple-700 truncate">
                          {p.name}
                        </h4>
                        <p className="text-xs text-purple-600 font-medium">{p.categoryName}</p>
                        <p className="text-xs font-extrabold text-purple-950 font-rounded mt-0.5">₹{p.price}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-700 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

