export default function AdvancedSchemas() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Dubaiweeedhub',
    'url': 'https://dubaiweeedhub.com',
    'logo': 'https://dubaiweeedhub.com/logo.png',
    'description': 'Premium products with discreet delivery across Qatar, Dubai, UAE, and Saudi Arabia. 150+ locations, 24/7 Gulf-wide service.',
    'email': 'dubaiweeedhub@gmail.com',
    'telephone': '+03149024871',
    'sameAs': [
      'https://t.me/dxbcocoo',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+03149024871',
      'contactType': 'customer service',
      'availableLanguage': ['English', 'Arabic', 'Urdu', 'Hindi'],
      'areaServed': ['QA', 'AE', 'SA'],
    },
    'areaServed': [
      {
        '@type': 'Country',
        'name': 'Qatar',
        'containsPlace': [
          {'@type': 'City', 'name': 'Doha'},
          {'@type': 'City', 'name': 'Lusail'},
          {'@type': 'City', 'name': 'Al Wakrah'},
          {'@type': 'City', 'name': 'Al Khor'},
          {'@type': 'City', 'name': 'Al Rayyan'},
          {'@type': 'City', 'name': 'Mesaieed'},
          {'@type': 'City', 'name': 'Dukhan'},
        ],
      },
      {
        '@type': 'Country',
        'name': 'United Arab Emirates',
        'containsPlace': [
          {'@type': 'City', 'name': 'Dubai'},
          {'@type': 'City', 'name': 'Abu Dhabi'},
          {'@type': 'City', 'name': 'Sharjah'},
          {'@type': 'City', 'name': 'Ajman'},
          {'@type': 'City', 'name': 'Al Ain'},
          {'@type': 'City', 'name': 'Fujairah'},
          {'@type': 'City', 'name': 'Ras Al Khaimah'},
          {'@type': 'City', 'name': 'Umm Al Quwain'},
        ],
      },
      {
        '@type': 'Country',
        'name': 'Saudi Arabia',
        'containsPlace': [
          {'@type': 'City', 'name': 'Riyadh'},
          {'@type': 'City', 'name': 'Jeddah'},
          {'@type': 'City', 'name': 'Dammam'},
          {'@type': 'City', 'name': 'Khobar'},
          {'@type': 'City', 'name': 'Makkah'},
          {'@type': 'City', 'name': 'Medina'},
          {'@type': 'City', 'name': 'Taif'},
          {'@type': 'City', 'name': 'Abha'},
          {'@type': 'City', 'name': 'Jubail'},
          {'@type': 'City', 'name': 'Yanbu'},
        ],
      },
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Dubaiweeedhub - Gulf Premium Connection',
    'url': 'https://dubaiweeedhub.com',
    'description': 'Premium products and discreet delivery across Qatar, Dubai, UAE and Saudi Arabia',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://dubaiweeedhub.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    'inLanguage': ['en', 'ar'],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dubaiweeedhub - Gulf Premium Delivery',
    'description': 'Premium products with discreet delivery across all Gulf cities. Serving Qatar, Dubai, UAE, and Saudi Arabia 24/7.',
    'url': 'https://dubaiweeedhub.com',
    'telephone': '+03149024871',
    'email': 'dubaiweeedhub@gmail.com',
    'image': 'https://dubaiweeedhub.com/logo.png',
    'priceRange': '$$',
    'currenciesAccepted': 'USD, QAR, AED, SAR',
    'paymentAccepted': 'Cash, Cryptocurrency, Bank Transfer',
    'areaServed': [
      {'@type': 'Country', 'name': 'Qatar'},
      {'@type': 'Country', 'name': 'United Arab Emirates'},
      {'@type': 'Country', 'name': 'Saudi Arabia'},
      {'@type': 'Country', 'name': 'Bahrain'},
      {'@type': 'Country', 'name': 'Kuwait'},
      {'@type': 'Country', 'name': 'Oman'},
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'QA',
      'addressLocality': 'Doha',
      'addressRegion': 'Doha',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.2854',
      'longitude': '51.5310',
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59',
      },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Premium Products',
      'itemListElement': [
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Snow', 'description': 'Premium Snow - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Coco', 'description': 'Premium Coco - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Weeed', 'description': 'Premium Weeed - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Vapes', 'description': 'Premium Vapes - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'CBD Oil', 'description': 'Premium CBD Oil - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'THC Vapes', 'description': 'Premium THC Vapes - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'HTC Pills', 'description': 'Premium HTC Pills - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Larycai 300mg', 'description': 'Larycai 300mg - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Larycai 450mg', 'description': 'Larycai 450mg - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Larycai 150mg', 'description': 'Larycai 150mg Pfizer - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Ice', 'description': 'Premium Ice - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'LSD', 'description': 'Premium LSD - Discreet Gulf Delivery'}},
        {'@type': 'Offer', 'itemOffered': {'@type': 'Product', 'name': 'Hashesh', 'description': 'Premium Hashesh including Morocco Hashish - Discreet Gulf Delivery'}},
      ],
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '1247',
      'bestRating': '5',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How does discreet delivery work across Gulf countries?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We provide fully discreet, secure delivery to 150+ locations across Qatar, UAE and Saudi Arabia. All packages are professionally wrapped with no external markings. Our delivery team contacts you directly with exact location details and timing. Same-day delivery available in Doha, Dubai, Abu Dhabi, Sharjah, Riyadh and Jeddah.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What payment methods do you accept?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We accept multiple secure payment methods including cash on delivery, cryptocurrency (BTC, USDT), and bank transfers. Payment details are shared privately after order confirmation. All transactions are handled with complete discretion.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Which cities do you deliver to?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We deliver to all major Gulf cities: Qatar (Doha, Lusail, Al Wakrah, Al Khor, Mesaieed, Al Rayyan, Dukhan, Sealine), UAE (Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, Ras Al Khaimah, Umm Al Quwain), and Saudi Arabia (Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina, Taif, Abha, Jubail, Yanbu).',
        },
      },
      {
        '@type': 'Question',
        'name': 'Is delivery available 24/7?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we operate 24 hours a day, 7 days a week across all served locations. Late night and early morning deliveries are available upon request. Our team is always available to coordinate your delivery at a time that suits you.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How can I place an order?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Contact us via WhatsApp at 03149024871 or Telegram @dxbcocoo. Browse our products on the website, tell us what you need and your location, and we will confirm availability and delivery details immediately.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What products are available?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We offer a wide range of premium products: Snow, Coco, Premium Weeed, Vapes (THC & CBD), CBD Oil, HTC Pills, Larycai (150mg, 300mg, 450mg), Ice, LSD, Hashesh (including Moroccan Hashish). All products are sourced from trusted suppliers and quality-checked before delivery.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How long does delivery take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Delivery times vary by location. Doha and Dubai: 30-90 minutes. Other Qatar cities: 1-3 hours. Abu Dhabi and Sharjah: 1-2 hours. Saudi Arabia major cities (Riyadh, Jeddah, Dammam): 2-4 hours. We always provide accurate ETAs and keep you updated throughout.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Is my order really discreet and private?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. Your privacy is our top priority. All packages are vacuum-sealed with no identifying marks, labels, or logos. Communication is encrypted and we never store personal details beyond what is necessary. Our delivery agents are trained professionals who understand the importance of complete discretion.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://dubaiweeedhub.com',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}