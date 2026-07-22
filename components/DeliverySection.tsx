'use client';

const qatarAreas = [
  'Doha', 'The Pearl', 'Lusail', 'Al Wakrah', 'Mesaieed', 'Sealine', 'Inland Sea',
  'Al Khor', 'Purple Island', 'Fuwairit', 'Al Ruwais', 'Al Shamal', 'Al Zubara',
  'Dukhan', 'Zekreet', 'Film City', 'Salwa', 'Abu Samra', 'Al Rayyan', 'Shahaniyah',
  'Umm Salal', 'Umm Bab', 'Al Thakhira', 'Simaisama', 'Ash Shaqra', 'Golden Beach',
];

const dubaiAreas = [
  'Jumeirah Lake Towers', 'Dubai Internet City', 'Palm Jumeirah', 'Dubai Marina',
  'Al Barsha', 'Al Barsha First', 'Al Barsha South', 'Miracle Garden', 'Circle Mall',
  'Ski Dubai', 'Al Quoz', 'Dubai Motor City', 'Jumeirah Village Circle',
  'Jumeirah Village Triangle', 'Jumeirah Golf Estates', 'Dubai Production City',
  'Jebel Ali Industrial', 'Expo City Dubai', 'Global Village', 'Dubai Frame',
  'Gold Souk', 'Jumeirah Beach', 'Dubai Safari Park', 'Al Mamzar',
  'Jumeirah 1', 'Jumeirah 2', 'Jumeirah 3', 'Business Bay', 'Downtown Dubai',
  'Deira', 'International City', 'Al Karama', 'Al Satwa',
];

const uaeAreas = [
  'Abu Dhabi', 'Abu Dhabi Corniche', 'Musaffah', 'Yas Island', 'Saadiyat Island',
  'Sharjah', 'Al Khan', 'Al Noor Island', 'Sharjah Airport', 'SAIF Zone',
  '06 Mall', 'Sharjah National Park', 'Wasit Wetland', 'Ajman', 'Al Ittihad',
  'Al Safia Park', 'Al Shaab Village', 'Al Ain', 'Fujairah', 'Ras Al Khaimah',
  'Umm Al Quwain',
];

const saudiAreas = [
  'Riyadh', 'Jeddah', 'Makkah', 'Medina', 'Dammam', 'Al Khobar', 'Dhahran',
  'Jubail', 'Taif', 'Abha', 'Tabuk', 'Buraidah', 'Hail', 'Najran', 'Yanbu',
  'Al Hofuf', 'Khamis Mushait', 'Al Qassim',
];

export default function DeliverySection() {
  return (
    <section className="bg-[#f8f9f6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-4">
            Weed Delivery Across Qatar, UAE & Saudi Arabia
          </h2>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
            We deliver to every corner of the Gulf — from Doha and Dubai to Riyadh and Jeddah.
            Wherever you are, your order reaches you fast and discreetly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#0a1f12] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#8a1538] rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">QA</span>
              </span>
              Qatar
              <span className="text-sm font-normal text-gray-400 ml-2">({qatarAreas.length} areas)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {qatarAreas.map((area) => (
                <span key={area} className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full border border-[#1a472a]/10">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#0a1f12] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#00732f] rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">AE</span>
              </span>
              Dubai
              <span className="text-sm font-normal text-gray-400 ml-2">({dubaiAreas.length} areas)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {dubaiAreas.map((area) => (
                <span key={area} className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full border border-[#1a472a]/10">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#0a1f12] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#00732f] rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">AE</span>
              </span>
              UAE Cities
              <span className="text-sm font-normal text-gray-400 ml-2">({uaeAreas.length} areas)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {uaeAreas.map((area) => (
                <span key={area} className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full border border-[#1a472a]/10">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#0a1f12] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#006c35] rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">SA</span>
              </span>
              Saudi Arabia
              <span className="text-sm font-normal text-gray-400 ml-2">({saudiAreas.length} areas)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {saudiAreas.map((area) => (
                <span key={area} className="inline-block bg-[#f0f7f1] text-[#1a472a] text-xs px-3 py-1.5 rounded-full border border-[#1a472a]/10">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Don&apos;t see your area? Contact us — we likely cover it too. We deliver across Qatar, UAE (Dubai, Abu Dhabi, Sharjah, Ajman), and Saudi Arabia including remote desert camps, beach resorts, and rural locations. Same discreet service, anywhere in the Gulf.
          </p>
          <a
            href="https://wa.me/03149024871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a472a] hover:bg-[#0f2e1a] text-white font-medium px-6 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap text-sm mt-6"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-whatsapp-line"></i>
            </div>
            Check Your Location
          </a>
        </div>
      </div>
    </section>
  );
}