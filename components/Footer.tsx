import Link from 'next/link'
import Image from 'next/image'
import { SITE, LOCATIONS } from '@/lib/site'

const MENU = [
  { href: '/standorte', label: 'Standorte' },
  { href: '/team', label: 'Team' },
  { href: '/bildergalerie', label: 'Galerie' },
  { href: '/instagram', label: 'Instagram' },
  { href: '/kontakt', label: 'Kontakt' },
]

const iconClass = 'h-5 w-5'
const socialClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-neutral-500 text-neutral-200 hover:border-white hover:text-white transition-colors'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7.7v3h2.6V21h3.2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const headingClass = 'mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 font-sans'
const linkClass = 'text-neutral-300 hover:text-white transition-colors'

export function Footer() {
  const siebnen = LOCATIONS[0]

  return (
    <footer className="bg-neutral-700 text-neutral-300">
      <div className="container-custom pt-14 md:pt-16 pb-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Zur Startseite" className="relative block h-14 w-36">
              <Image src="/logo-light.png" alt="Pepper Fashion" fill className="object-contain object-left" sizes="144px" />
            </Link>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-neutral-400">
              Mode, Schuhe und Accessoires mit persönlicher Beratung – in unserer Boutique in Siebnen.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                <InstagramIcon />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookIcon />
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialClass}>
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Footer Links">
            <h3 className={headingClass}>Entdecken</h3>
            <ul className="space-y-3 text-sm font-light">
              {MENU.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Öffnungszeiten</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>{siebnen.hours.weekdays}</li>
              <li>{siebnen.hours.saturday}</li>
              <li className="text-neutral-400">{siebnen.hours.closed}</li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className={headingClass}>Kontakt</h3>
            <address className="not-italic text-sm font-light leading-relaxed">
              <p className="text-neutral-200">{SITE.company}</p>
              <p>{siebnen.street}</p>
              <p>{siebnen.city}</p>
              <p className="mt-4">
                <a href={siebnen.phoneHref} className={linkClass}>{siebnen.phone}</a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-light">
          <span>&copy; {new Date().getFullYear()} {SITE.company} · Siebnen · Alle Rechte vorbehalten</span>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
