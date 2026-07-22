import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ProductDetail from './ProductDetail';
import {
  getAllProductIds,
  getProductById,
  getRelatedProducts,
} from '@/lib/products';

export async function generateStaticParams() {
  const ids = getAllProductIds();
  return ids.map((id) => ({ id }));
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return (
      <main>
        <SiteHeader />
        <div className="bg-white py-40 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-300">
            <i className="ri-error-warning-line text-5xl"></i>
          </div>

          <h1 className="text-2xl font-bold text-[#0a1f12] mb-2">
            Product Not Found
          </h1>

          <p className="text-gray-500 mb-6">
            The product you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>

          <a
            href="/shop"
            className="inline-block bg-[#1a472a] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#143722] transition-colors whitespace-nowrap"
          >
            Back to Shop
          </a>
        </div>
        <SiteFooter />
      </main>
    );
  }

  return (
    <div>
      <SiteHeader />

      <PageHero
        title={product.displayName}
        subtitle={`Premium ${product.category} product available in ${product.location} — ${product.price}`}
      />

      <ProductDetail
        product={product}
        relatedProducts={getRelatedProducts(id)}
      />

      <SiteFooter />
    </div>
  );
}