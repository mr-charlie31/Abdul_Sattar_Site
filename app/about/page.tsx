import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="About Dubaiweeedhub"
        subtitle="Your Trusted Partner Across Qatar, Dubai, UAE & Saudi Arabia — Gulf-wide premium products and discreet delivery"
      />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}