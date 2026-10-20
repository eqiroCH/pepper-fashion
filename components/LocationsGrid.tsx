import Image from 'next/image'
import { LOCATIONS, OPENING_HOURS, SITE, mapsEmbed, mapsLink } from '@/lib/site'

export function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
      {LOCATIONS.map((l) => (
        <article
          key={l.slug}
          id={l.slug}
          className="scroll-mt-24 bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] bg-fashion-beige">
            <Image
              src={l.image}
              alt={l.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <span className="absolute top-3 left-3 md:top-4 md:left-4 inline-flex items-center px-3 py-1 text-[10px] md:text-xs tracking-wider uppercase bg-white/90 text-primary font-medium rounded-full">
              {l.badge}
            </span>
          </div>

          <div className="p-5 md:p-8">
            <h2 className="text-xl md:text-2xl font-display font-normal tracking-tight text-gray-900 mb-1">{l.name}</h2>
            {l.note && <p className="text-xs md:text-sm text-primary font-medium tracking-wide mb-3">{l.note}</p>}
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed mb-5">{l.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-gray-600 font-light">
              <div className="space-y-1">
                <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-2">Adresse &amp; Kontakt</h3>
                <p>{l.street}</p>
                <p>{l.city}</p>
                <p>
                  <a href={l.phoneHref} className="hover:text-primary transition-colors">{l.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors break-all">{SITE.email}</a>
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-2">Öffnungszeiten</h3>
                <p>{OPENING_HOURS.closed}</p>
                <p>{OPENING_HOURS.weekdays}</p>
                <p>{OPENING_HOURS.saturday}</p>
              </div>
            </div>

            <div className="mt-6 relative h-52 md:h-64 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={mapsEmbed(l)}
                title={`Karte ${l.name}`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={mapsLink(l)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-block w-full sm:w-auto text-center text-xs md:text-sm"
            >
              Route planen
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
