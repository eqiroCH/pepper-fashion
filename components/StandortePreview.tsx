import Link from 'next/link'

const standorte = [
  {
    id: 'pepper-fashion-siebnen',
    slug: 'siebnen',
    name: 'Pepper-Fashion Siebnen',
    subtitle: 'Boutique im Herzen von Siebnen',
    description: 'Unsere Hauptboutique mit der kompletten Kollektion. Hier finden Sie Kleider und Accessoires unserer angesagten Modelabels in entspannter Atmosphäre.',
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-xs tracking-widest uppercase text-primary font-medium">
              Besuchen Sie uns
            </span>
            <div className="w-12 h-px bg-primary/30" />
          </div>
          <h2 className="heading-2 mb-4">Unsere Standorte</h2>
          <p className="text-body max-w-2xl mx-auto">
            Wädenswil & Siebnen – zwei Orte, ein Erlebnis
          </p>
        </div>

        {/* Standorte Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {standorte.map((standort, index) => (
            <Link
              key={standort.id}
              href={`/standorte?open=${standort.slug}`}
              className="group relative bg-fashion-cream/50 border border-gray-200/50 p-8 md:p-12 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:bg-white"
            >
              {/* Highlight Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium">
                  {standort.highlight}
                </span>
              </div>

              {/* Number */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-display font-light text-primary/20 group-hover:text-primary/30 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 group-hover:text-primary transition-colors duration-300 mb-2">
                    {standort.name}
                  </h3>
                  <p className="text-sm text-primary font-medium tracking-wide">
                    {standort.subtitle}
                  </p>
                </div>
                
                <p className="text-body">
                  {standort.description}
                </p>

                {/* Arrow */}
                <div className="pt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium tracking-wide uppercase">Mehr erfahren</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/standorte" 
            className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
          >
            Alle Standortdetails
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}


