import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistProducts,
    toggleWishlist,
    addToCart
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-pink-100 flex items-center justify-between bg-pink-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Saved Favorites</h2>
              <p className="text-xs text-pink-700 font-medium">
                {wishlistProducts.length} item{wishlistProducts.length === 1 ? '' : 's'} saved
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-purple-50">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-3xl mb-4">
                💖
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Your wishlist is empty</h3>
              <p className="text-sm text-gray-500 mb-6">
                Tap the heart on any handmade craft to save your favorite pieces!
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md transition"
              >
                Browse Creations
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-center">
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setIsWishlistOpen(false)}
                  className="shrink-0"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-2xl border border-purple-100 bg-purple-50"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="font-bold text-gray-900 text-sm leading-tight hover:text-purple-700 truncate block"
                    >
                      {product.name}
                    </Link>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="text-gray-400 hover:text-rose-500 transition p-1"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-purple-600 font-medium mt-0.5">{product.categoryName}</p>

                  <div className="flex items-center justify-between mt-2.5">
                    <span className="font-bold text-sm text-purple-950 font-rounded">
                      ₹{product.price}
                    </span>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-purple-100 bg-white">
            <button
              onClick={() => {
                wishlistProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <span>Move All to Bag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

