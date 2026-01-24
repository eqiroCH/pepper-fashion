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
        <div className="mb-12">
          <h2 className="heading-2 text-center mb-10">News & Events</h2>
        </div>
        
        {/* Aktuelles & Alle News - direkt über den Karten */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs tracking-widest uppercase text-primary font-medium">
              Aktuelles
            </span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {newsItems.map((item, index) => {
            const isExpanded = expandedItems.has(item.href)
            return (
              <article
                key={index}
                onClick={() => toggleExpand(item.href)}
                className="group bg-white p-6 md:p-8 border border-gray-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                {item.category && (
                  <div className="flex justify-center mb-4">
                    <span className="block w-full px-3 py-1 text-xs tracking-wider uppercase bg-primary/10 text-primary font-medium text-center">
                      {item.category}
                    </span>
                  </div>
                )}
                
                {/* Title with fixed min-height to align dates */}
                <div className="min-h-[80px] mb-3 flex flex-col justify-between">
                  <h3 className="text-lg md:text-xl text-gray-800 group-hover:text-primary transition-colors duration-300 font-display">
                    {item.title}
                  </h3>
                </div>
                
                {/* Date - always at same position */}
                {item.date ? (
                  <span className="text-sm font-light text-gray-500 block mb-4">
                    {item.date}
                  </span>
                ) : (
                  <div className="mb-4" />
                )}

                {/* Expandable Content */}
                <div
                  style={{
                    maxHeight: isExpanded ? '250px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 500ms ease-in-out, opacity 400ms ease-in-out',
                    overflow: 'hidden',
                  }}
                  className="mb-4"
                >
                  <p className="text-gray-600 font-light leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>

                {/* Toggle Button - immer unten links */}
                <div className="mt-auto pt-2">
                  <div className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-xs">
                    {isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
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
