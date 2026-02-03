'use client'

import Link from 'next/link'

export function InstagramSection() {
  return (
    <section className="bg-fashion-beige/50 section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-normal tracking-tight text-gray-900 text-center mb-4 md:mb-6">
            Folge uns auf Instagram
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light max-w-2xl mx-auto text-center">
            Entdecke die neuesten Trends, Behind-the-Scenes und exklusive Einblicke in unsere Modewelt.
          </p>
        </div>
        
        {/* Instagram Link */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-4 md:w-8 h-px bg-primary" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-primary font-medium">
              @pepper_fashion_gmbh
            </span>
          </div>
          <Link 
            href="/instagram" 
            className="inline-flex items-center gap-1 md:gap-2 text-primary font-medium tracking-wide uppercase text-[10px] md:text-sm hover:gap-4 transition-all duration-300"
          >
            Mehr ansehen
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Elfsight Instagram Widget Placeholder */}
        <div className="bg-white rounded-lg md:rounded-xl border border-gray-200/50 p-8 md:p-12 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
          {/* 
            ELFSIGHT WIDGET HIER EINFÜGEN:
            Ersetze diesen Kommentar mit dem Elfsight Widget Code.
            Beispiel: <div className="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"></div>
          */}
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <p className="text-sm md:text-base font-light">Instagram Feed wird hier angezeigt</p>
            <p className="text-xs md:text-sm mt-2">Elfsight Widget einfügen</p>
          </div>
        </div>
      </div>
    </section>
  )
}
