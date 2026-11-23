import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    createWhatsAppProductUrl
  } = useShop();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const selectedColor = product.availableColors[selectedColorIndex]?.name;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleWhatsAppEnquiry = () => {
    const url = createWhatsAppProductUrl(product, selectedColor);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-7 border border-purple-100 animate-scale">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Gallery Side */}
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-square bg-purple-50/50 border border-purple-100 relative">
              <img
                src={product.images[selectedImageIndex] || product.primaryImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-500 hover:text-pink-600"
              >
                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition ${
                      selectedImageIndex === idx ? 'border-purple-600 scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                {product.categoryName}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-rounded mt-1">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500 text-xs font-bold gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-gray-400">({product.reviewCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-2xl font-black text-purple-950 font-rounded">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Color Swatches */}
              {product.availableColors.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Style / Color: <span className="text-purple-700 font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.availableColors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${color.bgClass} ${
                          selectedColorIndex === idx ? 'border-purple-700 scale-110 shadow-md ring-2 ring-purple-200' : 'border-white opacity-80'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs font-bold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-purple-200 rounded-xl bg-purple-50/50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition text-xs font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition text-xs font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-3 border-t border-purple-50">
              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-700 hover:bg-purple-800 text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-2xl transition"
                  title="Ask artisan on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-600" />
                </button>
              </div>

              <Link
                to={`/product/${product.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="w-full py-2 text-center text-xs text-purple-800 font-bold hover:underline flex items-center justify-center gap-1"
              >
                <span>View Full Product Details & Craft Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

