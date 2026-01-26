import Link from 'next/link'

const standorte = [
  {
    id: 'pepper-fashion-siebnen',
    slug: 'siebnen',
    name: 'Pepper-Fashion Siebnen',
    subtitle: 'Bahnhofstrasse 1, 8854 Siebnen',
    description: 'Unsere Boutique im Herzen von Siebnen. Hier finden Sie Kleider und Accessoires unserer angesagten Modelabels in entspannter Atmosphäre.',
    highlight: 'Hauptstandort',
  },
  {
    id: 'showroom-horgen',
    slug: 'horgen',
    name: 'Showroom Horgen',
    subtitle: 'Bei Salottino',
    description: 'Unser exklusiver Showroom bietet Ihnen eine persönliche Einkaufserfahrung in ruhiger Atmosphäre. Ideal für individuelle Beratungstermine.',
    highlight: 'Showroom',
  },
]

export function StandortePreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-6">
            <div className="w-6 md:w-12 h-px bg-primary/30" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-primary font-medium">
              Besuchen Sie uns
            </span>
            <div className="w-6 md:w-12 h-px bg-primary/30" />
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-4">Unsere Standorte</h2>
          <p className="text-xs md:text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Siebnen & Horgen – zwei Orte, ein Erlebnis
          </p>
        </div>

        {/* Standorte Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-12">
          {standorte.map((standort, index) => (
            <Link
              key={standort.id}
              href={`/standorte?open=${standort.slug}`}
              className="group relative bg-fashion-cream/50 border border-gray-200/50 p-3 md:p-8 lg:p-12 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:bg-white rounded-lg md:rounded-none"
            >
              {/* Highlight Badge */}
              <div className="absolute top-2 right-2 md:top-6 md:right-6">
                <span className="inline-flex items-center px-1.5 py-0.5 md:px-3 md:py-1 text-[7px] md:text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium">
                  {standort.highlight}
                </span>
              </div>

              {/* Number */}
              <div className="mb-2 md:mb-6">
                <span className="text-3xl md:text-6xl lg:text-7xl font-display font-light text-primary/20 group-hover:text-primary/30 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-1 md:space-y-4">
                <div>
                  <h3 className="text-sm md:text-xl lg:text-2xl font-display font-normal tracking-tight text-gray-900 group-hover:text-primary transition-colors duration-300 mb-0.5 md:mb-2 leading-tight">
                    {standort.name}
                  </h3>
                  <p className="text-[8px] md:text-sm text-primary font-medium tracking-wide">
                    {standort.subtitle}
                  </p>
                </div>
                
                <p className="text-[9px] md:text-sm lg:text-base text-gray-600 font-light hidden md:block">
                  {standort.description}
                </p>

                {/* Arrow - hidden on mobile */}
                <div className="pt-2 md:pt-4 hidden md:flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium tracking-wide uppercase">Mehr erfahren</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner - hidden on mobile */}
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 hidden md:block" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-4 md:mt-12">
          <Link 
            href="/standorte" 
            className="inline-flex items-center gap-1 md:gap-2 text-primary font-medium tracking-wide uppercase text-[10px] md:text-sm hover:gap-4 transition-all duration-300"
          >
            Alle Standortdetails
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}


