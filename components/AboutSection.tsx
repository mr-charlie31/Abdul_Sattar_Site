'use client';

import FadeInView from '@/components/FadeInView';

export default function AboutSection() {
  const stats = [
    { icon: 'ri-shield-star-line', value: 'Premium', label: 'Quality Products' },
    { icon: 'ri-truck-line', value: 'Fast', label: 'Delivery Across Gulf' },
    { icon: 'ri-map-pin-line', value: '150+', label: 'Locations in 4 Countries' },
    { icon: 'ri-customer-service-2-line', value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-3">About Dubaiweeedhub</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
          <p className="text-gray-600 mt-4">Your Trusted Partner Across Qatar, Dubai, UAE & Saudi Arabia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden h-96">
            <img
              src="https://readdy.ai/api/search-image?query=Premium%20dark%20luxury%20Qatar%20service%20delivery%20concept%20with%20premium%20packaging%2C%20deep%20green%20and%20black%20tones%2C%20mysterious%20atmospheric%20scene%20with%20delivery%20elements%2C%20moody%20dark%20green%20gradient%20background%2C%20professional%20premium%20service%20brand%20photography%20style%2C%20elegant%20and%20sophisticated%20with%20gold%20accents%2C%20cinematic%20lighting%20with%20soft%20shadows%2C%20very%20dark%20and%20luxurious%20atmosphere%2C%20premium%20boxes%20and%20products%20on%20dark%20background&width=600&height=400&seq=dxb-about-page-qatar-v1&orientation=landscape"
              alt="Dubaiweeedhub Qatar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f12]/60 to-transparent"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Your Trusted Connection Across the Gulf</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Dubaiweeedhub was founded with a simple mission: to provide access to premium quality products with convenience and discretion across Qatar, Dubai, UAE, and Saudi Arabia. We understand the importance of quality and reliability. Operating throughout the Gulf including Doha, Dubai, Abu Dhabi, Sharjah, Riyadh, Jeddah, and all major cities.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1a472a] rounded-full"></div>
                <span className="text-sm font-medium text-[#0a1f12]">Premium Quality Products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1a472a] rounded-full"></div>
                <span className="text-sm font-medium text-[#0a1f12]">Fast Delivery Across Gulf</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1a472a] rounded-full"></div>
                <span className="text-sm font-medium text-[#0a1f12]">Serving 150+ Locations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1a472a] rounded-full"></div>
                <span className="text-sm font-medium text-[#0a1f12]">24/7 Customer Support</span>
              </div>
            </div>
            <a href="https://wa.me/03149024871" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1a472a] hover:bg-[#0f2e1a] text-white font-medium px-7 py-3 rounded-none transition-all cursor-pointer whitespace-nowrap text-sm">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-whatsapp-line"></i>
              </div>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeInView key={stat.label} className="bg-[#f8f9f6] rounded-lg p-6 text-center border border-gray-200" delay={index * 0.1}>
              <div className="w-12 h-12 bg-[#1a472a] rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${stat.icon} text-white text-lg`}></i>
                </div>
              </div>
              <div className="text-2xl font-bold text-[#0a1f12]">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}