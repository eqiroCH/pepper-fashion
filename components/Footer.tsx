import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" aria-label="Zur Startseite" className="relative block h-12 w-28 md:h-14 md:w-32">
              <Image src="/logo-light.png" alt="Pepper Fashion" fill className="object-contain object-left" sizes="128px" />
            </Link>
            <p className="text-xs md:text-sm text-gray-400 font-light">Siebnen &amp; Horgen</p>
          </div>

          <div className="text-center md:text-left text-xs md:text-sm text-gray-400 font-light space-y-1">
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            </p>
            <p>
              <a href="https://wa.me/41795760922" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </p>
            <p className="flex justify-center md:justify-start gap-4 pt-1">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </p>
          </div>

          <nav aria-label="Footer Links">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm">
              {[
                { name: 'Standorte', href: '/standorte' },
                { name: 'Kontakt', href: '/kontakt' },
                { name: 'Datenschutz', href: '/datenschutz' },
                { name: 'Impressum', href: '/impressum' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-[11px] md:text-xs text-gray-500 font-light">
          &copy; {new Date().getFullYear()} {SITE.company}
        </div>
      </div>
    </footer>
  )
}
