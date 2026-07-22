'use client';

import { useState } from 'react';
import FadeInView from '@/components/FadeInView';

const faqs = [
  {
    question: '1. How do I buy weed in Qatar, Dubai, UAE or Saudi Arabia?',
    answer: 'Buying weed across the Gulf is easy. Choose your products, checkout securely, and we deliver your order discreetly anywhere in Qatar, Dubai, UAE and Saudi Arabia.',
  },
  {
    question: '2. Is your delivery really discreet?',
    answer: 'Yes. We specialize in discreet weed delivery across the Gulf using smell-proof, unmarked packages.',
  },
  {
    question: '3. Where can I get weed in Dubai?',
    answer: 'Right here. We offer fast, secure discreet delivery across Dubai including Jumeirah, Al Barsha, Marina, Palm Jumeirah, Al Quoz, JVC, Deira and more.',
  },
  {
    question: '4. Where can I buy weed in Doha?',
    answer: 'We offer quick and safe delivery to anywhere in Doha including The Pearl, Lusail, and all Qatar locations.',
  },
  {
    question: '5. Do you deliver to Saudi Arabia?',
    answer: 'Yes! We deliver across Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina, Taif, and many more cities.',
  },
  {
    question: '6. What areas do you cover in the UAE?',
    answer: 'We deliver across all UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, Ras Al Khaimah, and Umm Al Quwain.',
  },
  {
    question: '7. How long does delivery take?',
    answer: 'Depending on location, most orders arrive within 60 to 90 minutes max across Gulf cities.',
  },
  {
    question: '8. What products do you offer?',
    answer: 'Flower, edibles, THC vapes, CBD vapes, concentrates, CBD, hash, pre-rolls, Snow, Larycai, Ice, LSD, Hashesh, Coco, and more—everything delivered discreetly across the Gulf.',
  },
];

export default function FAQWeed() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f8f9f6] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a1f12] mb-4">
            Frequently Asked Questions About Buying Weed Online Across the Gulf
          </h3>
          <div className="w-24 h-1 bg-[#1a472a]"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInView
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              delay={index * 0.05}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-bold text-[#0a1f12] text-sm pr-4">{faq.question}</span>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i className={openIndex === index ? 'ri-subtract-line text-[#1a472a]' : 'ri-add-line text-[#1a472a]'}></i>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}