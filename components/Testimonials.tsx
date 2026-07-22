'use client';

import FadeInView from '@/components/FadeInView';

const testimonials = [
  {
    rating: 5,
    text: "Dubaiweeedhub has been my go-to source across the Gulf. The delivery is always discreet and on time, and their customer support is exceptional. Highly recommended!",
    name: "Sarah Johnson",
    location: "Ahlam Al Shamsi",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20young%20Arab%20woman%20with%20dark%20hair%2C%20elegant%20headscarf%2C%20warm%20smile%2C%20soft%20studio%20lighting%2C%20neutral%20background%2C%20high-end%20photography%20style%2C%20premium%20quality%20portrait%2C%20beautiful%20and%20confident%20expression%2C%20dark%20background%20with%20subtle%20warm%20tones%2C%20professional%20headshot%20aesthetic&width=100&height=100&seq=dxb-t1-v2&orientation=squarish",
  },
  {
    rating: 5,
    text: "The quality of products from Dubaiweeedhub is consistently excellent. I appreciate their attention to detail and discreet packaging. Best service in Dubai, Doha and beyond!",
    name: "Robert Wilson",
    location: "Nawal El Zoghbi",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20middle-aged%20Arab%20businessman%20with%20a%20neat%20beard%2C%20confident%20expression%2C%20wearing%20a%20suit%2C%20soft%20studio%20lighting%2C%20dark%20neutral%20background%2C%20high-end%20photography%20style%2C%20premium%20quality%20portrait%2C%20dark%20background%20with%20subtle%20warm%20tones%2C%20professional%20headshot%20aesthetic&width=100&height=100&seq=dxb-t2-v2&orientation=squarish",
  },
  {
    rating: 5,
    text: "The customer service is fantastic! I was able to get recommendations and place my order quickly. The delivery was prompt and discreet across multiple Gulf cities.",
    name: "Emily Chen",
    location: "Amr Diab",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20young%20Asian%20woman%20with%20elegant%20style%2C%20warm%20smile%2C%20soft%20studio%20lighting%2C%20neutral%20background%2C%20high-end%20photography%20style%2C%20premium%20quality%20portrait%2C%20beautiful%20and%20confident%20expression%2C%20dark%20background%20with%20subtle%20warm%20tones%2C%20professional%20headshot%20aesthetic&width=100&height=100&seq=dxb-t3-v2&orientation=squarish",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-3">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
          <p className="text-gray-600 mt-4">Read genuine feedback from our satisfied customers across Qatar, Dubai, UAE & Saudi Arabia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeInView key={t.name} className="bg-[#f8f9f6] rounded-lg p-8 border border-gray-200 relative" delay={index * 0.1}>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400"></i>
                  </div>
                ))}
                <span className="ml-2 text-sm font-bold text-[#0a1f12]">{t.rating} Star Rating</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-[#0a1f12] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}