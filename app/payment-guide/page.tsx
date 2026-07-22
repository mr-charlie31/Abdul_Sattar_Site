import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

export default function PaymentGuidePage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Payment Guide"
        subtitle="Learn about our secure and discreet payment options for orders across Qatar, Dubai, UAE & Saudi Arabia"
      />

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Cash on Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pay cash when your order arrives at your location. This is our most popular payment method for discreet weed delivery across the Gulf. Simply place your order via WhatsApp, and our delivery agent will collect payment upon arrival.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Cryptocurrency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We accept Bitcoin and other major cryptocurrencies for maximum privacy and security. Crypto payments are processed instantly and provide an additional layer of anonymity for your order.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Bank Transfer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct bank transfer is available for larger orders. Contact us on WhatsApp for our banking details. Once payment is confirmed, we process and dispatch your order immediately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">PayPal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                PayPal is available for international customers. Send payment to our verified PayPal account, and we will confirm and ship your order within hours of payment receipt.
              </p>
            </div>

            <div className="bg-[#f8f9f6] border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-[#0a1f12] mb-2">Important Notice</h4>
              <p className="text-gray-600 text-sm">
                All payments are processed with complete discretion. No sensitive information about your order appears on payment statements. For any payment questions, contact us on WhatsApp at 03149024871.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}