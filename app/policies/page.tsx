import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

export default function PoliciesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Our Policies"
        subtitle="Please review our policies to understand how we operate across Qatar, Dubai, UAE & Saudi Arabia"
      />

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Privacy Policy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your privacy is our top priority. We collect minimal information necessary to process your order and deliver your products. All customer data is stored securely and never shared with third parties. We use encryption for all communications and transactions.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We do not store payment information on our servers. All delivery addresses are deleted after order completion. We never share customer lists or contact information with any external parties.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Terms & Conditions</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              By placing an order with Dubaiweeedhub, you agree that you are of legal age in your jurisdiction and understand the laws regarding cannabis products in the Gulf region. All products are sold for personal use only.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We reserve the right to refuse service to anyone. We are not responsible for any legal issues arising from the use of our products. Customers assume full responsibility for their orders.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Delivery Policy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We deliver across all major areas in Qatar (Doha, Lusail, Al Wakrah, Mesaieed, Al Khor), UAE (Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah), and Saudi Arabia (Riyadh, Jeddah, Dammam, Khobar). Most orders are delivered within 60 to 90 minutes depending on your location. Delivery times may vary during peak hours.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              All deliveries are discreet and unmarked. We use plain packaging with no identifiable markings. Delivery agents are professional and trained to maintain your privacy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Age Verification</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All customers must be 21 years of age or older to purchase from Dubaiweeedhub. We may request age verification for certain orders. Failure to provide verification will result in order cancellation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We stand behind the quality of every product we sell. If you are not satisfied with your order, please contact us within 24 hours of delivery. We will work with you to resolve any quality issues.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Liability Disclaimer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dubaiweeedhub is not liable for any health issues, legal consequences, or other damages arising from the use of our products. All customers use our products at their own risk. We strongly recommend responsible consumption.
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}