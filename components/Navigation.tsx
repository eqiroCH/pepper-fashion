'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/standorte', label: 'Standorte' },
  { href: '/team', label: 'Team' },
  { href: '/instagram', label: 'Instagram' },
  { href: '/bildergalerie', label: 'Galerie' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled && !isOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const linkClass = (href: string) => {
    const active = pathname === href
    if (href === '/kontakt') return 'bg-primary text-white px-4 py-2 hover:bg-primary-dark'
    if (isTransparent) return 'text-white hover:text-white/70'
    return active ? 'text-primary' : 'text-gray-700 hover:text-primary'
  }

  return (
    <header
      className={`z-50 transition-all duration-500 ${
        isHome ? 'fixed top-0 left-0 right-0' : 'sticky top-0'
      } ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`}
    >
      <nav className="container-custom" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative block h-11 w-28 md:h-14 md:w-40 shrink-0" aria-label="Pepper Fashion – Startseite">
            <Image
              src={isTransparent ? '/logo-light.png' : '/logo-transparent.png'}
              alt="Pepper Fashion"
              fill
              className={`object-contain object-left ${isTransparent ? 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]' : ''}`}
              sizes="144px"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={`md:hidden p-2 -mr-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 pb-4">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block py-3 text-sm font-medium uppercase tracking-wider ${
                      l.href === '/kontakt' || pathname === l.href ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
