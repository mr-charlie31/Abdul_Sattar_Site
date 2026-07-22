'use client';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import FadeInView from '@/components/FadeInView';

const articles = [
  {
    title: 'How to Buy Weed in Qatar Safely',
    excerpt: 'A comprehensive guide on discreet weed delivery in Qatar, including tips on finding trusted vendors and ensuring safe transactions.',
    image: 'https://readdy.ai/api/search-image?query=Discreet%20cannabis%20delivery%20concept%20in%20Qatar%2C%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20photography%20with%20cinematic%20lighting%2C%20mysterious%20atmospheric%20scene%20with%20premium%20packaging%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting%2C%20Doha%20skyline%20silhouette%20in%20background&width=400&height=250&seq=dxb-blog-1-qatar&orientation=landscape',
    date: 'June 15, 2026',
  },
  {
    title: 'THC vs CBD: What You Need to Know',
    excerpt: 'Understanding the differences between THC and CBD, their effects, and how to choose the right product for your needs in Qatar.',
    image: 'https://readdy.ai/api/search-image?query=Cannabis%20THC%20and%20CBD%20comparison%20concept%2C%20cannabis%20leaves%20and%20molecular%20structures%20on%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20photography%20with%20cinematic%20lighting%2C%20scientific%20and%20educational%20mood%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting&width=400&height=250&seq=dxb-blog-2&orientation=landscape',
    date: 'June 10, 2026',
  },
  {
    title: 'Best Cannabis Strains for Beginners',
    excerpt: 'A curated list of beginner-friendly cannabis strains available for delivery in Doha, Lusail, and across Qatar with mild effects.',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20buds%20variety%20selection%20on%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20product%20photography%20with%20cinematic%20lighting%2C%20elegant%20luxury%20presentation%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20cannabis%20product%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting%2C%20multiple%20strains%20displayed%20together&width=400&height=250&seq=dxb-blog-3&orientation=landscape',
    date: 'June 5, 2026',
  },
  {
    title: 'How to Store Cannabis Properly',
    excerpt: 'Learn the best practices for storing cannabis to maintain freshness, potency, and flavor for the longest time possible.',
    image: 'https://readdy.ai/api/search-image?query=Cannabis%20storage%20containers%20jars%20on%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20product%20photography%20with%20cinematic%20lighting%2C%20elegant%20luxury%20presentation%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20cannabis%20product%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting%2C%20airtight%20containers%20and%20humidity%20packs&width=400&height=250&seq=dxb-blog-4&orientation=landscape',
    date: 'May 28, 2026',
  },
  {
    title: 'Weed Delivery in Qatar Guide',
    excerpt: 'Everything you need to know about getting discreet weed delivery in Qatar, including service areas and delivery times.',
    image: 'https://readdy.ai/api/search-image?query=Doha%20Qatar%20city%20skyline%20at%20night%20with%20cannabis%20theme%2C%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20photography%20with%20cinematic%20lighting%2C%20mysterious%20atmospheric%20scene%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting%2C%20modern%20cityscape%20with%20green%20accents&width=400&height=250&seq=dxb-blog-5-qatar&orientation=landscape',
    date: 'May 20, 2026',
  },
  {
    title: 'Understanding Cannabis Concentrates',
    excerpt: 'A deep dive into shatter, wax, live resin, and rosin — the most potent cannabis products available in Qatar.',
    image: 'https://readdy.ai/api/search-image?query=Premium%20cannabis%20concentrates%20shatter%20and%20wax%20on%20dark%20moody%20background%20with%20deep%20green%20and%20black%20tones%2C%20professional%20product%20photography%20with%20cinematic%20lighting%2C%20elegant%20luxury%20presentation%2C%20dark%20studio%20setting%20with%20soft%20shadows%2C%20high-end%20cannabis%20product%20aesthetic%2C%20minimal%20dark%20background%2C%20soft%20diffused%20lighting%2C%20golden%20amber%20concentrates&width=400&height=250&seq=dxb-blog-6&orientation=landscape',
    date: 'May 15, 2026',
  },
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Dubaiweeedhub Blog"
        subtitle="Latest articles, guides, and news about cannabis and weed delivery across Qatar, Dubai, UAE & Saudi Arabia"
      />

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <FadeInView
                key={article.title}
                className="bg-white border border-gray-200 rounded-none overflow-hidden hover:shadow-lg transition-all duration-300"
                delay={(index % 3) * 0.1}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-lg font-bold text-[#0a1f12] mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="text-[#1a472a] font-medium text-sm hover:underline cursor-pointer">
                    Read More
                  </button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}