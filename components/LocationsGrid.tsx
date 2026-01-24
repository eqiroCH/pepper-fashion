'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface Location {
  id: string
  slug: string
  title: string
  titleShort: string
  shortDescription: string
  fullDescription: string
  address: string
  addressNote: string
  lageplanHref: string
}

// Siebnen (Hauptstandort) LINKS, Horgen (Showroom) RECHTS
const locations: Location[] = [
  {
    id: 'pepper-fashion-siebnen',
    slug: 'siebnen',
    title: 'Boutique Pepper-Fashion Siebnen',
    titleShort: 'Pepper-Fashion Siebnen',
    shortDescription: 'Unsere Boutique im Herzen von Siebnen. Hier finden Sie Kleider und Accessoires unserer angesagten Modelabels.',
    fullDescription: 'Entdecken Sie an der Bahnhofstrasse 1 in Siebnen mit unserer Hilfe die Freude am bewussten Umgang mit Mode: Kombinieren Sie aktuelle Farb- und Fashiontrends geschickt mit Ihrem individuellen Kleiderstil. Wir zeigen Ihnen gerne, wie Sie Ihre bestehende Garderobe sinnvoll nutzen und clever mit Kleidern, Schuhen und Accessoires unserer angesagten Modelabels ergänzen.',
    address: 'Bahnhofstrasse 1, Siebnen',
    addressNote: 'Unser Lokal an der Bahnhofstrasse 1 in Siebnen',
    lageplanHref: '#lageplan-siebnen',
  },
  {
    id: 'showroom-horgen',
    slug: 'horgen',
    title: 'Showroom Horgen bei Salottino',
    titleShort: 'Showroom Horgen',
    shortDescription: 'Unser Showroom in Horgen bei Salottino bietet Ihnen eine exklusive Einkaufserfahrung in ruhiger Atmosphäre.',
    fullDescription: 'Entdecken Sie unser Showroom an der Seestrasse 159 in Horgen bei Salottino. Mit unserer Hilfe die Freude am bewussten Umgang mit Mode: Kombinieren Sie aktuelle Farb- und Fashiontrends geschickt mit Ihrem individuellen Kleiderstil. Wir zeigen Ihnen gerne, wie Sie Ihre bestehende Garderobe sinnvoll nutzen und clever mit Kleidern, Schuhen und Accessoires unserer angesagten Modelabels ergänzen.',
    address: 'Seestrasse 159, Horgen',
    addressNote: 'Unser Showroom an der Seestrasse 159 in Horgen',
    lageplanHref: '#lageplan-horgen',
  },
]

export function LocationsGrid() {
  const searchParams = useSearchParams()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Check URL query param on mount and when it changes
  useEffect(() => {
    const openParam = searchParams.get('open')
    if (openParam === 'siebnen') {
      setExpandedId('pepper-fashion-siebnen')
    } else if (openParam === 'horgen') {
      setExpandedId('showroom-horgen')
    } else {
      // Kein Parameter = Standard-Ansicht (beide geschlossen)
      setExpandedId(null)
    }
  }, [searchParams])

  const handleToggle = (locationId: string) => {
    setExpandedId(expandedId === locationId ? null : locationId)
  }

  return (
    <div className="relative">
      {/* Grid: Beide Karten nebeneinander, aber unabhängige Höhen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {locations.map((location) => {
          const isExpanded = expandedId === location.id

          return (
            <article
              key={location.id}
              id={location.id}
              className="relative overflow-hidden bg-white border rounded-2xl border-gray-200/60 hover:shadow-lg"
              style={{
                boxShadow: isExpanded ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : undefined,
                borderColor: isExpanded ? 'rgba(196, 69, 54, 0.3)' : undefined,
                transition: 'box-shadow 800ms ease, border-color 800ms ease',
              }}
            >
              {/* Header - immer sichtbar */}
              <div 
                onClick={() => handleToggle(location.id)}
                className="p-6 md:p-8 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl md:text-2xl font-display text-gray-900">
                    {location.titleShort}
                  </h2>
                  
                  {/* Plus/X Button mit langsamer Rotation */}
                  <button
                    className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: isExpanded ? '#c44536' : 'rgba(196, 69, 54, 0.1)',
                      color: isExpanded ? 'white' : '#c44536',
                      transform: isExpanded ? 'rotate(135deg) scale(1.15)' : 'rotate(0deg) scale(1)',
                      transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1), background-color 1s ease, color 1s ease',
                    }}
                  >
                    <svg 
                      className="w-6 h-6 md:w-7 md:h-7" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  {location.shortDescription}
                </p>
              </div>

              {/* Expandable Content */}
              <div 
                style={{
                  maxHeight: isExpanded ? '800px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'max-height 800ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms ease',
                  overflow: 'hidden',
                }}
              >
                {/* Image with Gradient Fade */}
                <div className="relative h-48 md:h-64 bg-gray-800 overflow-hidden mx-6 md:mx-8 rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-400 text-sm font-light">Bild folgt</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div className="p-6 md:p-8 pt-6">
                  <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm md:text-base">
                    {location.fullDescription}
                  </p>

                  <div className="pt-5 border-t border-gray-200/60">
                    <p className="text-gray-700 font-light text-sm">
                      {location.addressNote} –{' '}
                      <a
                        href={location.lageplanHref}
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary hover:underline font-medium"
                      >
                        Lageplan
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Hint */}
      <p 
        className="mt-8 text-center text-sm text-gray-500 font-light"
        style={{
          opacity: expandedId ? 0 : 1,
          transition: 'opacity 800ms ease',
        }}
      >
        Klicken Sie auf einen Standort für mehr Informationen
      </p>
    </div>
  )
}
