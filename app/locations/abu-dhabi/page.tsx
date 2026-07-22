import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coco, Weeed, Vapes & Premium Products in Abu Dhabi UAE — Discreet Delivery | Dubaiweeedhub",
  description: "Looking for coco, weeed, vapes, snow, HTC pills, Larycai, ice, LSD or hashesh in Abu Dhabi? Dubaiweeedhub delivers premium products discreetly across Abu Dhabi City, Al Reem Island, Saadiyat Island, Yas Island, Khalifa City, Al Raha, Corniche and all Abu Dhabi areas. 24/7 fast delivery. Trusted Gulf plug.",
  keywords: [
    'Abu Dhabi coco', 'Abu Dhabi weeed', 'Abu Dhabi vapes', 'Abu Dhabi snow', 'Abu Dhabi HTC', 'Abu Dhabi Larycai',
    'buy coco Abu Dhabi', 'buy weed Abu Dhabi', 'buy vapes Abu Dhabi', 'buy snow Abu Dhabi',
    'coco delivery Abu Dhabi', 'weed delivery Abu Dhabi', 'vape delivery Abu Dhabi',
    'how to get coco in Abu Dhabi', 'how to get weed in Abu Dhabi',
    'where to buy coco in Abu Dhabi', 'where to buy weed in Abu Dhabi',
    'Abu Dhabi cannabis', 'Abu Dhabi marijuana', 'Abu Dhabi smoking',
    'trusted plug Abu Dhabi', 'weed dealer Abu Dhabi', 'coco dealer Abu Dhabi',
    'discreet delivery Abu Dhabi', '24/7 delivery Abu Dhabi',
    'DXBCocoPlug Abu Dhabi', 'abu bilal Abu Dhabi',
  ],
  alternates: {
    canonical: 'https://dubaiweeedhub.com/locations/abu-dhabi',
  },
  openGraph: {
    title: "Premium Products & Discreet Delivery in Abu Dhabi UAE | Dubaiweeedhub",
    description: "Dubaiweeedhub delivers premium products discreetly across Abu Dhabi. Snow, Weeed, Vapes, Coco, HTC, Larycai, Ice, LSD, Hashesh — 24/7 fast delivery in Abu Dhabi City, Reem Island, Saadiyat, Yas Island and all areas.",
    url: 'https://dubaiweeedhub.com/locations/abu-dhabi',
    siteName: 'Dubaiweeedhub',
    locale: 'en_US',
    type: 'website',
  },
};

function AbuDhabiLocationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub — Abu Dhabi UAE',
    'description': 'Premium products and discreet delivery across Abu Dhabi City, Al Reem Island, Saadiyat Island, Yas Island, Khalifa City and all Abu Dhabi areas. 24/7 delivery. Trusted Gulf plug.',
    'url': 'https://dubaiweeedhub.com/locations/abu-dhabi',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'areaServed': [{'@type': 'City', 'name': 'Abu Dhabi'}],
    'address': {'@type': 'PostalAddress', 'addressCountry': 'AE', 'addressLocality': 'Abu Dhabi', 'addressRegion': 'Abu Dhabi'},
    'geo': {'@type': 'GeoCoordinates', 'latitude': '24.4539', 'longitude': '54.3773'},
    'openingHoursSpecification': {'@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59'},
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const abuDhabiAreas = [
  { name: 'Abu Dhabi City Center', description: 'Fast delivery across downtown Abu Dhabi, Corniche area, and central business districts' },
  { name: 'Al Reem Island', description: 'Discreet delivery to all Reem Island towers and residential communities' },
  { name: 'Saadiyat Island', description: 'Premium delivery to Saadiyat Beach, Cultural District, and NYU Abu Dhabi area' },
  { name: 'Yas Island', description: 'Covering Yas Island, Yas Marina, Ferrari World area, and all Yas communities' },
  { name: 'Khalifa City', description: 'Delivery across Khalifa City A & B, Al Raha Beach, and surrounding areas' },
  { name: 'Al Raha & Al Zeina', description: 'Discreet delivery to Al Raha Beach, Al Zeina, Al Muneera, and Al Bandar' },
];

const abuDhabiProducts = [
  { name: 'Snow', icon: 'ri-snowflake-line' },
  { name: 'Coco', icon: 'ri-contrast-drop-line' },
  { name: 'Premium Weeed', icon: 'ri-leaf-line' },
  { name: 'Vapes (THC & CBD)', icon: 'ri-charging-pile-line' },
  { name: 'CBD Oil', icon: 'ri-drop-line' },
  { name: 'HTC Pills', icon: 'ri-capsule-line' },
  { name: 'Larycai 300/450mg', icon: 'ri-medicine-bottle-line' },
  { name: 'Ice', icon: 'ri-snowflake-line' },
  { name: 'LSD', icon: 'ri-brush-line' },
  { name: 'Hashesh', icon: 'ri-contrast-line' },
];

export default function AbuDhabiLocationPage() {
  return (
    <main>
      <SiteHeader />
      <AbuDhabiLocationSchema />

      <section className="relative bg-gradient-to-br from-[#0a1f12] via-[#1a472a] to-[#0a1f12] text-white py-20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20Abu%20Dhabi%20skyline%20at%20sunset%20with%20Grand%20Mosque%20and%20skyscrapers%20luxury%20cityscape%20elegant%20atmosphere%20professional%20photography&width=1440&height=600&seq=3&orientation=landscape')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-green-200 text-xs font-bold px-3 py-1 rounded-full mb-4">
              📍 UAE LOCATION PAGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Premium Products & Discreet Delivery in <span className="text-green-300">Abu Dhabi, UAE</span></h1>
            <p className="text-lg text-green-100/80 mb-6 leading-relaxed">Dubaiweeedhub delivers premium products discreetly across Abu Dhabi. Fast delivery to Abu Dhabi City, Al Reem Island, Saadiyat Island, Yas Island, Khalifa City, Al Raha Beach, and all Abu Dhabi communities. 24/7 reliable service.</p>
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Abu Dhabi Delivery Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Complete coverage across all Abu Dhabi communities and neighborhoods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {abuDhabiAreas.map((area) => (
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Products in Abu Dhabi</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Full premium product range for immediate Abu Dhabi delivery.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {abuDhabiProducts.map((product) => (
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
              <h2 className="text-3xl font-bold text-[#0a1f12] mb-6">Why Abu Dhabi Chooses Us</h2>
              <div className="space-y-4">
                {[
                  { title: 'Trusted Across UAE Capital', desc: 'Serving Abu Dhabi since 2020. Regular customers across City Center, Reem Island, Saadiyat, Yas and Khalifa City.' },
                  { title: '60-90 Minute Delivery', desc: 'Fast delivery across all Abu Dhabi areas. City center deliveries often under 45 minutes. Real-time ETA updates throughout.' },
                  { title: 'Complete Discretion', desc: 'Unmarked packages, professional agents, vacuum-sealed delivery. Your privacy is guaranteed every single time.' },
                  { title: '24/7 Abu Dhabi Service', desc: 'Round-the-clock availability. Late night, early morning, weekends — we deliver whenever you need.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                      <i className="ri-check-line text-[#1a472a] text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a472a] mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f8faf8] rounded-2xl p-8 border border-[#1a472a]/10">
              <h2 className="text-2xl font-bold text-[#0a1f12] mb-6">Abu Dhabi FAQs</h2>
              <div className="space-y-4">
                {[
                  { q: 'How fast is Abu Dhabi delivery?', a: 'City center and Reem Island: 45-60 minutes. Saadiyat, Yas Island: 60-80 minutes. Khalifa City, Al Raha: 60-90 minutes. All deliveries come with real-time updates.' },
                  { q: 'Which Abu Dhabi areas are covered?', a: 'All areas: Abu Dhabi City, Corniche, Al Reem Island, Saadiyat Island, Yas Island, Khalifa City A & B, Al Raha Beach, Al Zeina, Al Muneera, Al Bandar, MBZ City, and every other Abu Dhabi community.' },
                  { q: 'What products are available in Abu Dhabi?', a: 'Full range: Snow, Coco, Premium Weeed, THC & CBD Vapes, CBD Oil, HTC Pills, Larycai (150mg, 300mg, 450mg), Ice, LSD, Moroccan Hashesh. Top quality guaranteed.' },
                ].map((faq, i) => (
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
          <h2 className="text-3xl font-bold mb-4">Order in Abu Dhabi Now</h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-8">Fast 45-90 minute delivery across Abu Dhabi City, Reem Island, Saadiyat, Yas Island and all areas.</p>
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
            <Link href="/locations/dubai" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Dubai Delivery</Link>
            <Link href="/locations/riyadh" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Riyadh Delivery</Link>
            <Link href="/shop" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">All Products</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}