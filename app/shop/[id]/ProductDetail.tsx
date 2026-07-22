'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function ProductDetail({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const waLink = (p: Product) => {
    const text = `Hi, I'm interested in ${p.displayName} from Dubaiweeedhub.`;
    return `https://wa.me/03149024871?text=${encodeURIComponent(text)}`;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        displayName: product.displayName,
        price: product.price,
        image: product.image,
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 mb-4">
              <img
                src={selectedImage}
                alt={product.displayName}
                className="w-full h-[500px] object-contain bg-white"
              />
            </div>
          </div>

          <div>
            <div className="inline-block bg-[#1a472a]/10 text-[#1a472a] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {product.category}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-2">{product.displayName}</h1>
            <p className="text-sm text-gray-500 mb-1">{product.name}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 flex items-center justify-center text-[#1a472a]">
                <i className="ri-map-pin-line"></i>
              </div>
              <span className="text-sm text-gray-600">{product.location}</span>
            </div>

            <div className="text-3xl font-bold text-[#1a472a] mb-6">{product.price}</div>

            <div className="h-px bg-gray-200 my-6"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#0a1f12] mb-3">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0a1f12] mb-3">Effects</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.effects}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0a1f12] mb-3">Usage & Storage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.usage}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0a1f12] mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.quality}</p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-8"></div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-[#0a1f12]">Quantity:</span>
              <div className="flex items-center border-2 border-gray-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1a472a] transition-colors cursor-pointer"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-subtract-line"></i>
                  </div>
                </button>
                <span className="text-base font-bold text-[#0a1f12] w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1a472a] transition-colors cursor-pointer"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-add-line"></i>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-4 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-lg ${
                  addedToCart
                    ? 'bg-green-600 text-white shadow-green-600/20'
                    : 'bg-[#1a472a] hover:bg-[#143722] text-white shadow-[#1a472a]/20'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={addedToCart ? 'ri-check-line text-lg' : 'ri-shopping-cart-2-line text-lg'}></i>
                </div>
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              {addedToCart && (
                <button
                  onClick={openCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a472a]/10 hover:bg-[#1a472a]/20 text-[#1a472a] font-semibold py-4 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-shopping-bag-line text-lg"></i>
                  </div>
                  View Cart
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-green-600/20"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>
                Order on WhatsApp
              </a>
              <a
                href="https://t.me/dxbcocoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-blue-600/20"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-telegram-line text-lg"></i>
                </div>
                Order on Telegram
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-truck-line"></i>
                </div>
                Discreet Delivery
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-shield-check-line"></i>
                </div>
                Privacy Guaranteed
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-line"></i>
                </div>
                24/7 Available
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-gray-100 pt-14">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f12] mb-3">Related Products</h2>
              <p className="text-gray-500 text-sm">
                More {product.category.toLowerCase()} products you might be interested in
              </p>
              <div className="w-16 h-1 bg-[#1a472a] mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {relatedProducts.map((rp) => (
                <div
                  key={rp.id}
                  className="bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <Link href={`/shop/${rp.id}`} className="block cursor-pointer">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.displayName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute top-3 right-3 bg-white text-[#1a472a] text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                        View Details
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem({
                            productId: rp.id,
                            name: rp.name,
                            displayName: rp.displayName,
                            price: rp.price,
                            image: rp.image,
                          });
                        }}
                        className="absolute bottom-3 right-3 w-9 h-9 bg-white hover:bg-[#1a472a] text-[#1a472a] hover:text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                        title="Add to cart"
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-shopping-cart-2-line"></i>
                        </div>
                      </button>
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link href={`/shop/${rp.id}`} className="cursor-pointer">
                      <h3 className="text-sm font-bold text-[#0a1f12] mb-1 hover:text-[#1a472a] transition-colors">{rp.displayName}</h3>
                    </Link>
                    <span className="text-[#1a472a] font-bold text-sm">{rp.price}</span>
                    <p className="text-xs text-gray-500 mt-1 mb-4">{rp.location}</p>
                    <div className="flex gap-2">
                      <a
                        href={waLink(rp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium py-2.5 rounded-none transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <i className="ri-whatsapp-line"></i>
                        </div>
                        WhatsApp
                      </a>
                      <Link
                        href={`/shop/${rp.id}`}
                        className="flex items-center justify-center w-10 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-none transition-colors cursor-pointer"
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}