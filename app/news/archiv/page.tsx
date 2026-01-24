'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

interface NewsItem {
  date: string
  title: string
  href: string
  category: string
  year: number
}

const archivedNews: NewsItem[] = [
  {
    date: '20.03.2025',
    title: 'Modetage, Do 27 - Sa 29.03.2025',
    href: '/news/modetage-2025',
    category: 'Veranstaltungen',
    year: 2025,
  },
  {
    date: '01.10.2024',
    title: 'Standort Wädenswil, Wir sind umgezogen!',
    href: '/news/umzug-waedenswil',
    category: 'Firmennews',
    year: 2024,
  },
  {
    date: '17.09.2024',
    title: 'Standort Wädenswil, Wir ziehen weiter',
    href: '/news/umzug-waedenswil-2',
    category: 'Firmennews',
    year: 2024,
  },
  {
    date: '20.07.2024',
    title: 'Sommeröffnungszeiten 22.07 bis 03.08.2024',
    href: '/news/sommeroeffnungszeiten-2024',
    category: 'Firmennews',
    year: 2024,
  },
  {
    date: '15.06.2024',
    title: 'Modeschau Horgen Dorfgasse, 15. Juni 16:30 Uhr',
    href: '/news/modeschau-horgen-2024',
    category: 'Veranstaltungen',
    year: 2024,
  },
  {
    date: '12.02.2024',
    title: 'Shopping-days for Valentin 14% Rabatt 13. und 14. Februar 2024',
    href: '/news/valentinstag-2024',
    category: 'Veranstaltungen',
    year: 2024,
  },
  {
    date: '31.08.2023',
    title: 'Fashion opening APÈRO Donnerstag, 31. August 2023',
    href: '/news/fashion-opening-2023',
    category: 'Veranstaltungen',
    year: 2023,
  },
  {
    date: '30.06.2023',
    title: 'Little Italy Fashion & More im Glettise, Freitag 30. Juni 2023',
    href: '/news/little-italy-2023',
    category: 'Veranstaltungen',
    year: 2023,
  },
  {
    date: '01.04.2023',
    title: '10 Jahre Mode Passion Samstag, 1. April 2023',
    href: '/news/10-jahre-2023',
    category: 'Firmennews',
    year: 2023,
  },
  {
    date: '08.03.2023',
    title: "Women's Day Mittwoch, 8. März 2023",
    href: '/news/womens-day-2023',
    category: 'Veranstaltungen',
    year: 2023,
  },
]

export default function NewsArchivPage() {
  const years = useMemo(() => {
    return [...new Set(archivedNews.map(item => item.year))].sort((a, b) => b - a)
  }, [])

  const [selectedYear, setSelectedYear] = useState<number | 'Alle'>('Alle')

  const filteredNews = selectedYear === 'Alle'
    ? archivedNews
    : archivedNews.filter(item => item.year === selectedYear)

  const filteredYears = selectedYear === 'Alle'
    ? years
    : [selectedYear as number]

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="heading-1 mb-4 text-center">News Archiv</h1>
            <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto text-center">
              Alle vergangenen Veranstaltungen, Firmennews und Updates im Überblick.
            </p>
          </div>

          {/* Year Filter Pills */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                type="button"
                onClick={() => setSelectedYear('Alle')}
                className={`px-4 py-2 rounded-full border text-sm font-light transition-all duration-300 ${
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
                  className={`px-4 py-2 rounded-full border text-sm font-light transition-all duration-300 ${
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
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-primary/60" />
                <span className="text-xs tracking-widest uppercase text-primary font-medium">
                  Rückblick
                </span>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
              >
                Aktuelle News
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div key={year} className="mb-12">
                <h2 className="text-xl md:text-2xl font-display font-normal tracking-tight text-primary mb-6">
                  {year}
                </h2>
                <ul className="space-y-4">
                  {yearNews.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block rounded-xl border border-gray-200/60 bg-white p-5 md:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500 font-light">{item.date}</span>
                        </div>
                        <h3 className="text-lg md:text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 font-display leading-snug">
                          {item.title}
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
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
