import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Sparkles, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_CONFIG } from '../data/products';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    shippingFee,
    cartTotal,
    discount,
    couponCode,
    applyCoupon,
    removeCoupon,
    createWhatsAppOrderUrl
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = BRAND_CONFIG.freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    applyCoupon(promoInput);
    setPromoInput('');
  };

  const handleWhatsAppOrder = () => {
    const url = createWhatsAppOrderUrl(customerNote);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center justify-between bg-purple-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Your Craft Bag</h2>
              <p className="text-xs text-purple-700 font-medium">{cart.length} item{cart.length === 1 ? '' : 's'}</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-gradient-to-r from-purple-100 via-pink-50 to-amber-100 border-b border-purple-100 text-xs">
          {amountToFreeShipping > 0 ? (
            <p className="text-purple-900 font-semibold mb-1.5 flex items-center justify-between">
              <span>Add <strong>₹{amountToFreeShipping}</strong> more for <strong>FREE Delivery!</strong> 🚚</span>
              <span className="text-[11px] text-purple-700 font-bold">{progressPercent}%</span>
            </p>
          ) : (
            <p className="text-emerald-700 font-bold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Yay! You unlocked FREE Delivery across India! 🎉
            </p>
          )}
          <div className="w-full h-2 bg-white/80 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-purple-50">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-4">
                🌸
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Your bag is empty</h3>
              <p className="text-sm text-gray-500 mb-6">Explore our vibrant handmade collection and add some happiness!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor}`} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-start">
                <img
                  src={item.product.primaryImage}
                  alt={item.product.name}
                  className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-2xl border border-purple-100 bg-purple-50"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-900 text-sm leading-tight truncate pr-2">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                      className="text-gray-400 hover:text-rose-500 transition p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {item.selectedColor && (
                    <p className="text-xs text-purple-700 font-medium mt-0.5">
                      Style: <span className="text-gray-700">{item.selectedColor}</span>
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-purple-200 rounded-xl bg-purple-50/50 p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-purple-800 hover:bg-white transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-sm text-purple-950 font-rounded">
                        ₹{item.product.price * item.quantity}
                      </span>
                      {item.quantity > 1 && (
                        <p className="text-[10px] text-gray-400">₹{item.product.price} each</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-purple-100 bg-white space-y-3.5 shadow-lg">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (e.g. BLOOM10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="flex-1 px-3.5 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 font-mono uppercase"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-xs rounded-xl transition"
              >
                Apply
              </button>
            </form>

            {couponCode && (
              <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                <span className="font-medium">Applied: <strong>{couponCode}</strong></span>
                <button onClick={removeCoupon} className="text-emerald-900 hover:underline font-bold text-[11px]">
                  Remove
                </button>
              </div>
            )}

            {/* Custom Notes / Gifting Instructions */}
            <div>
              <input
                type="text"
                placeholder="Optional gift note or customisation request..."
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 text-gray-700"
              />
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-gray-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">₹{cartSubtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Pan-India Delivery</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-extrabold text-purple-950 pt-2 border-t border-purple-100">
                <span>Total Amount</span>
                <span className="font-rounded text-lg text-purple-800">₹{cartTotal}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2 pt-1">
              {/* WhatsApp Direct Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
                title="Order directly with the artisan via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quick Order via WhatsApp</span>
              </button>

              {/* Standard Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onOpenCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Authentic Handmade Craft Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

