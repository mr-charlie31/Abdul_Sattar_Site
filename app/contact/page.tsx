import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team for orders and inquiries across Qatar, Dubai, UAE and Saudi Arabia"
      />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}