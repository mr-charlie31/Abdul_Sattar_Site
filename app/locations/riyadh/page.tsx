import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coco, Weeed, Vapes & Premium Products in Riyadh Saudi Arabia — Discreet Delivery | Dubaiweeedhub",
  description: "Looking for coco, weeed, vapes, snow, HTC pills, Larycai, ice, LSD or hashesh in Riyadh? Dubaiweeedhub delivers premium products discreetly across Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina, Taif, Abha, Jubail and all Saudi cities. 24/7 fast discreet delivery. Trusted Gulf plug for Saudi Arabia.",
  keywords: [
    'Riyadh coco', 'Riyadh weeed', 'Riyadh vapes', 'Riyadh snow', 'Riyadh HTC', 'Riyadh Larycai',
    'buy coco Riyadh', 'buy weed Riyadh', 'buy vapes Riyadh', 'buy snow Riyadh', 'buy HTC Riyadh',
    'coco delivery Riyadh', 'weed delivery Riyadh', 'vape delivery Riyadh',
    'how to get coco in Riyadh', 'how to get weed in Riyadh',
    'where to buy coco in Riyadh', 'where to buy weed in Riyadh',
    'Jeddah coco', 'Jeddah weed', 'Jeddah vapes', 'Dammam coco', 'Dammam weed',
    'Khobar coco', 'Khobar weed', 'Makkah weed', 'Medina weed',
    'Saudi Arabia coco', 'Saudi Arabia weed', 'Saudi Arabia vapes', 'KSA coco', 'KSA weed',
    'Riyadh cannabis', 'Riyadh marijuana', 'Saudi cannabis', 'KSA smoking',
    'trusted plug Riyadh', 'weed dealer Riyadh', 'coco dealer Riyadh',
    'discreet delivery Riyadh', '24/7 delivery Riyadh', 'express delivery Saudi',
    'DXBCocoPlug Riyadh', 'Gulf plug Saudi', 'best weed Riyadh',
  ],
  alternates: {
    canonical: 'https://dubaiweeedhub.com/locations/riyadh',
  },
  openGraph: {
    title: "Premium Products & Discreet Delivery in Riyadh Saudi Arabia | Dubaiweeedhub",
    description: "Dubaiweeedhub delivers premium products discreetly across Riyadh and all Saudi Arabia. Snow, Weeed, Vapes, Coco, HTC, Larycai, Ice, LSD, Hashesh — 24/7 delivery in Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina and all KSA cities.",
    url: 'https://dubaiweeedhub.com/locations/riyadh',
    siteName: 'Dubaiweeedhub',
    locale: 'en_US',
    type: 'website',
  },
};

function RiyadhLocationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub — Riyadh Saudi Arabia',
    'description': 'Premium products and discreet delivery across Riyadh and all Saudi Arabia cities. 24/7 delivery. Trusted Gulf plug for KSA.',
    'url': 'https://dubaiweeedhub.com/locations/riyadh',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'areaServed': [
      {'@type': 'City', 'name': 'Riyadh'},
      {'@type': 'City', 'name': 'Jeddah'},
      {'@type': 'City', 'name': 'Dammam'},
      {'@type': 'City', 'name': 'Khobar'},
    ],
    'address': {'@type': 'PostalAddress', 'addressCountry': 'SA', 'addressLocality': 'Riyadh', 'addressRegion': 'Riyadh Province'},
    'geo': {'@type': 'GeoCoordinates', 'latitude': '24.7136', 'longitude': '46.6753'},
    'openingHoursSpecification': {'@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59'},
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const riyadhAreas = [
  { name: 'Riyadh Central', description: 'Fast delivery across central Riyadh, Olaya, Kingdom Centre area, and business districts' },
  { name: 'Riyadh North', description: 'Covering North Ring Road area, Al Yasmin, Al Narjis, Al Malqa, and northern communities' },
  { name: 'Riyadh East', description: 'Delivery across eastern Riyadh, Al Hamra, Ishbiliya, Qurtubah, and surrounding areas' },
  { name: 'Riyadh South & West', description: 'Covering southern and western Riyadh neighborhoods and districts' },
  { name: 'Jeddah', description: 'Premium delivery across Jeddah City, Corniche, Al Hamra, Al Rawdah, and all Jeddah areas' },
  { name: 'Dammam & Khobar', description: 'Discreet delivery across Dammam, Al Khobar, Dhahran, and Eastern Province cities' },
  { name: 'Makkah & Medina', description: 'Delivery available to Makkah and Medina areas including surrounding neighborhoods' },
  { name: 'Jubail & Yanbu', description: 'Extended delivery to Jubail Industrial City, Yanbu, and surrounding industrial areas' },
];

const riyadhProducts = [
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

export default function RiyadhLocationPage() {
  return (
    <main>
      <SiteHeader />
      <RiyadhLocationSchema />

      <section className="relative bg-gradient-to-br from-[#0a1f12] via-[#1a472a] to-[#0a1f12] text-white py-20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20Riyadh%20Saudi%20Arabia%20skyline%20at%20night%20with%20Kingdom%20Centre%20and%20Faisaliah%20Tower%20illuminated%20skyscrapers%20luxury%20cityscape%20professional%20photography&width=1440&height=600&seq=4&orientation=landscape')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-green-200 text-xs font-bold px-3 py-1 rounded-full mb-4">
              📍 SAUDI ARABIA LOCATION PAGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Premium Products & Discreet Delivery in <span className="text-green-300">Riyadh, Saudi Arabia</span></h1>
            <p className="text-lg text-green-100/80 mb-6 leading-relaxed">Dubaiweeedhub delivers premium products discreetly across Riyadh and all Saudi Arabia. Fast delivery to Riyadh Central, North, East, South, Jeddah, Dammam, Khobar, Makkah, Medina, Taif, Abha, Jubail, Yanbu and all KSA cities. 24/7 trusted Gulf plug for Saudi Arabia.</p>
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Saudi Arabia Delivery Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive coverage across Riyadh, Eastern Province, Western Province and all major Saudi cities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {riyadhAreas.map((area) => (
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Products Available in Saudi Arabia</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Full premium product range available for delivery across Riyadh and all KSA cities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {riyadhProducts.map((product) => (
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
              <h2 className="text-3xl font-bold text-[#0a1f12] mb-6">Why Saudi Arabia Chooses Dubaiweeedhub</h2>
              <div className="space-y-4">
                {[
                  { title: 'Trusted Across KSA', desc: 'Serving Riyadh, Jeddah, Dammam, Khobar and all major Saudi cities. Hundreds of satisfied customers trust us.' },
                  { title: '2-4 Hour KSA Delivery', desc: 'Fast delivery across Riyadh (1-2 hours), Jeddah and Dammam (2-3 hours). Real-time updates provided throughout.' },
                  { title: 'Maximum Discretion', desc: 'Complete privacy in Saudi Arabia. Unmarked packages, professional delivery. No logos, no labels. Your safety first.' },
                  { title: '24/7 All KSA', desc: 'Round-the-clock service across all Saudi cities. Late night, early morning — we deliver when you need throughout KSA.' },
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
              <h2 className="text-2xl font-bold text-[#0a1f12] mb-6">Saudi Arabia FAQs</h2>
              <div className="space-y-4">
                {[
                  { q: 'Do you deliver across all Saudi Arabia?', a: 'Yes. We deliver to Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina, Taif, Abha, Jubail, Yanbu, Tabuk, Buraidah, Hail, Najran, Jizan, Al Hofuf, Dhahran and all KSA cities. Full nationwide coverage.' },
                  { q: 'How long does Riyadh delivery take?', a: 'Riyadh city: 1-2 hours. Jeddah: 2-3 hours. Dammam/Khobar: 2-3 hours. Other cities: 2-4 hours depending on location. We provide accurate ETAs and real-time updates.' },
                  { q: 'Is delivery safe and discreet in Saudi Arabia?', a: 'Absolutely. Our Saudi delivery protocol is designed for maximum discretion and safety. All packages are vacuum-sealed with zero markings. Professional agents handle all deliveries. Your privacy and safety are always our top priority.' },
                  { q: 'What payment methods for Saudi orders?', a: 'Cash on delivery, cryptocurrency (BTC/USDT), and bank transfer. We confirm details privately. Complete discretion with all transactions.' },
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
          <h2 className="text-3xl font-bold mb-4">Order Now in Saudi Arabia</h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-8">Fast, discreet delivery across Riyadh, Jeddah, Dammam, Khobar and all KSA cities. 24/7 trusted Gulf plug.</p>
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
            <Link href="/locations/abu-dhabi" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Abu Dhabi Delivery</Link>
            <Link href="/shop" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">All Products</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}