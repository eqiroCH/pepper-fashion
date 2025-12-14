interface Location {
  id: string
  title: string
  description: string
}

const locations: Location[] = [
  {
    id: 'showroom-horgen',
    title: 'Showroom Horgen',
    description: 'Unser Showroom in Horgen bei Salottino bietet Ihnen eine exklusive Einkaufserfahrung in ruhiger Atmosphäre.',
  },
  {
    id: 'pepper-fashion-siebnen',
    title: 'Pepper-Fashion Siebnen',
    description: 'Unsere Boutique im Herzen von Siebnen. Hier finden Sie Kleider und Accessoires unserer angesagten Modelabels.',
  },
]

export function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {locations.map((location) => (
        <article
          key={location.id}
          id={location.id}
          className="p-12 bg-fashion-cream/20 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
        >
          <h2 className="heading-3 mb-6 group-hover:text-primary transition-colors duration-300">
            {location.title}
          </h2>
          <p className="text-body leading-relaxed">{location.description}</p>
        </article>
      ))}
    </div>
  )
}

