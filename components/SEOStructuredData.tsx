export default function SEOStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub - Gulf Connection',
    'description': 'Premium products with discreet delivery across Qatar, Dubai, UAE, and Saudi Arabia. 150+ locations serving Doha, Dubai, Abu Dhabi, Riyadh, Jeddah and all Gulf cities.',
    'url': 'https://dubaiweeedhub.com',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'areaServed': [
      {'@type': 'Country', 'name': 'Qatar'},
      {'@type': 'Country', 'name': 'United Arab Emirates'},
      {'@type': 'Country', 'name': 'Saudi Arabia'},
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'QA',
      'addressLocality': 'Doha',
      'addressRegion': 'Doha',
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'sameAs': [
      'https://t.me/dxbcocoo',
    ],
    'makesOffer': [
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Snow', 'description': 'Premium Snow delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Coco', 'description': 'Premium Coco delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Weeed', 'description': 'Premium Weeed delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Vapes', 'description': 'Premium Vapes delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'CBD Oil', 'description': 'Premium CBD Oil delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'THC Vapes', 'description': 'Premium THC Vapes delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'HTC Pills', 'description': 'Premium HTC Pills delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Larycai', 'description': 'Premium Larycai delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Ice', 'description': 'Premium Ice delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'LSD', 'description': 'Premium LSD delivery across Gulf cities'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Hashesh', 'description': 'Premium Hashesh delivery including Morocco Hashish'}},
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}