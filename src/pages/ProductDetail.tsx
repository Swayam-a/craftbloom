import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft, Star, Sparkles, MessageCircle, Truck, ShieldCheck, Check, Share2, HelpCircle } from 'lucide-react';
import { PRODUCTS, REVIEWS, BRAND_CONFIG } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    createWhatsAppProductUrl,
    showToast
  } = useShop();

  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'craft' | 'materials' | 'reviews'>('craft');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Creation Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">The craft item you are looking for does not exist.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-purple-700 text-white font-bold text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const selectedColor = product.availableColors[selectedColorIndex]?.name;
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, customNote);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, customNote);
    navigate('/shop');
  };

  const handleWhatsAppEnquiry = () => {
    const url = createWhatsAppProductUrl(product, selectedColor, customNote);
    window.open(url, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard! 📋', 'info');
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestseller)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-purple-700 transition">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-purple-700 transition">Shop</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-purple-700 transition">
          {product.categoryName}
        </Link>
        <span>/</span>
        <span className="text-purple-900 font-semibold truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Main Selected Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-square bg-purple-50/60 border border-purple-100 shadow-sm group">
            <img
              src={product.images[selectedImageIndex] || product.primaryImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
              {product.isBestseller && (
                <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  ★ Bestseller
                </span>
              )}
              {discountPercent > 0 && (
                <span className="bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Wishlist & Share Float Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-pink-600 shadow-sm transition"
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-purple-700 shadow-sm transition"
                title="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition shrink-0 ${
                    selectedImageIndex === idx ? 'border-purple-600 ring-2 ring-purple-100 scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Artisan Guarantee Card */}
          <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100 text-xs text-purple-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-purple-900">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>The CraftBloom Artisan Touch</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every single piece is shaped by hand using plush velvet wire and artisan accents. Slight natural variations between blooms celebrate the authentic uniqueness of handmade art.
            </p>
          </div>

        </div>

        {/* Right Column: Product Info & Order Options */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              {product.categoryName}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 font-rounded mt-2">
              {product.name}
            </h1>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
              </div>
              <span className="text-xs text-gray-500">Based on {product.reviewCount} customer reviews</span>
              <span className="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> In Stock & Ready to Ship
              </span>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/50 to-amber-50 border border-purple-100 flex items-center justify-between">
            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl font-black text-purple-950 font-rounded">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                  Save ₹{product.originalPrice! - product.price} ({discountPercent}%)
                </span>
              )}
            </div>
            <span className="text-xs text-purple-700 font-semibold">Taxes included</span>
          </div>

          {/* Short Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Color & Style Variations */}
          {product.availableColors.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-800">
                Choose Color / Style: <span className="text-purple-700 font-semibold">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap items-center gap-2.5">
                {product.availableColors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                      selectedColorIndex === idx
                        ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-xs ring-1 ring-purple-600'
                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${color.bgClass} shadow-xs`} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector & Customization Input */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-800">Quantity:</span>
              <div className="flex items-center border border-purple-200 rounded-xl bg-purple-50/50 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Customization Request Input */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1">
                Personalized Customization Note (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Include a handwritten gift message or specify custom flower hue"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-purple-700 hover:bg-purple-800 text-white hover:shadow-lg active:scale-98'
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
                className="py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                title="Chat with the maker on WhatsApp about this product"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-purple-950 font-extrabold text-sm shadow-sm transition"
            >
              Continue to Cart & Checkout
            </button>
          </div>

          {/* Shipping & Delivery Perks */}
          <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-gray-600">
            <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <Truck className="w-4 h-4 text-purple-700 shrink-0" />
              <span>Free Delivery over ₹499</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Safe Damage-Free Packing</span>
            </div>
          </div>

        </div>

      </div>

      {/* Product Details Tabs (Craft Story, Materials, Reviews) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm space-y-6">
        
        {/* Tab Headers */}
        <div className="flex border-b border-purple-100 gap-4 sm:gap-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('craft')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all shrink-0 ${
              activeTab === 'craft'
                ? 'border-purple-700 text-purple-950'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            Craft Details & Features
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all shrink-0 ${
              activeTab === 'materials'
                ? 'border-purple-700 text-purple-950'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            Materials & Care
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all shrink-0 ${
              activeTab === 'reviews'
                ? 'border-purple-700 text-purple-950'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            Customer Reviews ({product.reviewCount})
          </button>
        </div>

        {/* Tab Body */}
        {activeTab === 'craft' && (
          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">{product.description}</p>
            <h4 className="font-bold text-gray-900 pt-2">Key Highlights:</h4>
            <ul className="space-y-2 list-disc pl-5 text-gray-600">
              {product.craftDetails.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Materials Used:</h4>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            {product.dimensions && (
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Dimensions:</h4>
                <p className="text-gray-600">{product.dimensions}</p>
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Care Instructions:</h4>
              <p className="text-gray-600 leading-relaxed">
                Gently dust with a soft makeup brush or dry cloth. Keep away from water immersion to preserve wire shape and metallic trims. If petals bend during transit, simply reshape gently with fingers.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
              <div className="text-center">
                <span className="text-3xl font-black text-purple-950 font-rounded">{product.rating}</span>
                <div className="flex text-amber-400 text-xs justify-center mt-1">★★★★★</div>
              </div>
              <div className="text-xs text-gray-600">
                <p className="font-bold text-gray-900">100% of reviewers recommend this creation</p>
                <p>Verified handmade purchases across India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {REVIEWS.slice(0, 2).map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-gray-900">{rev.author}</span>
                    <span className="text-gray-400">{rev.date}</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Related Products Recommendation */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900 font-rounded">
            You Might Also Love ♡
          </h2>
          <Link to="/shop" className="text-xs font-bold text-purple-700 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
};

