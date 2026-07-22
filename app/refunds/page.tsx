import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

export default function RefundsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Refunds & Returns"
        subtitle="Our refund policy ensures you can shop with confidence across Qatar, Dubai, UAE & Saudi Arabia"
      />

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Refund Eligibility</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We offer refunds in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600 text-sm leading-relaxed">
              <li>Order not delivered within the promised time frame</li>
              <li>Wrong products delivered</li>
              <li>Damaged or defective products upon delivery</li>
              <li>Lost orders during delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Refund Process</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              To request a refund, please contact us within 24 hours of delivery via WhatsApp at 03149024871 or Telegram @dxbcocoo. Please provide your order details and reason for the refund request.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Refunds are processed within 3-5 business days. The refund will be issued using the original payment method. For cash on delivery orders, we will arrange alternative refund methods.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0a1f12] mb-4">Non-Refundable Items</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We do not offer refunds for products that have been opened or used, orders where the customer provided incorrect delivery information, or orders that were refused by the customer at delivery.
            </p>
          </div>

          <div className="bg-[#f8f9f6] border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-[#0a1f12] mb-2">Refund Guarantee</h4>
            <p className="text-gray-600 text-sm">
              In the rare case of a lost order, we offer a full refund, so you place your order knowing your money is safe. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}