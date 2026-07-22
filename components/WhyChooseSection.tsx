'use client';

import FadeInView from '@/components/FadeInView';

const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Quality Assured',
    description: 'All our products are carefully selected and undergo strict quality checks to ensure premium quality.',
  },
  {
    icon: 'ri-truck-line',
    title: 'Fast & Discreet Delivery',
    description: 'Get your products delivered discreetly to your preferred location with our express delivery service.',
  },
  {
    icon: 'ri-lock-line',
    title: 'Privacy Guaranteed',
    description: 'Your privacy is our priority. All transactions and deliveries are handled with the utmost discretion.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f8f9f6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-4">Why Choose Dubaiweeedhub?</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
          <p className="text-gray-600 mt-4">We are committed to providing the best experience with these key features</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInView
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
              delay={index * 0.1}
            >
              <div className="w-16 h-16 bg-[#1a472a] rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0a1f12] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}