import Link from 'next/link'

interface NewsItem {
  date?: string
  title: string
  href: string
}

const newsItems: NewsItem[] = [
  {
    date: 'Do 27 – Sa 29.03.2025',
    title: 'Modetage',
    href: '#modetage-2025',
  },
  {
    title: 'Standort Wädenswil, Wir sind umgezogen!',
    href: '#umzug-waedenswil',
  },
  {
    title: 'Standort Wädenswil, Wir ziehen weiter',
    href: '#umzug-waedenswil-2',
  },
]

export function NewsSection() {
  return (
    <section className="bg-fashion-cream/30 section-padding">
      <div className="container-custom">
        <h2 className="heading-2 mb-12 text-center md:text-left">News</h2>
        <div className="max-w-3xl">
          <ul className="space-y-6">
            {newsItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200/50 last:border-0 pb-6 last:pb-0">
                <Link 
                  href={item.href} 
                  className="flex flex-col gap-2 group transition-all duration-300"
                >
                  {item.date && (
                    <span className="text-xs font-light text-gray-500 uppercase tracking-wider">
                      {item.date}
                    </span>
                  )}
                  <span className="text-lg md:text-xl text-gray-800 group-hover:text-primary transition-colors duration-300 font-light">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <Link 
              href="#weitere-news" 
              className="text-primary font-light hover:text-primary-dark transition-colors duration-300 uppercase tracking-wider text-sm inline-flex items-center gap-2"
            >
              Weitere News
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

