import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const color = product.availableColors[selectedColorIndex]?.name;
    addToCart(product, 1, color);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div className="group relative bg-white rounded-3xl p-3 sm:p-4 border border-purple-100 shadow-sm hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Top Badges & Wishlist Button */}
      <div className="relative">
        {/* Badges Container */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
          {product.isBestseller && (
            <span className="bg-purple-700 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              Bestseller
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-rose-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
          {product.isNew && !product.isBestseller && (
            <span className="bg-amber-400 text-purple-950 text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-full shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label="Save to Wishlist"
          className="absolute top-2.5 right-2.5 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-900 hover:text-pink-600 hover:bg-white shadow-sm transition-all"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isInWishlist(product.id) ? 'fill-pink-500 text-pink-500' : 'text-gray-500 hover:text-pink-500'
            }`}
          />
        </button>

        {/* Image Container with Link */}
        <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-2xl bg-purple-50/50 aspect-square relative">
          <img
            src={product.primaryImage}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Quick View Overlay on Hover */}
          <div className="absolute inset-0 bg-purple-900/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none sm:pointer-events-auto">
            <button
              onClick={handleQuickView}
              className="bg-white/95 text-purple-900 hover:bg-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>
        </Link>
      </div>

      {/* Product Content */}
      <div className="pt-3 pb-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-medium text-purple-600/90 tracking-wide uppercase text-[10px]">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-gray-700 text-[11px]">{product.rating}</span>
              <span className="text-gray-400 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug hover:text-purple-700 transition line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Color Variations Dots */}
          {product.availableColors.length > 1 && (
            <div className="flex items-center gap-1.5 mt-2">
              {product.availableColors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColorIndex(idx);
                  }}
                  title={color.name}
                  className={`w-3.5 h-3.5 rounded-full border border-white shadow-xs transition-transform ${color.bgClass} ${
                    selectedColorIndex === idx ? 'ring-2 ring-purple-600 scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
              <span className="text-[10px] text-gray-400 ml-1">
                {product.availableColors.length} styles
              </span>
            </div>
          )}
        </div>

        {/* Pricing & Add To Cart Button */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-purple-50">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-extrabold text-purple-950 font-rounded">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-2xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-200'
                : 'bg-purple-700 hover:bg-purple-800 text-white shadow-purple-200 active:scale-95'
            }`}
            title="Add to shopping bag"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

