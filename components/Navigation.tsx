'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.jpg"
                alt="pepper-fashion Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-serif font-normal text-gray-800/90 tracking-wider uppercase group-hover:text-primary transition-colors">
              pepper-fashion
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider">
              Willkommen
            </Link>
            
            <div className="relative group">
              <Link href="/standorte" className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider">
                Standorte
              </Link>
              <div className="absolute left-0 mt-4 w-56 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link 
                    href="/standorte#showroom-horgen" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Showroom Horgen
                  </Link>
                  <Link 
                    href="/standorte#pepper-fashion-siebnen" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Pepper-Fashion Siebnen
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link href="/team" className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider">
                Team
              </Link>
              <div className="absolute left-0 mt-4 w-56 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link 
                    href="/team#team-pepper-fashion" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Pepper Fashion
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider cursor-pointer">
                News
              </span>
              <div className="absolute left-0 mt-4 w-56 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link 
                    href="#archiv" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Archiv
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/bildergalerie" className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider">
              Bildergalerie
            </Link>
            
            <Link href="/kontakt" className="text-sm font-light text-gray-900 hover:text-primary transition-colors duration-300 uppercase tracking-wider">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-light text-gray-900 hover:text-primary transition-colors uppercase tracking-wider">
                Willkommen
              </Link>
              <Link href="/standorte" className="text-sm font-light text-gray-900 hover:text-primary transition-colors uppercase tracking-wider">
                Standorte
              </Link>
              <Link href="/team" className="text-sm font-light text-gray-900 hover:text-primary transition-colors uppercase tracking-wider">
                Team
              </Link>
              <Link href="/bildergalerie" className="text-sm font-light text-gray-900 hover:text-primary transition-colors uppercase tracking-wider">
                Bildergalerie
              </Link>
              <Link href="/kontakt" className="text-sm font-light text-gray-900 hover:text-primary transition-colors uppercase tracking-wider">
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

