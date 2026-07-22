import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import WeedServicesSection from '@/components/WeedServicesSection';

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions tailored to your needs across Qatar, Dubai, UAE and Saudi Arabia"
      />
      <WeedServicesSection />
      <SiteFooter />
    </main>
  );
}