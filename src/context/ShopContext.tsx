import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Product, CartItem } from '../types';
import { BRAND_CONFIG, PRODUCTS } from '../data/products';
import { soundFX } from '../utils/sound';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'heart';
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[]; // product IDs
  addToCart: (product: Product, quantity?: number, selectedColor?: string, customNote?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  shippingFee: number;
  cartTotal: number;
  discount: number;
  couponCode: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistProducts: Product[];
  wishlistCount: number;

  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'heart') => void;
  removeToast: (id: string) => void;

  createWhatsAppOrderUrl: (customerNote?: string) => string;
  createWhatsAppProductUrl: (product: Product, selectedColor?: string, customNote?: string) => string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('craftbloom_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('craftbloom_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('craftbloom_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('craftbloom_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const showToast = (message: string, type: 'success' | 'info' | 'heart' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3200);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, customNote?: string) => {
    const color = selectedColor || product.availableColors[0]?.name || 'Standard';
    
    // Play celebratory audio chime and subtle sparkle confetti
    soundFX.playAddChime();
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#EC4899', '#A855F7', '#FBBF24', '#10B981'],
        ticks: 50,
      });
    } catch {
      // fallback
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          customNote: customNote || next[existingIndex].customNote,
        };
        return next;
      } else {
        return [...prev, { product, quantity, selectedColor: color, customNote }];
      }
    });

    showToast(`Added "${product.name}" to cart! 🌸`, 'success');
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && (!selectedColor || item.selectedColor === selectedColor))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && (!selectedColor || item.selectedColor === selectedColor)) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BLOOM10' || clean === 'FIRSTCRAFT') {
      setCouponCode(clean);
      setDiscountPercent(10);
      showToast('10% Discount applied! 🎉', 'success');
      return true;
    } else if (clean === 'FESTIVE15') {
      setCouponCode(clean);
      setDiscountPercent(15);
      showToast('15% Festive discount applied! 🌟', 'success');
      return true;
    } else {
      showToast('Invalid promo code. Try "BLOOM10"', 'info');
      return false;
    }
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountPercent(0);
  };

  const discount = Math.round((cartSubtotal * discountPercent) / 100);

  const shippingFee = cartSubtotal >= BRAND_CONFIG.freeShippingThreshold || cartSubtotal === 0 ? 0 : BRAND_CONFIG.shippingFee;

  const cartTotal = Math.max(0, cartSubtotal - discount + shippingFee);

  const toggleWishlist = (productId: string) => {
    soundFX.playPop();
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        showToast(`Removed from wishlist`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Saved "${product?.name || 'Product'}" to wishlist! 💖`, 'heart');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));
  const wishlistCount = wishlist.length;

  const createWhatsAppOrderUrl = (customerNote?: string) => {
    if (cart.length === 0) return '';
    let message = `*Hello CraftBloom!* 🌸\nI would like to place an order from your website.\n\n*Order Items:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (Qty: ${item.quantity})\n`;
      if (item.selectedColor) message += `   • Color/Style: ${item.selectedColor}\n`;
      if (item.customNote) message += `   • Note: ${item.customNote}\n`;
      message += `   • Subtotal: ₹${item.product.price * item.quantity}\n\n`;
    });

    message += `*Subtotal:* ₹${cartSubtotal}\n`;
    if (discount > 0) message += `*Discount (${couponCode}):* -₹${discount}\n`;
    message += `*Shipping:* ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}\n`;
    message += `*Total Amount:* ₹${cartTotal}\n\n`;

    if (customerNote && customerNote.trim()) {
      message += `*Customer Note / Address / Custom Request:*\n${customerNote.trim()}\n\n`;
    }

    message += `Please confirm order availability and bank transfer / UPI payment details! Thank you! ✨`;

    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const createWhatsAppProductUrl = (product: Product, selectedColor?: string, customNote?: string) => {
    let message = `*Hello CraftBloom!* 🌸\nI am interested in customizing / ordering this handmade creation:\n\n`;
    message += `*Product:* ${product.name}\n`;
    message += `*Price:* ₹${product.price}\n`;
    if (selectedColor) message += `*Selected Color:* ${selectedColor}\n`;
    if (customNote) message += `*Customisation Request:* ${customNote}\n`;
    message += `\nCould you please share more details and delivery timeline? ✨`;

    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        shippingFee,
        cartTotal,
        discount,
        couponCode,
        applyCoupon,
        removeCoupon,
        toggleWishlist,
        isInWishlist,
        wishlistProducts,
        wishlistCount,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        toasts,
        showToast,
        removeToast,
        createWhatsAppOrderUrl,
        createWhatsAppProductUrl,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

