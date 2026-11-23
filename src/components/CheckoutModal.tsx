import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Truck, MapPin, User, Phone, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';
import { BRAND_CONFIG } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, cartSubtotal, discount, couponCode, shippingFee, cartTotal, clearCart } = useShop();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'cod'>('whatsapp');
  const [customNotes, setCustomNotes] = useState('');

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !pincode) {
      alert('Please fill in required contact and shipping fields.');
      return;
    }

    const newOrderId = `CB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderConfirmed(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7E22CE', '#EC4899', '#FBBF24', '#10B981']
      });
    } catch {
      // fallback
    }
  };

  const generateWhatsAppConfirmationUrl = () => {
    let text = `*New Order Placed on CraftBloom!* 🌸\n`;
    text += `*Order ID:* ${orderId}\n`;
    text += `*Customer:* ${fullName} (${phone})\n`;
    text += `*Email:* ${email || 'N/A'}\n`;
    text += `*Delivery Address:* ${address}, ${city} - ${pincode}\n`;
    text += `*Payment Preference:* ${paymentMethod === 'whatsapp' ? 'UPI / Bank Transfer via WhatsApp' : 'Cash on Delivery (COD)'}\n\n`;
    text += `*Ordered Items:*\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - ₹${item.product.price * item.quantity}\n`;
      if (item.selectedColor) text += `   • Color: ${item.selectedColor}\n`;
    });
    text += `\n*Subtotal:* ₹${cartSubtotal}\n`;
    if (discount > 0) text += `*Discount (${couponCode}):* -₹${discount}\n`;
    text += `*Shipping:* ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}\n`;
    text += `*Final Amount:* ₹${cartTotal}\n`;
    if (customNotes) text += `*Special Note:* ${customNotes}\n`;
    text += `\nPlease confirm my order and share UPI payment QR code! 💖`;

    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFinish = () => {
    clearCart();
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-7 border border-purple-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderConfirmed ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-2xl">💐</span>
              <h2 className="text-2xl font-extrabold text-gray-900 font-rounded">Complete Your Order</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Direct handmade orders are fulfilled with personal artisan care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Contact Info */}
              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 space-y-3">
                <h3 className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      placeholder="For order receipt updates"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-pink-50/40 p-4 rounded-2xl border border-pink-100 space-y-3">
                <h3 className="text-xs font-bold text-pink-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Delivery Address (India)
                </h3>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">House / Flat, Street, Landmark *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Enter complete shipping address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">City / Town *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      placeholder="6-digit pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Preference */}
              <div className="p-4 rounded-2xl border border-gray-200 space-y-2">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Payment Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition ${
                    paymentMethod === 'whatsapp' ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-semibold' : 'border-gray-200'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'whatsapp'}
                      onChange={() => setPaymentMethod('whatsapp')}
                      className="mt-0.5 text-purple-600"
                    />
                    <div>
                      <p className="font-bold flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                        UPI / Direct WhatsApp Pay
                      </p>
                      <p className="text-[11px] text-gray-500 font-normal">GPay, PhonePe, Paytm QR code sent via WhatsApp</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-purple-600 bg-purple-50/70 text-purple-950 font-semibold' : 'border-gray-200'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-0.5 text-purple-600"
                    />
                    <div>
                      <p className="font-bold flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 text-purple-600" />
                        Cash on Delivery (COD)
                      </p>
                      <p className="text-[11px] text-gray-500 font-normal">Pay upon package arrival at your doorstep</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Special Craft Note / Gift Message (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Please pack in festive gift box with a Happy Birthday note"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Order Summary Pill */}
              <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200 text-xs flex items-center justify-between">
                <div>
                  <span className="text-gray-600">Total Payable:</span>{' '}
                  <span className="text-base font-extrabold text-purple-900 font-rounded">₹{cartTotal}</span>
                  <span className="text-gray-400 text-[11px] ml-1.5">({cart.length} item{cart.length === 1 ? '' : 's'})</span>
                </div>
                <div className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Handmade with Love
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Place Handmade Order
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 px-2 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="bg-purple-100 text-purple-800 text-xs font-mono font-bold px-3 py-1 rounded-full">
                Order ID: {orderId}
              </span>
              <h2 className="text-2xl font-black text-gray-900 mt-2 font-rounded">Thank You, {fullName}! 🌸</h2>
              <p className="text-sm text-gray-600 mt-1 max-w-md mx-auto">
                Your order has been recorded. Our artisan team will begin handcrafting your items.
              </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-purple-50/60 rounded-2xl p-4 text-left border border-purple-100 text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Amount:</span>
                <span className="font-bold text-purple-900 text-sm font-rounded">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping to:</span>
                <span className="font-semibold text-gray-800">{city} ({pincode})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Selected Method:</span>
                <span className="font-semibold text-gray-800">
                  {paymentMethod === 'whatsapp' ? 'UPI via WhatsApp' : 'Cash on Delivery'}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Call To Action */}
            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href={generateWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm Order on WhatsApp & Get UPI QR</span>
              </a>

              <button
                onClick={handleFinish}
                className="w-full py-2.5 rounded-2xl text-purple-800 font-semibold text-xs hover:bg-purple-50 transition"
              >
                Back to Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

