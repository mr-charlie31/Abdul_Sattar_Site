import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import HeroWeed from '@/components/HeroWeed';
import WeedServicesSection from '@/components/WeedServicesSection';
import BuyWeedSection from '@/components/BuyWeedSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ShopProducts from '@/components/ShopProducts';
import ExploreCannabis from '@/components/ExploreCannabis';
import DeliverySection from '@/components/DeliverySection';
import AbuDhabiSection from '@/components/AbuDhabiSection';
import BestSellersWeed from '@/components/BestSellersWeed';
import GuideSection from '@/components/GuideSection';
import EducationSection from '@/components/EducationSection';
import FAQWeed from '@/components/FAQWeed';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroWeed />
      <WeedServicesSection />
      <BuyWeedSection />
      <WhyChooseSection />
      <ShopProducts />
      <ExploreCannabis />
      <DeliverySection />
      <AbuDhabiSection />
      <BestSellersWeed />
      <GuideSection />
      <EducationSection />
      <FAQWeed />
      <SiteFooter />
    </main>
  );
}