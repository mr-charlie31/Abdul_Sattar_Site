import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coco, Weeed, Vapes & Premium Products in Dubai UAE — Discreet Delivery | Dubaiweeedhub",
  description: "Looking for coco, weeed, vapes, snow, HTC pills, Larycai, ice, LSD or hashesh in Dubai? Dubaiweeedhub delivers premium products discreetly across Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, JVT, Business Bay, Downtown, Deira, Bur Dubai, Jumeirah 1/2/3, Al Quoz, Motor City and all Dubai areas. 24/7 fast delivery. Trusted Gulf plug.",
  keywords: [
    'Dubai coco', 'Dubai weeed', 'Dubai vapes', 'Dubai snow', 'Dubai HTC', 'Dubai Larycai', 'Dubai ice', 'Dubai LSD', 'Dubai hashesh', 'Dubai CBD',
    'buy coco Dubai', 'buy weed Dubai', 'buy vapes Dubai', 'buy snow Dubai', 'buy HTC Dubai', 'buy Larycai Dubai',
    'coco delivery Dubai', 'weed delivery Dubai', 'vape delivery Dubai', 'snow delivery Dubai',
    'how to get coco in Dubai', 'how to get weed in Dubai', 'how to get vapes in Dubai',
    'where to buy coco in Dubai', 'where to buy weed in Dubai', 'where to buy vapes in Dubai',
    'Dubai Marina coco', 'Dubai Marina weed', 'Palm Jumeirah coco', 'Palm Jumeirah weed',
    'JLT coco', 'JLT weed', 'Al Barsha coco', 'Al Barsha weed',
    'JVC coco', 'JVC weed', 'Business Bay coco', 'Business Bay weed',
    'Downtown Dubai coco', 'Downtown Dubai weed', 'Deira coco', 'Deira weed',
    'Bur Dubai coco', 'Bur Dubai weed', 'Jumeirah coco', 'Jumeirah weed',
    'Al Quoz coco', 'Al Quoz weed', 'Motor City coco', 'Motor City weed',
    'DXB coco', 'DXB weed', 'DXB vapes', 'DXB snow', 'DXB smoking',
    'trusted plug Dubai', 'weed dealer Dubai', 'coco dealer Dubai',
    'discreet delivery Dubai', '24/7 delivery Dubai', 'express delivery Dubai',
    'DXBCocoPlug Dubai', 'abu bilal Dubai', 'abubilal Dubai',
    'cannabis Dubai', 'marijuana Dubai', 'Dubai smoking',
  ],
  alternates: {
    canonical: 'https://dubaiweeedhub.com/locations/dubai',
  },
  openGraph: {
    title: "Premium Products & Discreet Delivery in Dubai UAE | Dubaiweeedhub",
    description: "Dubaiweeedhub delivers premium products discreetly across all Dubai areas. Snow, Weeed, Vapes, Coco, HTC, Larycai, Ice, LSD, Hashesh — 24/7 fast delivery in Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, Business Bay and all Dubai neighborhoods.",
    url: 'https://dubaiweeedhub.com/locations/dubai',
    siteName: 'Dubaiweeedhub',
    locale: 'en_US',
    type: 'website',
  },
};

function DubaiLocationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub — Dubai UAE',
    'description': 'Premium products and discreet delivery across all Dubai areas including Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, Business Bay, Downtown, Deira, Bur Dubai and more. 24/7 delivery. Trusted Gulf plug.',
    'url': 'https://dubaiweeedhub.com/locations/dubai',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'areaServed': [
      {'@type': 'City', 'name': 'Dubai'},
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'AE',
      'addressLocality': 'Dubai',
      'addressRegion': 'Dubai',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.2048',
      'longitude': '55.2708',
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const dubaiAreas = [
  { name: 'Dubai Marina & JBR', description: 'Premium delivery across Dubai Marina, JBR Walk, Marina Walk, and surrounding towers' },
  { name: 'Palm Jumeirah', description: 'Discreet delivery to all Palm Jumeirah areas including Atlantis, Golden Mile, and all fronds' },
  { name: 'JLT (Jumeirah Lake Towers)', description: 'Fast delivery across all JLT clusters, DMCC area, and surrounding towers' },
  { name: 'Al Barsha & Al Barsha South', description: 'Covering Al Barsha 1/2/3, Al Barsha South, Barsha Heights, and Mall of Emirates area' },
  { name: 'JVC & JVT', description: 'Delivery across Jumeirah Village Circle, Jumeirah Village Triangle, and surrounding communities' },
  { name: 'Business Bay & Downtown', description: 'Discreet delivery to Business Bay, Downtown Dubai, Dubai Mall area, and Boulevard' },
  { name: 'Deira & Bur Dubai', description: 'Covering all Deira areas including Gold Souk, Al Rigga, Naif, and Bur Dubai areas' },
  { name: 'Jumeirah 1, 2, 3 & Beach', description: 'Delivery across Jumeirah 1/2/3, Jumeirah Beach Road, Kite Beach, and surrounding villas' },
  { name: 'Al Quoz & Motor City', description: 'Covering Al Quoz Industrial, Dubai Motor City, Sports City, and Arabian Ranches' },
  { name: 'Dubai Hills & Silicon Oasis', description: 'Delivery to Dubai Hills Estate, Dubai Silicon Oasis, Academic City, and Mirdif' },
  { name: 'Expo City & South Dubai', description: 'Covering Expo City, Dubai South, DWC area, Global Village, and surrounding locations' },
  { name: 'DAMAC Hills & JGE', description: 'Delivery to DAMAC Hills, Jumeirah Golf Estates, Dubai Production City, and Sports City' },
];

const dubaiProducts = [
  { name: 'Snow', icon: 'ri-snowflake-line' },
  { name: 'Coco', icon: 'ri-contrast-drop-line' },
  { name: 'Premium Weeed', icon: 'ri-leaf-line' },
  { name: 'Vapes (THC & CBD)', icon: 'ri-charging-pile-line' },
  { name: 'CBD Oil', icon: 'ri-drop-line' },
  { name: 'HTC Pills', icon: 'ri-capsule-line' },
  { name: 'Larycai 300/450mg', icon: 'ri-medicine-bottle-line' },
  { name: 'Ice', icon: 'ri-snowflake-line' },
  { name: 'LSD', icon: 'ri-brush-line' },
  { name: 'Hashesh (Moroccan Hash)', icon: 'ri-contrast-line' },
];

const dubaiFaqs = [
  { q: 'How fast is delivery in Dubai?', a: 'Dubai Marina, JLT, JBR: 30-50 minutes. Palm Jumeirah: 40-60 minutes. Al Barsha, JVC: 45-70 minutes. Business Bay, Downtown: 30-50 minutes. Deira, Bur Dubai: 40-60 minutes. All other areas: 60-90 minutes. We provide real-time updates.' },
  { q: 'What Dubai areas do you deliver to?', a: 'We deliver to ALL Dubai areas: Dubai Marina, Palm Jumeirah, JLT, JBR, Al Barsha, JVC, JVT, Business Bay, Downtown Dubai, Deira, Bur Dubai, Jumeirah 1/2/3, Al Quoz, Motor City, Dubai Hills, Arabian Ranches, Silicon Oasis, Mirdif, DAMAC Hills, Sports City, JGE, DPC, Expo City, Global Village, Dubai South, and every other Dubai neighborhood.' },
  { q: 'Is delivery discreet in Dubai?', a: 'Complete discretion guaranteed. All packages are vacuum-sealed with zero markings. Professional delivery agents arrive in unmarked vehicles. No logos, no labels, no identifiable packaging. Your privacy is our top priority.' },
  { q: 'What products are available in Dubai?', a: 'Full premium range: Snow, Coco, Premium Weeed, THC Vapes, CBD Vapes, CBD Oil, HTC Pills, Larycai (150mg Pfizer, 300mg, 450mg), Ice, LSD, Moroccan Hashesh. All products are top-quality and lab-tested before delivery.' },
  { q: 'How do I pay for Dubai delivery?', a: 'Cash on delivery, cryptocurrency (BTC, USDT), or bank transfer. We confirm payment details privately after your order. All transactions are fully discreet and secure.' },
  { q: 'Can I get same-day delivery in Dubai?', a: 'Yes! Same-day delivery is standard across all Dubai areas. Most deliveries are completed within 30-90 minutes of order confirmation. Express delivery available upon request.' },
];

export default function DubaiLocationPage() {
  return (
    <main>
      <SiteHeader />
      <DubaiLocationSchema />

      <section className="relative bg-gradient-to-br from-[#0a1f12] via-[#1a472a] to-[#0a1f12] text-white py-20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20Dubai%20skyline%20at%20night%20with%20Burj%20Khalifa%20and%20illuminated%20skyscrapers%20luxury%20cityscape%20dark%20elegant%20atmosphere%20professional%20photography&width=1440&height=600&seq=2&orientation=landscape')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-green-200 text-xs font-bold px-3 py-1 rounded-full mb-4">
              📍 UAE LOCATION PAGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Premium Products & Discreet Delivery in <span className="text-green-300">Dubai, UAE</span></h1>
            <p className="text-lg text-green-100/80 mb-6 leading-relaxed">Dubaiweeedhub is your trusted connection in Dubai. Fast, discreet delivery across Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, JVT, Business Bay, Downtown, Deira, Bur Dubai, Jumeirah and all Dubai neighborhoods. 24/7 service, reliable and professional.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/03149024871" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
                <div className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line"></i></div>
                WhatsApp Order
              </a>
              <Link href="/shop" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap">
                <div className="w-5 h-5 flex items-center justify-center"><i className="ri-store-2-line"></i></div>
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Dubai Delivery Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We cover every neighborhood, community, and district across Dubai. Your location, our commitment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dubaiAreas.map((area) => (
              <div key={area.name} className="bg-[#f8faf8] border border-[#1a472a]/10 rounded-xl p-5 hover:border-[#1a472a]/30 transition-all cursor-default">
                <h3 className="font-bold text-[#1a472a] mb-1">{area.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Products Available in Dubai</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Full premium product range available for immediate delivery across all Dubai areas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dubaiProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-xl p-5 border border-[#1a472a]/10 text-center hover:shadow-lg hover:border-[#1a472a]/30 transition-all cursor-default">
                <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 text-[#1a472a] bg-[#f0f7f1] rounded-full">
                  <i className={`${product.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-[#1a472a] text-sm">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1f12] mb-6">Why Dubai Chooses Dubaiweeedhub</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-shield-check-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">Most Trusted in Dubai</h3>
                    <p className="text-sm text-gray-500">Serving Dubai since 2020. Hundreds of regular customers across Marina, Palm, JLT, Barsha, JVC, and all Dubai communities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-timer-flash-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">30-60 Minute Delivery</h3>
                    <p className="text-sm text-gray-500">Fastest delivery in Dubai. 30-45 minutes to Marina, JLT, Business Bay. 45-60 minutes to Palm Jumeirah, Barsha, JVC. Real-time tracking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-eye-off-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">Professional Discretion</h3>
                    <p className="text-sm text-gray-500">Unmarked vehicles, professional agents, vacuum-sealed packages. No logos, no labels, no identifiable markings. Complete privacy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-24-hours-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">24/7 Dubai Service</h3>
                    <p className="text-sm text-gray-500">Round-the-clock availability. Late night, early morning, weekend — we are always ready to serve Dubai.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8faf8] rounded-2xl p-8 border border-[#1a472a]/10">
              <h2 className="text-2xl font-bold text-[#0a1f12] mb-6">Dubai Delivery FAQs</h2>
              <div className="space-y-4">
                {dubaiFaqs.map((faq, i) => (
                  <details key={i} className="group border-b border-[#1a472a]/10 pb-3">
                    <summary className="font-medium text-[#1a472a] cursor-pointer hover:text-green-700 transition-colors list-none flex items-center justify-between">
                      {faq.q}
                      <div className="w-5 h-5 flex items-center justify-center text-[#1a472a]/50 group-open:rotate-180 transition-transform">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </summary>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1f12] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order in Dubai?</h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-8">Contact us now. Fast 30-60 minute delivery across Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, Business Bay and all Dubai areas.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/03149024871" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line"></i></div>
              WhatsApp: 03149024871
            </a>
            <a href="https://t.me/dxbcocoo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-telegram-line"></i></div>
              Telegram: @dxbcocoo
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 mb-4">Also serving across the Gulf</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/locations/doha" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Doha Delivery</Link>
            <Link href="/locations/abu-dhabi" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Abu Dhabi Delivery</Link>
            <Link href="/locations/riyadh" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Riyadh Delivery</Link>
            <Link href="/shop" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">All Products</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}