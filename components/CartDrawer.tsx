'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, totalItems, clearCart } = useCart();

  const waOrderLink = () => {
    if (items.length === 0) return '';
    const orderText = items
      .map((item, i) => `${i + 1}. ${item.displayName} x${item.quantity} — ${item.price}`)
      .join('\n');
    const text = `Hi, I'd like to order:\n\n${orderText}\n\nFrom Dubaiweeedhub`;
    return `https://wa.me/03149024871?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeCart}></div>
          <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-bold text-[#0a1f12]">Your Cart</h2>
                <p className="text-xs text-gray-400 mt-0.5">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
              </div>
              <button onClick={closeCart} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                  <i className="ri-close-line text-xl"></i>
                </div>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6">
                <div className="w-20 h-20 flex items-center justify-center text-gray-200 mb-4">
                  <i className="ri-shopping-cart-2-line text-6xl"></i>
                </div>
                <h3 className="text-lg font-bold text-[#0a1f12] mb-2">Your cart is empty</h3>
                <p className="text-sm text-gray-400 text-center mb-6">Browse our products and add items to your cart</p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="bg-[#1a472a] text-white font-medium px-8 py-3 rounded-full hover:bg-[#143722] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.productId} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                      <Link href={`/shop/${item.productId}`} onClick={closeCart} className="shrink-0 cursor-pointer">
                        <img
                          src={item.image}
                          alt={item.displayName}
                          className="w-20 h-20 object-cover rounded-md border border-gray-200"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link href={`/shop/${item.productId}`} onClick={closeCart} className="cursor-pointer">
                          <h4 className="text-sm font-bold text-[#0a1f12] hover:text-[#1a472a] transition-colors truncate">{item.displayName}</h4>
                        </Link>
                        <p className="text-xs text-[#1a472a] font-semibold mt-1">{item.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-full bg-white">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1a472a] transition-colors cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-subtract-line"></i>
                              </div>
                            </button>
                            <span className="text-sm font-semibold text-[#0a1f12] w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1a472a] transition-colors cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-add-line"></i>
                              </div>
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer ml-auto"
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-delete-bin-line"></i>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 px-6 py-5 space-y-3">
                  <a
                    href={waOrderLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-full transition-colors cursor-pointer whitespace-nowrap shadow-lg shadow-green-600/20"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-whatsapp-line text-lg"></i>
                    </div>
                    Order via WhatsApp
                  </a>
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-gray-400 hover:text-red-500 py-2 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}