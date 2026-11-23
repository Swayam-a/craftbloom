import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Heart, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-hover border border-purple-100 p-3.5 flex items-center gap-3 animate-slideUp text-xs font-semibold text-gray-800 transition-all"
        >
          {toast.type === 'heart' ? (
            <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-pink-500" />
            </div>
          ) : toast.type === 'info' ? (
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Info className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          )}

          <p className="flex-1 leading-snug">{toast.message}</p>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

