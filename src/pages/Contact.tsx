import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Can I request a custom color combination for flowers or torans?',
      a: 'Yes, absolutely! We love creating bespoke orders. You can reach out directly via WhatsApp with your preferred color palette, ceremony theme (such as pastel pink for Haldi or royal blue for Diwali), and we will craft it specifically for you.'
    },
    {
      q: 'How long do the handmade pipe-cleaner flowers last?',
      a: 'Forever! Unlike fresh cut flowers, our velvet wire blooms never wilt, lose fragrance, or decay. Simply dust them gently with a soft makeup brush or dry cloth every few months to keep them looking fresh and radiant.'
    },
    {
      q: 'How are the products packaged for shipping?',
      a: 'Every item is individually wrapped in protective bubble cushion and placed inside sturdy corrugated cardboard gift boxes. We ensure delicate floral petals, mirror diyas, and torans arrive in pristine condition.'
    },
    {
      q: 'What is the delivery time across India?',
      a: 'Orders are handcrafted and dispatched within 24–48 hours. Express courier shipping typically takes 3–5 business days to metro cities and 4–7 business days to other regions.'
    },
    {
      q: 'Do you accept bulk wedding or festive gifting orders?',
      a: 'Yes! We frequently make bulk festive hampers, corporate gifts, Mehendi giveaways, and housewarming favors with customized gift tags and bulk discount pricing.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-rounded">
          We’d Love to Hear From You 🌸
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Have a question about an order, want to customize a floral design, or just want to say hello? Reach out directly!
        </p>
      </div>

      {/* Grid: Contact Options & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Direct Hero Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg">Instant WhatsApp Chat</h3>
                <p className="text-xs text-emerald-100">Fastest response directly with the maker</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-emerald-50">
              Send us reference photos, discuss custom color schemes, or enquire about bulk discounts on WhatsApp.
            </p>

            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CraftBloom! I'd like to get in touch regarding a handmade craft order 🌸")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <span>Chat Now ({BRAND_CONFIG.whatsappDisplay})</span>
            </a>
          </div>

          {/* Contact Details Cards */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm space-y-4 text-xs">
            
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Address</h4>
                <a href={`mailto:${BRAND_CONFIG.email}`} className="text-purple-700 hover:underline">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Handmade Studio</h4>
                <p className="text-gray-600">Mumbai & Pune, India • Shipping Pan-India with full tracking</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Working Hours</h4>
                <p className="text-gray-600">Monday to Saturday: 10:00 AM – 7:00 PM IST</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-extrabold text-gray-900 font-rounded mb-1">
                Send Us a Note
              </h2>
              <p className="text-xs text-gray-500 mb-4">
                We usually respond within a few hours on business days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Roy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message or Custom Request *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the craft pieces you need, quantity, occasion, or any custom color preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-rounded">Thank You, {name}! 🌸</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                We have received your message and will get back to you shortly on WhatsApp or email!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs hover:bg-purple-200 transition"
              >
                Send Another Note
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Help Center</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-rounded mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-purple-950 hover:text-purple-700 transition"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-purple-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-gray-600 leading-relaxed border-t border-purple-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

