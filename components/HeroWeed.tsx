'use client';

export default function HeroWeed() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Dark%20moody%20cannabis%20marijuana%20plant%20leaves%20closeup%20background%2C%20deep%20green%20and%20black%20tones%2C%20mysterious%20atmospheric%20backdrop%20with%20rich%20dark%20green%20gradients%2C%20cinematic%20lighting%20with%20soft%20bokeh%20and%20shadows%2C%20very%20dark%20elegant%20scene%2C%20moody%20premium%20photography%20style%20for%20cannabis%20delivery%20brand%2C%20dramatic%20lighting%20with%20smoke%20wisps%2C%20dark%20background%20with%20deep%20emerald%20green%20foliage&width=1400&height=600&seq=dxb-hero-v2&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f12]/85 via-[#0a1f12]/75 to-[#0a1f12]/90"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Discreet Weed Delivery Across Qatar, Dubai, UAE & Saudi Arabia
        </h1>
        <div className="text-base md:text-lg text-green-100/80 mb-10 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Are you in Qatar, Dubai, UAE, or Saudi Arabia and searching for discreet weed delivery? You&apos;re in the right place! We offer a seamless and secure platform that guarantees delivery of high-quality THC weed and cannabis products across the Gulf.
          </p>
          <p>
            Whether you&apos;re in Doha, Dubai, Abu Dhabi, Sharjah, Ajman, Riyadh, Jeddah or anywhere in between — we deliver to you. Follow our guide to order now and get your products in minutes.
          </p>
        </div>
        <a href="/shop" className="inline-flex items-center gap-2 bg-white text-[#1a472a] font-bold px-10 py-4 rounded-none transition-all duration-300 cursor-pointer whitespace-nowrap text-lg hover:bg-green-50">
          Order Now
        </a>
      </div>
    </section>
  );
}