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

  const handleModelabelsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      const element = document.getElementById('modelabels')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header
      className={`z-50 transition-all duration-500 ${
        isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0'
      } ${isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}
    >
      <nav className="container-custom">
        {/* Mobile Navigation - horizontale Navbar ohne Logo */}
        <div className="md:hidden flex items-center justify-center h-16">
          <div className="flex items-center space-x-6">
            <Link href="/team" className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Team
            </Link>
            <Link href="/news" className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              News
            </Link>
            <Link href="/bildergalerie" className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Galerie
            </Link>
            <Link href="/kontakt" className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-primary hover:text-primary/80' : 'text-primary hover:text-primary/80'
            }`}>
              Kontakt
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-44 md:h-16 md:w-56">
              <Image
                src="/PepperLogoNew.png"
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
                Siebnen & Horgen
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="flex items-center space-x-10">
            <Link href="/standorte" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
            }`}>
              Standorte
            </Link>
            
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
            
            <Link 
              href="/#modelabels" 
              onClick={handleModelabelsClick}
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                isTransparent ? 'text-white hover:text-white/70' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Modelabels
            </Link>
            
            <Link href="/kontakt" className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-primary hover:text-primary/80' : 'text-primary hover:text-primary/80'
            }`}>
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

