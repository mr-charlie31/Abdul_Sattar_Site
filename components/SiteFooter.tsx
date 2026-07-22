'use client'

import Link from 'next/link'

export default function SiteFooter () {
  return (
    <footer className='bg-[#1a472a] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-10'>
          <div className='md:col-span-1'>
            <h3 className="text-xl font-bold font-['Pacifico'] mb-4 text-white">
              Dubaiweeedhub
            </h3>
            <p className='text-green-100/70 text-sm leading-relaxed'>
              Your trusted connection for premium products across Qatar, Dubai,
              UAE, and Saudi Arabia. Discreet delivery throughout Doha, Lusail,
              Al Wakrah, Jumeirah, Al Barsha, Palm Jumeirah, Dubai Marina, Abu
              Dhabi, Sharjah, Ajman, Riyadh, Jeddah, Dammam, and 150+ Gulf
              locations.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-sm mb-4 uppercase tracking-wider'>
              Quick Links
            </h4>
            <div className='space-y-2 text-green-100/70 text-sm'>
              <div>
                <Link
                  href='/'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href='/about'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  href='/shop'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Shop
                </Link>
              </div>
              <div>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <Link
                  href='/faqs'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  FAQs
                </Link>
              </div>
              <div>
                <Link
                  href='/blog'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href='/payment-guide'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Payment Guide
                </Link>
              </div>
              <div>
                <Link
                  href='/policies'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Policies
                </Link>
              </div>
              <div>
                <Link
                  href='/refunds'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Refunds
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-sm mb-4 uppercase tracking-wider'>
              Service Areas
            </h4>
            <div className='space-y-2 text-green-100/70 text-sm'>
              <div>
                <Link
                  href='/locations/doha'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Qatar — Doha, Lusail, Al Wakrah, Mesaieed
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/doha'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Qatar — Al Khor, Dukhan, Salwa, Al Rayyan
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/doha'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Qatar — Sealine, Inland Sea, The Pearl
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/dubai'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Dubai — Jumeirah, Al Barsha, Marina, JLT
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/dubai'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Dubai — Palm Jumeirah, Business Bay, Deira
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/dubai'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Dubai — JVC, JVT, Motor City, Al Quoz
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/abu-dhabi'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Abu Dhabi, Sharjah, Ajman, Al Ain
                </Link>
              </div>
              <div className='text-green-100/70'>
                Fujairah, Ras Al Khaimah, Umm Al Quwain
              </div>
              <div>
                <Link
                  href='/locations/riyadh'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Saudi Arabia — Riyadh, Jeddah, Dammam
                </Link>
              </div>
              <div>
                <Link
                  href='/locations/riyadh'
                  className='hover:text-white transition-colors cursor-pointer'
                >
                  Saudi Arabia — Khobar, Makkah, Medina, Taif
                </Link>
              </div>
              <div className='text-green-100/70'>
                Saudi Arabia — Jubail, Yanbu, Abha, Tabuk
              </div>
              <div>
                <Link
                  href='/locations'
                  className='hover:text-white transition-colors cursor-pointer font-medium'
                >
                  150+ Gulf locations — View All
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-sm mb-4 uppercase tracking-wider'>
              Contact
            </h4>
            <div className='space-y-2 text-green-100/70 text-sm'>
              <a
                href='https://wa.me/923149024871'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-green-400 transition-colors duration-300'
              >
                <i className='ri-whatsapp-line text-green-500 text-lg'></i>
                <span>03149024871</span>
              </a>
              <div className='flex items-center gap-2'>
                <i className='ri-telegram-line text-green-400'></i>
                <span>@dxbcocoo</span>
              </div>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=dubaiweeedhub@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='ri-mail-line text-green-400 text-lg'></i>
                <span>dubaiweeedhub@gmail.com</span>
              </a>
              <div className='flex items-center gap-2'>
                <i className='ri-time-line text-green-400'></i>
                <span>24/7 Service</span>
              </div>
            </div>
            <div className='mt-4'>
              <h4 className='font-bold text-sm mb-2 uppercase tracking-wider'>
                Products
              </h4>
              <div className='space-y-1 text-green-100/60 text-xs leading-relaxed'>
                Snow · Coco · Weeed · Vapes · CBD Oil · THC Vapes · HTC Pills ·
                Larycai 300mg · Larycai 450mg · Larycai 150mg · Ice · LSD ·
                Hashesh · Morocco Hashish · Moroccan Hash
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <a
              href='#'
              className='w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer'
            >
              <i className='ri-facebook-fill text-sm'></i>
            </a>
            <a
              href='#'
              className='w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer'
            >
              <i className='ri-twitter-x-fill text-sm'></i>
            </a>
            <a
              href='#'
              className='w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer'
            >
              <i className='ri-instagram-fill text-sm'></i>
            </a>
            <a
              href='#'
              className='w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer'
            >
              <i className='ri-rss-fill text-sm'></i>
            </a>
          </div>
          <p className='text-green-100/60 text-sm'>
            © 2026 Dubaiweeedhub - Gulf Plug. All rights reserved. | Premium
            Products & Discreet Delivery Across Qatar, UAE & Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  )
}
