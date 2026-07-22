'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f12] mb-3">Contact Us - Dubaiweeedhub</h2>
          <p className="text-gray-600">Reach out to our team for orders and inquiries across Qatar, Dubai, UAE and Saudi Arabia</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#0a1f12] mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#1a472a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#0a1f12] mb-2">Message Sent!</h4>
                <p className="text-gray-600 text-sm">We will get back to you shortly via WhatsApp or email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0a1f12] mb-1">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a]/20 focus:border-[#1a472a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1f12] mb-1">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+971 XX XXX XXXX" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a]/20 focus:border-[#1a472a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1f12] mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a]/20 focus:border-[#1a472a]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1f12] mb-1">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="How can we help you?" maxLength={500} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a]/20 focus:border-[#1a472a] resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#1a472a] hover:bg-[#0f2e1a] text-white font-bold py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0a1f12] mb-6">Get in Touch - Available 24/7</h3>
            <div className="space-y-6">
              <div className="bg-[#f8f9f6] rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-[#0a1f12] mb-3 text-sm">Our Service Areas Across the Gulf</h4>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="mb-2"><span className="font-medium text-[#0a1f12]">Qatar:</span> Doha, The Pearl, Lusail, Al Wakrah, Mesaieed, Sealine, Al Khor</p>
                  <p className="mb-2"><span className="font-medium text-[#0a1f12]">Dubai:</span> Jumeirah, Al Barsha, Marina, Palm Jumeirah, Al Quoz, JVC, Deira</p>
                  <p className="mb-2"><span className="font-medium text-[#0a1f12]">UAE:</span> Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, Ras Al Khaimah</p>
                  <p><span className="font-medium text-[#0a1f12]">Saudi Arabia:</span> Riyadh, Jeddah, Dammam, Khobar, Makkah, Medina, Taif</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#f8f9f6] rounded-lg p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-whatsapp-line text-white text-lg"></i>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1f12] text-sm">WhatsApp / Phone</div>
                    <div className="text-sm text-gray-600 mt-1">03149024871</div>
                    <a href="https://wa.me/03149024871" target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm font-medium hover:underline mt-1 inline-block cursor-pointer">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#f8f9f6] rounded-lg p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-telegram-line text-white text-lg"></i>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1f12] text-sm">Telegram</div>
                    <div className="text-sm text-gray-600 mt-1">@dxbcocoo</div>
                    <a href="https://t.me/dxbcocoo" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline mt-1 inline-block cursor-pointer">Fast Response</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#f8f9f6] rounded-lg p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-[#1a472a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-mail-line text-white text-lg"></i>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1f12] text-sm">Email Address</div>
                    <div className="text-sm text-gray-600 mt-1">dubaiweeedhub@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#f8f9f6] rounded-lg p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-[#1a472a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-white text-lg"></i>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1f12] text-sm">Working Hours</div>
                    <div className="text-sm text-gray-600 mt-1">Monday - Sunday: 24/7 Available for orders and delivery across Qatar, UAE & Saudi Arabia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}