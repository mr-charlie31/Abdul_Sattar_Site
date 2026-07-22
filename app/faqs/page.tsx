import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import FAQWeed from '@/components/FAQWeed';

export default function FAQsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Common questions about our services, products, and delivery across Qatar, Dubai, UAE & Saudi Arabia"
      />
      <FAQWeed />
      <SiteFooter />
    </main>
  );
}