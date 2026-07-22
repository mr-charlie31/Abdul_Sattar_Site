'use client';

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Dark%20moody%20cannabis%20marijuana%20plant%20leaves%20closeup%20background%2C%20deep%20green%20and%20black%20tones%2C%20mysterious%20atmospheric%20backdrop%20with%20rich%20dark%20green%20gradients%2C%20cinematic%20lighting%20with%20soft%20bokeh%20and%20shadows%2C%20very%20dark%20elegant%20scene%2C%20moody%20premium%20photography%20style%20for%20cannabis%20delivery%20brand%2C%20dramatic%20lighting%20with%20smoke%20wisps%2C%20dark%20background%20with%20deep%20emerald%20green%20foliage&width=1400&height=400&seq=dxb-hero-page-v2&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f12]/85 via-[#0a1f12]/75 to-[#0a1f12]/90"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">{title}</h1>
        {subtitle && <p className="text-lg text-green-100/70 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}