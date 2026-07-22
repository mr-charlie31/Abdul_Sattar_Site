'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeInView from '@/components/FadeInView';
import { getShopProducts, categories, getAllLocations } from '@/lib/products';
import type { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export default function ShopProducts() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLocation, setActiveLocation] = useState('all');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const { addItem, openCart } = useCart();

  const locations = useMemo(() => getAllLocations(), []);
  const allProducts = getShopProducts();

  const filtered = useMemo(() => {
    let result = activeCategory === 'all' ? allProducts : allProducts.filter((p) => p.category === activeCategory);

    if (activeLocation !== 'all') {
      result = result.filter((p) => p.location === activeLocation);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.displayName.toLowerCase().includes(query) ||
          p.name.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, activeLocation, searchQuery, allProducts]);

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
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-4">Shop Our Products</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line text-lg"></i>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a472a] focus:ring-2 focus:ring-[#1a472a]/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-close-line"></i>
                </div>
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#1a472a] transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center text-gray-400">
                <i className="ri-map-pin-line"></i>
              </div>
              <span>{activeLocation === 'all' ? 'All Locations' : activeLocation}</span>
              <div className="w-4 h-4 flex items-center justify-center text-gray-400">
                {showLocationDropdown ? <i className="ri-arrow-up-s-line text-sm"></i> : <i className="ri-arrow-down-s-line text-sm"></i>}
              </div>
            </button>

            {showLocationDropdown && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowLocationDropdown(false)}></div>
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-1 overflow-hidden">
                  <button
                    onClick={() => {
                      setActiveLocation('all');
                      setShowLocationDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer whitespace-nowrap ${
                      activeLocation === 'all'
                        ? 'bg-[#1a472a]/10 text-[#1a472a] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Locations
                  </button>
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setActiveLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer whitespace-nowrap ${
                        activeLocation === loc
                          ? 'bg-[#1a472a]/10 text-[#1a472a] font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-[#1a472a] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-3 text-gray-300">
              <i className="ri-search-line text-4xl"></i>
            </div>
            <h3 className="text-lg font-bold text-[#0a1f12] mb-2">No Products Found</h3>
            <p className="text-gray-500 text-sm mb-5">
              {searchQuery ? `Nothing matches "${searchQuery}". Try a different term.` : 'No products in this category and location.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setActiveLocation('all');
              }}
              className="inline-block bg-[#1a472a] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#143722] transition-colors cursor-pointer whitespace-nowrap text-sm"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-400 text-center mb-6">
              Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && ` in ${categories.find((c) => c.value === activeCategory)?.label}`}
              {activeLocation !== 'all' && ` · ${activeLocation}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((product, index) => (
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
          </>
        )}
      </div>
    </section>
  );
}