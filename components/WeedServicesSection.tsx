'use client';

import FadeInView from '@/components/FadeInView';

const services = [
  {
    icon: 'ri-truck-line',
    title: 'Fast Delivery',
    description: 'Order weed in Qatar and get fast delivery in minutes to your location. Drop off to car parks, hotel or safe spot.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Safe & Secure',
    description: 'Due to the nature of cannabis here, we prioritize discreet and anonymous delivery to anywhere in Qatar.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'High THC Cannabis',
    description: 'Our top-tier THC vapes deliver unmatched potency with THC concentrations ranging from 80% to 90%.',
  },
  {
    icon: 'ri-refund-line',
    title: 'Refunds Guarantee',
    description: 'In the rare case of a lost order, we offer a full refund, so you place your order knowing your money is safe.',
  },
];

export default function WeedServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInView
              key={service.title}
              className="text-center"
              delay={index * 0.1}
            >
              <div className="w-20 h-20 bg-[#1a472a] rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>
              <h4 className="text-lg font-bold text-[#0a1f12] mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}