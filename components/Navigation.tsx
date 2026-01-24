'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isHome = pathname === '/'
  const isTransparent = useMemo(() => isHome && !isScrolled, [isHome, isScrolled])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu after route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`z-50 transition-all duration-500 ${
        isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0'
      } ${isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 md:h-16 md:w-56">
              <Image
                src="/PepperLogoWoBackground.png"
                alt="pepper-fashion Logo"
                fill
                className="object-contain"
                sizes="224px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className={`block text-lg font-display font-normal tracking-wide group-hover:text-primary transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-gray-800'
              }`}>
                Pepper Fashion
              </span>
              <span className={`block text-xs tracking-widest uppercase transition-colors duration-300 ${
                isTransparent ? 'text-white/80' : 'text-primary'
              }`}>
                Wädenswil & Siebnen
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Willkommen
            </Link>
            
            <div className="relative group">
              <Link href="/standorte" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
              }`}>
                Standorte
              </Link>
              <div className="absolute left-0 mt-4 w-56 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a 
                    href="/standorte?open=siebnen" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Pepper-Fashion Siebnen
                  </a>
                  <a 
                    href="/standorte?open=horgen" 
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-fashion-cream hover:text-primary transition-colors duration-200 font-light tracking-wide"
                  >
                    Showroom Horgen
                  </a>
                </div>
              </div>
            </div>
            
            <Link href="/team" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Team
            </Link>
            
            <Link href="/news" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              News
            </Link>
            
            <Link href="/bildergalerie" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Bildergalerie
            </Link>
            
            <Link href="/kontakt" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isTransparent
                ? 'text-white hover:text-white/70'
                : 'text-gray-800 hover:text-primary hover:bg-gray-100'
            }`}
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
          <div
            className={`md:hidden py-6 border-t ${
              isTransparent
                ? 'border-white/20 bg-black/80 backdrop-blur-md'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                Willkommen
              </Link>
              <Link href="/standorte" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                Standorte
              </Link>
              <Link href="/team" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                Team
              </Link>
              <Link href="/news" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                News
              </Link>
              <Link href="/bildergalerie" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                Bildergalerie
              </Link>
              <Link href="/kontakt" className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-primary'
              }`}>
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

