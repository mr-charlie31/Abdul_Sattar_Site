'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useCart } from '@/lib/cart-context'

export default function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Payment Guide', href: '/payment-guide' },
    { label: 'Policies', href: '/policies' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Refunds', href: '/refunds' },
    { label: 'Blog', href: '/blog' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact Us', href: '/contact' }
  ]

  return (
    <>
      <div className='bg-[#1a472a] text-white text-xs py-2'>
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <a
              href='https://wa.me/03149024871'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:text-green-300 transition-colors'
            >
              <div className='w-3.5 h-3.5 flex items-center justify-center'>
                <i className='ri-phone-line'></i>
              </div>
              <span className='font-medium'>03149024871</span>
            </a>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=dubaiweeedhub@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:flex items-center gap-2 hover:text-green-300 transition-colors'
            >
              <div className='w-3.5 h-3.5 flex items-center justify-center'>
                <i className='ri-mail-line'></i>
              </div>
              <span className='font-medium'>dubaiweeedhub@gmail.com</span>
            </a>
          </div>
          <button
            onClick={openCart}
            className='flex items-center gap-1.5 hover:text-green-300 transition-colors cursor-pointer relative'
          >
            <div className='w-3.5 h-3.5 flex items-center justify-center'>
              <i className='ri-shopping-cart-line'></i>
            </div>
            <span className='font-medium'>
              {totalItems} Item{totalItems !== 1 ? 's' : ''}
            </span>
          </button>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>
          <Link href='/' className='group flex items-center cursor-pointer'>
            <span className="text-2xl font-bold font-['Pacifico'] text-[#1a472a] transition-transform duration-300 ease-out group-hover:scale-105">
              Dubaiweeedhub
            </span>
          </Link>

          <nav className='hidden lg:flex items-center gap-2'>
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className='
px-3
py-2
rounded-lg
text-[15px]
font-medium
text-gray-700
transition-all
duration-300
hover:text-[#1a472a]
hover:bg-green-50
hover:-translate-y-0.5
'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105'>
            <button
              onClick={openCart}
              className='hidden lg:flex relative cursor-pointer'
            >
              <div className='w-9 h-9 flex items-center justify-center text-[#0a1f12] hover:text-[#1a472a] transition-colors'>
                <i className='ri-shopping-cart-2-line text-2xl'></i>
              </div>
              {totalItems > 0 && (
                <span className='absolute -top-0.5 -right-0.5 bg-[#1a472a] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full'>
                  {totalItems > 99 ? '99' : totalItems}
                </span>
              )}
            </button>
            <button
              className='lg:hidden cursor-pointer'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className='w-7 h-7 flex items-center justify-center'>
                <i
                  className={
                    isMenuOpen
                      ? 'ri-close-line text-2xl text-[#1a472a]'
                      : 'ri-menu-line text-2xl text-[#1a472a]'
                  }
                ></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl'>
            <nav className='flex flex-col gap-1'>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-gray-700 hover:text-[#1a472a] hover:bg-green-50 font-medium py-3 px-3 rounded-lg cursor-pointer transition-colors text-sm'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
