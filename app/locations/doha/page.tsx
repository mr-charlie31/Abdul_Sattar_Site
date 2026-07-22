import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coco, Weeed, Vapes & Premium Products in Doha Qatar — Discreet Delivery | Dubaiweeedhub",
  description: "Looking for coco, weeed, vapes, snow, HTC pills, Larycai, ice, LSD or hashesh in Doha? Dubaiweeedhub delivers premium products discreetly across Doha, Lusail, Al Wakrah, Al Khor, The Pearl, West Bay, Al Sadd, Bin Mahmoud, Msheireb, Souq Waqif, Katara, Industrial Area and all Qatar cities. 24/7 fast delivery. Trusted Gulf plug since 2020.",
  keywords: [
    'Doha coco', 'Doha weeed', 'Doha vapes', 'Doha snow', 'Doha HTC', 'Doha Larycai', 'Doha ice', 'Doha LSD', 'Doha hashesh', 'Doha CBD',
    'buy coco Doha', 'buy weed Doha', 'buy vapes Doha', 'buy snow Doha', 'buy HTC Doha', 'buy Larycai Doha',
    'coco delivery Doha', 'weed delivery Doha', 'vape delivery Doha', 'snow delivery Doha',
    'how to get coco in Doha', 'how to get weed in Doha', 'how to get vapes in Doha', 'how to get snow in Doha',
    'where to buy coco in Doha', 'where to buy weed in Doha', 'where to buy vapes in Doha',
    'weed in Doha Qatar', 'coco in Doha Qatar', 'vapes in Doha Qatar', 'Doha plug',
    'Lusail coco', 'Lusail weed', 'Lusail vapes', 'Lusail snow', 'Lusail HTC',
    'The Pearl weed', 'The Pearl coco', 'West Bay weed', 'West Bay coco',
    'Al Wakrah weed', 'Al Wakrah coco', 'Al Khor weed', 'Al Khor coco',
    'Al Rayyan weed', 'Al Rayyan coco', 'Mesaieed weed', 'Mesaieed coco',
    'Doha cannabis', 'Qatar cannabis', 'Qatar marijuana', 'Doha marijuana',
    'cannabis Doha', 'marijuana Doha', 'Doha smoking', 'Qatar smoking',
    'trusted plug Doha', 'weed dealer Doha', 'coco dealer Doha',
    'discreet delivery Doha', '24/7 delivery Doha', 'express delivery Doha',
    'DXBCocoPlug Doha', 'abu bilal Doha', 'abubilal Doha',
  ],
  alternates: {
    canonical: 'https://dubaiweeedhub.com/locations/doha',
  },
  openGraph: {
    title: "Premium Products & Discreet Delivery in Doha Qatar | Dubaiweeedhub",
    description: "Dubaiweeedhub delivers premium products discreetly across Doha and all Qatar cities. Snow, Weeed, Vapes, Coco, HTC, Larycai, Ice, LSD, Hashesh — 24/7 fast delivery in Doha, Lusail, Al Wakrah, Al Khor, The Pearl and more.",
    url: 'https://dubaiweeedhub.com/locations/doha',
    siteName: 'Dubaiweeedhub',
    locale: 'en_US',
    type: 'website',
  },
};

function DohaLocationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub — Doha Qatar',
    'description': 'Premium products and discreet delivery across Doha, Lusail, Al Wakrah, Al Khor, The Pearl, West Bay and all Qatar cities. 24/7 delivery. Trusted Gulf plug.',
    'url': 'https://dubaiweeedhub.com/locations/doha',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'areaServed': [
      {'@type': 'City', 'name': 'Doha'},
      {'@type': 'City', 'name': 'Lusail'},
      {'@type': 'City', 'name': 'Al Wakrah'},
      {'@type': 'City', 'name': 'Al Khor'},
      {'@type': 'City', 'name': 'Al Rayyan'},
      {'@type': 'City', 'name': 'Mesaieed'},
      {'@type': 'City', 'name': 'Dukhan'},
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'QA',
      'addressLocality': 'Doha',
      'addressRegion': 'Doha',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.2854',
      'longitude': '51.5310',
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

const dohaAreas = [
  { name: 'Doha Central', description: 'Fastest delivery in central Doha — West Bay, Al Sadd, Bin Mahmoud, Msheireb, Souq Waqif areas' },
  { name: 'Lusail', description: 'Premium delivery across Lusail City, Marina District, Fox Hills, and all Lusail communities' },
  { name: 'The Pearl', description: 'Discreet delivery to The Pearl Qatar — Porto Arabia, Viva Bahriya, and all Pearl districts' },
  { name: 'Al Wakrah', description: 'Reliable delivery covering Al Wakrah City, Al Wakra Beach area, and surrounding neighborhoods' },
  { name: 'Al Khor', description: 'Delivery to Al Khor City, Al Khor Community, Purple Island area, and nearby locations' },
  { name: 'Al Rayyan', description: 'Covering all Al Rayyan areas including Education City, Al Gharrafa, and surrounding communities' },
  { name: 'Mesaieed', description: 'Delivery to Mesaieed Industrial City, Sealine Beach area, and Inland Sea locations' },
  { name: 'Katara & Cultural Village', description: 'Discreet delivery around Katara Cultural Village and nearby beach areas' },
  { name: 'Industrial Area', description: 'Covering all Industrial Area zones, Street 1 through Street 55' },
  { name: 'Dukhan & Salwa', description: 'Extended delivery to Dukhan City, Salwa Road area, and Film City locations' },
];

const dohaProducts = [
  { name: 'Snow', icon: 'ri-snowflake-line' },
  { name: 'Coco', icon: 'ri-contrast-drop-line' },
  { name: 'Premium Weeed', icon: 'ri-leaf-line' },
  { name: 'Vapes (THC & CBD)', icon: 'ri-charging-pile-line' },
  { name: 'CBD Oil', icon: 'ri-drop-line' },
  { name: 'HTC Pills', icon: 'ri-capsule-line' },
  { name: 'Larycai (150/300/450mg)', icon: 'ri-medicine-bottle-line' },
  { name: 'Ice', icon: 'ri-snowflake-line' },
  { name: 'LSD', icon: 'ri-brush-line' },
  { name: 'Hashesh (Moroccan Hash)', icon: 'ri-contrast-line' },
];

const dohaFaqs = [
  { q: 'How fast is delivery in Doha?', a: 'Doha central delivery takes 30-60 minutes. Lusail, The Pearl, Al Sadd, West Bay typically 40-70 minutes. Al Wakrah and Al Khor 1-2 hours. We provide real-time tracking and exact ETAs.' },
  { q: 'What areas of Doha do you cover?', a: 'We cover ALL Doha areas including Central Doha, West Bay, Al Sadd, Bin Mahmoud, Msheireb, Souq Waqif, The Pearl, Lusail, Al Wakrah, Al Khor, Al Rayyan, Mesaieed, Sealine, Industrial Area, Katara, Dukhan, and Salwa. If you are anywhere in Qatar, we deliver.' },
  { q: 'Is delivery discreet in Doha?', a: 'Absolutely. All packages are vacuum-sealed, unmarked, and delivered by professional agents. No logos, no labels, no identifying marks. Your privacy is guaranteed.' },
  { q: 'What products are available in Doha?', a: 'Full range available in Doha: Snow, Coco, Premium Weeed, THC & CBD Vapes, CBD Oil, HTC Pills, Larycai (150mg, 300mg, 450mg Pfizer), Ice, LSD, and Hashesh (including Moroccan Hashish). All top quality, sourced from trusted suppliers.' },
  { q: 'How do I pay for delivery in Doha?', a: 'Cash on delivery, cryptocurrency (BTC/USDT), or bank transfer. Payment details confirmed privately after order. Complete discretion guaranteed.' },
];

export default function DohaLocationPage() {
  return (
    <main>
      <SiteHeader />
      <DohaLocationSchema />

      <section className="relative bg-gradient-to-br from-[#0a1f12] via-[#1a472a] to-[#0a1f12] text-white py-20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20Doha%20Qatar%20skyline%20at%20night%20with%20illuminated%20skyscrapers%20reflecting%20on%20water%20luxury%20cityscape%20dark%20elegant%20atmosphere%20professional%20photography&width=1440&height=600&seq=1&orientation=landscape')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-green-200 text-xs font-bold px-3 py-1 rounded-full mb-4">
              📍 QATAR LOCATION PAGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Premium Products & Discreet Delivery in <span className="text-green-300">Doha, Qatar</span></h1>
            <p className="text-lg text-green-100/80 mb-6 leading-relaxed">Dubaiweeedhub is your trusted connection for premium products in Doha and throughout Qatar. Fast, discreet delivery across Doha Central, Lusail, The Pearl, West Bay, Al Sadd, Al Wakrah, Al Khor, Al Rayyan, Mesaieed, and all Qatar cities. Available 24/7.</p>
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Doha Delivery Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We deliver to every neighborhood, district, and community in Doha and across Qatar. No area is too far.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dohaAreas.map((area) => (
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
            <h2 className="text-3xl font-bold text-[#0a1f12] mb-3">Products Available in Doha</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Full premium product range available for immediate delivery across Doha and all Qatar cities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dohaProducts.map((product) => (
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
              <h2 className="text-3xl font-bold text-[#0a1f12] mb-6">Why Doha Chooses Dubaiweeedhub</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-shield-check-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">Trusted Since 2020</h3>
                    <p className="text-sm text-gray-500">Hundreds of satisfied customers across Doha, Lusail, Al Wakrah and all Qatar. Longest-running trusted plug in the Gulf.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-timer-flash-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">Lightning Fast Delivery</h3>
                    <p className="text-sm text-gray-500">30-60 minute delivery in central Doha. 60-90 minutes in Lusail and The Pearl. Real-time updates throughout your delivery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-eye-off-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">100% Discreet</h3>
                    <p className="text-sm text-gray-500">Vacuum-sealed packaging, unmarked vehicles, professional agents. No logos, no labels. Your privacy is our priority.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <i className="ri-24-hours-line text-[#1a472a] text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a472a] mb-1">24/7 Availability</h3>
                    <p className="text-sm text-gray-500">Day or night, weekday or weekend — we are always available. Late night and early morning deliveries welcomed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8faf8] rounded-2xl p-8 border border-[#1a472a]/10">
              <h2 className="text-2xl font-bold text-[#0a1f12] mb-6">Doha Delivery FAQs</h2>
              <div className="space-y-4">
                {dohaFaqs.map((faq, i) => (
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
          <h2 className="text-3xl font-bold mb-4">Ready to Order in Doha?</h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-8">Contact us now on WhatsApp or Telegram. Tell us what you need and your location in Doha. Fast, discreet delivery guaranteed.</p>
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
            <Link href="/locations/dubai" className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full hover:bg-[#1a472a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">Dubai Delivery</Link>
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