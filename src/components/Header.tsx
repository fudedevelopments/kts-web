'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 bg-white shadow-lg z-50'>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] text-white hidden sm:block'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='flex flex-col sm:flex-row items-center justify-between py-2 text-sm'>
            <div className='flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6'>
              <a
                href='mailto:ktskavin@bjp.org'
                className='flex items-center space-x-2 hover:text-orange-200 transition-colors'
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span>ktskavin@bjp.org</span>
              </a>
              <a
                href='tel:+919876543210'
                className='flex items-center space-x-2 hover:text-orange-200 transition-colors'
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <span>+91 98765 43210</span>
              </a>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Perundurai, Erode, Tamil Nadu</span>
              </div>
            </div>

            <div className='flex items-center space-x-4 mt-2 sm:mt-0'>
              <span className='text-xs font-medium'>Follow KTS Kavin:</span>
              <div className='flex items-center space-x-3'>
                <a
                  href='https://facebook.com/ktskavin'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-orange-200 transition-colors'
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </a>
                <a
                  href='https://twitter.com/ktskavin'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-orange-200 transition-colors'
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>
                <a
                  href='https://instagram.com/ktskavin'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-orange-200 transition-colors'
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.802 8.296 6.953 7.806 8.25 7.806s2.448.49 3.323 1.297c.877.798 1.367 1.949 1.367 3.246s-.49 2.448-1.297 3.323c-.798.877-1.949 1.367-3.246 1.367zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.877-.798-1.367-1.949-1.367-3.246s.49-2.448 1.297-3.323c.798-.877 1.949-1.367 3.246-1.367s2.448.49 3.323 1.297c.877.798 1.367 1.949 1.367 3.246s-.49 2.448-1.297 3.323c-.798.877-1.949 1.367-3.246 1.367z' />
                  </svg>
                </a>
                <a
                  href='https://youtube.com/@ktskavin'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-orange-200 transition-colors'
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='container mx-auto px-4 sm:px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo with Image */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-300'>
              <Image
                src='/logo.jpg'
                alt='KTS Kavin Logo'
                width={48}
                height={48}
                className='object-contain'
                priority
              />
            </div>
            <div className='hidden sm:block'>
              <div className='text-2xl font-bold text-[#fa6c38]'>KTS Kavin</div>
              <div className='text-xs text-gray-500 font-medium'>
                BJP Youth Leader
              </div>
            </div>
            <div className='sm:hidden text-xl font-bold text-[#fa6c38]'>
              KTS Kavin
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/about'
              className='px-4 py-2 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
            >
              About
            </Link>
            <Link
              href='/campaigns'
              className='px-4 py-2 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
            >
              Campaigns
            </Link>
            <Link
              href='/vision'
              className='px-4 py-2 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
            >
              Vision
            </Link>
            <Link
              href='/gallery'
              className='px-4 py-2 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
            >
              Gallery
            </Link>
            <Link
              href='/get-involved'
              className='px-4 py-2 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
            >
              Get Involved
            </Link>
            <Link href='/contact' className='ml-4'>
              <Button className='bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] hover:from-[#e85a2b] hover:to-[#d64e1f] text-white px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden mt-6 pb-6 border-t border-gray-100'>
            <div className='flex flex-col space-y-2 pt-4'>
              <Link
                href='/about'
                className='px-4 py-3 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                📖 About KTS Kavin
              </Link>
              <Link
                href='/campaigns'
                className='px-4 py-3 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                🚀 Campaigns & Initiatives
              </Link>
              <Link
                href='/vision'
                className='px-4 py-3 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                🎯 Vision & Mission
              </Link>
              <Link
                href='/gallery'
                className='px-4 py-3 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                📸 Gallery
              </Link>
              <Link
                href='/get-involved'
                className='px-4 py-3 text-gray-700 hover:text-[#fa6c38] hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                🤝 Get Involved
              </Link>
              <div className='pt-2'>
                <Link href='/contact' onClick={() => setIsMenuOpen(false)}>
                  <Button className='w-full bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] hover:from-[#e85a2b] hover:to-[#d64e1f] text-white py-3 shadow-lg'>
                    📞 Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
