'use client';

import Link from 'next/link';
import FadeInView from '@/components/FadeInView';
import { getBestSellers } from '@/lib/products';
import type { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function BestSellersWeed() {
  const bestSellers = getBestSellers();
  const { addItem } = useCart();

  const waLink = (product: Product) => {
    const text = `Hi, I'm interested in ${product.displayName} from Dubaiweeedhub.`;
    return `https://wa.me/03149024871?text=${encodeURIComponent(text)}`;
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product.id,
      name: product.name,
      displayName: product.displayName,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="bg-[#f8f9f6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-4">Our Best Sellers</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bestSellers.map((product, index) => (
            <FadeInView
              key={product.id}
              className="bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              delay={(index % 4) * 0.1}
            >
              <Link href={`/shop/${product.id}`} className="block cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.displayName}
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
                      handleAddToCart(product);
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
                <Link href={`/shop/${product.id}`} className="cursor-pointer">
                  <h3 className="text-base font-bold text-[#0a1f12] mb-1 hover:text-[#1a472a] transition-colors">{product.displayName}</h3>
                </Link>
                <span className="text-[#1a472a] font-bold text-sm">{product.price}</span>
                <p className="text-xs text-gray-500 mt-1 mb-4">{product.location}</p>
                <div className="flex gap-2">
                  <a
                    href={waLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium py-2.5 rounded-none transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/dxbcocoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-none transition-colors cursor-pointer"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-telegram-line"></i>
                    </div>
                  </a>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}