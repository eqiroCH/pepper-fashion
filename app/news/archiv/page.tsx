'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

interface NewsItem {
  date: string
  title: string
  href: string
  category: string
  year: number
  content: string
}

const archivedNews: NewsItem[] = [
  {
    date: '20.03.2025',
    title: 'Modetage, Do 27 - Sa 29.03.2025',
    href: '/news/modetage-2025',
    category: 'Veranstaltungen',
    year: 2025,
    content: 'Besuchen Sie uns an unseren Modetagen vom 27. bis 29. März 2025. Entdecken Sie die neuesten Kollektionen unserer angesagten Modelabels. Wir freuen uns auf Ihren Besuch!',
  },
  {
    date: '01.10.2024',
    title: 'Standort Wädenswil, Wir sind umgezogen!',
    href: '/news/umzug-waedenswil',
    category: 'Firmennews',
    year: 2024,
    content: 'Wir freuen uns, Ihnen mitteilen zu können, dass wir erfolgreich umgezogen sind. Unser neuer Standort bietet mehr Platz und eine noch bessere Einkaufserfahrung für unsere Kunden.',
  },
  {
    date: '17.09.2024',
    title: 'Standort Wädenswil, Wir ziehen weiter',
    href: '/news/umzug-waedenswil-2',
    category: 'Firmennews',
    year: 2024,
    content: 'Wir ziehen weiter und freuen uns, Ihnen bald unseren neuen Standort präsentieren zu können. Weitere Informationen folgen in Kürze.',
  },
  {
    date: '20.07.2024',
    title: 'Sommeröffnungszeiten 22.07 bis 03.08.2024',
    href: '/news/sommeroeffnungszeiten-2024',
    category: 'Firmennews',
    year: 2024,
    content: 'Während der Sommerferien gelten spezielle Öffnungszeiten. Bitte beachten Sie unsere geänderten Öffnungszeiten vom 22. Juli bis 3. August 2024.',
  },
  {
    date: '15.06.2024',
    title: 'Modeschau Horgen Dorfgasse, 15. Juni 16:30 Uhr',
    href: '/news/modeschau-horgen-2024',
    category: 'Veranstaltungen',
    year: 2024,
    content: 'Lassen Sie sich von unserer Modeschau in Horgen inspirieren. Wir präsentieren die neuesten Trends und Kollektionen unserer Modelabels. Beginn: 16:30 Uhr.',
  },
  {
    date: '12.02.2024',
    title: 'Shopping-days for Valentin 14% Rabatt 13. und 14. Februar 2024',
    href: '/news/valentinstag-2024',
    category: 'Veranstaltungen',
    year: 2024,
    content: 'Zum Valentinstag bieten wir Ihnen 14% Rabatt auf ausgewählte Artikel. Nutzen Sie diese Gelegenheit für ein besonderes Geschenk. Gültig am 13. und 14. Februar 2024.',
  },
  {
    date: '31.08.2023',
    title: 'Fashion opening APÈRO Donnerstag, 31. August 2023',
    href: '/news/fashion-opening-2023',
    category: 'Veranstaltungen',
    year: 2023,
    content: 'Feiern Sie mit uns die Eröffnung unserer neuen Kollektion. Bei einem Apéro präsentieren wir Ihnen die neuesten Trends. Donnerstag, 31. August 2023.',
  },
  {
    date: '30.06.2023',
    title: 'Little Italy Fashion & More im Glettise, Freitag 30. Juni 2023',
    href: '/news/little-italy-2023',
    category: 'Veranstaltungen',
    year: 2023,
    content: 'Erleben Sie italienische Mode und mehr bei unserer Veranstaltung im Glettise. Freitag, 30. Juni 2023.',
  },
  {
    date: '01.04.2023',
    title: '10 Jahre Mode Passion Samstag, 1. April 2023',
    href: '/news/10-jahre-2023',
    category: 'Firmennews',
    year: 2023,
    content: 'Wir feiern 10 Jahre Mode Passion! Danken Sie mit uns auf eine erfolgreiche Zeit und entdecken Sie unsere Jubiläumsaktionen. Samstag, 1. April 2023.',
  },
  {
    date: '08.03.2023',
    title: "Women's Day Mittwoch, 8. März 2023",
    href: '/news/womens-day-2023',
    category: 'Veranstaltungen',
    year: 2023,
    content: 'Zum Internationalen Frauentag feiern wir die Stärke und Eleganz der Frau. Besondere Aktionen und Beratung erwarten Sie. Mittwoch, 8. März 2023.',
  },
]

export default function NewsArchivPage() {
  const years = useMemo(() => {
    return [...new Set(archivedNews.map(item => item.year))].sort((a, b) => b - a)
  }, [])

  const [selectedYear, setSelectedYear] = useState<number | 'Alle'>('Alle')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const filteredNews = selectedYear === 'Alle'
    ? archivedNews
    : archivedNews.filter(item => item.year === selectedYear)

  const filteredYears = selectedYear === 'Alle'
    ? years
    : [selectedYear as number]

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      if (next.has(href)) {
        next.delete(href)
      } else {
        next.add(href)
      }
      return next
    })
  }

  return (
    <div className="section-padding bg-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-4 md:mb-5">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-2.5 text-center">News Archiv</h1>
            <p className="text-xs md:text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto text-center">
              Alle vergangenen Veranstaltungen, Firmennews und Updates im Überblick.
            </p>
          </div>

          {/* Year Filter Pills */}
          <div className="mb-4 md:mb-10">
            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
              <button
                type="button"
                onClick={() => setSelectedYear('Alle')}
                className={`px-2.5 py-1 md:px-4 md:py-2 rounded-full border text-[10px] md:text-sm font-light transition-all duration-300 ${
                  selectedYear === 'Alle'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40 hover:text-primary'
                }`}
              >
                Alle
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`px-2.5 py-1 md:px-4 md:py-2 rounded-full border text-[10px] md:text-sm font-light transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Rückblick / Aktuelle News Leiste */}
            <div className="mt-4 md:mt-6 flex flex-row items-center justify-between gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-4 md:w-10 h-px bg-primary/60" />
                <span className="text-[10px] md:text-xs tracking-widest uppercase text-primary font-medium">
                  Rückblick
                </span>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-1 md:gap-2 text-primary font-medium tracking-wide uppercase text-[10px] md:text-sm hover:gap-4 transition-all duration-300"
              >
                Aktuelle News
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Filtered News by Year */}
          {filteredYears.map((year) => {
            const yearNews = filteredNews.filter(item => item.year === year)
            if (yearNews.length === 0) return null

            return (
              <div key={year} className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-xl lg:text-2xl font-display font-normal tracking-tight text-primary mb-3 md:mb-6">
                  {year}
                </h2>
                <div className={`grid gap-2 md:gap-4 ${yearNews.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {yearNews.map((item, index) => {
                    const isExpanded = expandedItems.has(item.href)
                    return (
                      <article
                        key={index}
                        onClick={() => toggleExpand(item.href)}
                        className="block rounded-lg md:rounded-xl border border-gray-200/60 bg-white p-3 md:p-5 lg:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
                      >
                        <div className="flex items-center justify-between gap-1 md:gap-4 mb-2 md:mb-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium">
                            {item.category}
                          </span>
                          <span className="text-[8px] md:text-sm text-gray-500 font-light">{item.date}</span>
                        </div>
                        <h3 className="text-xs md:text-lg lg:text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 font-display leading-tight md:leading-snug mb-2 md:mb-4 flex-grow">
                          {item.title}
                        </h3>

                        {/* Expandable Content - hidden on mobile */}
                        <div
                          style={{
                            maxHeight: isExpanded ? '250px' : '0px',
                            opacity: isExpanded ? 1 : 0,
                            transition: 'max-height 500ms ease-in-out, opacity 400ms ease-in-out',
                            overflow: 'hidden',
                          }}
                          className="mb-2 md:mb-4 hidden md:block"
                        >
                          <p className="text-gray-600 font-light leading-relaxed text-sm">
                            {item.content}
                          </p>
                        </div>

                        {/* Toggle Button - immer unten links */}
                        <div className="mt-auto">
                          <div className="inline-flex items-center gap-1 md:gap-2 text-primary font-medium tracking-wide uppercase text-[8px] md:text-xs">
                            <span className="hidden md:inline">{isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}</span>
                            <span className="md:hidden">Mehr</span>
                            <svg
                              className={`w-2 h-2 md:w-4 md:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* Empty state */}
          {filteredNews.length === 0 && (
            <div className="mt-10 rounded-2xl border border-gray-200/60 bg-fashion-cream/30 p-8 text-center">
              <p className="text-gray-700 font-light">Keine News für dieses Jahr gefunden.</p>
            </div>
          )}

          <div className="mt-10 md:hidden">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm"
            >
              Zur News-Übersicht
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
