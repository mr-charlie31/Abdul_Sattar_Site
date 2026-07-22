import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Products Delivery Locations — Qatar Dubai UAE Saudi Arabia | Dubaiweeedhub",
  description: "Dubaiweeedhub delivers premium products across Qatar (Doha, Lusail, Al Wakrah), Dubai (Marina, Palm Jumeirah, JLT, Al Barsha), UAE (Abu Dhabi, Sharjah, Ajman) and Saudi Arabia (Riyadh, Jeddah, Dammam). Click to find delivery in your city.",
  alternates: {
    canonical: 'https://dubaiweeedhub.com/locations',
  },
};

const locations = [
  {
    country: 'Qatar',
    cities: [
      { name: 'Doha', slug: '/locations/doha', desc: 'Doha central, Lusail, The Pearl, Al Wakrah, Al Khor, Al Rayyan, Mesaieed, Katara, West Bay, Al Sadd and all Qatar cities', priority: 'Premium' },
    ],
    image: 'https://readdy.ai/api/search-image?query=Modern%20Doha%20Qatar%20skyline%20at%20night%20with%20illuminated%20skyscrapers%20luxury%20cityscape%20elegant%20atmosphere%20professional%20photography&width=600&height=400&seq=5&orientation=landscape',
  },
  {
    country: 'United Arab Emirates',
    cities: [
      { name: 'Dubai', slug: '/locations/dubai', desc: 'Dubai Marina, Palm Jumeirah, JLT, Al Barsha, JVC, JVT, Business Bay, Downtown, Deira, Bur Dubai, Jumeirah 1/2/3 and all Dubai', priority: 'Premium' },
      { name: 'Abu Dhabi', slug: '/locations/abu-dhabi', desc: 'Abu Dhabi City, Reem Island, Saadiyat Island, Yas Island, Khalifa City, Al Raha, Corniche and all Abu Dhabi', priority: 'Standard' },
      { name: 'Sharjah', slug: '/locations/dubai', desc: 'Sharjah City, Al Khan, Al Noor Island, Sharjah Airport area, and all Sharjah neighborhoods', priority: 'Standard' },
      { name: 'Ajman', slug: '/locations/dubai', desc: 'Ajman City, Al Safia Park, Al Shaab Village, and all Ajman areas', priority: 'Standard' },
      { name: 'Al Ain', slug: '/locations/abu-dhabi', desc: 'Al Ain City and surrounding areas', priority: 'Extended' },
      { name: 'Fujairah', slug: '/locations/dubai', desc: 'Fujairah City and East Coast areas', priority: 'Extended' },
      { name: 'Ras Al Khaimah', slug: '/locations/dubai', desc: 'RAK City, Al Hamra, Mina Al Arab and all RAK areas', priority: 'Extended' },
    ],
    image: 'https://readdy.ai/api/search-image?query=Modern%20Dubai%20skyline%20with%20Burj%20Khalifa%20luxury%20cityscape%20at%20sunset%20professional%20photography%20elegant&width=600&height=400&seq=6&orientation=landscape',
  },
  {
    country: 'Saudi Arabia',
    cities: [
      { name: 'Riyadh', slug: '/locations/riyadh', desc: 'Riyadh Central, North, East, South, Olaya, Kingdom Centre area and all Riyadh', priority: 'Premium' },
      { name: 'Jeddah', slug: '/locations/riyadh', desc: 'Jeddah City, Corniche, Al Hamra, Al Rawdah and all Jeddah areas', priority: 'Standard' },
      { name: 'Dammam', slug: '/locations/riyadh', desc: 'Dammam City, Corniche, and Eastern Province areas', priority: 'Standard' },
      { name: 'Khobar', slug: '/locations/riyadh', desc: 'Al Khobar City, Corniche, and surrounding areas', priority: 'Standard' },
      { name: 'Makkah & Medina', slug: '/locations/riyadh', desc: 'Makkah and Medina including surrounding neighborhoods', priority: 'Extended' },
    ],
    image: 'https://readdy.ai/api/search-image?query=Modern%20Riyadh%20Saudi%20Arabia%20skyline%20with%20Kingdom%20Centre%20and%20Faisaliah%20Tower%20professional%20photography%20elegant&width=600&height=400&seq=7&orientation=landscape',
  },
];

export default function LocationsIndexPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-gradient-to-br from-[#0a1f12] via-[#1a472a] to-[#0a1f12] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Delivery <span className="text-green-300">Locations</span></h1>
          <p className="text-green-100/70 max-w-2xl mx-auto text-lg">Premium discreet delivery across Qatar, UAE, and Saudi Arabia. 150+ Gulf locations. Click your city to learn more.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {locations.map((region) => (
              <div key={region.country}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a472a]">
                    <i className="ri-map-pin-line text-white text-sm"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0a1f12]">{region.country}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {region.cities.map((city) => (
                    <Link key={city.name} href={city.slug} className="bg-[#f8faf8] border border-[#1a472a]/10 rounded-xl p-5 hover:border-[#1a472a]/30 hover:shadow-lg transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-[#1a472a] group-hover:text-green-700 transition-colors">{city.name}</h3>
                        <span className="text-[10px] font-bold uppercase bg-[#1a472a]/10 text-[#1a472a] px-2 py-0.5 rounded-full">{city.priority}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{city.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1f12] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Do not See Your City?</h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-8">We deliver to 150+ locations across the Gulf. If your city is not listed, contact us — we likely deliver there too.</p>
          <a href="https://wa.me/03149024871" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap">
            <div className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line"></i></div>
            Check Your Location
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}