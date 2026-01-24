'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NewsItem {
  date?: string
  title: string
  href: string
  category?: string
  content: string
}

const newsItems: NewsItem[] = [
  {
    date: '20.03.2025',
    title: 'Modetage, Do 27 - Sa 29.03.2025',
    href: '/news/modetage-2025',
    category: 'Veranstaltungen',
    content: 'Besuchen Sie uns an unseren Modetagen vom 27. bis 29. März 2025. Entdecken Sie die neuesten Kollektionen unserer angesagten Modelabels. Wir freuen uns auf Ihren Besuch!',
  },
  {
    date: '01.10.2024',
    title: 'Standort Wädenswil, Wir sind umgezogen!',
    href: '/news/umzug-waedenswil',
    category: 'Firmennews',
    content: 'Wir freuen uns, Ihnen mitteilen zu können, dass wir erfolgreich umgezogen sind. Unser neuer Standort bietet mehr Platz und eine noch bessere Einkaufserfahrung für unsere Kunden.',
  },
  {
    date: '17.09.2024',
    title: 'Standort Wädenswil, Wir ziehen weiter',
    href: '/news/umzug-waedenswil-2',
    category: 'Firmennews',
    content: 'Wir ziehen weiter und freuen uns, Ihnen bald unseren neuen Standort präsentieren zu können. Weitere Informationen folgen in Kürze.',
  },
]

export function NewsSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

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
    <section className="bg-fashion-beige/50 section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs tracking-widest uppercase text-primary font-medium">
                Aktuelles
              </span>
            </div>
            <h2 className="heading-2">News & Events</h2>
          </div>
          <Link 
            href="/news" 
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
          >
            Alle News
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => {
            const isExpanded = expandedItems.has(item.href)
            return (
              <article
                key={index}
                className="group bg-white p-6 md:p-8 border border-gray-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {item.category && (
                  <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium mb-4">
                    {item.category}
                  </span>
                )}
                <h3 className="text-lg md:text-xl text-gray-800 group-hover:text-primary transition-colors duration-300 font-display mb-3">
                  {item.title}
                </h3>
                {item.date && (
                  <span className="text-sm font-light text-gray-500 block mb-4">
                    {item.date}
                  </span>
                )}

                {/* Expandable Content */}
                <div
                  style={{
                    maxHeight: isExpanded ? '300px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 400ms ease, opacity 300ms ease',
                    overflow: 'hidden',
                  }}
                >
                  <p className="text-gray-600 font-light leading-relaxed text-sm mb-4">
                    {item.content}
                  </p>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpand(item.href)}
                  className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-xs hover:gap-3 transition-all duration-300"
                >
                  {isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </article>
            )
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm"
          >
            Alle News anzeigen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
