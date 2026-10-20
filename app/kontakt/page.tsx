import { ContactForm } from '@/components/ContactForm'
import { LOCATIONS, OPENING_HOURS, SITE, mapsEmbed, mapsLink } from '@/lib/site'

export const metadata = {
  title: 'Kontakt – Pepper Fashion',
  description: 'Kontaktieren Sie Pepper Fashion in Siebnen und Horgen für Ihre Modeberatung.',
}

const socialClass =
  'w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300'

export default function KontaktPage() {
  return (
    <div className="section-padding bg-white pt-6 md:pt-12">
      <div className="container-custom">
        <div className="mb-6 md:mb-10 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-3">Kontakt</h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">Wir freuen uns auf Ihre Nachricht</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <aside className="bg-fashion-cream/40 border border-gray-200/60 rounded-xl p-5 md:p-8 space-y-7">
            <h2 className="text-lg md:text-2xl font-display font-normal tracking-tight text-gray-900">Unsere Standorte</h2>

            {LOCATIONS.map((l) => (
              <div key={l.slug} className="grid grid-cols-[1fr_120px] md:grid-cols-[1fr_150px] gap-4">
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide mb-2">{l.name}</h3>
                  <div className="space-y-0.5 text-sm text-gray-600 font-light">
                    <p>
                      <a href={mapsLink(l)} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {l.street}
                      </a>
                    </p>
                    <p>{l.city}</p>
                    {l.note && <p className="text-gray-500">{l.note}</p>}
                    <p>
                      <a href={l.phoneHref} className="hover:text-primary transition-colors">{l.phone}</a>
                    </p>
                  </div>
                  <div className="pt-2 text-xs text-gray-500 font-light space-y-0.5">
                    <p>{OPENING_HOURS.closed}</p>
                    <p>{OPENING_HOURS.weekdays}</p>
                    <p>{OPENING_HOURS.saturday}</p>
                  </div>
                </div>
                <a
                  href={mapsLink(l)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${l.name} in Google Maps öffnen`}
                  className="relative block h-28 md:h-32 rounded-lg overflow-hidden border border-gray-200"
                >
                  <iframe
                    src={mapsEmbed(l)}
                    title={`Karte ${l.name}`}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            ))}

            <div className="pt-5 border-t border-gray-200/70 space-y-4">
              <p className="text-sm text-gray-600 font-light">
                E-Mail:{' '}
                <a href={`mailto:${SITE.email}`} className="text-gray-900 hover:text-primary transition-colors">{SITE.email}</a>
              </p>
              <div>
                <h3 className="text-xs md:text-sm font-medium text-primary uppercase tracking-wide mb-3">Folgen Sie uns</h3>
                <div className="flex items-center gap-3">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                    </svg>
                  </a>
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="WhatsApp">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.28z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="bg-white border border-gray-200/60 rounded-xl p-5 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-2xl font-display font-normal tracking-tight text-gray-900 mb-5">Schreiben Sie uns</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
